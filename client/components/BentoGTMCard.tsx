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
      <div className="relative w-[480px] h-[480px] -translate-y-10">
      {/* Center logo */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex h-24 w-24 items-center justify-center rounded-full bg-card">
        <Image
          src="/assets/brand/digeto-fav.svg"
          alt="Digeto"
          width={62}
          height={62}
        />
      </div>

      {/* Inner orbit */}
      <OrbitingCircles radius={116} duration={18} iconSize={54}>
        <OrbitIcon>
          <IconBrandLinkedin size={30} style={{ color: "#E543FF" }} />
        </OrbitIcon>
        <OrbitIcon>
          <IconMail size={28} style={{ color: "#F0F0F8" }} />
        </OrbitIcon>
        <OrbitIcon>
          <IconBrain size={28} style={{ color: "#E543FF" }} />
        </OrbitIcon>
      </OrbitingCircles>

      {/* Outer orbit */}
      <OrbitingCircles radius={192} duration={26} iconSize={48} reverse>
        <OrbitIcon>
          <IconUsers size={26} style={{ color: "#F0F0F8" }} />
        </OrbitIcon>
        <OrbitIcon>
          <IconChartBar size={26} style={{ color: "#E543FF" }} />
        </OrbitIcon>
        <OrbitIcon>
          <IconTarget size={26} style={{ color: "#F0F0F8" }} />
        </OrbitIcon>
      </OrbitingCircles>
      </div>
    </div>
  )
}
