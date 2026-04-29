"use client";

import { motion } from "framer-motion";
import { IconArrowRight, IconCheck, IconMinus } from "@tabler/icons-react";
import { ShineBorder } from "@/components/ui/shine-border";

type Plan = {
  name: string;
  price: string;
  period: string;
  target: string;
  features: { text: string; included: boolean }[];
  cta: string;
  featured: boolean;
};

const allPlansFeatures = [
  "GTM execution engine",
  "Market identification & validation",
  "Outbound & pipeline management",
  "Investor network access (300+)",
  "Full execution accountability",
];

const plans: Plan[] = [
  {
    name: "Explore",
    price: "€100",
    period: "/month",
    target: "Early-stage startups",
    features: [
      ...allPlansFeatures.map((f) => ({ text: f, included: true })),
      { text: "Dedicated resource", included: false },
      { text: "Local network access", included: false },
      { text: "Multi-market execution", included: false },
      { text: "Fundraising support", included: true },
    ],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Launch",
    price: "€2,000",
    period: "/month",
    target: "Series A+ & SMEs",
    features: [
      ...allPlansFeatures.map((f) => ({ text: f, included: true })),
      { text: "Dedicated resource", included: true },
      { text: "Local network access", included: true },
      { text: "Multi-market execution", included: false },
      { text: "Fundraising support", included: true },
    ],
    cta: "Get Started",
    featured: true,
  },
  {
    name: "Scale",
    price: "€5,000",
    period: "/month",
    target: "Large & high-growth",
    features: [
      ...allPlansFeatures.map((f) => ({ text: f, included: true })),
      { text: "Dedicated resource", included: true },
      { text: "Local network access", included: true },
      { text: "Multi-market execution", included: true },
      { text: "Fundraising support", included: false },
    ],
    cta: "Get Started",
    featured: false,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden border-t border-[rgba(255,255,255,0.06)]"
    >
      <div className="relative mx-auto max-w-[1400px] px-6 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-16">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        >
          <p className="text-sm font-medium tracking-[0.18em] text-neutral-500 uppercase mb-5">
            Pricing
          </p>
          <h2 className="text-[2.6rem] font-medium leading-[1.04] tracking-tight text-[#f0f0f0] sm:text-5xl sm:leading-[1.1]">
            Scale at your <span style={{ color: "#E543FF" }}>pace.</span>
          </h2>
          <p className="mt-5 text-neutral-500 text-base leading-8">
            Subscription + success fee. No lock-in.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:mt-14 sm:gap-6 lg:grid-cols-3 lg:items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative group"
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
                className="relative flex h-full flex-col overflow-hidden rounded-[24px] border px-5 py-6 sm:rounded-[30px] sm:px-7 sm:py-8 transition-all duration-300 ease-out hover:-translate-y-2"
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
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  if (plan.featured) {
                    el.style.borderColor = "rgba(229,67,255,0.5)";
                    el.style.boxShadow =
                      "0 0 0 1px rgba(229,67,255,0.15), 0 32px 96px rgba(229,67,255,0.28)";
                  } else {
                    el.style.borderColor = "rgba(229,67,255,0.25)";
                    el.style.boxShadow =
                      "inset 0 1px 0 rgba(229,67,255,0.1), 0 20px 60px rgba(229,67,255,0.12)";
                  }
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  if (plan.featured) {
                    el.style.borderColor = "rgba(229,67,255,0.26)";
                    el.style.boxShadow =
                      "0 0 0 1px rgba(229,67,255,0.08), 0 28px 80px rgba(229,67,255,0.18)";
                  } else {
                    el.style.borderColor = "rgba(255,255,255,0.08)";
                    el.style.boxShadow = "inset 0 1px 0 rgba(255,255,255,0.04)";
                  }
                }}
              >
                {plan.featured && (
                  <ShineBorder
                    borderWidth={1.25}
                    duration={14}
                    shineColor={[
                      "rgba(229,67,255,0.42)",
                      "rgba(255,92,246,0.55)",
                      "rgba(229,67,255,0.48)",
                    ]}
                  />
                )}

                <div className="relative flex min-h-0 flex-1 flex-col">
                  <h3 className="text-[1.55rem] font-semibold tracking-tight text-[#f0f0f0] sm:text-[1.8rem]">
                    {plan.name}
                  </h3>

                  <div className="mt-3 flex items-end gap-2 sm:mt-4">
                    <span className="text-[2.35rem] font-semibold tracking-tight text-[#f0f0f0] sm:text-[2.9rem]">
                      {plan.price}
                    </span>
                    <span className="pb-1 text-sm text-neutral-400 sm:text-base">
                      {plan.period}
                    </span>
                  </div>

                  <p className="mt-2 text-sm font-medium uppercase tracking-[0.1em] text-neutral-500">
                    {plan.target}
                  </p>

                  <div className="mt-6 space-y-3 sm:mt-7 sm:space-y-3.5">
                    {plan.features.map(({ text, included }) => (
                      <div key={text} className="flex items-center gap-3">
                        <span
                          className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full sm:h-6 sm:w-6"
                          style={{
                            background: included
                              ? plan.featured
                                ? "rgba(229,67,255,0.18)"
                                : "rgba(229,67,255,0.12)"
                              : "rgba(255,255,255,0.04)",
                          }}
                        >
                          {included ? (
                            <IconCheck
                              size={14}
                              stroke={2.5}
                              style={{ color: "#E543FF" }}
                            />
                          ) : (
                            <IconMinus
                              size={14}
                              stroke={2}
                              style={{ color: "rgba(255,255,255,0.2)" }}
                            />
                          )}
                        </span>
                        <span
                          className="text-base"
                          style={{
                            color: included ? "#f0f0f0" : "rgba(255,255,255,0.3)",
                          }}
                        >
                          {text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative mt-8 sm:mt-auto sm:pt-9">
                  <a
                    href="https://calendly.com/contact-digeto/30min"
                    className="group/btn inline-flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-3.5 text-sm font-medium text-white transition-all duration-300 ease-out sm:py-4 hover:-translate-y-0.5 hover:scale-[1.02]"
                    style={{
                      background: plan.featured
                        ? "linear-gradient(180deg, rgba(229,67,255,0.18) 0%, rgba(180,30,230,0.14) 100%)"
                        : "linear-gradient(180deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.07) 100%)",
                      boxShadow: plan.featured
                        ? "0 10px 30px rgba(229,67,255,0.18)"
                        : "inset 0 1px 0 rgba(255,255,255,0.05)",
                      border: plan.featured
                        ? "1px solid rgba(229,67,255,0.35)"
                        : "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    {plan.cta}
                    <IconArrowRight
                      size={18}
                      stroke={2.1}
                      className="transition-transform duration-300 ease-out group-hover/btn:translate-x-0.5"
                    />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-neutral-500">
          <span className="text-neutral-300">10% on closed sales · 5% on fundraising.</span>
          {" "}We earn when you do.
        </p>
      </div>
    </section>
  );
}
