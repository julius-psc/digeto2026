"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";

const navLinks = [
  { label: "Product",      href: "#product" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing",      href: "#pricing" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-transparent pt-4 sm:pt-12">
      <div className="px-5 sm:px-8 h-12 flex items-center justify-between gap-4 sm:gap-8">

        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/assets/brand/digeto-logo-tag.svg"
            alt="Digeto"
            width={140}
            height={38}
            priority
          />
        </Link>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="inline-flex items-center h-8 px-3 text-sm font-medium rounded-lg text-foreground/55 transition-colors duration-200 hover:text-foreground hover:bg-white/[0.05]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex-shrink-0">
          <a
            href="https://calendly.com/contact-digeto/30min"
            className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-white border border-white/25 transition-all duration-200 ease-out hover:-translate-y-px active:translate-y-px"
            style={{
              background: "linear-gradient(180deg, #ee55ff 0%, #e543ff 100%)",
              boxShadow: "0 1px 0 #be2edb, 0 2px 4px rgba(9,9,11,0.08), 0 4px 8px rgba(9,9,11,0.16), inset 0 1px 2px rgba(255,255,255,0.16)",
            }}
          >
            Book a call
            <ArrowRight weight="bold" size={14} />
          </a>
        </div>

      </div>
    </header>
  );
}
