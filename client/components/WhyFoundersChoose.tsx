const tableRows = [
  { feature: "Strategy", consulting: true, saas: false, digeto: true },
  { feature: "Execution", consulting: false, saas: false, digeto: true },
  { feature: "Local presence", consulting: false, saas: false, digeto: true },
  { feature: "Revenue accountability", consulting: false, saas: false, digeto: true },
  { feature: "Cost efficient", consulting: false, saas: true, digeto: true },
];

function CheckIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4 mx-auto" aria-hidden="true">
      <path
        d="M3 8l3.5 3.5L13 4.5"
        stroke="#E543FF"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4 mx-auto" aria-hidden="true">
      <path
        d="M5 5l6 6M11 5l-6 6"
        stroke="rgba(255,255,255,0.2)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function WhyFoundersChoose() {
  return (
    <section className="border-t border-[rgba(255,255,255,0.06)]">
      <div className="mx-auto max-w-[1400px] px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">

        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-medium tracking-[0.18em] text-neutral-500 uppercase mb-5">
            Why Digeto
          </p>
          <h2 className="text-[2.6rem] font-medium leading-[1.04] tracking-tight text-[#f0f0f0] sm:text-5xl sm:leading-[1.1]">
            Not advice.{" "}
            <span style={{ color: "#E543FF" }}>Execution.</span>
          </h2>
          <p className="mt-5 text-neutral-500 text-base leading-8">
            AI-powered GTM hub combined with regional last-mile execution. A category no one else has built.
          </p>
          <p className="mt-4 text-base leading-8 text-[#d0d0d8]">
            <span style={{ color: "#E543FF" }}>AI-powered GTM hub</span>
            {" "}+{" "}
            <span style={{ color: "#E543FF" }}>Regional last-mile execution</span>
            {" "}={" "}
            Predictable global revenue
          </p>
        </div>

        {/* Centered comparison table */}
        <div className="mx-auto max-w-3xl">
          <div
            className="overflow-hidden rounded-2xl border"
            style={{ borderColor: "rgba(229,67,255,0.14)" }}
          >
            <table className="w-full text-sm">
              <thead>
                <tr
                  style={{
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                    background: "rgba(229,67,255,0.04)",
                  }}
                >
                  <th className="px-6 py-5 text-left text-sm font-medium uppercase tracking-[0.12em] text-neutral-500 w-[38%]">
                    Feature
                  </th>
                  <th className="px-4 py-5 text-center text-sm font-medium uppercase tracking-[0.1em] text-neutral-500">
                    Traditional Consulting
                  </th>
                  <th className="px-4 py-5 text-center text-sm font-medium uppercase tracking-[0.1em] text-neutral-500">
                    GTM SaaS Tools
                  </th>
                  <th
                    className="px-4 py-5 text-center text-sm font-semibold uppercase tracking-[0.12em]"
                    style={{ color: "#E543FF" }}
                  >
                    Digeto
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[rgba(255,255,255,0.04)]">
                {tableRows.map(({ feature, consulting, saas, digeto }) => (
                  <tr
                    key={feature}
                    className="transition-colors hover:bg-[rgba(229,67,255,0.02)]"
                  >
                    <td className="px-6 py-4 text-neutral-300 text-base font-medium">
                      {feature}
                    </td>
                    <td className="px-4 py-4 text-center">
                      {consulting ? <CheckIcon /> : <CrossIcon />}
                    </td>
                    <td className="px-4 py-4 text-center">
                      {saas ? <CheckIcon /> : <CrossIcon />}
                    </td>
                    <td className="px-4 py-4 text-center">
                      {digeto ? <CheckIcon /> : <CrossIcon />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
