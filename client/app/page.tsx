import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import DigetoValue from "@/components/DigetoValue";
import Pricing from "@/components/Pricing";
import TrustedBy from "@/components/TrustedBy";
import WhyNotYou from "@/components/WhyNotYou";
import Founders from "@/components/Founders";
import { StripedPattern } from "@/components/magicui/striped-pattern";
import { BentoGrid, BentoCard } from "@/components/magicui/bento-grid";
import { BentoGTMCard } from "@/components/BentoGTMCard";
import { BentoGlobeCard } from "@/components/BentoGlobeCard";

const features = [
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
    description: "Local Trust. Native speakers and local networks in EU, APAC, GCC, and India. We handle the last mile of the sale.",
    href: "#",
    cta: "Learn more",
    className: "col-span-1 h-[480px] sm:h-[520px]",
    background: <BentoGlobeCard />,
    blur: false,
    scrim: true,
  },
];

export default function Home() {
  return (
    <>
      <div className="relative overflow-hidden">
        {/* Radial glow — sits behind everything */}
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background: "radial-gradient(ellipse 80% 60% at 60% 50%, rgba(229,67,255,0.08) 0%, transparent 70%)",
          }}
        />
        <StripedPattern className="absolute inset-0 z-0 text-white/[0.07] [mask-image:radial-gradient(800px_ellipse_at_60%_50%,white,transparent)]" />
        <div className="relative z-10">
          <Navbar />
          <Hero />
        </div>
      </div>

      <DigetoValue />

      {/* Platform section */}
      <section className="px-5 sm:px-8 pb-14 sm:pb-24">
        <div className="mx-auto max-w-4xl">

          <div className="mb-8">
            <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3" style={{ color: "#E543FF" }}>
              The platform
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-[1.08] tracking-tight text-foreground">
              Two layers. One system.
            </h2>
          </div>

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
