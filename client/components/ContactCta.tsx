"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { IconArrowRight } from "@tabler/icons-react";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];
const purple = "#E543FF";

function RadarLogoVisual({ compact = false }: { compact?: boolean }) {
  const rings = [42, 72, 102, 132, 162, 192];

  return (
    <div
      className={[
        "relative items-center justify-center overflow-hidden",
        compact ? "mt-12 flex h-56 lg:hidden" : "hidden h-[390px] w-full max-w-[540px] lg:flex",
      ].join(" ")}
      aria-hidden="true"
    >
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 520 390" fill="none">
        <defs>
          <radialGradient id={compact ? "radar-glow-mobile" : "radar-glow"} cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(260 195) rotate(90) scale(132 188)">
            <stop stopColor={purple} stopOpacity="0.24" />
            <stop offset="1" stopColor={purple} stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="520" height="390" fill={`url(#${compact ? "radar-glow-mobile" : "radar-glow"})`} />
        {rings.map((radius, i) => (
          <motion.circle
            key={radius}
            cx="260"
            cy="195"
            r={radius}
            stroke="rgba(229,67,255,0.28)"
            strokeWidth="1"
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            animate={{ opacity: [0.18, 0.46, 0.18], scale: [0.985, 1.018, 0.985] }}
            viewport={{ once: true }}
            transition={{
              duration: 3.6,
              delay: i * 0.18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
      <motion.div
        className="relative z-10 flex h-28 w-28 items-center justify-center sm:h-32 sm:w-32"
        initial={{ opacity: 0, scale: 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.16, ease }}
      >
        <Image
          src="/assets/brand/digeto-fav.svg"
          alt=""
          width={86}
          height={86}
          className="h-20 w-20 drop-shadow-[0_0_34px_rgba(229,67,255,0.34)] sm:h-24 sm:w-24"
          priority={false}
        />
      </motion.div>
    </div>
  );
}

export default function ContactCta() {
  return (
    <section id="contact" className="border-t border-[rgba(255,255,255,0.06)]">
      <div className="mx-auto max-w-[1400px] px-6 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-16">
        <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Left: content */}
          <div className="max-w-2xl">
            <motion.p
              className="text-sm font-medium tracking-[0.18em] text-neutral-500 uppercase mb-5"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              Get Started
            </motion.p>
            <motion.h2
              className="text-[2.6rem] font-medium leading-[1.04] tracking-tight text-[#f0f0f0] sm:text-5xl sm:leading-[1.1]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              Your next market{" "}
              <span style={{ color: "#E543FF" }}>is waiting.</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            >
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
            </motion.div>
            <RadarLogoVisual compact />
          </div>

          <motion.div
            className="mt-16 lg:mt-0 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
          >
            <RadarLogoVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
