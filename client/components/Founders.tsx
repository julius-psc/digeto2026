import Image from "next/image"

const founders = [
  {
    name: "Deepak Peschard",
    role: "CEO",
    bio: "Global operator. Banker, Founder & VC. Scaled across 3 continents.",
    photo: "/assets/images/deepak.png",
  },
  {
    name: "Gregor Aschoff",
    role: "CTO",
    bio: "Technology strategist. Expert in scaling platforms and ESG integration.",
    photo: "/assets/images/gregor.png",
  },
]

export default function Founders() {
  return (
    <section className="px-5 sm:px-8 py-16 sm:py-20">
      <div className="text-center mb-8 sm:mb-10">
        <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
          Built by operators,{" "}
          <span style={{ color: "#E543FF" }}>not consultants.</span>
        </h2>
        <p className="mt-2 text-sm text-foreground/50">
          The people behind Digeto have done what you&apos;re trying to do, across continents, industries, and growth stages.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
        {founders.map((f) => (
          <div
            key={f.name}
            className="rounded-2xl border border-white/[0.08] bg-card overflow-hidden"
          >
            {/* Square photo */}
            <div className="relative aspect-square w-full">
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
