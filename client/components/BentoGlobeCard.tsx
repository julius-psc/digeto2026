"use client"

import { Globe } from "@/components/ui/globe"

export function BentoGlobeCard() {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <div
        className="absolute left-1/2 -translate-x-1/2"
        style={{ top: "8%", width: "85%", aspectRatio: "1 / 1" }}
      >
        <Globe />
      </div>
    </div>
  )
}
