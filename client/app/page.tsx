"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import DigetoValue from "@/components/DigetoValue";
import Pricing from "@/components/Pricing";
import WhyNotYou from "@/components/WhyNotYou";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { BentoGTMCard } from "@/components/BentoGTMCard";
import { BentoGlobeCard } from "@/components/BentoGlobeCard";
import HowItWorks from "@/components/HowItWorks";
import ProductBentoGrid from "@/components/ProductBentoGrid";

const features = [
  {
    name: "AI GTM Engine",
    description: "Centralized intelligence built at speed. ICP definition, lead discovery, enrichment, and multi-channel sequencing, all automated from our high-velocity India hub. The engine never sleeps.",
    className: "col-span-1 h-[500px] sm:h-[500px] lg:h-[540px]",
    background: <BentoGTMCard />,
    blur: false,
    scrim: true,
  },
  {
    name: "Regional Pods",
    description: "Local trust, human-led. Native speakers and embedded networks across EU, APAC, MENA, and Americas. We handle what AI can't: the nuance, the relationship, and the close.",
    className: "col-span-1 h-[500px] sm:h-[500px] lg:h-[540px]",
    background: <BentoGlobeCard />,
    blur: false,
    scrim: true,
  },
];

type Section = "product" | "how-it-works" | "pricing" | "contact" | null;

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section>(null);

  // Activate section from query param (e.g. /?section=pricing)
  useEffect(() => {
    const section = new URLSearchParams(window.location.search).get("section");
    if (section) {
      setActiveSection(section as Section);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  const handleSectionChange = (s: string | null) => {
    setActiveSection(s as Section);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Full landing page — shown only when no section is active */}
      {activeSection === null && (
        /* Single wrapper so sticky navbar works across the full page */
        <div className="relative">
          {/* Flickering grid capped to navbar + hero height only */}
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-[700px] z-0 overflow-hidden"
            style={{
              maskImage: "radial-gradient(ellipse 70% 90% at 50% 35%, black 30%, transparent 100%)",
            }}
          >
            <FlickeringGrid
              className="absolute inset-0"
              squareSize={3}
              gridGap={8}
              color="#E543FF"
              maxOpacity={0.28}
              flickerChance={0.18}
            />
          </div>

          <div className="relative z-10">
            <Navbar activeSection={activeSection} onSectionChange={handleSectionChange} />
            <Hero />

            <section className="px-8 sm:px-16 py-10 sm:py-14" style={{ background: "#0A0A0A" }}>
              <div className="grid grid-cols-2 gap-y-8 gap-x-4 md:flex md:flex-row md:items-center md:justify-center md:gap-0 md:divide-x md:divide-white/[0.10]">
                {[
                  { stat: "100+",             label: "Companies already scaling with Digeto" },
                  { stat: "Minimal upfront",  label: "Revenue-first. We grow when you grow." },
                  { stat: "4+",              label: "Regions covered: EU, APAC, MENA, Americas" },
                  { stat: "Unlimited growth", label: "No cap on pipeline, deals, or markets." },
                ].map((m, i) => (
                  <div
                    key={m.stat}
                    className={`flex flex-col gap-1.5 text-center ${i > 0 ? "md:pl-12" : ""} ${i < 3 ? "md:pr-12" : ""}`}
                  >
                    <p className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight" style={{ color: "#E543FF" }}>
                      {m.stat}
                    </p>
                    <p className="text-sm sm:text-base text-white/50">{m.label}</p>
                  </div>
                ))}
              </div>
            </section>

            <DigetoValue />

            <section id="product" className="px-8 sm:px-16 py-10 sm:py-14" style={{ background: "#0A0A0A" }}>
              <div className="mb-8">
                <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3" style={{ color: "#E543FF" }}>
                  The Product
                </p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.08] tracking-tight text-white">
                  Two layers. One system.
                </h2>
                <p className="mt-3 text-sm sm:text-base lg:text-lg text-white/50 leading-relaxed">
                  Intelligence at the center. Human execution at the edge.
                </p>
              </div>
              <ProductBentoGrid features={features} />
            </section>

            <HowItWorks />
            <Pricing />
            <WhyNotYou />
          </div>
        </div>
      )}

      {/* Navbar for single-section views */}
      {activeSection !== null && (
        <Navbar activeSection={activeSection} onSectionChange={handleSectionChange} />
      )}

      {/* Single-section views */}
      {activeSection === "product" && (
        <section className="px-8 sm:px-16 py-10 sm:py-14" style={{ background: "#0A0A0A" }}>
          <div className="mb-8">
            <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3" style={{ color: "#E543FF" }}>
              The Product
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.08] tracking-tight text-white">
              Two layers. One system.
            </h2>
            <p className="mt-3 text-sm sm:text-base lg:text-lg text-white/50 leading-relaxed">
              Intelligence at the center. Human execution at the edge.
            </p>
          </div>
          <ProductBentoGrid features={features} />
        </section>
      )}

      {activeSection === "how-it-works" && <HowItWorks />}

      {activeSection === "pricing" && <Pricing />}


      <Footer />
    </>
  );
}
