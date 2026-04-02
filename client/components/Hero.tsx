import { IconArrowRight } from "@tabler/icons-react";
import VideoPreview from "./VideoPreview";
import { LinesShader } from "./LinesShader";

export default function Hero() {
  return (
    <section className="relative isolate bg-transparent">
      <LinesShader />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 sm:px-8 lg:px-10">
        <div className="max-w-3xl pt-14 text-left sm:pt-20 lg:pt-24">
          <h1 className="text-[2.9rem] font-medium tracking-tight text-[#f0f0f0] sm:text-6xl lg:text-7xl leading-[0.98]">
            Scale Your{" "}
            <span style={{ color: "#E543FF" }}>Impact</span>
            <br />
            Beyond Borders.
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-7 sm:text-base" style={{ color: "#a8a8b0" }}>
            Your global GTM engine : built for founders who are ready to go big.
            Your mission scales. We make sure the world hears it.
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
              Start your expansion
              <IconArrowRight
                size={18}
                stroke={2}
                className="transition-transform duration-300 ease-out group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="#product"
              className="inline-flex items-center justify-center rounded-xl border px-6 py-3 text-sm font-medium transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_14px_30px_rgba(255,255,255,0.06)]"
              style={{
                borderColor: "rgba(255,255,255,0.12)",
                color: "#b0b0ba",
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.04) 100%)",
              }}
            >
              See how it works
            </a>
          </div>
        </div>

        <div className="mt-10 pb-16 sm:mt-12 sm:pb-20 lg:mt-14 lg:pb-24">
          <div className="mx-auto max-w-4xl">
            <VideoPreview />
          </div>
        </div>
      </div>
    </section>
  );
}
