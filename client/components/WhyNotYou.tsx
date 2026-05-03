import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

export default function WhyNotYou() {
  return (
    <section id="contact" className="py-10 px-8 sm:py-16 sm:px-16">
      <div className="flex flex-col items-center text-center">
        <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3" style={{ color: "#E543FF" }}>
          Ready to move
        </p>
        <h2 className="font-bold tracking-tight leading-[1.08] text-foreground text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          Your next market is{" "}
          <span style={{ color: "#E543FF" }}>14 days away.</span>
        </h2>
        <p className="mt-4 max-w-lg text-sm md:text-base font-medium text-foreground/60 leading-relaxed">
          Stop planning global expansion and start executing it. One call is all it takes to see if Digeto is the right engine for your growth.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Link
            href="/book-a-call"
            className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-white border border-white/25 transition-all duration-200 ease-out hover:-translate-y-px active:translate-y-px"
            style={{
              background: "linear-gradient(180deg, #ee55ff 0%, #e543ff 100%)",
              boxShadow: "0 1px 0 #be2edb, 0 2px 4px rgba(9,9,11,0.08), 0 4px 8px rgba(9,9,11,0.16), inset 0 1px 2px rgba(255,255,255,0.16)",
            }}
          >
            Book a Call
            <ArrowRight weight="bold" size={14} />
          </Link>
          <a
            href="#pricing"
            className="text-sm font-medium text-foreground/60 hover:text-foreground transition-colors"
          >
            Explore the Platform
          </a>
        </div>
      </div>
    </section>
  );
}
