"use client";

import { BentoGrid, BentoCard, type BentoCardProps } from "@/components/magicui/bento-grid";

type ProductBentoGridProps = {
  features: BentoCardProps[];
};

export default function ProductBentoGrid({ features }: ProductBentoGridProps) {
  return (
    <div className="relative py-3">
      <div className="relative">
        <BentoGrid className="grid-cols-1 md:grid-cols-2 auto-rows-auto gap-5">
          <BentoCard {...features[0]} />
          <BentoCard {...features[1]} />
        </BentoGrid>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <div className="flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full border border-white/[0.07] shadow-lg" style={{ background: "#E543FF" }}>
            <span className="text-lg md:text-2xl font-bold text-white leading-none">+</span>
          </div>
        </div>
      </div>
    </div>
  );
}
