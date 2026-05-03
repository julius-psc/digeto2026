import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import DigetoValue from "@/components/DigetoValue";
import Pricing from "@/components/Pricing";
import WhyNotYou from "@/components/WhyNotYou";
import Founders from "@/components/Founders";
import { StripedPattern } from "@/components/magicui/striped-pattern";
import { BentoGrid, BentoCard } from "@/components/magicui/bento-grid";
import { BentoGTMCard } from "@/components/BentoGTMCard";
import { BentoGlobeCard } from "@/components/BentoGlobeCard";
import HowItWorks from "@/components/HowItWorks";

const features = [
  {
    name: "AI GTM Engine",
    description: "ICP definition, lead discovery, enrichment, and multi-channel sequencing. Built and run from our Bangalore operations center.",
    href: "#",
    cta: "Learn more",
    className: "col-span-1 h-[480px] sm:h-[520px]",
    background: <BentoGTMCard />,
    blur: false,
    scrim: false,
  },
  {
    name: "Regional Pods",
    description: "Native speakers and local networks across EU, APAC, MENA, and India. We own the last mile.",
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

      {/* Metrics */}
      <section className="px-5 sm:px-8 py-14 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { stat: "14d",  label: "Average time to market entry" },
              { stat: "0€",   label: "Fixed cost until revenue comes in" },
              { stat: "4+",   label: "Regions covered: EU, APAC, MENA, India" },
              { stat: "∞",    label: "No cap on deals, markets, or pipeline." },
            ].map((m) => (
              <div
                key={m.stat}
                className="rounded-2xl bg-card border border-white/[0.07] px-5 py-6 flex flex-col gap-2"
              >
                <p className="text-3xl sm:text-4xl font-bold tracking-tight" style={{ color: "#E543FF" }}>
                  {m.stat}
                </p>
                <p className="text-xs sm:text-sm text-foreground/50 leading-relaxed">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DigetoValue />

      {/* Product section */}
      <section id="product" className="px-5 sm:px-8 pb-14 sm:pb-24">
        <div className="mx-auto max-w-4xl">

          <div className="mb-8">
            <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3" style={{ color: "#E543FF" }}>
              The Product
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-[1.08] tracking-tight text-foreground">
              Two layers. One system.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-foreground/50 leading-relaxed max-w-sm">
              Intelligence at the center. Human execution at the edge.
            </p>
          </div>

          <BentoGrid className="grid-cols-1 sm:grid-cols-2 auto-rows-auto gap-3">
            {features.map((f, i) => (
              <BentoCard key={i} {...f} />
            ))}
          </BentoGrid>
        </div>
      </section>

      <HowItWorks />

      <Pricing />
      <Founders />
<WhyNotYou />
      <Footer />
    </>
  );
}
