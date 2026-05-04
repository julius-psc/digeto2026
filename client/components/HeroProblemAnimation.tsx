"use client"

import Image from "next/image"
import { motion, useAnimate } from "framer-motion"
import { useEffect } from "react"

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

// Scattered x-offsets + rotations for an organic, spread-out look
const PROBLEM_X   = [-14, 24, -6, 20]
const PROBLEM_ROT = [-3, 2.5, -2, 3]

const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms))

export function HeroProblemAnimation() {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    let alive = true

    const run = async () => {
      while (alive) {
        // ── Snap reset ─────────────────────────────────────────
        for (let i = 0; i < 4; i++) {
          animate(`[data-p="${i}"]`, { opacity: 1, x: PROBLEM_X[i], scale: 1 }, { duration: 0 })
          animate(`[data-s="${i}"]`, { opacity: 0, x: -70 }, { duration: 0 })
        }
        animate(`[data-box]`, { boxShadow: "0 0 0px rgba(229,67,255,0)" }, { duration: 0 })

        // ── Read — user reads the problems ─────────────────────
        await sleep(2400)
        if (!alive) break

        // ── Suck problems in one by one ────────────────────────
        for (let i = 0; i < 4; i++) {
          if (!alive) break
          await animate(
            `[data-p="${i}"]`,
            { opacity: 0, x: PROBLEM_X[i] + 140, scale: 0.65 },
            { duration: 0.36, ease: [0.4, 0, 1, 0.6] }
          )
        }
        if (!alive) break

        // ── Box ignites ────────────────────────────────────────
        await animate(
          `[data-box]`,
          { boxShadow: "0 0 52px rgba(229,67,255,0.7), 0 0 110px rgba(229,67,255,0.3)" },
          { duration: 0.5, ease: "easeInOut" }
        )

        // ── Spit solutions out one by one ──────────────────────
        for (let i = 0; i < 4; i++) {
          if (!alive) break
          await animate(
            `[data-s="${i}"]`,
            { opacity: 1, x: 0 },
            { duration: 0.4, ease: [0, 0.6, 0.4, 1] }
          )
        }
        if (!alive) break

        // ── Hold — user reads the solutions ───────────────────
        await sleep(2400)
        if (!alive) break

        // ── Fade out solutions + dim box ──────────────────────
        for (let i = 3; i >= 0; i--) {
          animate(`[data-s="${i}"]`, { opacity: 0, x: -20 }, { duration: 0.18 })
        }
        await animate(
          `[data-box]`,
          { boxShadow: "0 0 0px rgba(229,67,255,0)" },
          { duration: 0.4, ease: "easeInOut" }
        )
        await sleep(200)
      }
    }

    run()
    return () => { alive = false }
  }, [])

  return (
    <div ref={scope} className="flex items-center gap-10 w-full">

      {/* Problem tags — left, scattered */}
      <div className="flex flex-col gap-4 flex-1 min-w-0">
        {PROBLEMS.map((text, i) => (
          <motion.div
            key={i}
            data-p={i}
            initial={{ opacity: 1, x: PROBLEM_X[i], scale: 1 }}
            className="flex items-center gap-2.5 rounded-xl border border-white/[0.08] bg-card px-4 py-3 shadow-sm"
            style={{ rotate: PROBLEM_ROT[i] }}
          >
            <span className="flex-shrink-0 w-4 h-4 flex items-center justify-center rounded-full bg-white/[0.08] text-[9px] font-bold text-foreground/50">
              ✕
            </span>
            <span className="text-xs sm:text-sm font-medium text-foreground/50 leading-snug">{text}</span>
          </motion.div>
        ))}
      </div>

      {/* Digeto box — center */}
      <motion.div
        data-box="true"
        className="flex-shrink-0 rounded-2xl bg-card flex items-center justify-center"
        style={{
          width: 108,
          height: 108,
          border: "1px solid rgba(229,67,255,0.25)",
        }}
      >
        <Image src="/assets/brand/digeto-fav.svg" alt="Digeto" width={60} height={60} />
      </motion.div>

      {/* Solution tags — right, clean + straight */}
      <div className="flex flex-col gap-4 flex-1 min-w-0">
        {SOLUTIONS.map((text, i) => (
          <motion.div
            key={i}
            data-s={i}
            initial={{ opacity: 0, x: -70 }}
            className="flex items-center gap-2.5 rounded-xl bg-card px-4 py-3"
            style={{ border: "1px solid rgba(229,67,255,0.25)", color: "#E543FF" }}
          >
            <span
              className="flex-shrink-0 w-4 h-4 flex items-center justify-center rounded-full text-white text-[9px] font-bold"
              style={{ backgroundColor: "#E543FF" }}
            >
              ✓
            </span>
            <span className="text-xs sm:text-sm font-semibold leading-snug">{text}</span>
          </motion.div>
        ))}
      </div>

    </div>
  )
}
