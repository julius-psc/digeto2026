"use client"

import { useRef } from "react"
import { motion } from "motion/react"
import { AnimatedBeam } from "@/components/magicui/animated-beam"

const ACCENT = "#E543FF"

// ── card content ─────────────────────────────────────────────────────────────

function LeadsContent() {
  const floats: { delay: number; x: string; initials: string }[] = [
    { delay: 0,   x: "18%", initials: "AK" },
    { delay: 0.5, x: "44%", initials: "MR" },
    { delay: 1.0, x: "70%", initials: "JL" },
  ]
  return (
    <div className="relative flex-1 w-full">
      {floats.map(({ delay, x, initials }) => (
        <motion.div
          key={initials}
          className="absolute top-1/2 -translate-y-1/2 h-7 w-7 rounded-full border border-white/[0.1] bg-white/[0.05] flex items-center justify-center"
          style={{ left: x }}
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay, ease: "easeInOut" }}
        >
          <span className="text-[8px] font-medium text-foreground/40 select-none">{initials}</span>
        </motion.div>
      ))}
    </div>
  )
}

function AIEngineContent() {
  const particles: { delay: number; tx: number; ty: number }[] = [
    { delay: 0,   tx:  10, ty: -10 },
    { delay: 1.0, tx: -10, ty:  10 },
  ]
  return (
    <div className="relative flex-1 w-full flex items-center justify-center">
      {/* Core glow */}
      <motion.div
        className="h-9 w-9 rounded-full flex items-center justify-center"
        style={{
          background: `radial-gradient(circle, rgba(229,67,255,0.25) 0%, transparent 70%)`,
          boxShadow: `0 0 18px rgba(229,67,255,0.35)`,
        }}
        animate={{ scale: [1, 1.18, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div
          className="h-3 w-3 rounded-full"
          style={{ backgroundColor: ACCENT, opacity: 0.9 }}
        />
      </motion.div>

      {/* Particles */}
      {particles.map(({ delay, tx, ty }, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full"
          style={{ backgroundColor: ACCENT }}
          animate={{ x: [0, tx, 0], y: [0, ty, 0], opacity: [0, 0.9, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay, ease: "easeInOut" }}
        />
      ))}
    </div>
  )
}

function MeetingsContent() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-1">
      <motion.span
        className="text-xl font-bold tabular-nums"
        style={{ color: ACCENT }}
        animate={{ opacity: [0.45, 1, 0.45] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        +1
      </motion.span>
      <span className="text-[9px] tracking-[0.12em] uppercase text-foreground/30">
        booked
      </span>
    </div>
  )
}

// ── step card ─────────────────────────────────────────────────────────────────

interface StepCardProps {
  title: string
  children: React.ReactNode
  nodeRef: React.RefObject<HTMLDivElement | null>
  accent?: boolean
}

function StepCard({ title, children, nodeRef, accent = false }: StepCardProps) {
  return (
    <div
      ref={nodeRef}
      className="relative flex flex-col items-stretch rounded-2xl bg-card overflow-hidden"
      style={{
        width: 110,
        height: 130,
        border: accent
          ? `1px solid rgba(229,67,255,0.30)`
          : "1px solid rgba(255,255,255,0.07)",
        boxShadow: accent
          ? "0 0 24px rgba(229,67,255,0.12)"
          : undefined,
        padding: "10px 10px 8px",
      }}
    >
      <p className="text-[9px] font-bold tracking-[0.18em] uppercase text-foreground/35 flex-shrink-0">
        {title}
      </p>
      {children}
    </div>
  )
}

// ── main export ───────────────────────────────────────────────────────────────

export function GTMPipeline() {
  const containerRef  = useRef<HTMLDivElement>(null)
  const leadsRef      = useRef<HTMLDivElement>(null)
  const aiRef         = useRef<HTMLDivElement>(null)
  const meetingsRef   = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={containerRef}
      className="relative inline-flex items-center gap-3"
    >
      <StepCard title="Leads"      nodeRef={leadsRef}>
        <LeadsContent />
      </StepCard>

      <StepCard title="AI Engine"  nodeRef={aiRef} accent>
        <AIEngineContent />
      </StepCard>

      <StepCard title="Meetings"   nodeRef={meetingsRef}>
        <MeetingsContent />
      </StepCard>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={leadsRef}
        toRef={aiRef}
        duration={2.5}
        delay={0}
        pathColor="rgba(255,255,255,0.04)"
        pathOpacity={1}
        pathWidth={1.5}
        gradientStartColor={ACCENT}
        gradientStopColor="#9333ea"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={aiRef}
        toRef={meetingsRef}
        duration={2.5}
        delay={1.25}
        pathColor="rgba(255,255,255,0.04)"
        pathOpacity={1}
        pathWidth={1.5}
        gradientStartColor={ACCENT}
        gradientStopColor="#9333ea"
      />
    </div>
  )
}
