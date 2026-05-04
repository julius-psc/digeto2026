"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Matter from "matter-js"

const PROBLEMS = [
  "18 months to build a regional sales team",
  "€200k+ locked into fixed regional overhead",
  "Consultants deliver decks. Not deals.",
  "GTM Tools give you data. Not revenue.",
]

const SOLUTIONS = [
  "Generating pipeline in your first market within 30 days",
  "AI that finds, qualifies and sequences your best prospects",
  "Local closers who speak the language and win the deal",
  "Full execution & accountability from first lead to signed contract",
]

const COMPARISON = [
  {
    old: "18 months to build a regional sales team",
    digeto: "Generating pipeline in your first market within 30 days",
  },
  {
    old: "€200k+ locked into fixed regional overhead",
    digeto: "AI that finds, qualifies and sequences your best prospects",
  },
  {
    old: "Consultants deliver decks. Not deals.",
    digeto: "Local closers who speak the language and win the deal",
  },
  {
    old: "GTM Tools give you data. Not revenue.",
    digeto: "Full execution & accountability from first lead to signed contract",
  },
]

const LAYOUT = [
  { top: "18%", left: "35%", rotate: "-20deg" },
  { top: "12%", left: "65%", rotate:  "16deg" },
  { top: "32%", left: "63%", rotate: "-15deg" },
  { top: "28%", left: "28%", rotate:  "10deg" },
]

const TOTAL_FRAMES   = 600
const CONTAINER_SIZE = 256
const SOLUTION_W     = 230
const SOLUTION_H     = 44
const FIRST_GAP      = 72
const SOLUTION_GAP   = 10

const TRAVEL = Array.from({ length: SOLUTIONS.length }, (_, i) =>
  FIRST_GAP + i * (SOLUTION_H + SOLUTION_GAP)
)

type Frame = { x: number; y: number; angle: number }

export default function ProblemSolver() {
  const sectionRef   = useRef<HTMLElement>(null)
  const sceneRef     = useRef<HTMLDivElement>(null)
  const boxRef       = useRef<HTMLDivElement>(null)
  const tagRefs      = useRef<(HTMLDivElement | null)[]>([])
  const solutionRefs = useRef<(HTMLDivElement | null)[]>([])

  const [animationComplete, setAnimationComplete] = useState(false)
  const [solutionVisible,   setSolutionVisible]   = useState([false, false, false, false])

  const frames       = useRef<Frame[][]>([])
  const boxInfoRef   = useRef<{ cx: number; ty: number; w: number; h: number } | null>(null)
  const rafRef       = useRef(0)
  const startTimeRef = useRef(0)
  const isPlaying    = useRef(false)
  const hasTriggered = useRef(false)
  const preSimReady  = useRef(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!sceneRef.current || !boxRef.current) return

      const sceneRect = sceneRef.current.getBoundingClientRect()
      const boxRect   = boxRef.current.getBoundingClientRect()

      const cx = boxRect.left - sceneRect.left + boxRect.width  / 2
      const ty = boxRect.top  - sceneRect.top
      const w  = boxRect.width
      const h  = boxRect.height
      boxInfoRef.current = { cx, ty, w, h }

      const { Engine, World, Bodies, Body } = Matter
      const engine = Engine.create({ gravity: { x: 0, y: 1.2, scale: 0.001 } })
      const world  = engine.world

      const c0 = 0x0001, c1 = 0x0002
      const wall = { isStatic: true, collisionFilter: { category: c0, mask: c1 } }
      const fg = window.innerWidth < 768 ? w * 1.1 : 300

      World.add(world, [
        Bodies.rectangle(cx, ty + h - 15, w - 30, 30, wall),
        Bodies.rectangle(cx - w / 2 + 10, ty + h / 2, 20, h, wall),
        Bodies.rectangle(cx + w / 2 - 10, ty + h / 2, 20, h, wall),
        Bodies.rectangle(cx - fg, ty - 200, 30, 600, { ...wall, angle: -Math.PI / 6 }),
        Bodies.rectangle(cx + fg, ty - 200, 30, 600, { ...wall, angle:  Math.PI / 6 }),
      ])

      const tagBodies: Matter.Body[] = []
      tagRefs.current.forEach((el) => {
        if (!el) return
        const r = el.getBoundingClientRect()
        const x = r.left - sceneRect.left + r.width  / 2
        const y = r.top  - sceneRect.top  + r.height / 2
        const raw = window.getComputedStyle(el).transform
        let angle = 0
        if (raw && raw !== "none") {
          const m = raw.match(/matrix\(([^)]+)\)/)
          if (m) { const v = m[1].split(",").map(Number); angle = Math.atan2(v[1], v[0]) }
        }
        const body = Bodies.rectangle(x, y, r.width, r.height, {
          restitution: 0.4, friction: 0.05 + Math.random() * 0.1,
          frictionAir: 0.01 + Math.random() * 0.01, angle,
          collisionFilter: { category: c1, mask: c0 },
        })
        Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.05)
        tagBodies.push(body)
        el.style.top = "0"; el.style.left = "0"
        el.style.transform = `translate(${x}px, ${y}px) translate(-50%,-50%) rotate(${angle}rad)`
      })
      World.add(world, tagBodies)

      const allFrames: Frame[][] = []
      allFrames.push(tagBodies.map(b => ({ x: b.position.x, y: b.position.y, angle: b.angle })))
      for (let i = 1; i < TOTAL_FRAMES; i++) {
        Engine.update(engine, 1000 / 60)
        allFrames.push(tagBodies.map(b => ({ x: b.position.x, y: b.position.y, angle: b.angle })))
      }
      frames.current = allFrames
      World.clear(world, false); Engine.clear(engine)

      preSimReady.current = true
      if (hasTriggered.current) startPlayback()
    }, 120)

    return () => clearTimeout(timer)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered.current) {
          hasTriggered.current = true
          setTimeout(() => {
            if (preSimReady.current) startPlayback()
          }, 600)
        }
      },
      { threshold: 0.6 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    return () => { cancelAnimationFrame(rafRef.current) }
  }, [])

  function startPlayback() {
    if (isPlaying.current) return
    isPlaying.current = true
    startTimeRef.current = performance.now()

    const tick = (now: number) => {
      const elapsed  = now - startTimeRef.current
      const frameIdx = Math.min(Math.floor(elapsed * 60 / 1000), TOTAL_FRAMES - 1)

      const box = boxInfoRef.current
      if (box && frames.current.length) {
        const frame = frames.current[frameIdx]
        if (!frame) { rafRef.current = requestAnimationFrame(tick); return }

        const { cx, ty, w } = box

        tagRefs.current.forEach((el, i) => {
          if (!el || !frame[i]) return
          const { x, y, angle } = frame[i]
          const inside = y > ty + 80 && x > cx - w / 2 + 20 && x < cx + w / 2 - 20
          el.style.opacity   = inside ? "0" : "1"
          el.style.transform = `translate(${x}px, ${y}px) translate(-50%,-50%) rotate(${angle}rad)`
          el.style.top = "0"; el.style.left = "0"
        })

        const allInside = frame.every(f =>
          f.y > ty + 80 && f.x > cx - w / 2 + 20 && f.x < cx + w / 2 - 20
        )

        if (allInside || frameIdx >= TOTAL_FRAMES - 1) {
          tagRefs.current.forEach(el => { if (el) el.style.opacity = "0" })
          isPlaying.current = false
          setAnimationComplete(true)
          triggerSolutions()
          return
        }
      }

      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
  }

  function triggerSolutions() {
    ;[3, 2, 1, 0].forEach((idx, step) => {
      setTimeout(() => {
        setSolutionVisible(prev => {
          const next = [...prev]
          next[idx] = true
          return next
        })
      }, step * 620)
    })
  }

  return (
    <section
      ref={sectionRef}
      className="relative h-auto sm:h-screen bg-background sm:flex sm:flex-col"
    >
      {/* Mobile: comparison table */}
      <div className="flex sm:hidden flex-col px-5 py-10 gap-5">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Stop hiring. Stop waiting.{" "}
            <span style={{ color: "#E543FF" }}>Start selling.</span>
          </h2>
        </div>

        {/* Column headers */}
        <div className="grid grid-cols-2 gap-2">
          <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-foreground/35 px-1">
            The Old Way
          </p>
          <p className="text-[10px] font-bold uppercase tracking-[0.15em] px-1" style={{ color: "#E543FF" }}>
            The Digeto Way
          </p>
        </div>

        {/* Rows */}
        <div className="flex flex-col gap-2">
          {COMPARISON.map((row, i) => (
            <div key={i} className="grid grid-cols-2 gap-2">
              <div className="rounded-xl border border-white/[0.07] bg-card px-3 py-3">
                <p className="text-xs text-foreground/40 leading-snug">{row.old}</p>
              </div>
              <div className="rounded-xl border bg-card px-3 py-3" style={{ borderColor: "rgba(229,67,255,0.2)" }}>
                <p className="text-xs font-medium leading-snug" style={{ color: "#E543FF" }}>{row.digeto}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: heading in normal flow, above the physics scene */}
      <div className="hidden sm:block text-center pt-16 px-8 pb-6 mx-auto w-full" style={{ maxWidth: 860 }}>
        <h2 className="text-xl md:text-2xl font-bold tracking-tight text-foreground">
          Stop hiring. Stop waiting.{" "}
          <span style={{ color: "#E543FF" }}>Start selling.</span>
        </h2>
      </div>

      {/* Desktop: physics animation */}
      <div
        ref={sceneRef}
        className="relative mx-auto w-full flex-1 hidden sm:block"
        style={{ maxWidth: 860 }}
      >
        {/* Problem cards */}
        {PROBLEMS.map((problem, i) => (
          <div
            key={i}
            ref={(el: HTMLDivElement | null) => { tagRefs.current[i] = el }}
            className="absolute flex items-center gap-2 rounded-lg border border-white/[0.08] bg-card px-3.5 py-2 shadow-sm text-sm font-medium text-foreground/50 whitespace-nowrap select-none will-change-transform"
            style={{
              top: LAYOUT[i].top, left: LAYOUT[i].left,
              transform: `translate(-50%,-50%) rotate(${LAYOUT[i].rotate})`,
              zIndex: 10,
            }}
          >
            <span className="flex-shrink-0 w-4 h-4 flex items-center justify-center rounded-full bg-white/[0.08] text-foreground/50 text-[10px] font-bold">✕</span>
            {problem}
          </div>
        ))}

        {/* Container */}
        <div
          ref={boxRef}
          className={`absolute left-1/2 -translate-x-1/2 rounded-3xl border border-white/[0.08] bg-card flex items-center justify-center z-20 transition-all duration-700 ${
            animationComplete
              ? "shadow-[0_0_45px_rgba(229,67,255,0.4),_0_0_90px_rgba(229,67,255,0.18)]"
              : "shadow-sm"
          }`}
          style={{ top: "40%", width: CONTAINER_SIZE, height: CONTAINER_SIZE }}
        >
          <Image src="/assets/brand/digeto-fav.svg" alt="Digeto" width={152} height={152} />
        </div>

        {/* Solutions */}
        {SOLUTIONS.map((solution, i) => (
          <div
            key={i}
            ref={(el: HTMLDivElement | null) => { solutionRefs.current[i] = el }}
            className="absolute left-1/2 flex items-center gap-3 rounded-xl bg-card shadow-sm text-sm font-semibold"
            style={{
              borderWidth:  1,
              borderColor:  "rgba(229,67,255,0.25)",
              color:        "#E543FF",
              width:        SOLUTION_W,
              height:       SOLUTION_H,
              marginLeft:   -SOLUTION_W / 2,
              top:          `calc(38% + ${CONTAINER_SIZE + TRAVEL[i]}px)`,
              zIndex:       25,
              paddingLeft:  12,
              paddingRight: 12,
              opacity:      solutionVisible[i] ? 1 : 0,
              transform:    solutionVisible[i] ? "translateY(0)" : `translateY(${-TRAVEL[i]}px)`,
              transition:   solutionVisible[i]
                ? "transform 0.7s cubic-bezier(0.22,1,0.1,1), opacity 0.2s ease"
                : "none",
              willChange: "transform, opacity",
            }}
          >
            <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center rounded-full text-white text-[11px] font-bold" style={{ backgroundColor: "#E543FF" }}>✓</span>
            {solution}
          </div>
        ))}
      </div>
    </section>
  )
}
