import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Highlighter } from "@/components/ui/highlighter";
import { HeroProblemAnimation } from "@/components/HeroProblemAnimation";

export default function Hero() {
  return (
    <section className="px-8 sm:px-16 pt-[10vh] sm:pt-[14vh] pb-6 sm:pb-10">
      <div className="max-w-6xl mx-auto flex flex-col items-center">

        {/* Text — centered above */}
        <div className="text-center">
          <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3 inline-flex items-center justify-center gap-1.5" style={{ color: "#E543FF" }}>
            The Global Impact Engine
            <span
              className="inline-block h-1.5 w-1.5 rounded-full animate-pulse"
              style={{ backgroundColor: "#E543FF" }}
            />
          </p>
          <h1 className="font-bold tracking-tight leading-[1.08] text-foreground">
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
              <Highlighter action="highlight" color="#E543FF" animationDuration={1800}>
                Global
              </Highlighter>{" "}
              revenue.
            </span>
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl mt-1 text-foreground">
              Zero headcount.
            </span>
          </h1>
          <p className="mt-5 text-sm sm:text-base font-normal text-foreground/40 leading-relaxed max-w-md mx-auto">
            We don&apos;t advise. We execute. We run your entire global sales operation so you can focus on your product and existing clients.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/book-a-call"
              className="inline-flex items-center justify-center gap-2 rounded-xl px-4 sm:px-5 py-2.5 text-sm font-semibold text-white border border-white/25 whitespace-nowrap transition-all duration-200 ease-out hover:-translate-y-px active:translate-y-px"
              style={{
                background: "linear-gradient(180deg, #ee55ff 0%, #e543ff 100%)",
                boxShadow: "0 1px 0 #be2edb, 0 2px 4px rgba(9,9,11,0.08), 0 4px 8px rgba(9,9,11,0.16), inset 0 1px 2px rgba(255,255,255,0.16)",
              }}
            >
              Launch your first market
              <ArrowRight weight="bold" size={14} />
            </Link>
            <Link
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-1.5 rounded-xl px-4 sm:px-5 py-2.5 text-sm font-semibold whitespace-nowrap transition-all duration-200 ease-out hover:-translate-y-px active:translate-y-px"
              style={{
                border: "1px solid rgba(229,67,255,0.35)",
                color: "#E543FF",
              }}
            >
              See How It Works
              <ArrowRight weight="bold" size={14} />
            </Link>
          </div>
        </div>

        {/* Illustration — centered below */}
        <div className="mt-24 sm:mt-28 w-full max-w-3xl">
          <HeroProblemAnimation />
        </div>

      </div>
    </section>
  );
}
