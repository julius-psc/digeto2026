const tiers = [
  {
    key: "TAM",
    label: "Total Addressable Market",
    value: "$300B+",
    desc: "Global spending on sales, GTM consulting, and growth infrastructure",
    fill: "100%",
  },
  {
    key: "SAM",
    label: "Serviceable Addressable Market",
    value: "$80B+",
    desc: "Startups & scale-ups actively investing in international expansion",
    fill: "62%",
  },
  {
    key: "SOM",
    label: "Serviceable Obtainable Market",
    value: "$5B+",
    desc: "Impact-driven companies seeking capital-efficient global expansion",
    fill: "28%",
  },
];

export default function Market() {
  return (
    <section id="market" className="border-t border-[rgba(255,255,255,0.06)]">
      <div className="mx-auto max-w-[1400px] px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
        <div className="mb-14 max-w-2xl">
          <p className="text-xs font-medium tracking-[0.18em] text-neutral-500 uppercase mb-5">
            Market Size
          </p>
          <h2 className="text-[2.6rem] font-medium leading-[1.04] tracking-tight text-[#f0f0f0] sm:text-5xl sm:leading-[1.1]">
            A <span style={{ color: "#E543FF" }}>$300B+</span> market
            <br />with no infrastructure.
          </h2>
          <p className="mt-5 text-neutral-500 text-sm leading-7">
            Global expansion spending is massive — yet there is no capital-efficient infrastructure layer for companies to scale across borders.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {tiers.map(({ key, label, value, desc, fill }) => (
            <div key={key} className="flex flex-col gap-1.5">
              {/* The bar itself is the container */}
              <div
                className="flex items-center justify-between overflow-hidden rounded-2xl px-6 py-5"
                style={{
                  width: fill,
                  minWidth: "min(100%, 220px)",
                  background:
                    "linear-gradient(90deg, rgba(229,67,255,0.18) 0%, rgba(229,67,255,0.08) 100%)",
                  border: "1px solid rgba(229,67,255,0.22)",
                  boxShadow: "inset 0 1px 0 rgba(229,67,255,0.12)",
                }}
              >
                <div className="flex items-baseline gap-4">
                  <p
                    className="text-[1.7rem] font-semibold tracking-tight leading-none sm:text-[2.1rem]"
                    style={{ color: "#E543FF" }}
                  >
                    {value}
                  </p>
                  <p className="hidden text-xs text-neutral-400 sm:block">
                    {label}
                  </p>
                </div>
                <span
                  className="shrink-0 rounded-lg px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-white"
                  style={{ background: "rgba(229,67,255,0.25)" }}
                >
                  {key}
                </span>
              </div>

              {/* Description below — visible only on mobile (hidden on sm+ where it's in the bar) */}
              <p className="pl-1 text-xs leading-5 text-neutral-500 sm:hidden">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
