"use client";

import { motion } from "framer-motion";
import { IconArrowRight, IconCheck, IconMinus } from "@tabler/icons-react";

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
    <section id="pricing">
      <div className="mx-auto max-w-[1400px] px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-3 lg:items-stretch">
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
                      background: "linear-gradient(180deg, #ee55ff 0%, #e543ff 100%)",
                      boxShadow: "0 4px 16px rgba(229,67,255,0.35)",
                    }}
                  >
                    Most Popular
                  </span>
                </div>
              )}

              <div
                className="relative flex h-full flex-col overflow-hidden rounded-[24px] border px-5 py-6 sm:rounded-[30px] sm:px-7 sm:py-8 transition-all duration-300 ease-out hover:-translate-y-1"
                style={{
                  borderColor: plan.featured ? "rgba(229,67,255,0.35)" : "rgba(0,0,0,0.08)",
                  background: plan.featured
                    ? "linear-gradient(180deg, #fdf5ff 0%, #faf0ff 100%)"
                    : "#ffffff",
                  boxShadow: plan.featured
                    ? "0 0 0 1px rgba(229,67,255,0.1), 0 8px 32px rgba(229,67,255,0.12)"
                    : "0 1px 4px rgba(0,0,0,0.04)",
                }}
              >
                <div className="relative flex min-h-0 flex-1 flex-col">
                  <h3 className="text-[1.55rem] font-semibold tracking-tight text-foreground sm:text-[1.8rem]">
                    {plan.name}
                  </h3>

                  <div className="mt-3 flex items-end gap-2 sm:mt-4">
                    <span className="text-[2.35rem] font-semibold tracking-tight text-foreground sm:text-[2.9rem]">
                      {plan.price}
                    </span>
                    <span className="pb-1 text-sm text-foreground/50 sm:text-base">
                      {plan.period}
                    </span>
                  </div>

                  <p className="mt-2 text-sm font-medium uppercase tracking-[0.1em] text-foreground/40">
                    {plan.target}
                  </p>

                  <div className="mt-6 space-y-3 sm:mt-7 sm:space-y-3.5">
                    {plan.features.map(({ text, included }) => (
                      <div key={text} className="flex items-center gap-3">
                        <span
                          className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full sm:h-6 sm:w-6"
                          style={{
                            background: included
                              ? "rgba(229,67,255,0.1)"
                              : "rgba(0,0,0,0.04)",
                          }}
                        >
                          {included ? (
                            <IconCheck size={13} stroke={2.5} style={{ color: "#E543FF" }} />
                          ) : (
                            <IconMinus size={13} stroke={2} className="text-foreground/20" />
                          )}
                        </span>
                        <span
                          className="text-base"
                          style={{ color: included ? "#0F1117" : "rgba(15,17,23,0.3)" }}
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
                    className="group/btn inline-flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-3.5 text-sm font-semibold text-white transition-all duration-300 ease-out sm:py-4 hover:-translate-y-0.5"
                    style={plan.featured ? {
                      background: "linear-gradient(180deg, #ee55ff 0%, #e543ff 100%)",
                      boxShadow: "0 1px 0 #be2edb, 0 4px 12px rgba(229,67,255,0.3), inset 0 1px 2px rgba(255,255,255,0.16)",
                      border: "1px solid rgba(255,255,255,0.2)",
                    } : {
                      background: "linear-gradient(180deg, rgba(229,67,255,0.1) 0%, rgba(229,67,255,0.07) 100%)",
                      border: "1px solid rgba(229,67,255,0.25)",
                      color: "#E543FF",
                    }}
                  >
                    {plan.cta}
                    <IconArrowRight
                      size={16}
                      stroke={2.1}
                      className="transition-transform duration-300 ease-out group-hover/btn:translate-x-0.5"
                    />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-foreground/40">
          <span className="text-foreground/70">10% on closed sales · 5% on fundraising.</span>
          {" "}We earn when you do.
        </p>
      </div>
    </section>
  );
}
