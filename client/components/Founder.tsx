const founderPoints = [
  "Ex-HSBC global executive with a cross-border operator lens.",
  "Venture-backed perspective on what investors and partners actually respond to.",
  "Built Digeto to make international expansion execution accessible, not elite.",
];

export default function Founder() {
  return (
    <section className="border-t border-[rgba(255,255,255,0.06)] overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-10 py-24 lg:py-32">
        <div className="mb-10 max-w-2xl lg:mb-12">
          <p className="text-xs font-medium tracking-[0.18em] text-neutral-500 uppercase mb-5">
            Founded by
          </p>
          <h2 className="text-4xl font-medium tracking-tight text-[#f0f0f0] sm:text-5xl leading-[1.02]">
            Deepak Peschard,{" "}
            <span style={{ color: "#E543FF" }}>built for ambitious founders.</span>
          </h2>
          <p className="mt-5 text-neutral-500 text-sm leading-7">
            Digeto reflects the kind of GTM support most early and growth-stage companies actually need: commercially sharp, globally connected, and relentlessly execution-first.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-stretch">
          <div
            className="relative overflow-hidden rounded-[28px] border p-8 sm:p-10 lg:p-12"
            style={{
              borderColor: "rgba(229,67,255,0.16)",
              background:
                "radial-gradient(circle at top right, rgba(229,67,255,0.16) 0%, rgba(229,67,255,0.05) 26%, rgba(255,255,255,0.03) 68%, rgba(255,255,255,0.02) 100%)",
              boxShadow:
                "0 24px 80px rgba(0,0,0,0.22), inset 0 1px 0 rgba(255,255,255,0.05)",
            }}
          >
            <div className="pointer-events-none absolute -left-10 top-10 h-32 w-32 rounded-full bg-[rgba(229,67,255,0.14)] blur-3xl" />
            <div className="relative">
              <p className="text-xs font-medium tracking-[0.18em] uppercase text-neutral-500">
                Founder Profile
              </p>
              <h3 className="mt-5 text-5xl font-medium tracking-tight text-[#f0f0f0] sm:text-6xl lg:text-7xl leading-[0.92]">
                Deepak
                <br />
                Peschard
              </h3>
              <p className="mt-8 max-w-md text-base leading-8 text-neutral-300">
                Ex-HSBC global executive, venture capitalist, and founder with more than{" "}
                <span className="text-[#f0f0f0]">15 years</span> of international expansion experience across markets, capital, and commercial growth.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div
              className="rounded-[28px] border p-7 sm:p-8"
              style={{
                borderColor: "rgba(255,255,255,0.08)",
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.035) 0%, rgba(255,255,255,0.015) 100%)",
              }}
            >
              <p className="text-xs font-medium tracking-[0.18em] text-neutral-500 uppercase">
                Why It Matters
              </p>
              <div className="mt-6 space-y-4">
                {founderPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <span
                      className="mt-2 h-2 w-2 shrink-0 rounded-full"
                      style={{ background: "#E543FF" }}
                    />
                    <p className="text-sm leading-7 text-neutral-300">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-[1fr_auto]">
              <div
                className="rounded-[28px] border p-7 sm:p-8"
                style={{
                  borderColor: "rgba(255,255,255,0.08)",
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(229,67,255,0.04) 100%)",
                }}
              >
                <p className="text-xs font-medium tracking-[0.18em] text-neutral-500 uppercase">
                  Operator Thesis
                </p>
                <p className="mt-4 text-lg leading-8 text-[#f0f0f0]">
                  Founders should not need a giant team, expensive consultants, or years of trial-and-error to earn global traction.
                </p>
              </div>

              <a
                href="#"
                className="inline-flex min-h-full items-center justify-center rounded-[28px] border px-7 py-7 text-sm font-medium text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_16px_40px_rgba(229,67,255,0.18)]"
                style={{
                  borderColor: "rgba(229,67,255,0.28)",
                  background:
                    "linear-gradient(180deg, rgba(229,67,255,0.12) 0%, rgba(180,30,230,0.08) 100%)",
                }}
              >
                Deepak Peschard on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
