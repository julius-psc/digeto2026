"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const pillars = [
  {
    label: "AI GTM Engine",
    sub: "India",
    desc: "Centralized intelligence and execution. Case processing, CRM, market intelligence, ICP definition, lead generation, workflow automation, global data.",
    tags: ["Scale", "Speed", "Cost Efficiency"],
    Illustration: AiEngineIllustration,
  },
  {
    label: "Regional Execution Pods",
    sub: "On the Ground",
    desc: "Human-led conversion in your target markets. Local trust, local language, local networks. We close deals on the ground.",
    tags: ["Trust", "Conversion", "Revenue"],
    Illustration: ExecutionPodsIllustration,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease },
  },
};

function SolutionImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="relative h-48 w-full max-w-[270px] justify-self-center overflow-hidden sm:h-52 md:justify-self-end lg:h-56" aria-hidden="true">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1280px) 270px, (min-width: 1024px) 26vw, 78vw"
        className="object-contain"
      />
    </div>
  );
}

function AiEngineIllustration() {
  return (
    <SolutionImage
      src="/assets/images/gtm-engine.png"
      alt="AI GTM engine visualization"
    />
  );
}

function ExecutionPodsIllustration() {
  return (
    <SolutionImage
      src="/assets/images/hub-india.png"
      alt="Regional execution pods visualization"
    />
  );
}

export default function WhatWeDo() {
  return (
    <section id="solution" className="border-t border-[rgba(255,255,255,0.06)]">
      <div className="mx-auto max-w-[1240px] px-6 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-16">

        <motion.div
          className="mb-10 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
        >
          <p className="text-sm font-medium tracking-[0.18em] text-neutral-500 uppercase mb-5">
            Our Solution
          </p>
          <h2 className="text-[2.6rem] font-medium leading-[1.04] tracking-tight text-[#f0f0f0] sm:text-5xl sm:leading-[1.1]">
            AI scale.{" "}
            <span style={{ color: "#E543FF" }}>Human conversion.</span>
          </h2>
          <p className="mt-5 text-neutral-500 text-base leading-8">
            One unified system. Two layers. We don&apos;t advise, we execute. Your global sales infrastructure, fully built and operated for you.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto grid max-w-[860px] grid-cols-1 gap-px overflow-hidden rounded-[28px] border border-[rgba(229,67,255,0.14)]"
          style={{
            background: "rgba(229,67,255,0.14)",
            boxShadow: "0 0 80px rgba(229,67,255,0.08)",
          }}
        >
          {pillars.map(({ label, sub, desc, tags, Illustration }) => (
            <motion.div
              key={label}
              variants={itemVariants}
              className="relative flex flex-col justify-between gap-7 p-6 sm:p-7 lg:p-8"
              style={{
                background: "linear-gradient(160deg, rgba(18,12,24,0.98) 0%, rgba(12,8,18,0.98) 100%)",
              }}
            >
              <div className="relative grid gap-6 md:grid-cols-[minmax(0,1fr)_270px] md:items-center">
                <div className="max-w-2xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-neutral-500 mb-3">
                    {sub}
                  </p>
                  <h3 className="text-2xl font-semibold text-[#f0f0f0] sm:text-3xl leading-snug mb-5">
                    {label}
                  </h3>
                  <p className="text-base leading-8 text-neutral-400 max-w-sm">{desc}</p>
                </div>
                <Illustration />
              </div>

              <div className="relative">
                <div
                  className="mb-5 h-px w-full"
                  style={{ background: "rgba(255,255,255,0.06)" }}
                />
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em]"
                      style={{
                        background: "rgba(229,67,255,0.1)",
                        color: "#E543FF",
                        border: "1px solid rgba(229,67,255,0.2)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
