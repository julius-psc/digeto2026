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
    <div className="flex h-full w-full items-center justify-center rounded-full bg-card shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
      {children}
    </div>
  )
}

export function BentoGTMCard() {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      {/* Center logo */}
      <div className="z-10 flex h-16 w-16 items-center justify-center rounded-full bg-card">
        <Image
          src="/assets/brand/digeto-fav.svg"
          alt="Digeto"
          width={44}
          height={44}
        />
      </div>

      {/* Inner orbit */}
      <OrbitingCircles radius={80} duration={18} iconSize={42}>
        <OrbitIcon>
          <IconBrandLinkedin size={22} style={{ color: "#E543FF" }} />
        </OrbitIcon>
        <OrbitIcon>
          <IconMail size={20} style={{ color: "#F0F0F8" }} />
        </OrbitIcon>
        <OrbitIcon>
          <IconBrain size={20} style={{ color: "#E543FF" }} />
        </OrbitIcon>
      </OrbitingCircles>

      {/* Outer orbit */}
      <OrbitingCircles radius={130} duration={26} iconSize={36} reverse>
        <OrbitIcon>
          <IconUsers size={18} style={{ color: "#F0F0F8" }} />
        </OrbitIcon>
        <OrbitIcon>
          <IconChartBar size={18} style={{ color: "#E543FF" }} />
        </OrbitIcon>
        <OrbitIcon>
          <IconTarget size={18} style={{ color: "#F0F0F8" }} />
        </OrbitIcon>
      </OrbitingCircles>
    </div>
  )
}
