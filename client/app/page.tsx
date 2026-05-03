import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProblemSolver from "@/components/ProblemSolver";
import Pricing from "@/components/Pricing";
import TrustedBy from "@/components/TrustedBy";
import WhyNotYou from "@/components/WhyNotYou";
import Founders from "@/components/Founders";
import { StripedPattern } from "@/components/magicui/striped-pattern";
import { BentoGrid, BentoCard } from "@/components/magicui/bento-grid";
import VideoCard from "@/components/VideoCard";
import { BentoGTMCard } from "@/components/BentoGTMCard";
import { BentoPodsCard } from "@/components/BentoPodsCard";

const STEPS = [
  {
    number: "01",
    title: "Source",
    description: "High-intent leads from our exclusive VC and startup networks.",
  },
  {
    number: "02",
    title: "Scale",
    description: "AI-powered outbound and CRM management at 10x human speed.",
  },
  {
    number: "03",
    title: "Close",
    description: "Local experts on the ground to ink the deal in any language.",
  },
]

const features = [
  {
    className: "col-span-1 sm:col-span-2 h-[56vw] sm:h-[340px] md:h-[420px] lg:h-[480px]",
    background: <VideoCard />,
    blur: false,
    scrim: false,
  },
  {
    name: "AI GTM Engine",
    description: "Centralized Intelligence. Lead gen, ICP definition, and workflow automation handled from our high-speed India hub.",
    href: "#",
    cta: "Learn more",
    className: "col-span-1 h-[480px] sm:h-[520px]",
    background: <BentoGTMCard />,
    blur: false,
    scrim: false,
  },
  {
    name: "Regional Pods",
    description: "Local Trust. Native speakers and local networks in EU, APAC, and GCC. We handle the last mile of the sale.",
    href: "#",
    cta: "Learn more",
    className: "col-span-1 h-[480px] sm:h-[520px]",
    background: <BentoPodsCard />,
    blur: false,
    scrim: false,
  },
];

export default function Home() {
  return (
    <>
      <div className="relative overflow-hidden">
        <StripedPattern className="absolute inset-0 z-0 text-white/[0.04] [mask-image:radial-gradient(600px_circle_at_50%_40%,white,transparent)]" />
        <div className="relative z-10">
          <Navbar />
          <Hero />
        </div>
      </div>

      <ProblemSolver />

      {/* How It Works + Bento */}
      <section className="px-5 sm:px-8 py-8 sm:py-20">
        <div className="mx-auto max-w-4xl">

          {/* Section heading */}
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-2xl md:text-3xl">
              Three steps.{" "}
              <span style={{ color: "#E543FF" }}>Real revenue.</span>
            </h2>
          </div>

          {/* Step cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
            {STEPS.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-white/[0.08] bg-card p-5 flex flex-col gap-3"
              >
                <span
                  className="text-xs font-bold tracking-[0.2em] uppercase"
                  style={{ color: "#E543FF" }}
                >
                  {step.number}
                </span>
                <h3 className="text-base font-bold text-foreground">{step.title}</h3>
                <p className="text-sm text-foreground/50 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Bento visual cards */}
          <BentoGrid className="grid-cols-1 sm:grid-cols-2 auto-rows-auto gap-3">
            {features.map((f, i) => (
              <BentoCard key={i} {...f} />
            ))}
          </BentoGrid>
        </div>
      </section>

      <Pricing />
      <Founders />
      <TrustedBy />
      <WhyNotYou />
      <Footer />
    </>
  );
}
