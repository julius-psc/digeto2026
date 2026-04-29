"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Matter from "matter-js"

const PROBLEMS = [
  "No sales infrastructure",
  "Consultants don't execute",
  "Tools don't close deals",
  "Going global is too expensive",
]

const SOLUTIONS = [
  "Sales infrastructure, built for you",
  "Execution-first, results-driven",
  "AI that actually closes deals",
  "Global markets from day one",
]

const LAYOUT = [
  { top: "20%", left: "42%", rotate: "-22deg" },
  { top: "16%", left: "68%", rotate:  "17deg" },
  { top: "31%", left: "38%", rotate: "-14deg" },
  { top: "28%", left: "66%", rotate:  "24deg" },
]

const TOTAL_FRAMES   = 600
const CONTAINER_SIZE = 256
const SOLUTION_W     = 196
const SOLUTION_H     = 44
const FIRST_GAP      = 30
const SOLUTION_GAP   = 10

const TRAVEL = Array.from({ length: SOLUTIONS.length }, (_, i) =>
  FIRST_GAP + i * (SOLUTION_H + SOLUTION_GAP)
)

type Frame = { x: number; y: number; angle: number }

export default function ProblemSolver() {
  const outerRef     = useRef<HTMLDivElement>(null)
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

  // Stable refs for event listeners so removeEventListener finds the same function
  const preventDownScroll = useRef((e: Event) => {
    if (e instanceof WheelEvent && e.deltaY <= 0) return
    e.preventDefault()
  })
  const preventKeyDown = useRef((e: KeyboardEvent) => {
    if ([" ", "ArrowDown", "PageDown"].includes(e.key)) e.preventDefault()
  })

  function lockScroll() {
    document.addEventListener("wheel",     preventDownScroll.current as EventListener, { passive: false })
    document.addEventListener("touchmove", preventDownScroll.current as EventListener, { passive: false })
    document.addEventListener("keydown",   preventKeyDown.current    as EventListener)
  }

  function unlockScroll() {
    document.removeEventListener("wheel",     preventDownScroll.current as EventListener)
    document.removeEventListener("touchmove", preventDownScroll.current as EventListener)
    document.removeEventListener("keydown",   preventKeyDown.current    as EventListener)
  }

  // ── Pre-simulate on mount ────────────────────────────────────────────────
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

  // ── Scroll listener — trigger when section becomes sticky ────────────────
  useEffect(() => {
    const handleScroll = () => {
      if (hasTriggered.current || !outerRef.current) return
      const rect = outerRef.current.getBoundingClientRect()
      if (rect.top <= 0) {
        hasTriggered.current = true
        lockScroll()
        if (preSimReady.current) startPlayback()
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Ensure scroll lock is cleaned up on unmount
  useEffect(() => {
    return () => {
      unlockScroll()
      cancelAnimationFrame(rafRef.current)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
          const next = [...prev] as [boolean, boolean, boolean, boolean]
          next[idx] = true
          return next
        })
      }, step * 620)
    })
    // Unlock scroll after last solution finishes its transition
    // last fires at 3×620=1860ms, transition is 0.7s, plus small buffer
    setTimeout(unlockScroll, 1860 + 700 + 300)
  }

  return (
    <div ref={outerRef} style={{ height: "150vh" }}>
      <section className="sticky top-0 h-screen relative">
        <div
          ref={sceneRef}
          className="relative mx-auto w-full h-full"
          style={{ maxWidth: 860 }}
        >
          {/* Heading */}
          <div className="text-center pt-10 px-8">
            <h2 className="text-lg md:text-xl font-semibold tracking-tight text-foreground">
              From chaos to clarity, every obstacle your sales team faces, we handle it.
            </h2>
          </div>

          {/* Problem cards */}
          {PROBLEMS.map((problem, i) => (
            <div
              key={i}
              ref={(el: HTMLDivElement | null) => { tagRefs.current[i] = el }}
              className="absolute flex items-center gap-2 rounded-lg border border-red-200/60 bg-white px-3.5 py-2 shadow-sm text-sm font-medium text-red-500 whitespace-nowrap select-none will-change-transform"
              style={{
                top: LAYOUT[i].top, left: LAYOUT[i].left,
                transform: `translate(-50%,-50%) rotate(${LAYOUT[i].rotate})`,
                zIndex: 10,
              }}
            >
              <span className="flex-shrink-0 w-4 h-4 flex items-center justify-center rounded-full bg-red-500 text-red-100 text-[10px] font-bold">✕</span>
              {problem}
            </div>
          ))}

          {/* Container */}
          <div
            ref={boxRef}
            className={`absolute left-1/2 -translate-x-1/2 rounded-3xl border border-gray-100 bg-white flex items-center justify-center z-20 transition-all duration-700 ${
              animationComplete
                ? "shadow-[0_0_45px_rgba(229,67,255,0.4),_0_0_90px_rgba(229,67,255,0.18)]"
                : "shadow-sm"
            }`}
            style={{ top: "40%", width: CONTAINER_SIZE, height: CONTAINER_SIZE }}
          >
            <Image src="/assets/brand/digeto-fav-dark.svg" alt="Digeto" width={152} height={152} />
          </div>

          {/* Solutions */}
          {SOLUTIONS.map((solution, i) => (
            <div
              key={i}
              ref={(el: HTMLDivElement | null) => { solutionRefs.current[i] = el }}
              className="absolute left-1/2 flex items-center gap-3 rounded-xl border border-emerald-100 bg-white shadow-sm text-sm font-semibold text-emerald-600"
              style={{
                width:       SOLUTION_W,
                height:      SOLUTION_H,
                marginLeft:  -SOLUTION_W / 2,
                top:         `calc(38% + ${CONTAINER_SIZE + TRAVEL[i]}px)`,
                zIndex:      25,
                paddingLeft:  12,
                paddingRight: 12,
                opacity:     solutionVisible[i] ? 1 : 0,
                transform:   solutionVisible[i] ? "translateY(0)" : `translateY(${-TRAVEL[i]}px)`,
                transition:  solutionVisible[i]
                  ? "transform 0.7s cubic-bezier(0.22,1,0.1,1), opacity 0.2s ease"
                  : "none",
                willChange: "transform, opacity",
              }}
            >
              <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center rounded-full bg-emerald-500 text-white text-[11px] font-bold">✓</span>
              {solution}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
