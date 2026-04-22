"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { IconBrandLinkedin, IconBrandInstagram, IconBrandX } from "@tabler/icons-react";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.06)]">
      <div className="mx-auto max-w-[1400px] px-6 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
        <motion.div
          className="grid grid-cols-1 gap-10 sm:grid-cols-[1fr_auto] sm:items-start"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease }}
        >
          {/* Brand + addresses */}
          <div className="flex flex-col gap-3">
            <Link href="/" className="inline-flex items-center shrink-0">
              <Image
                src="/assets/brand/digeto-logo-tag.svg"
                alt="Digeto logo"
                width={240}
                height={64}
                className="h-14 w-auto"
              />
            </Link>
            <div className="flex flex-col gap-1 pl-0.5">
              <address className="not-italic text-xs text-neutral-600">
                <span className="font-medium text-neutral-500">Paris</span> — 1 Rue de Rivoli, 75001 Paris, France
              </address>
              <address className="not-italic text-xs text-neutral-600">
                <span className="font-medium text-neutral-500">India</span> — Mindspace, Hyderabad, Telangana, India
              </address>
            </div>
            <a
              href="mailto:contact@digeto.io"
              className="mt-1 text-sm text-neutral-500 transition-colors hover:text-neutral-300 pl-0.5"
            >
              contact@digeto.io
            </a>
          </div>

          {/* Follow us */}
          <div className="flex flex-col gap-3 sm:items-end">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-neutral-500">
              Follow us
            </p>

            {/* LinkedIn — most prominent */}
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

            {/* Instagram & X */}
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

        <motion.div
          className="mt-8 flex flex-col gap-3 border-t border-[rgba(255,255,255,0.08)] pt-5 text-xs text-neutral-600 sm:mt-10 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
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
