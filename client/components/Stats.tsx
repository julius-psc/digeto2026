const stats = [
  { value: "100+", label: "Companies Supported" },
  { value: "2024", label: "Est. Launch Year" },
  { value: "15M+", label: "Funding Facilitated" },
  { value: "30+", label: "Global Markets" },
];

export default function Stats() {
  return (
    <section className="border-t border-[rgba(255,255,255,0.06)]">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map(({ value, label }, i) => (
            <div
              key={label}
              className="relative px-8 py-12 first:pl-0 last:pr-0"
            >
              {/* vertical divider — right side of each cell except the last */}
              {i < stats.length - 1 && (
                <span className="absolute right-0 top-1/2 h-10 w-px -translate-y-1/2 bg-[rgba(255,255,255,0.07)]" />
              )}

              <p
                className="text-4xl font-semibold tracking-tight sm:text-5xl"
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
              <p className="mt-2 text-sm font-medium text-neutral-500">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
