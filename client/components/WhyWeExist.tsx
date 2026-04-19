const problems = [
  {
    n: "01",
    title: "No sales infrastructure",
    desc: "Building a regional sales team takes 18 months and significant capital. Most companies simply can't afford the time.",
  },
  {
    n: "02",
    title: "Consultants don't execute",
    desc: "You get a strategy deck. Not a pipeline. Not a single conversation started on your behalf.",
  },
  {
    n: "03",
    title: "SaaS tools don't close",
    desc: "Automation gets leads. Someone still needs to convert them. Tools hand you data, not revenue.",
  },
  {
    n: "04",
    title: "Going global is too expensive",
    desc: "Until now. The cost of international expansion has kept world-class products stuck in their home market.",
  },
];

export default function WhyWeExist() {
  return (
    <section className="border-t border-[rgba(255,255,255,0.06)]">
      <div className="mx-auto max-w-[1400px] px-6 pt-16 pb-20 sm:px-8 sm:pb-24 lg:px-10 lg:pt-20 lg:pb-32">

        <div className="mb-16 max-w-2xl">
          <p className="text-sm font-medium tracking-[0.18em] text-neutral-500 uppercase mb-5">
            The Problem
          </p>
          <h2 className="text-[2.6rem] font-medium leading-[1.04] tracking-tight text-[#f0f0f0] sm:text-5xl sm:leading-[1.1]">
            Great innovations stay local.{" "}
            <span style={{ color: "#E543FF" }}>Not anymore.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-x-16 lg:gap-y-10">
          {problems.map(({ n, title, desc }) => (
            <div key={title} className="flex flex-col">
              <span
                className="mb-4 text-[1.75rem] font-bold leading-none tabular-nums"
                style={{ color: "rgba(229,67,255,0.35)" }}
              >
                {n}
              </span>
              <h3 className="text-base font-semibold text-[#f0f0f0] mb-2 leading-snug">
                {title}
              </h3>
              <p className="text-base leading-7 text-neutral-500">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
