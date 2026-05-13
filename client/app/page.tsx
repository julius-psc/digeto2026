"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import DigetoValue from "@/components/DigetoValue";
import Pricing from "@/components/Pricing";
import WhyNotYou from "@/components/WhyNotYou";
import { StripedPattern } from "@/components/magicui/striped-pattern";
import { BentoGTMCard } from "@/components/BentoGTMCard";
import { BentoGlobeCard } from "@/components/BentoGlobeCard";
import HowItWorks from "@/components/HowItWorks";
import ProductBentoGrid from "@/components/ProductBentoGrid";

const features = [
  {
    name: "AI GTM Engine",
    description: "Centralized intelligence built at speed. ICP definition, lead discovery, enrichment, and multi-channel sequencing, all automated from our high-velocity India hub. The engine never sleeps.",
    className: "col-span-1 h-[620px] sm:h-[680px] lg:h-[760px]",
    background: <BentoGTMCard />,
    blur: false,
    scrim: true,
  },
  {
    name: "Regional Pods",
    description: "Local trust, human-led. Native speakers and embedded networks across EU, APAC, MENA, and Americas. We handle what AI can't: the nuance, the relationship, and the close.",
    className: "col-span-1 h-[620px] sm:h-[680px] lg:h-[760px]",
    background: <BentoGlobeCard />,
    blur: false,
    scrim: true,
  },
];

type Section = "product" | "how-it-works" | "pricing" | "contact" | null;

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section>(null);

  const handleSectionChange = (s: string | null) => {
    setActiveSection(s as Section);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Navbar activeSection={activeSection} onSectionChange={handleSectionChange} />

      {/* Full landing page — shown only when no section is active */}
      {activeSection === null && (
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
              <Hero />
            </div>
          </div>

          <section className="px-8 sm:px-16 py-10 sm:py-14">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                { stat: "100+",             label: "Companies already scaling with Digeto" },
                { stat: "Minimal upfront",  label: "Revenue-first. We grow when you grow." },
                { stat: "4+",              label: "Regions covered: EU, APAC, MENA, Americas" },
                { stat: "Unlimited growth", label: "No cap on pipeline, deals, or markets." },
              ].map((m) => (
                <div
                  key={m.stat}
                  className="rounded-xl px-5 py-5 flex flex-col gap-2 min-w-0 overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, rgba(229,67,255,0.07) 0%, rgba(229,67,255,0.03) 100%)",
                    border: "1px solid rgba(229,67,255,0.18)",
                    boxShadow: "0 0 24px rgba(229,67,255,0.06)",
                  }}
                >
                  <p className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight break-words" style={{ color: "#E543FF" }}>
                    {m.stat}
                  </p>
                  <p className="text-xs sm:text-sm md:text-base text-foreground/60 leading-relaxed">{m.label}</p>
                </div>
              ))}
            </div>
          </section>

          <DigetoValue />

          <section id="product" className="px-8 sm:px-16 pb-10 sm:pb-14">
            <div className="mb-8">
              <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3" style={{ color: "#E543FF" }}>
                The Product
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.08] tracking-tight text-foreground">
                Two layers. One system.
              </h2>
              <p className="mt-3 text-sm sm:text-base lg:text-lg text-foreground/50 leading-relaxed">
                Intelligence at the center. Human execution at the edge.
              </p>
            </div>
            <ProductBentoGrid features={features} />
          </section>

          <HowItWorks />
          <Pricing />
          <WhyNotYou />
        </>
      )}

      {/* Single-section views */}
      {activeSection === "product" && (
        <section className="px-8 sm:px-16 py-10 sm:py-14">
          <div className="mb-8">
            <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3" style={{ color: "#E543FF" }}>
              The Product
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.08] tracking-tight text-foreground">
              Two layers. One system.
            </h2>
            <p className="mt-3 text-sm sm:text-base lg:text-lg text-foreground/50 leading-relaxed">
              Intelligence at the center. Human execution at the edge.
            </p>
          </div>
          <ProductBentoGrid features={features} />
        </section>
      )}

      {activeSection === "how-it-works" && <HowItWorks />}

      {activeSection === "pricing" && <Pricing />}

      {activeSection === "contact" && <WhyNotYou />}

      <Footer />
    </>
  );
}
