"use client";

import { BentoGrid, BentoCard, type BentoCardProps } from "@/components/magicui/bento-grid";

type ProductBentoGridProps = {
  features: BentoCardProps[];
};

export default function ProductBentoGrid({ features }: ProductBentoGridProps) {
  return (
    <div className="relative py-3">
      <BentoGrid className="grid-cols-1 md:grid-cols-2 auto-rows-auto gap-5">
        <BentoCard {...features[0]} />
        <BentoCard {...features[1]} />
      </BentoGrid>
    </div>
  );
}
