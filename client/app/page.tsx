import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProblemSolver from "@/components/ProblemSolver";
import Pricing from "@/components/Pricing";
import TrustedBy from "@/components/TrustedBy";
import WhyNotYou from "@/components/WhyNotYou";
import { StripedPattern } from "@/components/magicui/striped-pattern";
import { BentoGrid, BentoCard } from "@/components/magicui/bento-grid";
import VideoCard from "@/components/VideoCard";
import { BentoGTMCard } from "@/components/BentoGTMCard";
import { BentoPodsCard } from "@/components/BentoPodsCard";

const features = [
  {
    name: "AI scale. Human conversion.",
    description: "We don't advise. We execute.",
    href: "#",
    cta: "Learn more",
    className: "col-span-1 sm:col-span-2 h-[56vw] sm:h-[340px] md:h-[420px] lg:h-[480px]",
    background: <VideoCard />,
    light: true,
    blur: false,
    scrim: false,
  },
  {
    name: "AI GTM Engine",
    description: "Lead gen, CRM, outbound — fully automated from our India hub.",
    href: "#",
    cta: "Learn more",
    className: "col-span-1 h-[380px] sm:h-[400px]",
    background: <BentoGTMCard />,
    blur: false,
    scrim: false,
  },
  {
    name: "Regional Execution Pods",
    description: "Local networks. Local language. Deals closed on the ground.",
    href: "#",
    cta: "Learn more",
    className: "col-span-1 h-[380px] sm:h-[400px]",
    background: <BentoPodsCard />,
    blur: false,
    scrim: false,
  },
];

export default function Home() {
  return (
    <>
      <div className="relative overflow-hidden">
        <StripedPattern className="absolute inset-0 z-0 text-violet-400/50 [mask-image:radial-gradient(600px_circle_at_50%_40%,white,transparent)]" />
        <div className="relative z-10">
          <Navbar />
          <Hero />
        </div>
      </div>

      <ProblemSolver />

      {/* Bento section */}
      <section className="px-4 py-8 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="text-[1.7rem] font-bold leading-[1.08] tracking-tight text-foreground sm:text-[2rem] md:text-[2.4rem]">
              Everything you need to <span style={{ color: "#E543FF" }}>sell globally.</span>
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base font-medium text-foreground/60 leading-relaxed">
              Two systems. One outcome: revenue.
            </p>
          </div>
          <BentoGrid className="mt-6 sm:mt-8 grid-cols-1 sm:grid-cols-2 auto-rows-auto gap-3">
            {features.map((f, i) => (
              <BentoCard key={i} {...f} />
            ))}
          </BentoGrid>
        </div>
      </section>

      <Pricing />
      <TrustedBy />
      <WhyNotYou />
      <Footer />
    </>
  );
}
