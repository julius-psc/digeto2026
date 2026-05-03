import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

export default function WhyNotYou() {
  return (
    <section className="py-16 px-5 sm:py-24 sm:px-8 lg:py-32">
      <div className="flex flex-col items-center text-center">
        <h2 className="font-bold tracking-tight leading-[1.08] text-foreground text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Why not <span style={{ color: "#E543FF" }}>you?</span>
        </h2>
        <p className="mt-4 text-sm md:text-base font-medium text-foreground/75 leading-relaxed">
          The founders who move first win the market. Stop waiting and start scaling.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a
            href="https://calendly.com/contact-digeto/30min"
            className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-white border border-white/25 transition-all duration-200 ease-out hover:-translate-y-px active:translate-y-px"
            style={{
              background: "linear-gradient(180deg, #ee55ff 0%, #e543ff 100%)",
              boxShadow: "0 1px 0 #be2edb, 0 2px 4px rgba(9,9,11,0.08), 0 4px 8px rgba(9,9,11,0.16), inset 0 1px 2px rgba(255,255,255,0.16)",
            }}
          >
            Book a Call
            <ArrowRight weight="bold" size={14} />
          </a>
          <a
            href="#pricing"
            className="text-sm font-medium text-foreground/60 hover:text-foreground transition-colors"
          >
            See Pricing
          </a>
        </div>
      </div>
    </section>
  );
}
