const pillars = [
  {
    n: "01",
    label: "AI GTM Engine",
    sub: "India",
    desc: "Centralized intelligence and execution. Case processing, CRM, market intelligence, ICP definition, lead generation, workflow automation, global data.",
    tags: ["Scale", "Speed", "Cost Efficiency"],
  },
  {
    n: "02",
    label: "Regional Execution Pods",
    sub: "On the Ground",
    desc: "Human-led conversion in your target markets. Local trust, local language, local networks. We close deals on the ground.",
    tags: ["Trust", "Conversion", "Revenue"],
  },
];

export default function WhatWeDo() {
  return (
    <section id="solution" className="border-t border-[rgba(255,255,255,0.06)]">
      <div className="mx-auto max-w-[1400px] px-6 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-16">

        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-medium tracking-[0.18em] text-neutral-500 uppercase mb-5">
            Our Solution
          </p>
          <h2 className="text-[2.6rem] font-medium leading-[1.04] tracking-tight text-[#f0f0f0] sm:text-5xl sm:leading-[1.1]">
            AI scale.{" "}
            <span style={{ color: "#E543FF" }}>Human conversion.</span>
          </h2>
          <p className="mt-5 text-neutral-500 text-base leading-8">
            One unified system. Two layers. We don&apos;t advise, we execute. Your global sales infrastructure, fully built and operated for you.
          </p>
        </div>

        <div
          className="grid grid-cols-1 gap-px overflow-hidden rounded-[28px] border border-[rgba(229,67,255,0.14)] lg:grid-cols-2"
          style={{
            background: "rgba(229,67,255,0.14)",
            boxShadow: "0 0 80px rgba(229,67,255,0.08)",
          }}
        >
          {pillars.map(({ n, label, sub, desc, tags }) => (
            <div
              key={label}
              className="relative flex flex-col justify-between gap-10 p-8 sm:p-10 lg:p-12"
              style={{
                background: "linear-gradient(160deg, rgba(18,12,24,0.98) 0%, rgba(12,8,18,0.98) 100%)",
              }}
            >
              {/* Prominent decorative number */}
              <span
                className="pointer-events-none absolute right-6 top-4 select-none font-bold leading-none"
                style={{
                  fontSize: "clamp(6rem, 12vw, 10rem)",
                  color: "transparent",
                  WebkitTextStroke: "1.5px rgba(229,67,255,0.18)",
                  letterSpacing: "-0.02em",
                }}
                aria-hidden="true"
              >
                {n}
              </span>

              {/* Top */}
              <div className="relative">
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-neutral-500 mb-3">
                  {sub}
                </p>
                <h3 className="text-2xl font-semibold text-[#f0f0f0] sm:text-3xl leading-snug mb-5">
                  {label}
                </h3>
                <p className="text-base leading-8 text-neutral-400 max-w-sm">{desc}</p>
              </div>

              {/* Bottom */}
              <div className="relative">
                <div
                  className="mb-5 h-px w-full"
                  style={{ background: "rgba(255,255,255,0.06)" }}
                />
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em]"
                      style={{
                        background: "rgba(229,67,255,0.1)",
                        color: "#E543FF",
                        border: "1px solid rgba(229,67,255,0.2)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
