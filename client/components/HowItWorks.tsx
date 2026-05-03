"use client"

import { useEffect, useState } from "react"

const ACCENT = "#E543FF"

const steps = [
  {
    step: "01",
    title: "One call.",
    body: "We align on your ICP, target markets, and revenue goals. No 40-page briefs. No drawn-out onboarding. We start mapping your market on day one.",
  },
  {
    step: "02",
    title: "We launch the engine.",
    body: "AI identifies and enriches leads. Sequences go live. Regional pods activate. Your pipeline is being built while you're focused on product. Usually running within two weeks.",
  },
  {
    step: "03",
    title: "Deals come in.",
    body: "Qualified meetings land in your calendar. We support through negotiation and close. You pay when revenue arrives. That's the whole model, built around your outcome, not our retainer.",
  },
]

export default function HowItWorks() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % steps.length)
    }, 1600)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="px-8 sm:px-16 pb-8 sm:pb-12" id="how-it-works">
      <div>
        <div className="mb-8">
          <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3" style={{ color: ACCENT }}>
            How it works
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-[1.08] tracking-tight text-foreground">
            Live in a new market in three steps.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-foreground/50 leading-relaxed max-w-sm">
            Three steps. No complexity. No waiting. We move at startup speed, because that's the only speed that matters.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {steps.map((item, i) => (
            <div
              key={item.step}
              className="relative rounded-2xl bg-card px-6 py-6 flex flex-col gap-3 overflow-hidden border transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[rgba(229,67,255,0.25)] hover:shadow-[0_0_28px_rgba(229,67,255,0.10)]"
              style={{
                borderColor: active === i ? "rgba(229,67,255,0.22)" : "rgba(255,255,255,0.07)",
              }}
            >
              <p
                className="text-4xl font-bold tracking-tight transition-all duration-500 ease-out"
                style={{
                  color: active === i ? ACCENT : "rgba(229,67,255,0.18)",
                  textShadow: active === i ? "0 0 24px rgba(229,67,255,0.55)" : "none",
                  transform: active === i ? "scale(1.08)" : "scale(1)",
                  transformOrigin: "left center",
                }}
              >
                {item.step}
              </p>
              <p className="text-base font-semibold text-foreground leading-snug">{item.title}</p>
              <p className="text-sm text-foreground/45 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
