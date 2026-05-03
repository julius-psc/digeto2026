import { ShineBorder } from "@/components/ui/shine-border"

const ACCENT = "#E543FF"

const VALUE_PROPS: { headline: React.ReactNode; sub: string }[] = [
  {
    headline: <>Global in <span style={{ color: ACCENT }}>2 weeks</span></>,
    sub: "Any market. No legal setup, no local hires.",
  },
  {
    headline: <><span style={{ color: ACCENT }}>AI-powered</span> sourcing</>,
    sub: "Leads found, enriched, and sequenced automatically.",
  },
  {
    headline: <>Local teams <span style={{ color: ACCENT }}>close</span></>,
    sub: "Native speakers. Regional networks. Real deals.",
  },
  {
    headline: <>Pay on <span style={{ color: ACCENT }}>results</span></>,
    sub: "Success-based. No fixed cost until revenue comes in.",
  },
]

export default function DigetoValue() {
  return (
    <section className="px-5 sm:px-8 py-14 sm:py-24">
      <div className="mx-auto max-w-4xl">

        <div className="mb-10">
          <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3" style={{ color: ACCENT }}>
            What we deliver
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-[1.08] tracking-tight text-foreground">
            An end-to-end revenue engine.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-foreground/50 leading-relaxed max-w-sm">
            Not a consultancy. Not a SaaS tool. We run the full GTM motion, from first lead to signed deal.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {VALUE_PROPS.map((item, i) => (
            <div
              key={i}
              className="relative rounded-2xl bg-card px-6 py-6 flex flex-col gap-2 overflow-hidden"
            >
              <ShineBorder
                shineColor={[ACCENT, "#9333ea"]}
                borderWidth={1}
                duration={12}
              />
              <p className="text-base font-semibold text-foreground leading-snug">{item.headline}</p>
              <p className="text-sm text-foreground/45 leading-relaxed">{item.sub}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
