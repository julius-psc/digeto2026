const stats = [
  { value: "100+", label: "Startups Scaled" },
  { value: "12+", label: "Countries" },
  { value: "300+", label: "Impact Investors" },
  { value: "30+", label: "Jobs Created" },
];

export default function Stats() {
  return (
    <section className="border-t border-[rgba(255,255,255,0.06)]">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map(({ value, label }, i) => (
            <div
              key={label}
              className="relative px-4 py-10 sm:px-8 sm:py-12 first:pl-0 last:pr-0"
            >
              {/* vertical divider — right side of each cell except the last */}
              {i < stats.length - 1 && i !== 1 && (
                <span className="absolute right-0 top-1/2 h-10 w-px -translate-y-1/2 bg-[rgba(255,255,255,0.07)]" />
              )}

              <p
                className="text-[2rem] font-semibold tracking-tight sm:text-5xl"
                style={{
                  background:
                    "linear-gradient(90deg, #e8e8ef 0%, #b87ee8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {value}
              </p>
              <p className="mt-2 text-xs font-medium text-neutral-500 sm:text-sm">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
