import { IconArrowRight, IconCheck } from "@tabler/icons-react";

import { ShineBorder } from "@/components/ui/shine-border";

const plans = [
  {
    name: "Explore",
    price: "€100",
    period: "/month",
    description:
      "Best for MVP / Early Stage. AI global scoring, GTM global roadmap, free fundraising matchmaking.",
    features: [
      "AI Global Scoring",
      "GTM Global Roadmap",
      "Free Fundraising Matchmaking",
    ],
    cta: "Contact us to Explore",
    featured: false,
  },
  {
    name: "Launch",
    price: "€2,000",
    period: "/month",
    description:
      "Best for Seed-Series A / SMEs. Full GTM playbook, SDR outreach, local advisor, bi-weekly traction calls.",
    features: [
      "Full GTM Playbook",
      "SDR Outreach",
      "Local Advisor",
      "Bi-weekly Traction Calls",
    ],
    cta: "Contact us to Launch",
    featured: true,
  },
  {
    name: "Scale",
    price: "€5,000",
    period: "/month",
    description:
      "Best for Scale-ups & high-growth companies. Dedicated pod per region, partnership + channel strategy, multi-market sales engine.",
    features: [
      "Dedicated Pod Per Region",
      "Partnership + Channel Strategy",
      "Multi-market Sales Engine",
    ],
    cta: "Contact us to Scale",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden border-t border-[rgba(255,255,255,0.06)]"
    >
      <div className="relative mx-auto max-w-[1400px] px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
        <div className="max-w-2xl">
          <p className="text-xs font-medium tracking-[0.18em] text-neutral-500 uppercase mb-5">
            Pricing
          </p>
          <h2 className="text-[2.6rem] font-medium leading-[1.04] tracking-tight text-[#f0f0f0] sm:text-5xl sm:leading-[1.1]">
            Start early. <span style={{ color: "#E543FF" }}>Grow fast.</span>
          </h2>
          <p className="mt-5 text-neutral-500 text-sm leading-7">
            Choose the plan that matches your stage. Scale as you grow with GTM support built to help you expand confidently.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:mt-14 sm:gap-6 lg:grid-cols-3 lg:items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="relative"
            >
              {plan.featured && (
                <div className="pointer-events-none absolute inset-x-4 -top-4 z-10 flex justify-center sm:inset-x-6">
                  <span
                    className="rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white"
                    style={{
                      border: "1px solid rgba(229,67,255,0.35)",
                      background: "#3A1140",
                      boxShadow: "0 10px 30px rgba(229,67,255,0.18)",
                    }}
                  >
                    Most Popular
                  </span>
                </div>
              )}

              <div
                className="relative flex h-full flex-col overflow-hidden rounded-[24px] border px-5 py-6 sm:rounded-[30px] sm:px-7 sm:py-8"
                style={{
                  borderColor: plan.featured
                    ? "rgba(229,67,255,0.26)"
                    : "rgba(255,255,255,0.08)",
                  background: plan.featured
                    ? "linear-gradient(180deg, rgba(27,14,35,0.98) 0%, rgba(18,12,23,0.98) 100%)"
                    : "linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.015) 100%)",
                  boxShadow: plan.featured
                    ? "0 0 0 1px rgba(229,67,255,0.08), 0 28px 80px rgba(229,67,255,0.18)"
                    : "inset 0 1px 0 rgba(255,255,255,0.04)",
                }}
              >
                {plan.featured && (
                  <ShineBorder
                    borderWidth={1.25}
                    duration={14}
                    shineColor={["rgba(229,67,255,0.42)", "rgba(255,92,246,0.55)", "rgba(229,67,255,0.48)"]}
                  />
                )}

                <div className="relative flex min-h-0 flex-1 flex-col sm:min-h-[360px]">
                  <h3 className="text-[1.55rem] font-semibold tracking-tight text-[#f0f0f0] sm:text-[1.8rem]">
                    {plan.name}
                  </h3>

                  <div className="mt-3 flex items-end gap-2 sm:mt-4">
                    <span className="text-[2.35rem] font-semibold tracking-tight text-[#f0f0f0] sm:text-[2.9rem]">
                      {plan.price}
                    </span>
                    <span className="pb-1 text-sm text-neutral-400 sm:text-base">{plan.period}</span>
                  </div>

                  <p className="mt-4 max-w-sm text-sm leading-6 text-neutral-400 sm:mt-5 sm:min-h-[84px]">
                    {plan.description}
                  </p>

                  <div className="mt-6 space-y-3 sm:mt-7 sm:space-y-3.5">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <span
                          className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full sm:h-6 sm:w-6"
                          style={{
                            background: plan.featured
                              ? "rgba(229,67,255,0.18)"
                              : "rgba(229,67,255,0.12)",
                          }}
                        >
                          <IconCheck
                            size={14}
                            stroke={2.5}
                            style={{ color: "#E543FF" }}
                          />
                        </span>
                        <span className="text-[0.95rem] text-[#f0f0f0] sm:text-[0.98rem]">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative mt-8 pt-0 sm:mt-auto sm:pt-9">
                  <a
                    href="#"
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-3.5 text-sm font-medium text-white transition-all duration-300 ease-out sm:py-4"
                    style={{
                      background: plan.featured
                        ? "linear-gradient(180deg, rgba(229,67,255,0.18) 0%, rgba(180,30,230,0.14) 100%)"
                        : "linear-gradient(180deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.07) 100%)",
                      boxShadow: plan.featured
                        ? "0 10px 30px rgba(229,67,255,0.18)"
                        : "inset 0 1px 0 rgba(255,255,255,0.05)",
                      border: plan.featured
                        ? "1px solid rgba(229,67,255,0.35)"
                        : "1px solid transparent",
                    }}
                  >
                    {plan.cta}
                    <IconArrowRight
                      size={18}
                      stroke={2.1}
                      className="transition-transform duration-300 ease-out group-hover:translate-x-0.5"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
