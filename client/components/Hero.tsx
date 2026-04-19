"use client";

import { IconArrowRight } from "@tabler/icons-react";
import { Globe as MagicGlobe } from "@/components/ui/globe";

export default function Hero() {
  return (
    <section className="relative isolate bg-transparent overflow-hidden">
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-10 pt-10 pb-12 sm:pt-14 sm:pb-16 lg:grid-cols-[minmax(0,1fr)_minmax(380px,0.8fr)] lg:gap-8 lg:pt-16 lg:pb-20">

          {/* Text */}
          <div className="max-w-2xl">
            {/* Tag */}
            <div className="mb-6 inline-flex items-center gap-2">
              <span
                className="inline-block h-4 w-0.5 rounded-full shrink-0"
                style={{ background: "#E543FF" }}
              />
              <span
                className="text-sm font-medium uppercase tracking-[0.14em]"
                style={{ color: "#a8a8b0" }}
              >
                The Infrastructure Layer for Global Sales
              </span>
            </div>

            <h1 className="text-[2.9rem] font-medium tracking-tight text-[#f0f0f0] sm:text-6xl lg:text-7xl leading-[0.98]">
              You build what matters.
              <br />
              <span style={{ color: "#E543FF" }}>We sell it everywhere.</span>
            </h1>

            <p
              className="mt-5 max-w-xl text-base leading-8"
              style={{ color: "#a8a8b0" }}
            >
              Stop hiring. Stop waiting. Start selling internationally in weeks.
              We help tech businesses create global impact by scaling their sales across borders.
            </p>

            <div className="flex flex-col items-stretch gap-3 pt-8 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href="https://calendly.com/contact-digeto/30min"
                className="group inline-flex items-center justify-center gap-2 rounded-xl border px-6 py-3 text-sm font-medium text-white shadow-[0_10px_30px_rgba(229,67,255,0.18)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_16px_40px_rgba(229,67,255,0.28)]"
                style={{
                  borderColor: "rgba(229,67,255,0.35)",
                  background:
                    "linear-gradient(180deg, rgba(229,67,255,0.18) 0%, rgba(180,30,230,0.14) 100%)",
                }}
              >
                Book a Free Call
                <IconArrowRight
                  size={18}
                  stroke={2}
                  className="transition-transform duration-300 ease-out group-hover:translate-x-0.5"
                />
              </a>
              <a
                href="#solution"
                className="inline-flex items-center justify-center rounded-xl border px-6 py-3 text-sm font-medium transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.02]"
                style={{
                  borderColor: "rgba(255,255,255,0.12)",
                  color: "#b0b0ba",
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.04) 100%)",
                }}
              >
                See How It Works
              </a>
            </div>

            <p className="mt-8 text-sm tracking-wide text-neutral-500">
              Trusted by{" "}
              <span className="text-neutral-300">100+ companies</span> across{" "}
              <span className="text-neutral-300">12+ countries</span>
            </p>
          </div>

          {/* Globe */}
          <div className="relative mx-auto aspect-square w-full max-w-[360px] sm:max-w-[460px] lg:max-w-none">
            <div
              className="pointer-events-none absolute inset-0 rounded-full blur-[80px]"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(229,67,255,0.15) 0%, transparent 65%)",
              }}
            />
            <MagicGlobe
              className="inset-0 max-w-none"
              config={{
                devicePixelRatio: 2,
                width: 600 * 2,
                height: 600 * 2,
                phi: 0,
                theta: 0.2,
                dark: 0.9,
                diffuse: 1,
                mapSamples: 16000,
                mapBrightness: 1.25,
                mapBaseBrightness: 0,
                baseColor: [229 / 255, 67 / 255, 1],
                markerColor: [229 / 255, 67 / 255, 1],
                glowColor: [229 / 255, 67 / 255, 1],
                markers: [],
                arcs: [],
                arcColor: [229 / 255, 67 / 255, 1],
                arcWidth: 0.5,
                arcHeight: 0.3,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
