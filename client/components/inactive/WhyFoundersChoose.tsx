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
      <div className="mx-auto max-w-[1400px] px-6 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-16">

        <div className="mb-10 max-w-2xl">
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

        <div className="mx-auto max-w-3xl">
          <div
            className="hidden overflow-hidden rounded-2xl border sm:block"
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

          <div className="grid gap-3 sm:hidden">
            {tableRows.map(({ feature, consulting, saas, digeto }) => (
              <div
                key={feature}
                className="rounded-2xl border p-4"
                style={{
                  borderColor: "rgba(229,67,255,0.14)",
                  background: "rgba(255,255,255,0.02)",
                }}
              >
                <p className="mb-4 text-base font-medium text-neutral-200">{feature}</p>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: "Consulting", value: consulting },
                    { label: "SaaS", value: saas },
                    { label: "Digeto", value: digeto, featured: true },
                  ].map(({ label, value, featured }) => (
                    <div
                      key={label}
                      className="flex min-h-20 flex-col items-center justify-center gap-2 rounded-xl border px-2 py-3"
                      style={{
                        borderColor: featured
                          ? "rgba(229,67,255,0.24)"
                          : "rgba(255,255,255,0.07)",
                        background: featured
                          ? "rgba(229,67,255,0.08)"
                          : "rgba(255,255,255,0.025)",
                      }}
                    >
                      <span
                        className="text-[0.65rem] font-semibold uppercase tracking-[0.08em]"
                        style={{ color: featured ? "#E543FF" : "rgba(255,255,255,0.42)" }}
                      >
                        {label}
                      </span>
                      {value ? <CheckIcon /> : <CrossIcon />}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
