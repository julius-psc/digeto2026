"use client";

import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";
import { Highlighter } from "@/components/ui/highlighter";
import { Globe } from "@/components/ui/globe";

export default function Hero() {
  return (
    <section className="flex flex-col items-center px-4 sm:px-8 pt-[10vh] sm:pt-[14vh]">
      <div className="max-w-4xl mx-auto w-full text-center">
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
        <p className="mt-4 text-sm md:text-base font-medium text-foreground/75 leading-relaxed max-w-xs sm:max-w-none mx-auto">
          The instant global sales force that sources your leads
          <br className="hidden sm:block" />
          {" "}and closes your deals in any market.
        </p>
        <div className="mt-6 sm:mt-8 flex items-center justify-center gap-3 sm:gap-4">
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

      <div className="mt-8 sm:mt-12 flex justify-center w-full">
        <div className="relative w-full max-w-[300px] sm:max-w-[420px] md:max-w-[560px] aspect-square">
          <Globe />
        </div>
      </div>
    </section>
  );
}
