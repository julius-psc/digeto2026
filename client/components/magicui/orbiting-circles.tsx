"use client"

import React from "react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"

interface OrbitingCirclesProps {
  className?: string
  children?: React.ReactNode
  reverse?: boolean
  duration?: number
  radius?: number
  iconSize?: number
  speed?: number
  path?: boolean
}

export function OrbitingCircles({
  className,
  children,
  reverse = false,
  duration = 20,
  radius = 160,
  iconSize = 30,
  speed = 1,
  path = true,
}: OrbitingCirclesProps) {
  const childArray = React.Children.toArray(children)
  const count = childArray.length
  const actualDuration = duration / speed
  const direction = reverse ? -1 : 1

  return (
    <>
      {path && (
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
            stroke="rgba(0,0,0,0.07)"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
        </svg>
      )}

      {childArray.map((child, i) => {
        const startAngle = (360 / count) * i

        return (
          <motion.div
            key={i}
            className={cn("absolute", className)}
            style={{ top: "50%", left: "50%", width: 0, height: 0 }}
            initial={{ rotate: startAngle }}
            animate={{ rotate: startAngle + direction * 360 }}
            transition={{ duration: actualDuration, repeat: Infinity, ease: "linear" }}
          >
            <div
              style={{
                position: "absolute",
                left: radius - iconSize / 2,
                top: -iconSize / 2,
                width: iconSize,
                height: iconSize,
              }}
            >
              <motion.div
                style={{ width: "100%", height: "100%" }}
                initial={{ rotate: -startAngle }}
                animate={{ rotate: -startAngle - direction * 360 }}
                transition={{ duration: actualDuration, repeat: Infinity, ease: "linear" }}
              >
                {child}
              </motion.div>
            </div>
          </motion.div>
        )
      })}
    </>
  )
}
