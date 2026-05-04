import Link from "next/link";

export default function WhyNotYou() {
  return (
    <section id="contact" className="px-8 py-12 sm:px-16 sm:py-18">
      <div className="max-w-2xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em]" style={{ color: "#E543FF" }}>
          Ready to move
        </p>
        <h2 className="text-3xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-4xl md:text-5xl">
          Your next market is{" "}
          <span style={{ color: "#E543FF" }}>14 days away.</span>
        </h2>
        <p className="mt-4 max-w-xl text-sm font-medium leading-relaxed text-foreground/60 md:text-base">
          Stop planning global expansion and start executing it. One call is all it takes to see if Digeto is the right engine for your growth.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <Link
            href="/book-a-call"
            className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-white border border-white/25 transition-all duration-200 ease-out hover:-translate-y-px active:translate-y-px"
            style={{
              background: "linear-gradient(180deg, #ee55ff 0%, #e543ff 100%)",
              boxShadow: "0 1px 0 #be2edb, 0 2px 4px rgba(9,9,11,0.08), 0 4px 8px rgba(9,9,11,0.16), inset 0 1px 2px rgba(255,255,255,0.16)",
            }}
          >
            Book a Call
          </Link>
          <Link
            href="#product"
            className="text-sm font-medium text-foreground/60 hover:text-foreground transition-colors"
          >
            Explore the Platform
          </Link>
        </div>
      </div>
    </section>
  );
}
