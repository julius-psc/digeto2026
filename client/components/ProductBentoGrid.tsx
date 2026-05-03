"use client";

import { useRef } from "react";
import { BentoGrid, BentoCard, type BentoCardProps } from "@/components/magicui/bento-grid";
import { AnimatedBeam } from "@/components/magicui/animated-beam";

type ProductBentoGridProps = {
  features: BentoCardProps[];
};

export default function ProductBentoGrid({ features }: ProductBentoGridProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftTopAnchorRef = useRef<HTMLDivElement>(null);
  const leftBottomAnchorRef = useRef<HTMLDivElement>(null);
  const rightTopAnchorRef = useRef<HTMLDivElement>(null);
  const rightBottomAnchorRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="relative py-3">
      <BentoGrid className="grid-cols-1 sm:grid-cols-2 auto-rows-auto gap-3">
        <div className="relative">
          <BentoCard {...features[0]} />
          <div
            ref={leftTopAnchorRef}
            className="pointer-events-none absolute bottom-5 left-[42%] h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#E543FF]/85 shadow-[0_0_10px_rgba(229,67,255,0.38)] sm:bottom-auto sm:left-auto sm:right-5 sm:top-[42%] sm:-translate-x-0 sm:-translate-y-1/2"
          />
          <div
            ref={leftBottomAnchorRef}
            className="pointer-events-none absolute bottom-5 left-[58%] h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#FF8CDF]/85 shadow-[0_0_10px_rgba(255,140,223,0.38)] sm:bottom-auto sm:left-auto sm:right-5 sm:top-[58%] sm:-translate-x-0 sm:-translate-y-1/2"
          />
        </div>

        <div className="relative">
          <BentoCard {...features[1]} />
          <div
            ref={rightTopAnchorRef}
            className="pointer-events-none absolute left-[42%] top-5 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#E543FF]/85 shadow-[0_0_10px_rgba(229,67,255,0.38)] sm:left-5 sm:top-[42%] sm:-translate-x-0 sm:-translate-y-1/2"
          />
          <div
            ref={rightBottomAnchorRef}
            className="pointer-events-none absolute left-[58%] top-5 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#FF8CDF]/85 shadow-[0_0_10px_rgba(255,140,223,0.38)] sm:left-5 sm:top-[58%] sm:-translate-x-0 sm:-translate-y-1/2"
          />
        </div>
      </BentoGrid>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={leftTopAnchorRef}
        toRef={rightTopAnchorRef}
        className="z-20 drop-shadow-[0_0_22px_rgba(229,67,255,0.45)] sm:hidden"
        curvature={0}
        pathWidth={4}
        pathOpacity={0.34}
        pathColor="rgba(255,255,255,0.24)"
        gradientStartColor="#E543FF"
        gradientStopColor="#FF8CDF"
        duration={1.9}
      />

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={leftTopAnchorRef}
        toRef={rightTopAnchorRef}
        className="hidden z-20 drop-shadow-[0_0_22px_rgba(229,67,255,0.45)] sm:block"
        curvature={-18}
        pathWidth={4}
        pathOpacity={0.34}
        pathColor="rgba(255,255,255,0.24)"
        gradientStartColor="#E543FF"
        gradientStopColor="#FF8CDF"
        duration={1.9}
      />

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={leftBottomAnchorRef}
        toRef={rightBottomAnchorRef}
        className="z-20 drop-shadow-[0_0_22px_rgba(229,67,255,0.45)] sm:hidden"
        curvature={0}
        reverse
        pathWidth={4}
        pathOpacity={0.3}
        pathColor="rgba(255,255,255,0.22)"
        gradientStartColor="#FF8CDF"
        gradientStopColor="#E543FF"
        duration={1.9}
        delay={0.2}
      />

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={leftBottomAnchorRef}
        toRef={rightBottomAnchorRef}
        className="hidden z-20 drop-shadow-[0_0_22px_rgba(229,67,255,0.45)] sm:block"
        curvature={18}
        reverse
        pathWidth={4}
        pathOpacity={0.3}
        pathColor="rgba(255,255,255,0.22)"
        gradientStartColor="#FF8CDF"
        gradientStopColor="#E543FF"
        duration={1.9}
        delay={0.2}
      />
    </div>
  );
}
