"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";

const navLinks = [
  { label: "Product",      id: "product" },
  { label: "How It Works", id: "how-it-works" },
  { label: "Pricing",      id: "pricing" },
  { label: "Contact",      id: "contact" },
];

interface NavbarProps {
  activeSection?: string | null;
  onSectionChange?: (section: string | null) => void;
}

export default function Navbar({ activeSection, onSectionChange }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (id: string) => {
    if (!onSectionChange) return;
    onSectionChange(activeSection === id ? null : id);
  };

  return (
    <header className="sticky top-0 z-50 w-full pointer-events-none">
      <div
        className="pointer-events-auto mx-4 sm:mx-8 h-16 flex items-center justify-between gap-4 sm:gap-8 transition-all duration-300"
        style={scrolled ? {
          marginTop: "12px",
          paddingLeft: "20px",
          paddingRight: "20px",
          borderRadius: "16px",
          background: "rgba(9,9,11,0.75)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
        } : {
          marginTop: "16px",
          paddingLeft: "0px",
          paddingRight: "0px",
        }}
      >

        {/* Logo */}
        <button
          type="button"
          onClick={() => onSectionChange?.(null)}
          className="flex-shrink-0 focus:outline-none cursor-pointer"
        >
          <Image
            src="/assets/brand/digeto-logo-tag.svg"
            alt="Digeto"
            width={140}
            height={38}
            priority
          />
        </button>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.label}
                type="button"
                onClick={() => handleNavClick(link.id)}
                className="inline-flex items-center h-8 px-3 text-sm font-medium rounded-lg transition-colors duration-200 cursor-pointer"
                style={{
                  color: isActive ? "#E543FF" : "rgba(240,240,248,0.8)",
                  background: isActive ? "rgba(229,67,255,0.08)" : "transparent",
                  border: isActive ? "1px solid rgba(229,67,255,0.2)" : "1px solid transparent",
                }}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="flex-shrink-0">
          <Link
            href="/book-a-call"
            className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-white border border-white/25 transition-all duration-200 ease-out hover:-translate-y-px active:translate-y-px"
            style={{
              background: "linear-gradient(180deg, #ee55ff 0%, #e543ff 100%)",
              boxShadow: "0 1px 0 #be2edb, 0 2px 4px rgba(9,9,11,0.08), 0 4px 8px rgba(9,9,11,0.16), inset 0 1px 2px rgba(255,255,255,0.16)",
            }}
          >
            Book a call
            <ArrowRight weight="bold" size={14} />
          </Link>
        </div>

      </div>
    </header>
  );
}
