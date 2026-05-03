import Image from "next/image";
import Link from "next/link";
import { IconBrandLinkedin, IconBrandInstagram, IconBrandX } from "@tabler/icons-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06]">
      <div className="px-5 sm:px-8 py-10 sm:py-12">

        {/* Main row */}
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">

          {/* Brand + info */}
          <div className="flex flex-col gap-4">
            <Link href="/">
              <Image
                src="/assets/brand/digeto-logo-tag.svg"
                alt="Digeto"
                width={140}
                height={38}
                className="h-16 w-auto"
              />
            </Link>

            <div className="flex flex-col gap-1.5">
              <p className="text-sm text-foreground/40">
                <span className="font-medium text-foreground/60">Europe</span>
                {" "}- 8 bis Rue Abel, 75012 Paris, France
              </p>
              <p className="text-sm text-foreground/40">
                <span className="font-medium text-foreground/60">India</span>
                {" "}- No.74 MASS Complex, JP Nagar 3rd Phase, Bangalore 560078
              </p>
            </div>

            <a
              href="mailto:contact@digeto.io"
              className="text-sm font-medium text-foreground/50 transition-colors hover:text-foreground"
            >
              contact@digeto.io
            </a>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-3 sm:items-end">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-foreground/30">
              Follow us
            </p>
            <div className="flex items-center gap-2">
              <a
                href="https://www.linkedin.com/company/digeto"
                target="_blank"
                rel="noreferrer"
                aria-label="Digeto on LinkedIn"
                className="inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-card px-3.5 py-2 text-sm font-semibold text-foreground/60 shadow-[0_1px_4px_rgba(0,0,0,0.4)] transition-all duration-200 ease-out hover:-translate-y-px hover:border-[rgba(229,67,255,0.3)] hover:text-[#E543FF]"
              >
                <IconBrandLinkedin size={15} stroke={1.8} />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://www.instagram.com/digeto.io"
                target="_blank"
                rel="noreferrer"
                aria-label="Digeto on Instagram"
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.08] bg-card text-foreground/40 shadow-[0_1px_4px_rgba(0,0,0,0.4)] transition-all duration-200 ease-out hover:-translate-y-px hover:border-[rgba(229,67,255,0.3)] hover:text-[#E543FF]"
              >
                <IconBrandInstagram size={16} stroke={1.8} />
              </a>
              <a
                href="https://x.com/digeto_io"
                target="_blank"
                rel="noreferrer"
                aria-label="Digeto on X"
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.08] bg-card text-foreground/40 shadow-[0_1px_4px_rgba(0,0,0,0.4)] transition-all duration-200 ease-out hover:-translate-y-px hover:border-[rgba(229,67,255,0.3)] hover:text-[#E543FF]"
              >
                <IconBrandX size={14} stroke={1.8} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-row flex-wrap items-center justify-between gap-x-4 gap-y-2 border-t border-white/[0.06] pt-6 text-sm text-foreground/40">
          <p>© {new Date().getFullYear()} Digeto. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="transition-colors hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="transition-colors hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
