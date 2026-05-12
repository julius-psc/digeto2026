"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const PAIRS = [
  {
    problem: "18 months to build a regional sales team",
    solution: "Generating pipeline in your first market within 30 days",
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
    problem: "GTM Tools give you data. Not revenue.",
    solution: "Full execution & accountability from first lead to signed contract",
  },
]

const ROW_INTERVAL = 1600  // ms between each row appearing
const HOLD_DURATION = 8000 // ms to hold all rows visible before resetting

export function HeroProblemAnimation() {
  const [visible, setVisible] = useState(0)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>

    if (fading) {
      // Fade everything out, then reset
      t = setTimeout(() => {
        setFading(false)
        setVisible(0)
      }, 700)
      return () => clearTimeout(t)
    }

    if (visible < PAIRS.length) {
      // Reveal next row
      t = setTimeout(
        () => setVisible((v) => v + 1),
        visible === 0 ? 600 : ROW_INTERVAL,
      )
    } else {
      // All visible — hold, then trigger fade-out
      t = setTimeout(() => setFading(true), HOLD_DURATION)
    }

    run()
    return () => { alive = false }
  }, [animate])

  return (
    <div className="w-full flex flex-col gap-3">
      {PAIRS.map((pair, i) => (
        <motion.div
          key={i}
          animate={{
            opacity: fading ? 0 : i < visible ? 1 : 0,
            y:       fading ? -6 : i < visible ? 0 : 10,
          }}
          transition={{
            duration: fading ? 0.35 : 0.5,
            ease: "easeOut",
            delay: fading ? i * 0.04 : 0,
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3"
        >
          {/* Problem */}
          <div className="flex items-center gap-2.5 rounded-xl border border-white/[0.08] bg-card px-4 py-3">
            <span className="flex-shrink-0 w-4 h-4 flex items-center justify-center rounded-full bg-white/[0.08] text-[9px] font-bold text-foreground/50">
              ✕
            </span>
            <span className="text-sm font-medium text-foreground/65 leading-snug">
              {pair.problem}
            </span>
          </div>

          {/* Solution */}
          <div
            className="flex items-center gap-2.5 rounded-xl bg-card px-4 py-3"
            style={{ border: "1px solid rgba(229,67,255,0.25)", color: "#E543FF" }}
          >
            <span
              className="flex-shrink-0 w-4 h-4 flex items-center justify-center rounded-full text-white text-[9px] font-bold"
              style={{ backgroundColor: "#E543FF" }}
            >
              ✓
            </span>
            <span className="text-sm font-semibold leading-snug">
              {pair.solution}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
