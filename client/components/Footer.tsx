"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { IconBrandLinkedin } from "@tabler/icons-react";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.06)]">
      <div className="mx-auto max-w-[1400px] px-6 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
        <motion.div
          className="grid grid-cols-1 gap-8 sm:grid-cols-[1fr_auto] sm:items-center"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease }}
        >
          <div className="flex flex-col gap-1.5">
            <Link href="/" className="inline-flex items-center shrink-0">
              <Image
                src="/assets/brand/digeto-logo-tag.svg"
                alt="Digeto logo"
                width={240}
                height={64}
                className="h-14 w-auto"
              />
            </Link>
            <address className="not-italic text-xs text-neutral-600 mt-1 pl-0.5">
              Mindspace, Hyderabad, India
            </address>
          </div>

          <div className="flex flex-col gap-3 text-sm text-neutral-500 sm:items-end">
            <a
              href="mailto:contact@digeto.io"
              className="transition-colors hover:text-neutral-300"
            >
              contact@digeto.io
            </a>
            <div className="flex items-center gap-2">
              <a
                href="https://www.linkedin.com/company/digeto"
                target="_blank"
                rel="noreferrer"
                aria-label="Digeto on LinkedIn"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] text-neutral-500 transition-all duration-300 ease-out hover:border-[rgba(229,67,255,0.25)] hover:bg-[rgba(229,67,255,0.08)] hover:text-[#E543FF]"
              >
                <IconBrandLinkedin size={16} stroke={1.8} />
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
