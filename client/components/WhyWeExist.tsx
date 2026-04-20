"use client";

import { motion } from "framer-motion";
import { Buildings, UsersFour, Desktop, Globe } from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";

type Problem = {
  n: string;
  title: string;
  desc: string;
  Icon: Icon;
};

const problems: Problem[] = [
  {
    n: "01",
    title: "No sales infrastructure",
    desc: "Building a regional sales team takes 18 months and significant capital. Most companies simply can't afford the time.",
    Icon: Buildings,
  },
  {
    n: "02",
    title: "Consultants don't execute",
    desc: "You get a strategy deck. Not a pipeline. Not a single conversation started on your behalf.",
    Icon: UsersFour,
  },
  {
    n: "03",
    title: "SaaS tools don't close",
    desc: "Automation gets leads. Someone still needs to convert them. Tools hand you data, not revenue.",
    Icon: Desktop,
  },
  {
    n: "04",
    title: "Going global is too expensive",
    desc: "Until now. The cost of international expansion has kept world-class products stuck in their home market.",
    Icon: Globe,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export default function WhyWeExist() {
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
            The Problem
          </p>
          <h2 className="text-[2.6rem] font-medium leading-[1.04] tracking-tight text-[#f0f0f0] sm:text-5xl sm:leading-[1.1]">
            Great innovations stay local.{" "}
            <span style={{ color: "#E543FF" }}>Not anymore.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {problems.map(({ n, title, desc, Icon: ProblemIcon }, i) => (
            <motion.div
              key={title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group relative flex flex-col gap-5 overflow-hidden rounded-2xl border p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1"
              style={{
                borderColor: "rgba(229,67,255,0.14)",
                background:
                  "linear-gradient(160deg, rgba(255,255,255,0.03) 0%, rgba(229,67,255,0.05) 100%)",
                boxShadow: "inset 0 1px 0 rgba(229,67,255,0.08)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(229,67,255,0.28)";
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "inset 0 1px 0 rgba(229,67,255,0.12), 0 12px 40px rgba(229,67,255,0.1)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(229,67,255,0.14)";
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "inset 0 1px 0 rgba(229,67,255,0.08)";
              }}
            >
              {/* Decorative background number */}
              <span
                className="pointer-events-none absolute right-4 top-2 select-none font-bold leading-none"
                style={{
                  fontSize: "clamp(5rem, 10vw, 8rem)",
                  color: "transparent",
                  WebkitTextStroke: "1.5px rgba(229,67,255,0.1)",
                  letterSpacing: "-0.02em",
                }}
                aria-hidden="true"
              >
                {n}
              </span>

              {/* Icon box */}
              <div
                className="relative inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: "rgba(229,67,255,0.12)",
                  border: "1px solid rgba(229,67,255,0.22)",
                  boxShadow: "0 0 16px rgba(229,67,255,0.1)",
                }}
              >
                <ProblemIcon size={24} weight="duotone" color="#E543FF" />
              </div>

              {/* Text */}
              <div className="relative flex flex-col gap-2">
                <h3 className="text-base font-semibold text-[#f0f0f0] leading-snug">{title}</h3>
                <p className="text-base leading-7 text-neutral-500">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
