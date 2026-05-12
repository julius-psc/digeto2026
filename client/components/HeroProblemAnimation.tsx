"use client"

import Image from "next/image"
import { motion, useAnimate } from "framer-motion"
import { useEffect } from "react"

const PAIRS = [
  {
    problem: "18 months to build a regional sales team",
    solution: "Pipeline in your first market within 30 days",
  },
  {
    problem: "€200k+ locked into fixed regional overhead",
    solution: "AI that finds, qualifies and sequences your best prospects",
  },
  {
    problem: "Consultants deliver decks. Not deals.",
    solution: "Local closers who speak the language and win the deal",
  },
  {
    problem: "GTM tools give you data. Not revenue.",
    solution: "Full execution from first lead to signed contract",
  },
]

const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms))

export function HeroProblemAnimation() {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    let alive = true

    const run = async () => {
      while (alive) {
        // Reset: hide all rows instantly
        for (let i = 0; i < PAIRS.length; i++) {
          animate(`[data-row="${i}"]`, { opacity: 0, y: 14 }, { duration: 0 })
        }

        await sleep(600)
        if (!alive) break

        // Reveal rows one by one — top to bottom
        for (let i = 0; i < PAIRS.length; i++) {
          if (!alive) break
          await animate(
            `[data-row="${i}"]`,
            { opacity: 1, y: 0 },
            { duration: 0.55, ease: [0, 0.6, 0.4, 1] }
          )
          // Pause between rows so the eye can follow
          await sleep(700)
        }
        if (!alive) break

        // Long hold so all 4 pairs can be read comfortably
        await sleep(5500)
        if (!alive) break

        // Fade all out together
        for (let i = PAIRS.length - 1; i >= 0; i--) {
          animate(`[data-row="${i}"]`, { opacity: 0, y: -6 }, { duration: 0.25 })
          await sleep(60)
        }
        await sleep(500)
      }
    }

    run()
    return () => { alive = false }
  }, [animate])

  return (
    <div ref={scope} className="w-full">

      {/* Section label */}
      <div className="flex items-center gap-2.5 mb-6">
        <Image src="/assets/brand/digeto-fav.svg" alt="Digeto" width={18} height={18} className="opacity-60" />
        <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-foreground/35">
          The problem → The Digeto fix
        </span>
      </div>

      {/* Pairs — one row per point */}
      <div className="flex flex-col gap-3">
        {PAIRS.map(({ problem, solution }, i) => (
          <motion.div
            key={i}
            data-row={i}
            initial={{ opacity: 0, y: 14 }}
            className="grid items-center gap-3"
            style={{ gridTemplateColumns: "1fr auto 1fr" }}
          >
            {/* Problem */}
            <div className="flex items-center gap-2.5 rounded-xl border border-white/[0.08] bg-card px-4 py-3">
              <span className="flex-shrink-0 w-4 h-4 flex items-center justify-center rounded-full bg-white/[0.08] text-[9px] font-bold text-foreground/40">
                ✕
              </span>
              <span className="text-xs sm:text-sm font-medium text-foreground/50 leading-snug">{problem}</span>
            </div>

            {/* Arrow */}
            <span className="text-foreground/20 text-xs select-none">→</span>

            {/* Solution */}
            <div
              className="flex items-center gap-2.5 rounded-xl px-4 py-3"
              style={{ border: "1px solid rgba(229,67,255,0.28)" }}
            >
              <span
                className="flex-shrink-0 w-4 h-4 flex items-center justify-center rounded-full text-white text-[9px] font-bold"
                style={{ backgroundColor: "#E543FF" }}
              >
                ✓
              </span>
              <span className="text-xs sm:text-sm font-semibold leading-snug" style={{ color: "#E543FF" }}>
                {solution}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  )
}
