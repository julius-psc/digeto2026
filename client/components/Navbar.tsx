"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
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
  cta?: { label: string; href: string };
}

const defaultCta = { label: "Book a call", href: "/book-a-call" };

export default function Navbar({ activeSection, onSectionChange, cta = defaultCta }: NavbarProps) {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNavClick = useCallback((id: string) => {
    if (onSectionChange) {
      onSectionChange(activeSection === id ? null : id);
      setMenuOpen(false);
    } else {
      router.push(`/?section=${id}`);
      setMenuOpen(false);
    }
  }, [activeSection, onSectionChange, router]);

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
        {onSectionChange ? (
          <button
            type="button"
            onClick={() => { onSectionChange(null); setMenuOpen(false); }}
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
        ) : (
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/assets/brand/digeto-logo-tag.svg"
              alt="Digeto"
              width={140}
              height={38}
              priority
            />
          </Link>
        )}

        {/* Nav links — desktop */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.label}
                type="button"
                onClick={() => handleNavClick(link.id)}
                className={`inline-flex items-center h-8 px-3 text-sm font-medium rounded-lg transition-colors duration-200 cursor-pointer ${isActive ? "" : "text-foreground/80 hover:text-white hover:bg-white/[0.06]"}`}
                style={{
                  color: isActive ? "#E543FF" : undefined,
                  background: isActive ? "rgba(229,67,255,0.08)" : undefined,
                  border: isActive ? "1px solid rgba(229,67,255,0.2)" : "1px solid transparent",
                }}
              >
                {link.label}
              </button>
            );
          })}
          <Link
            href="/gtm-partners"
            className="inline-flex items-center h-8 px-3 text-sm font-medium rounded-lg transition-colors duration-200 text-foreground/80 hover:text-white hover:bg-white/[0.06]"
            style={{ border: "1px solid transparent" }}
          >
            GTM Partnership
          </Link>
        </nav>

        {/* CTA — desktop */}
        <div className="hidden md:block flex-shrink-0">
          <Link
            href={cta.href}
            className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-white border border-white/25 transition-all duration-200 ease-out hover:-translate-y-px active:translate-y-px"
            style={{
              background: "linear-gradient(180deg, #ee55ff 0%, #e543ff 100%)",
              boxShadow: "0 1px 0 #be2edb, 0 2px 4px rgba(9,9,11,0.08), 0 4px 8px rgba(9,9,11,0.16), inset 0 1px 2px rgba(255,255,255,0.16)",
            }}
          >
            {cta.label}
            <ArrowRight weight="bold" size={14} />
          </Link>
        </div>

        {/* Hamburger — mobile */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="relative z-50 flex md:hidden h-10 w-10 items-center justify-center rounded-lg cursor-pointer focus:outline-none"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <div className="flex flex-col items-center justify-center gap-[5px] w-5">
            <span
              className="block h-[1.5px] w-5 rounded-full bg-white transition-all duration-300 ease-out origin-center"
              style={menuOpen ? { transform: "translateY(3.25px) rotate(45deg)" } : {}}
            />
            <span
              className="block h-[1.5px] w-5 rounded-full bg-white transition-all duration-300 ease-out origin-center"
              style={menuOpen ? { transform: "translateY(-3.25px) rotate(-45deg)" } : {}}
            />
          </div>
        </button>

      </div>

      {/* Mobile menu overlay */}
      <div
        className="pointer-events-auto fixed inset-0 z-40 flex flex-col md:hidden transition-all duration-300 ease-out"
        style={{
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          background: "rgba(9,9,11,0.97)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
        }}
      >
        <nav className="flex flex-1 flex-col items-start justify-center gap-2 px-10">
          {navLinks.map((link, i) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.label}
                type="button"
                onClick={() => handleNavClick(link.id)}
                className={`text-left text-3xl font-semibold tracking-tight transition-all duration-300 ease-out cursor-pointer ${isActive ? "" : "text-foreground/85 hover:text-white"}`}
                style={{
                  color: isActive ? "#E543FF" : undefined,
                  transform: menuOpen ? "translateY(0)" : "translateY(20px)",
                  opacity: menuOpen ? 1 : 0,
                  transitionDelay: menuOpen ? `${80 + i * 50}ms` : "0ms",
                  padding: "8px 0",
                }}
              >
                {link.label}
              </button>
            );
          })}

          <Link
            href="/gtm-partners"
            onClick={() => setMenuOpen(false)}
            className="text-left text-3xl font-semibold tracking-tight transition-all duration-300 ease-out text-foreground/85 hover:text-white"
            style={{
              transform: menuOpen ? "translateY(0)" : "translateY(20px)",
              opacity: menuOpen ? 1 : 0,
              transitionDelay: menuOpen ? `${80 + navLinks.length * 50}ms` : "0ms",
              padding: "8px 0",
            }}
          >
            GTM Partnership
          </Link>

          <div
            className="mt-8 transition-all duration-300 ease-out"
            style={{
              transform: menuOpen ? "translateY(0)" : "translateY(20px)",
              opacity: menuOpen ? 1 : 0,
              transitionDelay: menuOpen ? `${80 + (navLinks.length + 1) * 50}ms` : "0ms",
            }}
          >
            <Link
              href={cta.href}
              onClick={() => setMenuOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-base font-semibold text-white border border-white/25 transition-all duration-200 ease-out active:translate-y-px"
              style={{
                background: "linear-gradient(180deg, #ee55ff 0%, #e543ff 100%)",
                boxShadow: "0 1px 0 #be2edb, 0 2px 4px rgba(9,9,11,0.08), 0 4px 8px rgba(9,9,11,0.16), inset 0 1px 2px rgba(255,255,255,0.16)",
              }}
            >
              {cta.label}
              <ArrowRight weight="bold" size={16} />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
