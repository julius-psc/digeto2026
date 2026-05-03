"use client";

import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";
import { Highlighter } from "@/components/ui/highlighter";
import { Globe } from "@/components/ui/globe";

export default function Hero() {
  return (
    <section className="px-8 sm:px-16 lg:px-24 pt-[10vh] sm:pt-[14vh] pb-16 sm:pb-24">
      {/* Two-column layout: text left, globe right */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-8 lg:gap-12">
        {/* Text column */}
        <div className="flex-1 text-left">
          <h1 className="font-bold tracking-tight leading-[1.08] text-foreground">
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              <Highlighter action="highlight" color="#E543FF" animationDuration={1800}>
                Global
              </Highlighter>{" "}
              revenue.
            </span>
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-1 text-foreground">
              Zero headcount.
            </span>
          </h1>
          <p className="mt-4 text-sm md:text-base font-medium text-foreground/60 leading-relaxed max-w-sm">
            Beyond strategy. We provide the infrastructure, the automation, and the local teams to close your global deals in weeks, not years.
          </p>
          <div className="mt-6 sm:mt-8 flex items-center gap-3 sm:gap-4">
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

        {/* Globe column */}
        <div className="mt-8 sm:mt-0 flex-shrink-0 flex justify-center sm:justify-end w-full sm:w-auto">
          <div className="relative w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] md:w-[460px] md:h-[460px] lg:w-[520px] lg:h-[520px] overflow-hidden">
            <Globe />
          </div>
        </div>
      </div>
    </section>
  );
}
