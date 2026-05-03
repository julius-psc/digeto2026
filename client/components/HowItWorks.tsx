"use client"

import { useEffect, useState } from "react"

const ACCENT = "#E543FF"

const steps = [
  {
    step: "01",
    title: "Define your target",
    body: "Tell us the market, ICP, and deal size. We configure the engine and assign a regional pod within 24 hours.",
  },
  {
    step: "02",
    title: "We build the pipeline",
    body: "AI finds and enriches your leads. Sequences launch. Local pods open conversations in the native language.",
  },
  {
    step: "03",
    title: "Deals get closed",
    body: "Qualified meetings land in your calendar. Our team sees each deal through to signature. You collect the revenue.",
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
    <section className="px-5 sm:px-8 pb-14 sm:pb-24" id="how-it-works">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3" style={{ color: ACCENT }}>
            How it works
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-[1.08] tracking-tight text-foreground">
            Live in a new market in three steps.
          </h2>
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
