import { IconArrowRight } from "@tabler/icons-react";

import { ShineBorder } from "@/components/ui/shine-border";

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 4.25C2.48122 4.25 1.25 5.48122 1.25 7V17C1.25 18.5188 2.48122 19.75 4 19.75H20C21.5188 19.75 22.75 18.5188 22.75 17V7C22.75 5.48122 21.5188 4.25 20 4.25H4ZM7.4301 8.38558C7.09076 8.14804 6.62311 8.23057 6.38558 8.5699C6.14804 8.90924 6.23057 9.37689 6.5699 9.61442L11.5699 13.1144C11.8281 13.2952 12.1719 13.2952 12.4301 13.1144L17.4301 9.61442C17.7694 9.37689 17.852 8.90924 17.6144 8.5699C17.3769 8.23057 16.9092 8.14804 16.5699 8.38558L12 11.5845L7.4301 8.38558Z"
        fill="currentColor"
      />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        d="M9.5 14.5L3 21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.00007 9.48528L14.1925 18.6777L15.8895 16.9806L15.4974 13.1944L21.0065 8.5211L15.1568 2.67141L10.4834 8.18034L6.69713 7.78823L5.00007 9.48528Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ContactCta() {
  return (
    <section id="contact" className="border-t border-[rgba(255,255,255,0.06)]">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-10 py-24 lg:py-32">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(360px,480px)] lg:gap-16">
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-[0.18em] text-neutral-500 uppercase mb-5">
              Contact
            </p>
            <h2 className="text-4xl font-medium tracking-tight text-[#f0f0f0] sm:text-5xl leading-[1.1]">
              Ready to scale <span style={{ color: "#E543FF" }}>beyond borders?</span>
            </h2>
            <p className="mt-5 text-neutral-500 text-sm leading-7">
              Let&apos;s talk. Share your vision and we&apos;ll outline your fastest path to global traction.
            </p>

            <div className="mt-10 space-y-6 border-t border-[rgba(255,255,255,0.08)] pt-6">
              <a
                href="mailto:contact@digeto.io"
                className="grid grid-cols-[2rem_1fr] items-center gap-4 text-neutral-400 transition-colors duration-300 ease-out hover:text-[#f0f0f0]"
              >
                <span className="flex h-8 w-8 items-center justify-center text-[#7b7b84]">
                  <MailIcon />
                </span>
                <span className="text-base font-medium">
                  contact@digeto.io
                </span>
              </a>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Station+F%2C+75013+Paris%2C+France"
                target="_blank"
                rel="noreferrer"
                className="grid grid-cols-[2rem_1fr] items-center gap-4 border-t border-[rgba(255,255,255,0.08)] pt-6 text-neutral-400 transition-colors duration-300 ease-out hover:text-[#f0f0f0]"
              >
                <span className="flex h-8 w-8 items-center justify-center text-[#7b7b84]">
                  <MapPinIcon />
                </span>
                <span className="text-base font-medium leading-7">
                  Station F, 75013 Paris, France
                </span>
              </a>

              <a
                href="https://www.linkedin.com/company/digeto/posts/?feedView=all"
                target="_blank"
                rel="noreferrer"
                className="grid grid-cols-[2rem_1fr] items-center gap-4 border-t border-[rgba(255,255,255,0.08)] pt-6 text-neutral-400 transition-colors duration-300 ease-out hover:text-[#f0f0f0]"
              >
                <span className="flex h-8 w-8 items-center justify-center">
                  <img
                    src="/assets/icons/linkedin-icon.svg"
                    alt=""
                    className="h-5 w-5 opacity-55 grayscale brightness-150"
                  />
                </span>
                <span className="text-base font-medium">
                  Digeto
                </span>
              </a>
            </div>
          </div>

          <div
            className="relative overflow-hidden rounded-[30px] border px-7 py-8 sm:px-8"
            style={{
              borderColor: "rgba(229,67,255,0.14)",
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

            <form className="relative space-y-5">
              <div>
                <label
                  htmlFor="contact-name"
                  className="text-xs uppercase tracking-[0.18em] text-neutral-500"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Your name"
                  className="mt-3 h-12 w-full rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] px-4 text-sm text-[#f0f0f0] outline-none transition-colors placeholder:text-neutral-600 focus:border-[rgba(229,67,255,0.35)]"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="text-xs uppercase tracking-[0.18em] text-neutral-500"
                >
                  Email Address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="you@company.com"
                  className="mt-3 h-12 w-full rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] px-4 text-sm text-[#f0f0f0] outline-none transition-colors placeholder:text-neutral-600 focus:border-[rgba(229,67,255,0.35)]"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-inquiry"
                  className="text-xs uppercase tracking-[0.18em] text-neutral-500"
                >
                  Inquiry Details
                </label>
                <textarea
                  id="contact-inquiry"
                  placeholder="Tell us about your target markets..."
                  rows={5}
                  className="mt-3 w-full rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] px-4 py-3 text-sm leading-7 text-[#f0f0f0] outline-none transition-colors placeholder:text-neutral-600 focus:border-[rgba(229,67,255,0.35)]"
                />
              </div>

              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-4 text-sm font-medium text-white transition-all duration-300 ease-out"
                style={{
                  border: "1px solid rgba(229,67,255,0.35)",
                  background:
                    "linear-gradient(180deg, rgba(229,67,255,0.18) 0%, rgba(180,30,230,0.14) 100%)",
                  boxShadow: "0 10px 30px rgba(229,67,255,0.18)",
                }}
              >
                Initiate Consultation
                <IconArrowRight
                  size={18}
                  stroke={2.1}
                  className="transition-transform duration-300 ease-out group-hover:translate-x-0.5"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
