"use client"

import { Globe } from "@/components/ui/globe"

export function BentoGlobeCard() {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <div
        className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[90%] sm:top-[8%] sm:translate-y-0 sm:w-[62%]"
        style={{ aspectRatio: "1 / 1" }}
      >
        <Globe />
      </div>
    </div>
  )
}
