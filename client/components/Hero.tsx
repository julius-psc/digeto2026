"use client";

import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";
import { Highlighter } from "@/components/ui/highlighter";
import { HeroProblemAnimation } from "@/components/HeroProblemAnimation";

export default function Hero() {
  return (
    <section className="px-5 sm:px-8 pt-[8vh] sm:pt-[10vh] pb-12 sm:pb-20">
      <div className="mx-auto max-w-5xl flex flex-col sm:flex-row sm:items-center sm:justify-between sm:gap-8">

        {/* Text column — left-aligned on desktop, centered on mobile */}
        <div className="text-center sm:text-left sm:max-w-[440px]">
          <h1 className="font-bold tracking-tight leading-[1.08] text-foreground">
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              <Highlighter action="highlight" color="#E543FF" animationDuration={1800}>
                Global
              </Highlighter>{" "}
              revenue.
            </span>
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-1 text-foreground">
              Zero headcount.
            </span>
          </h1>
          <p className="mt-4 text-sm md:text-base font-medium text-foreground/60 leading-relaxed max-w-xs mx-auto sm:mx-0">
            Beyond strategy. We provide the infrastructure, the automation, and the local teams to close your global deals in weeks, not years.
          </p>
          <div className="mt-6 sm:mt-8 flex items-center justify-center sm:justify-start gap-3 sm:gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl px-4 sm:px-5 py-2.5 text-sm font-semibold text-white border border-white/25 transition-all duration-200 ease-out hover:-translate-y-px active:translate-y-px"
              style={{
                background: "linear-gradient(180deg, #ee55ff 0%, #e543ff 100%)",
                boxShadow: "0 1px 0 #be2edb, 0 2px 4px rgba(9,9,11,0.08), 0 4px 8px rgba(9,9,11,0.16), inset 0 1px 2px rgba(255,255,255,0.16)",
              }}
            >
              Book a Call
              <ArrowRight weight="bold" size={14} />
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium text-foreground/60 hover:text-foreground transition-colors"
            >
              See How It Works
            </Link>
          </div>
        </div>

        {/* Animation column — scaled down on mobile */}
        <div className="mt-8 sm:mt-0 flex-shrink-0 flex justify-center [height:457px] sm:h-auto overflow-hidden sm:overflow-visible">
          <div className="origin-top scale-[0.85] sm:scale-100">
            <HeroProblemAnimation />
          </div>
        </div>

      </div>
    </section>
  );
}
