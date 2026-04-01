"use client";

import { Globe as MagicGlobe } from "@/components/ui/globe";

const reasons = [
  {
    pink: "No headcount.",
    rest: " No overhead.",
    desc: "We embed as your international GTM arm — without a single hire or retainer bloat.",
  },
  {
    pink: "Pure execution,",
    rest: " zero slides.",
    desc: "We run the outreach, open the doors, and book the meetings. Not a deck in sight.",
  },
  {
    pink: "Stage-adaptive",
    rest: " from day one.",
    desc: "Pre-revenue or post-Series A — our playbook shifts around where you actually are.",
  },
  {
    pink: "Six continents",
    rest: " of open doors.",
    desc: "Direct relationships with VCs, accelerators, and distribution partners worldwide.",
  },
  {
    pink: "Traction",
    rest: " investors act on.",
    desc: "Weekly pipeline data and market validation that de-risks your next fundraise.",
  },
];

export default function WhyFoundersChoose() {
  return (
    <section className="bg-transparent border-t border-[rgba(255,255,255,0.06)] overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
        <div className="mb-8 max-w-2xl lg:mb-10">
          <p className="text-xs font-medium tracking-[0.18em] text-neutral-500 uppercase mb-5">
            Why Founders Choose Digeto
          </p>
          <h2 className="text-[2.6rem] font-medium leading-[1.04] tracking-tight text-[#f0f0f0] sm:text-5xl sm:leading-[1.1]">
            We&apos;re not advisors.{" "}
            <span style={{ color: "#E543FF" }}>We&apos;re your team.</span>
          </h2>
          <p className="mt-5 text-neutral-500 text-sm leading-7">
            Most GTM support stops at strategy. Digeto starts where others stop — hands-on international execution built around your stage, your product, and your market.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.02fr)_minmax(460px,0.98fr)] lg:gap-12 items-start">
          <div className="space-y-5 lg:pt-2">
            {reasons.map(({ pink, rest, desc }) => (
              <div
                key={pink}
                className="rounded-2xl border px-5 py-5 backdrop-blur-sm"
                style={{
                  borderColor: "rgba(229,67,255,0.14)",
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(229,67,255,0.04) 100%)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
                }}
              >
                <p className="text-base font-medium leading-snug sm:text-[1.05rem]">
                  <span style={{ color: "#E543FF" }}>{pink}</span>
                  <span className="text-[#f0f0f0]">{rest}</span>
                </p>
                <p className="mt-1.5 text-sm leading-6 text-neutral-500">{desc}</p>
              </div>
            ))}
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-[420px] sm:max-w-[520px] lg:max-w-[620px] lg:-mt-2">
            <div
              className="pointer-events-none absolute inset-0 rounded-full blur-[80px]"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(229,67,255,0.15) 0%, transparent 65%)",
              }}
            />
            <MagicGlobe
              className="inset-0 max-w-none"
              config={{
                devicePixelRatio: 2,
                width: 600 * 2,
                height: 600 * 2,
                phi: 0,
                theta: 0.2,
                dark: 0.9,
                diffuse: 1,
                mapSamples: 16000,
                mapBrightness: 1.25,
                mapBaseBrightness: 0,
                baseColor: [229 / 255, 67 / 255, 1],
                markerColor: [229 / 255, 67 / 255, 1],
                glowColor: [229 / 255, 67 / 255, 1],
                markers: [],
                arcs: [],
                arcColor: [229 / 255, 67 / 255, 1],
                arcWidth: 0.5,
                arcHeight: 0.3,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
  
