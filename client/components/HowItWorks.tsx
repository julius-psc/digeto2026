const steps = [
  {
    n: "01",
    title: "Originate",
    desc: "We source and qualify opportunities through digeto.io, our VC partner network, startup hubs, and incubators.",
  },
  {
    n: "02",
    title: "Execute",
    desc: "Our AI GTM engine runs outbound, CRM, and lead generation at scale from our India hub.",
  },
  {
    n: "03",
    title: "Convert",
    desc: "Regional execution pods close deals on the ground. In market, in language, in context.",
  },
];

export default function HowItWorks() {
  return (
    <section className="border-t border-[rgba(255,255,255,0.06)]">
      <div className="mx-auto max-w-[1400px] px-6 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-16">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-medium tracking-[0.18em] text-neutral-500 uppercase mb-5">
            How It Works
          </p>
          <h2 className="text-[2.6rem] font-medium leading-[1.04] tracking-tight text-[#f0f0f0] sm:text-5xl sm:leading-[1.1]">
            Three steps.{" "}
            <span style={{ color: "#E543FF" }}>Real revenue.</span>
          </h2>
        </div>

        <div className="divide-y divide-[rgba(255,255,255,0.06)] border-t border-[rgba(255,255,255,0.06)]">
          {steps.map(({ n, title, desc }) => (
            <div
              key={title}
              className="grid grid-cols-[3.5rem_1fr] gap-x-6 py-8 sm:grid-cols-[5rem_1fr] sm:gap-x-8 lg:grid-cols-[6rem_22rem_1fr] lg:gap-x-10 lg:py-10"
            >
              <span
                className="text-2xl font-semibold tabular-nums pt-0.5"
                style={{ color: "#E543FF" }}
              >
                {n}
              </span>
              <h3 className="text-lg font-semibold text-[#f0f0f0] sm:text-xl leading-snug lg:pt-0.5">
                {title}
              </h3>
              <p className="col-start-2 mt-2 text-base leading-8 text-neutral-500 lg:col-start-3 lg:mt-0">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
