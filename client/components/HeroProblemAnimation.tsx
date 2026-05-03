"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "motion/react"

const PROBLEMS = [
  "18 months to hire a regional team",
  "€200k+ in fixed overhead",
  "Consultants give advice, not deals",
]

const SOLUTIONS = [
  "Launch in a new market in 2 weeks",
  "Success-based, zero overhead",
  "AI that actually executes",
]

const TAG_META = [
  { x:  0, rotate: -3   },
  { x: 16, rotate:  2   },
  { x: -8, rotate: -1.5 },
]

const T = {
  tag0:   350,
  tag1:   950,
  tag2:  1550,
  absorb: 2900,
  sol0:  3450,
  sol1:  3950,
  sol2:  4450,
  loop:  7600,
}

// Layout constants — single source of truth
const W         = 316   // container width
const TAG_GAP   = 60    // vertical spacing between settled tags
const TAG_H     = 38    // approximate tag height
const BOX_TOP   = 3 * TAG_GAP + TAG_H + 24   // = 222
const BOX_SIZE  = 100
const SOL_TOP   = BOX_TOP + BOX_SIZE + 28     // = 350
const SOL_GAP   = 50
const HEIGHT    = SOL_TOP + 3 * SOL_GAP + TAG_H  // = 538

export function HeroProblemAnimation() {
  const [cycle, setCycle] = useState(0)
  const [phase, setPhase] = useState(-1)

  useEffect(() => {
    setPhase(-1)
    const timers = [
      setTimeout(() => setPhase(0), T.tag0),
      setTimeout(() => setPhase(1), T.tag1),
      setTimeout(() => setPhase(2), T.tag2),
      setTimeout(() => setPhase(3), T.absorb),
      setTimeout(() => setPhase(4), T.sol0),
      setTimeout(() => setPhase(5), T.sol1),
      setTimeout(() => setPhase(6), T.sol2),
      setTimeout(() => setCycle(c => c + 1), T.loop),
    ]
    return () => timers.forEach(clearTimeout)
  }, [cycle])

  const tagVisible = (i: number) => phase >= i && phase < 3
  const solVisible = (i: number) => phase >= 4 + i
  const boxGlowing = phase >= 3

  return (
    <div className="relative flex-shrink-0" style={{ width: W, height: HEIGHT }}>

      {/* Problem tags */}
      {PROBLEMS.map((text, i) => (
        <AnimatePresence key={`${cycle}-p${i}`}>
          {tagVisible(i) && (
            <motion.div
              initial={{ y: -72, opacity: 0, rotate: TAG_META[i].rotate, x: TAG_META[i].x }}
              animate={{ y: i * TAG_GAP, opacity: 1, rotate: TAG_META[i].rotate, x: TAG_META[i].x }}
              exit={{
                y: BOX_TOP + BOX_SIZE / 2,
                opacity: 0,
                scale: 0.82,
                transition: { duration: 0.42, ease: [0.4, 0, 1, 1] },
              }}
              transition={{ type: "spring", stiffness: 240, damping: 22 }}
              className="absolute top-0 left-0 right-0 flex items-center gap-2.5 rounded-xl border border-white/[0.08] bg-card px-4 py-2.5 shadow-sm"
            >
              <span className="flex-shrink-0 w-4 h-4 flex items-center justify-center rounded-full bg-white/[0.08] text-[9px] font-bold text-foreground/50">
                ✕
              </span>
              <span className="text-sm font-medium text-foreground/50 leading-snug">{text}</span>
            </motion.div>
          )}
        </AnimatePresence>
      ))}

      {/* Digeto box */}
      <div className="absolute left-1/2 -translate-x-1/2" style={{ top: BOX_TOP }}>
        <motion.div
          animate={
            boxGlowing
              ? { boxShadow: "0 0 48px rgba(229,67,255,0.4), 0 0 96px rgba(229,67,255,0.16)" }
              : { boxShadow: "0 0 0px rgba(229,67,255,0)" }
          }
          transition={{ duration: 0.55 }}
          className="rounded-2xl border border-white/[0.08] bg-card flex items-center justify-center"
          style={{
            width: BOX_SIZE,
            height: BOX_SIZE,
            borderColor: boxGlowing ? "rgba(229,67,255,0.3)" : undefined,
          }}
        >
          <Image src="/assets/brand/digeto-fav.svg" alt="Digeto" width={60} height={60} />
        </motion.div>
      </div>

      {/* Solution tags */}
      {SOLUTIONS.map((text, i) => (
        <AnimatePresence key={`${cycle}-s${i}`}>
          {solVisible(i) && (
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              transition={{ duration: 0.4, ease: [0, 0, 0.2, 1] }}
              className="absolute left-0 right-0 flex items-center gap-2.5 rounded-xl bg-card px-4 py-2.5"
              style={{
                top: SOL_TOP + i * SOL_GAP,
                border: "1px solid rgba(229,67,255,0.25)",
                color: "#E543FF",
              }}
            >
              <span
                className="flex-shrink-0 w-4 h-4 flex items-center justify-center rounded-full text-white text-[9px] font-bold"
                style={{ backgroundColor: "#E543FF" }}
              >
                ✓
              </span>
              <span className="text-sm font-semibold leading-snug">{text}</span>
            </motion.div>
          )}
        </AnimatePresence>
      ))}

    </div>
  )
}
