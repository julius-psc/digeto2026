"use client"

import { useEffect, useRef } from "react"
import createGlobe, { type COBEOptions } from "cobe"
import { useMotionValue, useSpring } from "motion/react"

import { cn } from "@/lib/utils"

const MOVEMENT_DAMPING = 1400
const THETA = 0.3

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  devicePixelRatio: 2,
  phi: 0,
  theta: THETA,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [1, 1, 1],
  glowColor: [229 / 255, 67 / 255, 1],
  markers: [],
}

const regions = [
  { name: "AMERICAS", lat: 38,  lng: -97  },
  { name: "EUROPE",   lat: 50,  lng: 15   },
  { name: "MENA",     lat: 24,  lng: 55   },
  { name: "APAC",     lat: 36,  lng: 138  },
]

function project(lat: number, lng: number, phi: number, theta: number) {
  const latR = (lat * Math.PI) / 180
  const lngR = (lng * Math.PI) / 180
  const cosLat = Math.cos(latR)

  const R = 0.85
  const x =  cosLat * Math.cos(lngR) * R
  const y =  Math.sin(latR) * R
  const z = -cosLat * Math.sin(lngR) * R

  const cP = Math.cos(phi), sP = Math.sin(phi)
  const cT = Math.cos(theta), sT = Math.sin(theta)

  const c = cP * x + sP * z
  const s = sP * sT * x + cT * y - cP * sT * z
  const depth = -sP * cT * x + sT * y + cP * cT * z

  return {
    nx: c,
    ny: -s,
    visible: depth > 0,
    depth,
  }
}

export function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string
  config?: COBEOptions
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const markerRefs = useRef<(HTMLDivElement | null)[]>([])
  const phiRef = useRef(config.phi ?? 0)
  const widthRef = useRef(0)
  const pointerInteracting = useRef<number | null>(null)
  const pointerInteractionMovement = useRef(0)

  const r = useMotionValue(0)
  const rs = useSpring(r, {
    mass: 1,
    damping: 30,
    stiffness: 100,
  })

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab"
    }
  }

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current
      pointerInteractionMovement.current = delta
      r.set(r.get() + delta / MOVEMENT_DAMPING)
    }
  }

  useEffect(() => {
    phiRef.current = config.phi ?? 0

    const onResize = () => {
      if (canvasRef.current) {
        widthRef.current = canvasRef.current.offsetWidth
      }
    }

    window.addEventListener("resize", onResize)
    onResize()

    const globe = createGlobe(canvasRef.current!, {
      ...config,
      width: widthRef.current * 2,
      height: widthRef.current * 2,
    })

    let animationFrameId = 0
    const render = () => {
      if (pointerInteracting.current === null) {
        phiRef.current += 0.005
      }

      const phi = phiRef.current + rs.get()
      const size = widthRef.current

      globe.update({
        ...config,
        phi,
        width: size * 2,
        height: size * 2,
      })

      // Update region marker positions
      // COBE maps [-1,1] → [0, size] on screen; anchor is at 50%/50% (center)
      // so offset from center = coordinate * size/2
      markerRefs.current.forEach((el, i) => {
        if (!el) return
        const { nx, ny, visible, depth } = project(
          regions[i].lat,
          regions[i].lng,
          phi,
          THETA
        )
        el.style.transform = `translate(${nx * size * 0.5}px, ${ny * size * 0.5}px)`
        el.style.opacity = visible ? String(Math.min(1, depth * 6)) : "0"
      })

      animationFrameId = window.requestAnimationFrame(render)
    }

    render()
    setTimeout(() => (canvasRef.current!.style.opacity = "1"), 0)

    return () => {
      window.cancelAnimationFrame(animationFrameId)
      globe.destroy()
      window.removeEventListener("resize", onResize)
    }
  }, [rs, config])

  return (
    <div
      className={cn(
        "absolute inset-0 mx-auto aspect-square w-full max-w-150",
        className
      )}
    >
      <style>{`
        @keyframes regionPulse {
          0%   { transform: translate(-50%,-50%) scale(1); opacity: 0.7; }
          100% { transform: translate(-50%,-50%) scale(5); opacity: 0;   }
        }
      `}</style>

      <canvas
        className={cn(
          "size-full opacity-0 transition-opacity duration-500 contain-[layout_paint_size] touch-none"
        )}
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current =
            e.clientX - pointerInteractionMovement.current
          updatePointerInteraction(pointerInteracting.current)
          e.currentTarget.setPointerCapture(e.pointerId)
        }}
        onPointerUp={(e) => {
          updatePointerInteraction(null)
          e.currentTarget.releasePointerCapture(e.pointerId)
        }}
        onPointerOut={() => updatePointerInteraction(null)}
        onPointerMove={(e) => updateMovement(e.clientX)}
      />

      {/* Region markers — zero-size anchor, children centered on it */}
      {regions.map((region, i) => (
        <div
          key={region.name}
          ref={(el) => { markerRefs.current[i] = el }}
          className="pointer-events-none absolute left-1/2 top-1/2"
          style={{ width: 0, height: 0, opacity: 0 }}
        >
          {/* Pulse rings */}
          {[0, 0.8, 1.6].map((delay) => (
            <div
              key={delay}
              style={{
                position: "absolute",
                width: 16,
                height: 16,
                borderRadius: "50%",
                border: `1.5px solid rgba(229,67,255,${0.75 - delay * 0.15})`,
                animation: "regionPulse 2.4s ease-out infinite",
                animationDelay: `${delay}s`,
              }}
            />
          ))}
          {/* Solid dot */}
          <div
            style={{
              position: "absolute",
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "#E543FF",
              transform: "translate(-50%, -50%)",
              boxShadow: "0 0 10px rgba(229,67,255,1), 0 0 4px rgba(229,67,255,0.6)",
            }}
          />
          {/* Label */}
          <span
            style={{
              position: "absolute",
              left: 10,
              top: -8,
              whiteSpace: "nowrap",
              fontSize: 9,
              fontWeight: 700,
              letterSpacing: "0.15em",
              color: "rgba(229,67,255,0.85)",
            }}
          >
            {region.name}
          </span>
        </div>
      ))}
    </div>
  )
}
