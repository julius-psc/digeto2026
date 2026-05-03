import Image from "next/image"
import { ShineBorder } from "@/components/ui/shine-border"
import { IconBrandLinkedin } from "@tabler/icons-react"

const ACCENT = "#E543FF"

const founders = [
  {
    name: "Deepak Peschard",
    role: "CEO",
    bio: "Global operator. Banker, Founder, and VC. Scaled companies across 3 continents.",
    photo: "/assets/images/deepak.png",
    linkedin: "https://www.linkedin.com/in/deepak-peschard/",
  },
  {
    name: "Gregor Aschoff",
    role: "CTO",
    bio: "Engineering leader. Platform builder with deep expertise in scaling and ESG integration.",
    photo: "/assets/images/gregor.png",
    linkedin: "https://www.linkedin.com/in/gregor-aschoff-gaicd-27a7b11/",
  },
]

export default function Founders() {
  return (
    <section id="founders" className="px-8 sm:px-16 py-10 sm:py-14">
      <div className="mb-8">
        <h2 className="text-2xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-3xl md:text-4xl">
          Built by operators,{" "}
          <span style={{ color: ACCENT }}>not consultants.</span>
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-foreground/50 sm:text-base">
          We have closed the deals, navigated the markets, and built the teams you are now trying to build.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {founders.map((f) => (
          <div
            key={f.name}
            className="relative flex items-center gap-4 overflow-hidden rounded-xl bg-card px-5 py-5 sm:gap-5 sm:px-6"
          >
            <ShineBorder
              shineColor={[ACCENT, "#9333ea"]}
              borderWidth={1}
              duration={14}
            />
            <div className="relative h-18 w-18 flex-shrink-0 overflow-hidden rounded-xl sm:h-20 sm:w-20">
              <Image
                src={f.photo}
                alt={f.name}
                fill
                className="object-cover grayscale opacity-75"
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.18em] text-foreground/40 sm:text-xs">
                {f.role}
              </p>
              <h3 className="mb-1.5 text-base font-bold text-foreground sm:text-lg">
                {f.name}
              </h3>
              <p className="text-sm leading-relaxed text-foreground/55 sm:text-[15px]">
                {f.bio}
              </p>
            </div>
            <a
              href={f.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label={`${f.name} on LinkedIn`}
              className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-foreground/40 transition-all duration-200 ease-out hover:-translate-y-px hover:border-[rgba(229,67,255,0.3)] hover:text-[#E543FF]"
            >
              <IconBrandLinkedin size={15} stroke={1.8} />
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
