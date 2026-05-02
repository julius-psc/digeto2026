"use client"

import Image from "next/image"
import { OrbitingCircles } from "@/components/magicui/orbiting-circles"
import {
  IconBrandLinkedin,
  IconMail,
  IconBrain,
  IconUsers,
  IconChartBar,
  IconTarget,
} from "@tabler/icons-react"

function OrbitIcon({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full w-full items-center justify-center rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.10)]">
      {children}
    </div>
  )
}

export function BentoGTMCard() {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      {/* Center logo — no shadow */}
      <div className="z-10 flex h-16 w-16 items-center justify-center rounded-full bg-white">
        <Image
          src="/assets/brand/digeto-fav-dark.svg"
          alt="Digeto"
          width={44}
          height={44}
        />
      </div>

      {/* Inner orbit */}
      <OrbitingCircles radius={80} duration={18} iconSize={42}>
        <OrbitIcon>
          <IconBrandLinkedin size={22} style={{ color: "#0A66C2" }} />
        </OrbitIcon>
        <OrbitIcon>
          <IconMail size={20} style={{ color: "#EA4335" }} />
        </OrbitIcon>
        <OrbitIcon>
          <IconBrain size={20} style={{ color: "#7C3AED" }} />
        </OrbitIcon>
      </OrbitingCircles>

      {/* Outer orbit */}
      <OrbitingCircles radius={130} duration={26} iconSize={36} reverse>
        <OrbitIcon>
          <IconUsers size={18} style={{ color: "#059669" }} />
        </OrbitIcon>
        <OrbitIcon>
          <IconChartBar size={18} style={{ color: "#D97706" }} />
        </OrbitIcon>
        <OrbitIcon>
          <IconTarget size={18} style={{ color: "#DC2626" }} />
        </OrbitIcon>
      </OrbitingCircles>
    </div>
  )
}
