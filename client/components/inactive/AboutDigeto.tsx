"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShineBorder } from "@/components/ui/shine-border";
import {
  IconBuildingBank,
  IconTrendingUp,
  IconWorld,
  IconCpu,
  IconStack2,
  IconLeaf,
  IconArrowRight,
} from "@tabler/icons-react";

const founders = [
  {
    photo: "/assets/images/deepak.png",
    name: "Deepak Peschard",
    role: "Founder & CEO",
    bio: "20+ years across banking, venture capital, and international growth on 3 continents.",
    linkedin: "https://www.linkedin.com/in/deepak-peschard/",
    photoPosition: "center center",
    tags: [
      { label: "Banking", Icon: IconBuildingBank },
      { label: "Venture Capital", Icon: IconTrendingUp },
      { label: "Global Growth", Icon: IconWorld },
    ],
  },
  {
    photo: "/assets/images/gregor.png",
    name: "Gregor Aschoff",
    role: "Co-Founder & CTO",
    bio: "Technology strategist with deep expertise in scaling platforms and ESG-aligned systems.",
    linkedin: "https://www.linkedin.com/in/gregor-aschoff-gaicd-27a7b11/",
    photoPosition: "center 10%",
    tags: [
      { label: "Technology", Icon: IconCpu },
      { label: "Platforms", Icon: IconStack2 },
      { label: "ESG", Icon: IconLeaf },
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export default function AboutDigeto() {
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
            Founders
          </p>
          <h2 className="text-[2.6rem] font-medium leading-[1.04] tracking-tight text-[#f0f0f0] sm:text-5xl sm:leading-[1.1]">
            Built by operators{" "}
            <span style={{ color: "#E543FF" }}>who&apos;ve done it.</span>
          </h2>
        </motion.div>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
          {founders.map(({ photo, name, role, bio, linkedin, photoPosition, tags }, i) => (
            <motion.div
              key={name}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative flex flex-col overflow-hidden rounded-[28px]"
              style={{
                background: "rgba(11, 9, 16, 0.98)",
                boxShadow: "0 0 50px rgba(229,67,255,0.05), inset 0 1px 0 rgba(255,255,255,0.04)",
              }}
            >
              <ShineBorder
                borderWidth={1.25}
                duration={14}
                shineColor={[
                  "rgba(229,67,255,0.78)",
                  "rgba(255,92,246,0.92)",
                  "rgba(229,67,255,0.78)",
                ]}
              />

              <div className="flex flex-col gap-5 p-7">
                {/* Top: circular photo + name/role */}
                <div className="flex items-center gap-4">
                  <div
                    className="relative h-[60px] w-[60px] flex-shrink-0 overflow-hidden rounded-full"
                    style={{ boxShadow: "0 0 0 2px rgba(229,67,255,0.3), 0 0 16px rgba(229,67,255,0.12)" }}
                  >
                    <Image
                      src={photo}
                      alt={name}
                      fill
                      className="object-cover grayscale"
                      style={{ objectPosition: photoPosition }}
                      sizes="60px"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold leading-tight text-[#f0f0f0]">{name}</h4>
                    <p
                      className="mt-1 text-[11px] font-semibold uppercase tracking-[0.14em]"
                      style={{ color: "#E543FF" }}
                    >
                      {role}
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px w-full" style={{ background: "rgba(229,67,255,0.14)" }} />

                {/* Bio */}
                <p className="text-sm leading-[1.7] text-neutral-500">{bio}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {tags.map(({ label, Icon }) => (
                    <span
                      key={label}
                      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium"
                      style={{
                        border: "1px solid rgba(229,67,255,0.18)",
                        background: "rgba(229,67,255,0.05)",
                        color: "#a0a0ae",
                      }}
                    >
                      <Icon size={11} style={{ color: "#E543FF" }} strokeWidth={2.2} />
                      {label}
                    </span>
                  ))}
                </div>

                {/* Divider */}
                <div className="h-px w-full" style={{ background: "rgba(229,67,255,0.14)" }} />

                {/* LinkedIn row */}
                <a
                  href={linkedin}
                  aria-label={`${name} on LinkedIn`}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between"
                >
                  <div className="flex items-center gap-2.5">
                    <img
                      src="/assets/icons/linkedin-icon.svg"
                      alt=""
                      className="h-4 w-4 opacity-50"
                    />
                    <span className="text-sm text-[#c0c0cc] transition-colors duration-200 group-hover:text-white">
                      View LinkedIn Profile
                    </span>
                  </div>
                  <IconArrowRight
                    size={15}
                    style={{ color: "#E543FF" }}
                    strokeWidth={2.2}
                    className="transition-transform duration-300 ease-out group-hover:translate-x-1"
                  />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
