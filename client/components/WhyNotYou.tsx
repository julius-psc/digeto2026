import Image from "next/image";
import { IconBrandLinkedin } from "@tabler/icons-react";
import { ShineBorder } from "@/components/ui/shine-border";
import ContactForm from "@/components/ContactForm";

const ACCENT = "#E543FF";

const founders = [
  {
    name: "Deepak Peschard",
    role: "Founder & CEO",
    bio: "Global operator. Banker, Founder, and VC. Scaled companies across 4 continents.",
    photo: "/assets/images/deepak.png",
    linkedin: "https://www.linkedin.com/in/deepak-peschard/",
  },
  {
    name: "Gregor Aschoff",
    role: "Co-Founder & Interim CTO",
    bio: "Engineering leader. Platform builder with deep expertise in scaling and ESG integration.",
    photo: "/assets/images/gregor.png",
    linkedin: "https://www.linkedin.com/in/gregor-aschoff-gaicd-27a7b11/",
  },
];

export default function WhyNotYou() {
  return (
    <section id="contact" className="px-8 py-12 sm:px-16 sm:py-18">
      <div className="grid gap-10 py-4 sm:gap-12 sm:py-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start lg:gap-14">
        {/* Left column — founders */}
        <div>
          <p className="mb-3 text-xs md:text-sm font-bold uppercase tracking-[0.2em]" style={{ color: ACCENT }}>
            Built by operators
          </p>
          <h2 className="text-3xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
            Built by operators,{" "}
            <span style={{ color: ACCENT }}>not consultants.</span>
          </h2>
          <p className="mt-4 max-w-xl text-sm font-medium leading-relaxed text-foreground/60 md:text-base lg:text-lg">
            We have closed the deals, navigated the markets, and built the teams you are now trying to build.
          </p>

          <div className="mt-6 flex flex-col gap-3">
            {founders.map((f) => (
              <div
                key={f.name}
                className="relative flex items-center gap-4 overflow-hidden rounded-xl bg-card px-5 py-5 sm:gap-5"
              >
                <ShineBorder
                  shineColor={[ACCENT, "#9333ea"]}
                  borderWidth={1}
                  duration={14}
                />
                <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-xl sm:h-16 sm:w-16">
                  <Image
                    src={f.photo}
                    alt={f.name}
                    fill
                    className="object-cover grayscale opacity-75"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="mb-0.5 text-[11px] md:text-xs font-bold uppercase tracking-[0.18em] text-foreground/55">
                    {f.role}
                  </p>
                  <h3 className="mb-1 text-base md:text-lg font-bold text-foreground">
                    {f.name}
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed text-foreground/65">
                    {f.bio}
                  </p>
                </div>
                <a
                  href={f.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${f.name} on LinkedIn`}
                  className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-transparent text-[#E543FF] transition-all duration-200 ease-out hover:-translate-y-px hover:border-[rgba(229,67,255,0.3)] hover:text-[#ff8cff]"
                >
                  <IconBrandLinkedin size={15} stroke={1.8} />
                </a>
              </div>
            ))}
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
