"use client"

import { useEffect, useRef } from "react"
import createGlobe, { type COBEOptions } from "cobe"
import { useMotionValue, useSpring } from "motion/react"

import { cn } from "@/lib/utils"

const MOVEMENT_DAMPING = 1400
const THETA = 0.3
const MARKER_RADIUS = 0.78

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  devicePixelRatio: 2,
  phi: 0,
  theta: THETA,
  dark: 1,
  diffuse: 0.8,
  mapSamples: 16000,
  mapBrightness: 8,
  baseColor: [0.08, 0.08, 0.08],
  markerColor: [229 / 255, 67 / 255, 1],
  glowColor: [229 / 255, 67 / 255, 1],
  markers: [],
}

const REGIONS = [
  { name: "AMERICAS", lat: 38, lng: -97, labelX: 10,  labelY: -7, align: "left" as const },
  { name: "EUROPE",   lat: 51, lng: 10,  labelX: 10,  labelY: -7, align: "left" as const },
  { name: "MENA",     lat: 24, lng: 55,  labelX: 10,  labelY: -7, align: "left" as const },
  { name: "APAC",     lat: 36, lng: 138, labelX: -10, labelY: -7, align: "right" as const },
  { name: "INDIA",    lat: 20, lng: 77,  labelX: 10,  labelY: -7, align: "left" as const },
]

// Orthographic projection matching COBE's internal rendering.
// R = 1.0 — COBE maps the unit sphere to exactly ±(size/2) in CSS pixels.
function project(lat: number, lng: number, phi: number, theta: number) {
  const latR = (lat * Math.PI) / 180
  const lngR = (lng * Math.PI) / 180
  const cosLat = Math.cos(latR)

  // Keep overlays slightly inside the rendered rim so pins read as attached to the globe.
  const R = MARKER_RADIUS
  const x =  cosLat * Math.cos(lngR) * R
  const y =  Math.sin(latR) * R
  const z = -cosLat * Math.sin(lngR) * R

  const cP = Math.cos(phi), sP = Math.sin(phi)
  const cT = Math.cos(theta), sT = Math.sin(theta)

  const nx =  cP * x + sP * z
  const ny = -(sP * sT * x + cT * y - cP * sT * z)
  const depth = -sP * cT * x + sT * y + cP * cT * z

  return { nx, ny, visible: depth > 0, depth }
}

export function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string
  config?: COBEOptions
}) {
  const canvasRef  = useRef<HTMLCanvasElement>(null)
  const markerRefs = useRef<(HTMLDivElement | null)[]>([])
  const dotRefs    = useRef<(HTMLDivElement | null)[]>([])
  const labelRefs  = useRef<(HTMLSpanElement | null)[]>([])
  const phiRef     = useRef(config.phi ?? 0)
  const widthRef   = useRef(0)
  const pointerInteracting = useRef<number | null>(null)
  const pointerInteractionMovement = useRef(0)

  const r  = useMotionValue(0)
  const rs = useSpring(r, { mass: 1, damping: 30, stiffness: 100 })

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
      if (canvasRef.current) widthRef.current = canvasRef.current.offsetWidth
    }
    window.addEventListener("resize", onResize)
    onResize()

    const globe = createGlobe(canvasRef.current!, {
      ...config,
      width:  widthRef.current * 2,
      height: widthRef.current * 2,
    })

    let frameId = 0
    const render = () => {
      if (pointerInteracting.current === null) phiRef.current += 0.005
      const phi  = phiRef.current + rs.get()
      const size = widthRef.current
      globe.update({ ...config, phi, width: size * 2, height: size * 2 })

      // Scale marker chrome proportionally to canvas size (reference: 270px)
      const scale = Math.min(1, size / 270)
      const dotSize = Math.max(3, 6 * scale)
      const fontSize = Math.max(8, 10 * scale)

      markerRefs.current.forEach((el, i) => {
        if (!el) return
        const { nx, ny, visible, depth } = project(
          REGIONS[i].lat, REGIONS[i].lng, phi, THETA
        )
        el.style.transform = `translate(${nx * size * 0.5}px, ${ny * size * 0.5}px)`
        el.style.opacity   = visible ? String(Math.min(1, depth * 5)) : "0"
      })

      dotRefs.current.forEach((dot) => {
        if (!dot) return
        dot.style.width  = `${dotSize}px`
        dot.style.height = `${dotSize}px`
      })

      labelRefs.current.forEach((label, i) => {
        if (!label) return
        const lx = REGIONS[i].labelX * scale
        const ly = REGIONS[i].labelY * scale
        if (REGIONS[i].align === "right") {
          label.style.right = `${-lx}px`
          label.style.left  = ""
        } else {
          label.style.left  = `${lx}px`
          label.style.right = ""
        }
        label.style.top      = `${ly}px`
        label.style.fontSize = `${fontSize}px`
      })

      frameId = requestAnimationFrame(render)
    }

    render()
    setTimeout(() => (canvasRef.current!.style.opacity = "1"), 0)

    return () => {
      cancelAnimationFrame(frameId)
      globe.destroy()
      window.removeEventListener("resize", onResize)
    }
  }, [rs, config])

  return (
    <div className={cn("absolute inset-0 mx-auto aspect-square w-full max-w-150", className)}>
      <canvas
        className="size-full opacity-0 transition-opacity duration-500 contain-[layout_paint_size] touch-none"
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX - pointerInteractionMovement.current
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

      {REGIONS.map((region, i) => (
        <div
          key={region.name}
          ref={(el) => { markerRefs.current[i] = el }}
          className="pointer-events-none absolute left-1/2 top-1/2"
          style={{ width: 0, height: 0, opacity: 0 }}
        >
          <div
            ref={(el) => { dotRefs.current[i] = el }}
            style={{
              position: "absolute",
              width: 6, height: 6,
              borderRadius: "50%",
              background: "#E543FF",
              transform: "translate(-50%,-50%)",
              boxShadow: "0 0 8px rgba(229,67,255,0.8)",
            }}
          />
          <span
            ref={(el) => { labelRefs.current[i] = el }}
            style={{
              position: "absolute",
              left: region.align === "right" ? undefined : region.labelX,
              right: region.align === "right" ? -region.labelX : undefined,
              top: region.labelY,
              whiteSpace: "nowrap",
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.14em",
              color: "rgba(255,255,255,0.90)",
              textAlign: region.align,
              background: "rgba(30,30,30,0.90)",
              padding: "2px 5px",
              borderRadius: "3px",
            }}
          >
            {region.name}
          </span>
        </div>
      ))}
    </div>
  )
}
