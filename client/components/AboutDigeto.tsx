import Image from "next/image";
import { ShineBorder } from "@/components/ui/shine-border";

const founders = [
  {
    photo: "/assets/images/deepak.png",
    name: "Deepak Peschard",
    role: "Founder & CEO",
    bio: "Global operator. Banker, Founder & VC. 3 continents.",
    linkedin: "https://www.linkedin.com/in/deepakpeschard/",
  },
  {
    photo: "/assets/images/gregor.png",
    name: "Gregor Aschoff",
    role: "Co-Founder & CTO",
    bio: "Technology & ESG strategist. Deep experience scaling platforms.",
    linkedin: "#",
  },
];

export default function AboutDigeto() {
  return (
    <section className="border-t border-[rgba(255,255,255,0.06)]">
      <div className="mx-auto max-w-[1400px] px-6 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-16">

        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-medium tracking-[0.18em] text-neutral-500 uppercase mb-5">
            Founders
          </p>
          <h2 className="text-[2.6rem] font-medium leading-[1.04] tracking-tight text-[#f0f0f0] sm:text-5xl sm:leading-[1.1]">
            Built by operators{" "}
            <span style={{ color: "#E543FF" }}>who&apos;ve done it.</span>
          </h2>
        </div>

        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
          {founders.map(({ photo, name, role, bio, linkedin }) => (
            <div
              key={name}
              className="relative flex flex-col overflow-hidden rounded-[24px] border"
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
                shineColor={[
                  "rgba(229,67,255,0.78)",
                  "rgba(255,92,246,0.92)",
                  "rgba(229,67,255,0.78)",
                ]}
              />

              {/* Photo */}
              <div className="relative h-56 w-full overflow-hidden sm:h-64">
                <Image
                  src={photo}
                  alt={name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent 50%, rgba(10,8,14,0.85) 100%)",
                  }}
                />
              </div>

              {/* Info */}
              <div className="relative flex flex-col gap-1 px-7 py-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="text-base font-semibold text-[#f0f0f0]">{name}</h4>
                    <p
                      className="mt-1 text-sm font-medium uppercase tracking-[0.08em]"
                      style={{ color: "#E543FF" }}
                    >
                      {role}
                    </p>
                  </div>
                  <a
                    href={linkedin}
                    aria-label={`${name} on LinkedIn`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] transition-colors duration-300 ease-out hover:bg-[rgba(229,67,255,0.12)]"
                  >
                    <img
                      src="/assets/icons/linkedin-icon.svg"
                      alt=""
                      className="h-3.5 w-3.5 opacity-60 transition-opacity duration-300 ease-out hover:opacity-100"
                    />
                  </a>
                </div>
                <p className="mt-3 text-base leading-7 text-neutral-500">{bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
