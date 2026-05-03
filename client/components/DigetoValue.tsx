import { ShineBorder } from "@/components/ui/shine-border"
import { RocketLaunch, Robot, UsersThree, ChartLineUp } from "@phosphor-icons/react/dist/ssr"

const ACCENT = "#E543FF"

const VALUE_PROPS: { icon: React.ReactNode; headline: React.ReactNode; sub: string }[] = [
  {
    icon: <RocketLaunch size={22} weight="duotone" style={{ color: ACCENT }} />,
    headline: <>Market entry in <span style={{ color: ACCENT }}>2 weeks</span></>,
    sub: "Any market. No legal entity needed, no local hires, no 6-month planning cycles. We deploy fast. Start generating pipeline while competitors are still in meetings.",
  },
  {
    icon: <Robot size={22} weight="duotone" style={{ color: ACCENT }} />,
    headline: <><span style={{ color: ACCENT }}>AI-powered</span> outreach</>,
    sub: "Your ICP defined, leads enriched, sequences personalized and launched. Automatically. Our AI GTM engine runs 24/7, learning and optimizing every touchpoint.",
  },
  {
    icon: <UsersThree size={22} weight="duotone" style={{ color: ACCENT }} />,
    headline: <>Local teams that <span style={{ color: ACCENT }}>close</span></>,
    sub: "Native speakers. Regional networks. Cultural fluency. Our pods in EU, APAC, MENA, and India handle the last mile. The relationship, the language, the deal.",
  },
  {
    icon: <ChartLineUp size={22} weight="duotone" style={{ color: ACCENT }} />,
    headline: <>Pay on <span style={{ color: ACCENT }}>results</span></>,
    sub: "Success-based model. No retainers, no fixed overhead, no risk. Revenue comes in first. Then we share in it. Your growth is the only metric that matters.",
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
            Not a consultancy. Not a SaaS tool. We own the full GTM motion, from first signal to signed contract.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {VALUE_PROPS.map((item, i) => (
            <div
              key={i}
              className="relative rounded-2xl bg-card px-6 py-6 flex flex-col gap-3 overflow-hidden"
            >
              <ShineBorder
                shineColor={[ACCENT, "#9333ea"]}
                borderWidth={1}
                duration={12}
              />
              <span className="flex-shrink-0">{item.icon}</span>
              <p className="text-base font-semibold text-foreground leading-snug">{item.headline}</p>
              <p className="text-sm text-foreground/45 leading-relaxed">{item.sub}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
