"use client";

import { motion } from "framer-motion";
import { GearSix, Handshake, MagnifyingGlass } from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";
import { IconArrowRight } from "@tabler/icons-react";

type Step = {
  title: string;
  desc: string;
  Icon: Icon;
};

const steps: Step[] = [
  {
    title: "Originate",
    desc: "We source and qualify opportunities through our VC partner network, startup hubs, and incubators.",
    Icon: MagnifyingGlass,
  },
  {
    title: "Execute",
    desc: "Our AI GTM engine runs outbound, CRM, and lead generation at scale from our India hub.",
    Icon: GearSix,
  },
  {
    title: "Convert",
    desc: "Regional execution pods close deals on the ground. In market, in language, in context.",
    Icon: Handshake,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export default function HowItWorks() {
  return (
    <section className="border-t border-[rgba(255,255,255,0.06)]">
      <div className="mx-auto max-w-[1400px] px-6 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-16">
        <motion.div
          className="mb-10 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        >
          <p className="text-sm font-medium tracking-[0.18em] text-neutral-500 uppercase mb-5">
            How It Works
          </p>
          <h2 className="text-[2.6rem] font-medium leading-[1.04] tracking-tight text-[#f0f0f0] sm:text-5xl sm:leading-[1.1]">
            Three steps.{" "}
            <span style={{ color: "#E543FF" }}>Real revenue.</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-4 lg:flex-row lg:items-stretch">
          {steps.map(({ title, desc, Icon: StepIcon }, i) => (
            <div key={title} className="contents">
              <motion.div
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group relative flex flex-1 flex-col gap-6 overflow-hidden rounded-2xl border p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1.5"
                style={{
                  borderColor: "rgba(229,67,255,0.14)",
                  background:
                    "linear-gradient(160deg, rgba(255,255,255,0.03) 0%, rgba(229,67,255,0.05) 100%)",
                  boxShadow: "inset 0 1px 0 rgba(229,67,255,0.08)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(229,67,255,0.3)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "inset 0 1px 0 rgba(229,67,255,0.12), 0 16px 48px rgba(229,67,255,0.12)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(229,67,255,0.14)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "inset 0 1px 0 rgba(229,67,255,0.08)";
                }}
              >
                <div className="relative flex items-center">
                  <div
                    className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: "rgba(229,67,255,0.12)",
                      border: "1px solid rgba(229,67,255,0.22)",
                      boxShadow: "0 0 20px rgba(229,67,255,0.12)",
                    }}
                  >
                    <StepIcon size={28} weight="duotone" color="#E543FF" />
                  </div>
                </div>

                <div className="relative flex flex-col gap-2.5">
                  <h3 className="text-xl font-semibold text-[#f0f0f0] leading-snug">{title}</h3>
                  <p className="text-base leading-7 text-neutral-500">{desc}</p>
                </div>
              </motion.div>

              {/* Connecting arrow between cards — desktop only */}
              {i < steps.length - 1 && (
                <motion.div
                  className="hidden lg:flex items-center justify-center shrink-0"
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.12 + 0.3 }}
                >
                  <div
                    className="flex items-center justify-center rounded-full"
                    style={{
                      width: 36,
                      height: 36,
                      background: "rgba(229,67,255,0.08)",
                      border: "1px solid rgba(229,67,255,0.16)",
                    }}
                  >
                    <IconArrowRight size={18} stroke={2} style={{ color: "rgba(229,67,255,0.6)" }} />
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
