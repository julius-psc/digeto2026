"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { IconBrandLinkedin, IconBrandInstagram, IconBrandX } from "@tabler/icons-react";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.06)]">
      <div className="mx-auto max-w-[1400px] px-6 py-6 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
        <motion.div
          className="flex flex-col gap-4 sm:grid sm:grid-cols-[1fr_auto] sm:items-start sm:gap-10"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease }}
        >
          {/* Mobile: logo row + social icons side-by-side */}
          <div className="flex items-start justify-between sm:flex-col sm:gap-3">
            <Link href="/" className="inline-flex items-center shrink-0">
              <Image
                src="/assets/brand/digeto-logo-tag.svg"
                alt="Digeto logo"
                width={240}
                height={64}
                className="h-10 w-auto sm:h-14"
              />
            </Link>

            {/* Social icons — compact row on mobile only */}
            <div className="flex items-center gap-2 sm:hidden">
              <a
                href="https://www.linkedin.com/company/digeto"
                target="_blank"
                rel="noreferrer"
                aria-label="Digeto on LinkedIn"
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl border text-white transition-all duration-300 ease-out hover:-translate-y-0.5"
                style={{
                  borderColor: "rgba(229,67,255,0.4)",
                  background: "linear-gradient(180deg, rgba(229,67,255,0.18) 0%, rgba(180,30,230,0.12) 100%)",
                }}
              >
                <IconBrandLinkedin size={17} stroke={1.8} style={{ color: "#E543FF" }} />
              </a>
              <a
                href="https://www.instagram.com/digeto.io"
                target="_blank"
                rel="noreferrer"
                aria-label="Digeto on Instagram"
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] text-neutral-400 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-[rgba(229,67,255,0.3)] hover:bg-[rgba(229,67,255,0.08)] hover:text-[#E543FF]"
              >
                <IconBrandInstagram size={17} stroke={1.8} />
              </a>
              <a
                href="https://x.com/digeto_io"
                target="_blank"
                rel="noreferrer"
                aria-label="Digeto on X"
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] text-neutral-400 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-[rgba(229,67,255,0.3)] hover:bg-[rgba(229,67,255,0.08)] hover:text-[#E543FF]"
              >
                <IconBrandX size={15} stroke={1.8} />
              </a>
            </div>
          </div>

          {/* Addresses + email — mobile */}
          <div className="flex flex-col gap-1 sm:hidden">
            <address className="not-italic text-xs text-neutral-600">
              <span className="font-medium text-neutral-500">Europe</span> — 8 bis Rue Abel, 75012 Paris, France
            </address>
            <address className="not-italic text-xs text-neutral-600">
              <span className="font-medium text-neutral-500">India</span> — No.74, MASS Complex, 3rd Floor, Sarakki Industrial Layout, JP Nagar 3rd Phase, Bangalore 560078
            </address>
            <a
              href="mailto:contact@digeto.io"
              className="mt-0.5 text-xs text-neutral-500 transition-colors hover:text-neutral-300"
            >
              contact@digeto.io
            </a>
          </div>

          {/* Brand block — desktop only */}
          <div className="hidden sm:flex flex-col gap-3">
            <div className="flex flex-col gap-1 pl-0.5">
              <address className="not-italic text-xs text-neutral-600">
                <span className="font-medium text-neutral-500">Europe</span> — 8 bis Rue Abel, 75012 Paris, France
              </address>
              <address className="not-italic text-xs text-neutral-600">
                <span className="font-medium text-neutral-500">India</span> — No.74, MASS Complex, 3rd Floor, Sarakki Industrial Layout, JP Nagar 3rd Phase, Bangalore 560078
              </address>
            </div>
            <a
              href="mailto:contact@digeto.io"
              className="mt-1 text-sm text-neutral-500 transition-colors hover:text-neutral-300 pl-0.5"
            >
              contact@digeto.io
            </a>
          </div>

          {/* Follow us — desktop only */}
          <div className="hidden sm:flex flex-col gap-3 sm:items-end">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-neutral-500">
              Follow us
            </p>
            <a
              href="https://www.linkedin.com/company/digeto"
              target="_blank"
              rel="noreferrer"
              aria-label="Digeto on LinkedIn"
              className="group inline-flex items-center gap-2.5 rounded-xl border px-4 py-2.5 text-sm font-semibold text-white shadow-[0_6px_20px_rgba(229,67,255,0.15)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(229,67,255,0.28)]"
              style={{
                borderColor: "rgba(229,67,255,0.4)",
                background: "linear-gradient(180deg, rgba(229,67,255,0.18) 0%, rgba(180,30,230,0.12) 100%)",
              }}
            >
              <IconBrandLinkedin size={18} stroke={1.8} style={{ color: "#E543FF" }} />
              Follow on LinkedIn
            </a>
            <div className="flex items-center gap-2">
              <a
                href="https://www.instagram.com/digeto.io"
                target="_blank"
                rel="noreferrer"
                aria-label="Digeto on Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] text-neutral-400 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-[rgba(229,67,255,0.3)] hover:bg-[rgba(229,67,255,0.08)] hover:text-[#E543FF]"
              >
                <IconBrandInstagram size={18} stroke={1.8} />
              </a>
              <a
                href="https://x.com/digeto_io"
                target="_blank"
                rel="noreferrer"
                aria-label="Digeto on X"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] text-neutral-400 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-[rgba(229,67,255,0.3)] hover:bg-[rgba(229,67,255,0.08)] hover:text-[#E543FF]"
              >
                <IconBrandX size={16} stroke={1.8} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Bottom bar — inline on mobile */}
        <motion.div
          className="mt-5 flex flex-row flex-wrap items-center justify-between gap-x-4 gap-y-1 border-t border-[rgba(255,255,255,0.08)] pt-4 text-xs text-neutral-600 sm:mt-10 sm:pt-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.12, ease }}
        >
          <p>© 2026 Digeto. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="transition-colors hover:text-neutral-300">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="transition-colors hover:text-neutral-300">
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
