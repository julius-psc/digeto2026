const tractionItems = [
  { value: "100+", desc: "Startups supported in fundraising & expansion" },
  { value: "12+", desc: "Countries of operation" },
  { value: "300+", desc: "Impact investors in network" },
  { value: "30+", desc: "Jobs created globally" },
  { value: "10", desc: "Strategic ecosystem partnerships" },
];

export default function Traction() {
  return (
    <section className="border-t border-[rgba(255,255,255,0.06)]">
      <div className="mx-auto max-w-[1400px] px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
        <div className="mb-14 max-w-2xl">
          <p className="text-xs font-medium tracking-[0.18em] text-neutral-500 uppercase mb-5">
            Our Impact
          </p>
          <h2 className="text-[2.6rem] font-medium leading-[1.04] tracking-tight text-[#f0f0f0] sm:text-5xl sm:leading-[1.1]">
            Real traction.{" "}
            <span style={{ color: "#E543FF" }}>Since Feb 2024.</span>
          </h2>
          <p className="mt-5 text-neutral-500 text-sm leading-7">
            From day one we have been building real infrastructure, real partnerships, and real results for the companies we work with.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl sm:grid-cols-3 lg:grid-cols-5">
          {tractionItems.map(({ value, desc }) => (
            <div
              key={value}
              className="flex flex-col items-center px-5 py-10 text-center"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.015) 100%)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <p
                className="text-[2.2rem] font-semibold tracking-tight sm:text-[2.6rem]"
                style={{
                  background: "linear-gradient(90deg, #e8e8ef 0%, #b87ee8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {value}
              </p>
              <p className="mt-3 text-xs leading-5 text-neutral-500">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
