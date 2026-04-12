import { ShineBorder } from "@/components/ui/shine-border";

const members = [
  {
    initials: "DP",
    name: "Deepak Peschard",
    role: "Founder & CEO",
    bio: "Global operator across Founder, VC and Banking",
    linkedin: "https://www.linkedin.com/in/deepakpeschard/",
  },
  {
    initials: "GA",
    name: "Gregor Aschoff",
    role: "Co-Founder & CTO",
    bio: "Technology & ESG strategist, scaling platforms",
    linkedin: "#",
  },
  {
    initials: "KB",
    name: "Khushi Bhartiya",
    role: "Business Manager",
    bio: "Operations & Investor Relations",
    linkedin: "#",
  },
  {
    initials: "AA",
    name: "Anuja A",
    role: "GTM Lead",
    bio: "Market intelligence & GTM Execution",
    linkedin: "#",
  },
];

export default function AboutDigeto() {
  return (
    <section className="border-t border-[rgba(255,255,255,0.06)]">
      <div className="mx-auto max-w-[1400px] px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">

        {/* Header */}
        <div className="max-w-2xl">
          <p className="text-xs font-medium tracking-[0.18em] text-neutral-500 uppercase mb-5">
            The Team
          </p>
          <h2 className="text-[2.6rem] font-medium leading-[1.04] tracking-tight text-[#f0f0f0] sm:text-5xl sm:leading-[1.1]">
            Global expertise.{" "}
            <span style={{ color: "#E543FF" }}>Local execution.</span>
          </h2>
          <p className="mt-5 text-neutral-500 text-sm leading-7">
            Digeto combines an India-based AI hub with international execution pods across 12+ countries, giving founders a capital-efficient way to scale globally.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-8 grid grid-cols-2 gap-0 border-t border-[rgba(255,255,255,0.08)] sm:mt-10 sm:grid-cols-[auto_auto_1fr]">
          <div className="py-5 sm:py-6 sm:pr-10">
            <p
              className="text-[2rem] font-semibold tracking-tight sm:text-4xl"
              style={{ color: "#E543FF" }}
            >
              100+
            </p>
            <p className="mt-3 text-xs uppercase tracking-[0.18em] text-neutral-500">
              Startups supported
            </p>
          </div>
          <div className="border-l border-[rgba(255,255,255,0.08)] py-5 sm:py-6 sm:px-10">
            <p className="text-[2rem] font-semibold tracking-tight text-[#f0f0f0] sm:text-4xl">
              12+
            </p>
            <p className="mt-3 text-xs uppercase tracking-[0.18em] text-neutral-500">
              Countries active
            </p>
          </div>
        </div>

        {/* Team cards */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {members.map(({ initials, name, role, bio, linkedin }) => (
            <div
              key={name}
              className="relative overflow-hidden rounded-[24px] border px-5 py-6"
              style={{
                borderColor: "rgba(229,67,255,0.12)",
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(229,67,255,0.04) 100%)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
              }}
            >
              <ShineBorder
                borderWidth={1.25}
                duration={14}
                shineColor={["rgba(229,67,255,0.78)", "rgba(255,92,246,0.92)", "rgba(229,67,255,0.78)"]}
              />

              <div className="relative flex flex-col items-start">
                {/* Avatar row */}
                <div className="flex w-full items-center justify-between">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-full text-sm font-semibold text-white"
                    style={{
                      background: "linear-gradient(135deg, #a21caf, #E543FF)",
                    }}
                  >
                    {initials}
                  </div>
                  <a
                    href={linkedin}
                    aria-label={`${name} on LinkedIn`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] transition-colors duration-300 ease-out hover:bg-[rgba(229,67,255,0.12)]"
                  >
                    <img
                      src="/assets/icons/linkedin-icon.svg"
                      alt=""
                      className="h-3.5 w-3.5 opacity-60 transition-opacity duration-300 ease-out hover:opacity-100"
                    />
                  </a>
                </div>

                <h4 className="mt-4 text-[0.95rem] font-medium text-[#f0f0f0]">
                  {name}
                </h4>
                <p
                  className="mt-0.5 text-[0.68rem] font-medium uppercase tracking-[0.07em]"
                  style={{ color: "#E543FF" }}
                >
                  {role}
                </p>
                <p className="mt-3 text-xs leading-5 text-neutral-500">{bio}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
