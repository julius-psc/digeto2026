"use client";

import { useState } from "react";

const pillars = [
  {
    n: "01",
    title: "Clarity",
    desc: "Which market will give you the fastest traction. We analyze your product-market fit across 195 countries.",
  },
  {
    n: "02",
    title: "Strategy",
    desc: "What message, pricing & channels convert. Localized GTM playbooks tuned per region for maximum conversion.",
  },
  {
    n: "03",
    title: "Execution",
    desc: "We do the outreach, open doors & book meetings. Done-for-you international GTM, not consulting slides.",
  },
  {
    n: "04",
    title: "Credibility",
    desc: "Local market experts and venture partners opening doors across Europe, Americas, Middle East, Africa & Asia.",
  },
];

export default function WhatWeDo() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="border-t border-[rgba(255,255,255,0.06)]">
      <div className="mx-auto max-w-[1400px] px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">

        {/* Header — stacked */}
        <div className="mb-16 lg:mb-20 max-w-2xl">
          <p className="text-xs font-medium tracking-[0.18em] text-neutral-500 uppercase mb-5">
            What We Do
          </p>
          <h2 className="text-[2.6rem] font-medium leading-[1.04] tracking-tight text-[#f0f0f0] sm:text-5xl sm:leading-[1.1]">
            We act as your international{" "}
            <span style={{ color: "#E543FF" }}>growth team</span>.
          </h2>
          <p className="mt-5 text-neutral-500 text-sm leading-7">
            Done-for-you International GTM — not consulting slides. Hands-on execution, market credibility, and real traction.
          </p>
        </div>

        {/* Manifest rows */}
        <div className="border-t border-[rgba(255,255,255,0.06)] divide-y divide-[rgba(255,255,255,0.06)]">
          {pillars.map(({ n, title, desc }) => (
            <div
              key={title}
              className="group cursor-default"
              onMouseEnter={() => setHovered(title)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="grid grid-cols-1 gap-y-3 py-6 sm:grid-cols-[3rem_10rem_1fr] sm:gap-x-6 lg:grid-cols-[3rem_14rem_1fr] lg:gap-x-8 lg:py-7">
                {/* Number */}
                <span
                  className="text-xs font-mono transition-colors duration-300 sm:pt-[5px]"
                  style={{ color: hovered === title ? "#E543FF" : "rgba(229,67,255,0.45)" }}
                >
                  {n}
                </span>

                {/* Title */}
                <h3
                  className="text-base font-medium transition-colors duration-300"
                  style={{ color: hovered === title ? "#E543FF" : "#f0f0f0" }}
                >
                  {title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-7 text-neutral-500">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
