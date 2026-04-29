"use client";

const members = [
  {
    initials: "DP",
    name: "Deepak Peschard",
    role: "Founder & CEO",
    bio: "Global operator across Founder, VC and Banking",
  },
  {
    initials: "GA",
    name: "Gregor Aschoff",
    role: "Co-Founder & CTO",
    bio: "Technology & ESG strategist, scaling platforms",
  },
  {
    initials: "KB",
    name: "Khushi Bhartiya",
    role: "Business Manager",
    bio: "Operations & Investor Relations",
  },
  {
    initials: "AA",
    name: "Anuja A",
    role: "GTM Lead",
    bio: "Market intelligence & GTM Execution",
  },
];

export default function Team() {
  return (
    <section className="border-t border-[rgba(255,255,255,0.06)]">
      <div className="mx-auto max-w-[1400px] px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
        <div className="mb-14 max-w-2xl">
          <p className="text-xs font-medium tracking-[0.18em] text-neutral-500 uppercase mb-5">
            The Team
          </p>
          <h2 className="text-[2.6rem] font-medium leading-[1.04] tracking-tight text-[#f0f0f0] sm:text-5xl sm:leading-[1.1]">
            Global expertise.{" "}
            <span style={{ color: "#E543FF" }}>Local execution.</span>
          </h2>
          <p className="mt-5 text-neutral-500 text-sm leading-7">
            A cross-border team built to execute. Operators, technologists, and market experts working as one.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {members.map(({ initials, name, role, bio }) => (
            <div
              key={name}
              className="rounded-2xl border px-5 py-6 text-center transition-colors duration-300"
              style={{
                borderColor: "rgba(229,67,255,0.08)",
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(229,67,255,0.03) 100%)",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLDivElement).style.borderColor =
                  "rgba(229,67,255,0.3)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLDivElement).style.borderColor =
                  "rgba(229,67,255,0.08)")
              }
            >
              <div
                className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full text-lg font-semibold text-white"
                style={{
                  background:
                    "linear-gradient(135deg, #a21caf, #E543FF)",
                }}
              >
                {initials}
              </div>
              <h4 className="text-[0.95rem] font-medium text-[#f0f0f0]">
                {name}
              </h4>
              <p
                className="mt-1 text-[0.7rem] font-medium uppercase tracking-[0.06em]"
                style={{ color: "#E543FF" }}
              >
                {role}
              </p>
              <p className="mt-3 text-xs leading-5 text-neutral-500">{bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
