"use client"

import { RefObject, useEffect, useId, useState } from "react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"

export interface AnimatedBeamProps {
  className?: string
  containerRef: RefObject<HTMLElement | null>
  fromRef: RefObject<HTMLElement | null>
  toRef: RefObject<HTMLElement | null>
  curvature?: number
  reverse?: boolean
  pathColor?: string
  pathWidth?: number
  pathOpacity?: number
  gradientStartColor?: string
  gradientStopColor?: string
  delay?: number
  duration?: number
  startXOffset?: number
  startYOffset?: number
  endXOffset?: number
  endYOffset?: number
}

export function AnimatedBeam({
  className,
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  reverse = false,
  duration = 3,
  delay = 0,
  pathColor = "rgba(0,0,0,0.1)",
  pathWidth = 2,
  pathOpacity = 0.3,
  gradientStartColor = "#E543FF",
  gradientStopColor = "#7C3AED",
  startXOffset = 0,
  startYOffset = 0,
  endXOffset = 0,
  endYOffset = 0,
}: AnimatedBeamProps) {
  const id = useId()
  const [pathD, setPathD] = useState("")
  const [coords, setCoords] = useState({ x1: 0, y1: 0, x2: 0, y2: 0 })
  const [dims, setDims] = useState({ w: 0, h: 0 })

  useEffect(() => {
    const update = () => {
      if (!containerRef.current || !fromRef.current || !toRef.current) return
      const c = containerRef.current.getBoundingClientRect()
      const a = fromRef.current.getBoundingClientRect()
      const b = toRef.current.getBoundingClientRect()

      setDims({ w: c.width, h: c.height })

      const x1 = a.left - c.left + a.width / 2 + startXOffset
      const y1 = a.top - c.top + a.height / 2 + startYOffset
      const x2 = b.left - c.left + b.width / 2 + endXOffset
      const y2 = b.top - c.top + b.height / 2 + endYOffset

      const mx = (x1 + x2) / 2
      const my = (y1 + y2) / 2 - curvature

      setPathD(`M ${x1},${y1} Q ${mx},${my} ${x2},${y2}`)
      setCoords({ x1, y1, x2, y2 })
    }

    const ro = new ResizeObserver(update)
    if (containerRef.current) ro.observe(containerRef.current)
    update()
    return () => ro.disconnect()
  }, [containerRef, fromRef, toRef, curvature, startXOffset, startYOffset, endXOffset, endYOffset])

  return (
    <svg
      fill="none"
      width={dims.w}
      height={dims.h}
      xmlns="http://www.w3.org/2000/svg"
      className={cn("pointer-events-none absolute left-0 top-0", className)}
      viewBox={`0 0 ${dims.w} ${dims.h}`}
    >
      {/* Static track */}
      <path
        d={pathD}
        stroke={pathColor}
        strokeWidth={pathWidth}
        strokeOpacity={pathOpacity}
        strokeLinecap="round"
        fill="none"
      />
      {/* Animated beam dot */}
      <motion.path
        d={pathD}
        fill="none"
        pathLength={1}
        stroke={`url(#${id})`}
        strokeWidth={pathWidth + 1}
        strokeLinecap="round"
        strokeDasharray="0.08 0.92"
        initial={{ strokeDashoffset: 0 }}
        animate={{ strokeDashoffset: reverse ? 1 : -1 }}
        transition={{ duration, repeat: Infinity, ease: "linear", delay }}
      />
      <defs>
        <linearGradient
          id={id}
          gradientUnits="userSpaceOnUse"
          x1={coords.x1}
          y1={coords.y1}
          x2={coords.x2}
          y2={coords.y2}
        >
          <stop stopColor={gradientStartColor} />
          <stop offset="100%" stopColor={gradientStopColor} />
        </linearGradient>
      </defs>
    </svg>
  )
}
