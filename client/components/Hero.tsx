import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Highlighter } from "@/components/ui/highlighter";
import { HeroProblemAnimation } from "@/components/HeroProblemAnimation";

export default function Hero() {
  return (
    <section className="px-8 sm:px-16 pt-[4vh] sm:pt-[6vh] pb-6 sm:pb-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center sm:gap-6">

        {/* Text column */}
        <div className="text-center sm:text-left sm:flex-[1.2]">
          <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3" style={{ color: "#E543FF" }}>
            The Global Impact Engine
          </p>
          <h1 className="font-bold tracking-tight leading-[1.08] text-foreground">
            <span className="block text-4xl sm:text-5xl md:text-5xl lg:text-6xl">
              <Highlighter action="highlight" color="#E543FF" animationDuration={1800}>
                Global
              </Highlighter>{" "}
              revenue.
            </span>
            <span className="block text-4xl sm:text-5xl md:text-5xl lg:text-6xl mt-1 text-foreground">
              Zero headcount.
            </span>
          </h1>
          <p className="mt-4 text-sm sm:text-base font-medium text-foreground/50 leading-relaxed max-w-xs sm:max-w-md mx-auto sm:mx-0">
            We don&apos;t advise. We execute. We run your entire global sales operation so you can focus on your product and existing clients.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-2">
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
              className="text-sm font-medium text-foreground/60 hover:text-foreground transition-colors whitespace-nowrap"
            >
              See How It Works
            </Link>
          </div>
        </div>

        {/* Static visual — flush left within its column */}
        <div className="mt-8 sm:mt-0 flex-shrink-0 flex [height:400px] sm:h-auto overflow-hidden sm:overflow-visible relative">
          <div
            className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 z-10 sm:hidden"
            style={{ background: "linear-gradient(to bottom, transparent, var(--background))" }}
          />
          <div className="origin-top scale-[0.8] sm:scale-90">
            <HeroProblemAnimation />
          </div>
        </div>

      </div>
    </section>
  );
}
