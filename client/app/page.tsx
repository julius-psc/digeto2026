import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import DigetoValue from "@/components/DigetoValue";
import Pricing from "@/components/Pricing";
import WhyNotYou from "@/components/WhyNotYou";
import Founders from "@/components/Founders";
import { StripedPattern } from "@/components/magicui/striped-pattern";
import { BentoGTMCard } from "@/components/BentoGTMCard";
import { BentoGlobeCard } from "@/components/BentoGlobeCard";
import HowItWorks from "@/components/HowItWorks";
import ProductBentoGrid from "@/components/ProductBentoGrid";

const features = [
  {
    name: "AI GTM Engine",
    description: "Centralized intelligence built at speed. ICP definition, lead discovery, enrichment, and multi-channel sequencing, all automated from our high-velocity India hub. The engine never sleeps.",
    className: "col-span-1 h-[340px] sm:h-[520px]",
    background: <BentoGTMCard />,
    blur: false,
    scrim: true,
  },
  {
    name: "Regional Pods",
    description: "Local trust, human-led. Native speakers and embedded networks across EU, APAC, MENA, and Americas. We handle what AI can't: the nuance, the relationship, and the close.",
    className: "col-span-1 h-[540px] sm:h-[520px]",
    background: <BentoGlobeCard />,
    blur: false,
    scrim: true,
  },
];

export default function Home() {
  return (
    <>
      <div className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background: "radial-gradient(ellipse 80% 60% at 60% 50%, rgba(229,67,255,0.08) 0%, transparent 70%)",
            maskImage: "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
          }}
        />
        <StripedPattern
          className="absolute inset-0 z-0 text-white/[0.07]"
          style={{
            maskImage:
              "radial-gradient(800px ellipse at 60% 50%, black, transparent), linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
          }}
        />
        <div className="relative z-10">
          <Navbar />
          <Hero />
        </div>
      </div>

      {/* Metrics */}
      <section className="px-8 sm:px-16 py-8 sm:py-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { stat: "100+",             label: "Companies already scaling with Digeto" },
            { stat: "Minimal upfront.", label: "Revenue-first. We grow when you grow." },
            { stat: "4+",              label: "Regions covered: EU, APAC, MENA, Americas" },
            { stat: "Unlimited growth", label: "No cap on pipeline, deals, or markets." },
          ].map((m) => (
            <div
              key={m.stat}
              className="rounded-xl bg-card border border-white/[0.07] px-4 py-4 flex flex-col gap-1.5 min-w-0 overflow-hidden"
            >
              <p className="text-lg sm:text-2xl md:text-3xl font-bold tracking-tight leading-tight break-words" style={{ color: "#E543FF" }}>
                {m.stat}
              </p>
              <p className="text-xs text-foreground/50 leading-relaxed">{m.label}</p>
            </div>
          ))}
        </div>
      </section>

      <DigetoValue />

      {/* Product section */}
      <section id="product" className="px-8 sm:px-16 pb-10 sm:pb-14">
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

        <ProductBentoGrid features={features} />
      </section>

      <HowItWorks />

      <Pricing />
      <Founders />
      <WhyNotYou />
      <Footer />
    </>
  );
}
