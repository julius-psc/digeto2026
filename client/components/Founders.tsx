import Image from "next/image"
import { ShineBorder } from "@/components/ui/shine-border"

const ACCENT = "#E543FF"

const founders = [
  {
    name: "Deepak Peschard",
    role: "CEO",
    bio: "Global operator. Banker, Founder, and VC. Scaled companies across 3 continents.",
    photo: "/assets/images/deepak.png",
  },
  {
    name: "Gregor Aschoff",
    role: "CTO",
    bio: "Engineering leader. Platform builder with deep expertise in scaling and ESG integration.",
    photo: "/assets/images/gregor.png",
  },
]

export default function Founders() {
  return (
    <section id="founders" className="px-5 sm:px-8 py-16 sm:py-20">
      <div className="text-center mb-8 sm:mb-10">
        <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
          Built by operators,{" "}
          <span style={{ color: ACCENT }}>not consultants.</span>
        </h2>
        <p className="mt-2 text-sm text-foreground/50">
          We have closed the deals, navigated the markets, and built the teams you are now trying to build.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
        {founders.map((f) => (
          <div
            key={f.name}
            className="relative rounded-2xl bg-card overflow-hidden"
          >
            <ShineBorder
              shineColor={[ACCENT, "#9333ea"]}
              borderWidth={1}
              duration={14}
            />
            {/* Photo — fixed height on mobile, square on desktop */}
            <div className="relative h-[200px] sm:h-auto sm:aspect-square w-full">
              <Image
                src={f.photo}
                alt={f.name}
                fill
                className="object-cover grayscale opacity-75"
              />
            </div>
            {/* Info */}
            <div className="p-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-foreground/40 mb-1">
                {f.role}
              </p>
              <h3 className="text-base font-bold text-foreground mb-1.5">
                {f.name}
              </h3>
              <p className="text-sm text-foreground/55 leading-relaxed">
                {f.bio}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
