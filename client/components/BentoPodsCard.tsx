"use client"

import { forwardRef, useRef } from "react"
import { AnimatedBeam } from "@/components/magicui/animated-beam"
import { cn } from "@/lib/utils"

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode; label?: string }
>(({ className, children, label }, ref) => (
  <div className="flex flex-col items-center gap-1.5">
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-11 items-center justify-center rounded-full border border-white/[0.08] bg-card text-xl shadow-[0_2px_8px_rgba(0,0,0,0.5)]",
        className,
      )}
    >
      {children}
    </div>
    {label && (
      <span className="text-[10px] font-semibold uppercase tracking-wider text-foreground/40">
        {label}
      </span>
    )}
  </div>
))

Circle.displayName = "Circle"

export function BentoPodsCard() {
  const containerRef = useRef<HTMLDivElement>(null)
  const indiaRef = useRef<HTMLDivElement>(null)
  const euRef = useRef<HTMLDivElement>(null)
  const apacRef = useRef<HTMLDivElement>(null)
  const gccRef = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={containerRef}
      className="relative flex h-full w-full items-center justify-around px-10"
    >
      {/* Left column: regions */}
      <div className="flex flex-col gap-7">
        <Circle ref={euRef} label="EU">
          🇪🇺
        </Circle>
        <Circle ref={apacRef} label="APAC">
          🌏
        </Circle>
        <Circle ref={gccRef} label="GCC">
          🇦🇪
        </Circle>
      </div>

      {/* Hub: India */}
      <Circle ref={indiaRef} className="size-16 text-3xl" label="India">
        🇮🇳
      </Circle>

      {/* Animated beams from regions to India */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={euRef}
        toRef={indiaRef}
        curvature={-25}
        duration={3.5}
        gradientStartColor="#E543FF"
        gradientStopColor="#E543FF"
        pathColor="rgba(255,255,255,0.08)"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={apacRef}
        toRef={indiaRef}
        duration={3}
        gradientStartColor="#E543FF"
        gradientStopColor="#E543FF"
        pathColor="rgba(255,255,255,0.08)"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={gccRef}
        toRef={indiaRef}
        curvature={25}
        duration={4}
        delay={0.6}
        gradientStartColor="#E543FF"
        gradientStopColor="#E543FF"
        pathColor="rgba(255,255,255,0.08)"
      />
    </div>
  )
}
