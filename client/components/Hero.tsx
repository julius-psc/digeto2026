"use client";

import { useEffect, useRef } from "react";
import { IconArrowRight } from "@tabler/icons-react";
import createGlobe from "cobe";
import { useMotionValue, useSpring } from "motion/react";

// ─── Config ───────────────────────────────────────────────────────────────────
const PURPLE: [number, number, number] = [229 / 255, 67 / 255, 1];
const THETA = 0.2;
const DAMPING = 1400;

const regions = [
  { name: "AMERICAS", lat: 38,   lng: -97  }, // Geographic center of continental USA
  { name: "EUROPE",   lat: 50,   lng: 15   }, // Central Europe (Czech Republic)
  { name: "MENA",     lat: 24,   lng: 55   }, // UAE / heart of the Gulf
  { name: "APAC",     lat: 36,   lng: 138  }, // Japan — most iconic APAC landmark
];

// ─── Projection — exact COBE U() + O() (square canvas, scale=1, offset=0) ────
//   U: x = cos(lat)·cos(lng),  y = sin(lat),  z = -cos(lat)·sin(lng)
//   O: c = cos(φ)·x + sin(φ)·z
//      s = sin(φ)·sin(θ)·x + cos(θ)·y − cos(φ)·sin(θ)·z
//      screenX = (c+1)/2,  screenY = (−s+1)/2
//      depth   = −sin(φ)·cos(θ)·x + sin(θ)·y + cos(φ)·cos(θ)·z
//   Markers sit at r = 0.85 (globe 0.8 + markerElevation 0.05)
function project(lat: number, lng: number, phi: number, theta: number) {
  const latR = (lat * Math.PI) / 180;
  const lngR = (lng * Math.PI) / 180;
  const cosLat = Math.cos(latR);

  const R = 0.85;
  const x =  cosLat * Math.cos(lngR) * R;
  const y =  Math.sin(latR)           * R;
  const z = -cosLat * Math.sin(lngR)  * R;

  const cP = Math.cos(phi), sP = Math.sin(phi);
  const cT = Math.cos(theta), sT = Math.sin(theta);

  const c = cP * x + sP * z;
  const s = sP * sT * x + cT * y - cP * sT * z;
  const d = -sP * cT * x + sT * y + cP * cT * z;

  return { nx: (c + 1) / 2, ny: (-s + 1) / 2, visible: d >= 0, depth: d };
}

// ─── Globe with pulsing region markers ────────────────────────────────────────
function GlobeWithRegions() {
  const canvasRef   = useRef<HTMLCanvasElement>(null);
  const sizeRef     = useRef(0);
  const phiRef      = useRef(0);
  const markerRefs  = useRef<(HTMLDivElement | null)[]>([]);
  const dragging    = useRef<number | null>(null);
  const dragDelta   = useRef(0);

  const r  = useMotionValue(0);
  const rs = useSpring(r, { mass: 1, damping: 30, stiffness: 100 });

  const setDragging = (val: number | null) => {
    dragging.current = val;
    if (canvasRef.current)
      canvasRef.current.style.cursor = val !== null ? "grabbing" : "grab";
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const onResize = () => { sizeRef.current = canvas.offsetWidth; };
    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width:  sizeRef.current * 2,
      height: sizeRef.current * 2,
      phi: 0,
      theta: THETA,
      dark: 0.9,
      diffuse: 1,
      mapSamples: 16000,
      mapBrightness: 1.25,
      mapBaseBrightness: 0,
      baseColor:   PURPLE,
      markerColor: PURPLE,
      glowColor:   PURPLE,
      markers: [],   // pulsing done in HTML overlay
      arcs:    [],   // no connecting lines
    });

    let raf = 0;
    const render = () => {
      if (dragging.current === null) phiRef.current += 0.005;
      const phi  = phiRef.current + rs.get();
      const size = sizeRef.current;

      globe.update({ phi, width: size * 2, height: size * 2 });

      markerRefs.current.forEach((el, i) => {
        if (!el) return;
        const { nx, ny, visible, depth } = project(regions[i].lat, regions[i].lng, phi, THETA);
        el.style.transform = `translate(${nx * size}px, ${ny * size}px)`;
        el.style.opacity   = visible ? String(Math.min(1, depth * 6)) : "0";
      });

      raf = requestAnimationFrame(render);
    };

    render();
    setTimeout(() => { if (canvas) canvas.style.opacity = "1"; }, 0);

    return () => {
      cancelAnimationFrame(raf);
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [rs]);

  return (
    <div className="relative aspect-square w-full">
      {/* Pulse keyframes */}
      <style>{`
        @keyframes regionPulse {
          0%   { transform: translate(-50%,-50%) scale(1); opacity: 0.7; }
          100% { transform: translate(-50%,-50%) scale(5); opacity: 0;   }
        }
      `}</style>

      <canvas
        ref={canvasRef}
        className="size-full opacity-0 transition-opacity duration-500 touch-none"
        onPointerDown={(e) => {
          dragging.current = e.clientX - dragDelta.current;
          setDragging(dragging.current);
          e.currentTarget.setPointerCapture(e.pointerId);
        }}
        onPointerUp={(e) => {
          setDragging(null);
          e.currentTarget.releasePointerCapture(e.pointerId);
        }}
        onPointerOut={() => setDragging(null)}
        onPointerMove={(e) => {
          if (dragging.current !== null) {
            const delta = e.clientX - dragging.current;
            dragDelta.current = delta;
            r.set(r.get() + delta / DAMPING);
          }
        }}
      />

      {/* Region markers — zero-size anchor div, children centered on it */}
      {regions.map((region, i) => (
        <div
          key={region.name}
          ref={(el) => { markerRefs.current[i] = el; }}
          className="pointer-events-none absolute left-0 top-0"
          style={{ width: 0, height: 0, opacity: 0 }}
        >
          {/* Pulse ring 1 */}
          <div style={{
            position: "absolute",
            width: 16, height: 16,
            borderRadius: "50%",
            border: "1.5px solid rgba(229,67,255,0.75)",
            animation: "regionPulse 2.4s ease-out infinite",
          }} />
          {/* Pulse ring 2 — staggered */}
          <div style={{
            position: "absolute",
            width: 16, height: 16,
            borderRadius: "50%",
            border: "1.5px solid rgba(229,67,255,0.5)",
            animation: "regionPulse 2.4s ease-out infinite",
            animationDelay: "0.8s",
          }} />
          {/* Pulse ring 3 — staggered further */}
          <div style={{
            position: "absolute",
            width: 16, height: 16,
            borderRadius: "50%",
            border: "1px solid rgba(229,67,255,0.3)",
            animation: "regionPulse 2.4s ease-out infinite",
            animationDelay: "1.6s",
          }} />
          {/* Solid center dot */}
          <div style={{
            position: "absolute",
            width: 8, height: 8,
            borderRadius: "50%",
            background: "#E543FF",
            transform: "translate(-50%, -50%)",
            boxShadow: "0 0 12px rgba(229,67,255,1), 0 0 4px rgba(229,67,255,0.6)",
          }} />
          {/* Label */}
          <span style={{
            position: "absolute",
            left: 12,
            top: -9,
            whiteSpace: "nowrap",
            fontSize: 9,
            fontWeight: 700,
            letterSpacing: "0.15em",
            color: "rgba(229,67,255,0.85)",
          }}>
            {region.name}
          </span>
        </div>
      ))}
    </div>
  );
}

// ─── Hero section ─────────────────────────────────────────────────────────────
export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-transparent">
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-10 pb-12 pt-10 sm:pb-16 sm:pt-14 lg:grid-cols-[minmax(0,1fr)_minmax(380px,0.8fr)] lg:gap-8 lg:pb-20 lg:pt-16">

          {/* Text */}
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2">
              <span
                className="inline-block h-4 w-0.5 shrink-0 rounded-full"
                style={{ background: "#E543FF" }}
              />
              <span
                className="text-sm font-medium uppercase tracking-[0.14em]"
                style={{ color: "#a8a8b0" }}
              >
                The Infrastructure Layer for Global Sales
              </span>
            </div>

            <h1 className="text-[2.9rem] font-medium leading-[0.98] tracking-tight text-[#f0f0f0] sm:text-6xl lg:text-7xl">
              You build what matters.
              <br />
              <span style={{ color: "#E543FF" }}>We sell it everywhere.</span>
            </h1>

            <p className="mt-5 max-w-xl text-base font-medium leading-8" style={{ color: "#d0d0d8" }}>
              Stop hiring. Stop waiting. Start selling internationally in weeks.
            </p>
            <p className="mt-3 max-w-xl text-base leading-8" style={{ color: "#a8a8b0" }}>
              We help innovative businesses create global impact by scaling their sales across borders.
            </p>

            <div className="flex flex-col items-stretch gap-3 pt-8 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href="https://calendly.com/contact-digeto/30min"
                className="group inline-flex items-center justify-center gap-2 rounded-xl border px-6 py-3 text-sm font-medium text-white shadow-[0_10px_30px_rgba(229,67,255,0.18)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_16px_40px_rgba(229,67,255,0.28)]"
                style={{
                  borderColor: "rgba(229,67,255,0.35)",
                  background: "linear-gradient(180deg, rgba(229,67,255,0.18) 0%, rgba(180,30,230,0.14) 100%)",
                }}
              >
                Get Started
                <IconArrowRight size={18} stroke={2} className="transition-transform duration-300 ease-out group-hover:translate-x-0.5" />
              </a>
              <a
                href="#solution"
                className="inline-flex items-center justify-center rounded-xl border px-6 py-3 text-sm font-medium transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.02]"
                style={{
                  borderColor: "rgba(255,255,255,0.12)",
                  color: "#b0b0ba",
                  background: "linear-gradient(180deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.04) 100%)",
                }}
              >
                See How It Works
              </a>
            </div>

            <p className="mt-8 text-sm tracking-wide text-neutral-500">
              Trusted by{" "}
              <span className="text-neutral-300">100+ companies</span> across{" "}
              <span className="text-neutral-300">12+ countries</span>
            </p>
          </div>

          {/* Globe */}
          <div className="relative mx-auto aspect-square w-full max-w-[360px] sm:max-w-[460px] lg:max-w-none">
            <div
              className="pointer-events-none absolute inset-0 rounded-full blur-[80px]"
              style={{ background: "radial-gradient(circle at center, rgba(229,67,255,0.15) 0%, transparent 65%)" }}
            />
            <GlobeWithRegions />
          </div>

        </div>
      </div>
    </section>
  );
}
