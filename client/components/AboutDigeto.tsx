import { ShineBorder } from "@/components/ui/shine-border";

export default function AboutDigeto() {
  return (
    <section className="border-t border-[rgba(255,255,255,0.06)]">
      <div className="mx-auto max-w-[1400px] px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.05fr)_380px] lg:gap-16">
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-[0.18em] text-neutral-500 uppercase mb-5">
              About Digeto
            </p>
            <h2 className="text-[2.6rem] font-medium leading-[1.04] tracking-tight text-[#f0f0f0] sm:text-5xl sm:leading-[1.1]">
              Built across borders.{" "}
              <span style={{ color: "#E543FF" }}>Designed for execution.</span>
            </h2>
            <p className="mt-5 text-neutral-500 text-sm leading-7">
              Digeto combines an India-based execution engine with international market access, giving founders a leaner way to expand globally.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-0 border-t border-[rgba(255,255,255,0.08)] sm:mt-10 sm:grid-cols-2">
              <div className="py-5 sm:py-6 sm:pr-8">
                <p
                  className="text-[2rem] font-semibold tracking-tight sm:text-4xl"
                  style={{ color: "#E543FF" }}
                >
                  100+
                </p>
                <p className="mt-3 text-xs uppercase tracking-[0.18em] text-neutral-500">
                  Companies supported
                </p>
              </div>

              <div className="border-t border-[rgba(255,255,255,0.08)] py-5 sm:border-t-0 sm:border-l sm:border-[rgba(255,255,255,0.08)] sm:py-6 sm:pl-8">
                <p className="text-[2rem] font-semibold tracking-tight text-[#f0f0f0] sm:text-4xl">
                  Europe + India
                </p>
                <p className="mt-3 text-xs uppercase tracking-[0.18em] text-neutral-500">
                  Dual operating base
                </p>
              </div>
            </div>
          </div>

          <div
            className="relative overflow-hidden rounded-[24px] border px-5 py-6 sm:rounded-[28px] sm:px-8 sm:py-9"
            style={{
              borderColor: "rgba(229,67,255,0.12)",
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(229,67,255,0.04) 100%)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
            }}
          >
            <ShineBorder
              borderWidth={1.25}
              duration={14}
              shineColor={["rgba(229,67,255,0.78)", "rgba(255,92,246,0.92)", "rgba(229,67,255,0.78)"]}
            />
            <div className="flex flex-col items-start">
              <div className="h-16 w-16 overflow-hidden rounded-full border border-[rgba(229,67,255,0.26)] sm:h-20 sm:w-20">
                <img
                  src="/assets/images/deepak.png"
                  alt="Deepak Peschard"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="mt-5 sm:mt-6">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  <h3 className="text-xl font-medium leading-tight text-[#f0f0f0] sm:text-2xl">
                    Deepak Peschard
                  </h3>
                  <span className="hidden h-5 w-px bg-[rgba(255,255,255,0.12)] sm:block" />
                  <p className="text-sm font-medium text-neutral-400">
                    Founder @ Digeto
                  </p>
                  <a
                    href="#"
                    aria-label="Deepak Peschard on LinkedIn"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] transition-colors duration-300 ease-out hover:bg-[rgba(229,67,255,0.12)]"
                  >
                    <img
                      src="/assets/icons/linkedin-icon.svg"
                      alt=""
                      className="h-4 w-4 opacity-80 transition-opacity duration-300 ease-out hover:opacity-100"
                    />
                  </a>
                </div>

                <p className="mt-4 text-sm leading-7 text-neutral-400 sm:mt-5">
                  Ex-HSBC global executive, venture capitalist, and founder with more than 15 years of international expansion experience across markets, capital, and commercial growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
