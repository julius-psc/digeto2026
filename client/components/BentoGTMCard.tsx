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
    <div className="flex h-full w-full items-center justify-center rounded-full border border-white/[0.12]" style={{ background: "#1e1e1e" }}>
      {children}
    </div>
  )
}

export function BentoGTMCard() {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <div className="relative w-[280px] h-[280px] translate-y-6">
      {/* Center logo */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex h-16 w-16 items-center justify-center rounded-full border border-white/[0.10]" style={{ background: "#1e1e1e" }}>
        <Image
          src="/assets/brand/digeto-fav.svg"
          alt="Digeto"
          width={44}
          height={44}
        />
      </div>

      {/* Inner orbit */}
      <OrbitingCircles radius={76} duration={18} iconSize={38}>
        <OrbitIcon>
          <IconBrandLinkedin size={20} style={{ color: "#E543FF" }} />
        </OrbitIcon>
        <OrbitIcon>
          <IconMail size={18} style={{ color: "rgba(255,255,255,0.75)" }} />
        </OrbitIcon>
        <OrbitIcon>
          <IconBrain size={18} style={{ color: "#E543FF" }} />
        </OrbitIcon>
      </OrbitingCircles>

      {/* Outer orbit */}
      <OrbitingCircles radius={130} duration={26} iconSize={34} reverse>
        <OrbitIcon>
          <IconUsers size={18} style={{ color: "rgba(255,255,255,0.75)" }} />
        </OrbitIcon>
        <OrbitIcon>
          <IconChartBar size={18} style={{ color: "#E543FF" }} />
        </OrbitIcon>
        <OrbitIcon>
          <IconTarget size={18} style={{ color: "rgba(255,255,255,0.75)" }} />
        </OrbitIcon>
      </OrbitingCircles>
      </div>
    </div>
  )
}
