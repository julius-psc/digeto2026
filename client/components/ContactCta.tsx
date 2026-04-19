import { IconArrowRight } from "@tabler/icons-react";

export default function ContactCta() {
  return (
    <section id="contact" className="border-t border-[rgba(255,255,255,0.06)]">
      <div className="mx-auto max-w-[1400px] px-6 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-16">
        <div className="max-w-2xl">
          <p className="text-sm font-medium tracking-[0.18em] text-neutral-500 uppercase mb-5">
            Get Started
          </p>
          <h2 className="text-[2.6rem] font-medium leading-[1.04] tracking-tight text-[#f0f0f0] sm:text-5xl sm:leading-[1.1]">
            Your next market{" "}
            <span style={{ color: "#E543FF" }}>is waiting.</span>
          </h2>
          <p className="mt-4 text-lg font-medium text-[#d0d0d8]">
            Stop planning. Start scaling.
          </p>
          <p className="mt-3 text-base leading-8 text-neutral-500">
            Every tech company we scale globally creates jobs, drives adoption, and accelerates impact.
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
              href="#pricing"
              className="inline-flex items-center justify-center rounded-xl border px-6 py-3 text-sm font-medium transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.02]"
              style={{
                borderColor: "rgba(255,255,255,0.12)",
                color: "#b0b0ba",
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.04) 100%)",
              }}
            >
              View Plans
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
