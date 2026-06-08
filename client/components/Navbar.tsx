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

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNavClick = useCallback((id: string) => {
    if (id === "contact") {
      setMenuOpen(false);
      if (onSectionChange) onSectionChange(null);
      setTimeout(() => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      }, 50);
      return;
    }
    if (onSectionChange) {
      onSectionChange(activeSection === id ? null : id);
      setMenuOpen(false);
    } else {
      router.push(`/?section=${id}`);
      setMenuOpen(false);
    }
  }, [activeSection, onSectionChange, router]);

  const handleLogoClick = onSectionChange
    ? () => { onSectionChange(null); setMenuOpen(false); }
    : undefined;

  return (
    <header className="sticky top-0 z-50 w-full flex justify-center pointer-events-none px-4 pt-4">
      <div
        className="pointer-events-auto w-full md:w-auto flex items-center justify-between md:justify-start gap-1 px-2 py-2 rounded-2xl transition-all duration-300"
        style={{ background: "#000000" }}
      >
        {/* Favicon icon */}
        {handleLogoClick ? (
          <button
            type="button"
            onClick={handleLogoClick}
            className="flex-shrink-0 flex items-center justify-center h-9 w-9 focus:outline-none cursor-pointer"
          >
            <Image src="/assets/brand/digeto-fav.svg" alt="Digeto" width={32} height={32} priority />
          </button>
        ) : (
          <Link href="/" className="flex-shrink-0 flex items-center justify-center h-9 w-9">
            <Image src="/assets/brand/digeto-fav.svg" alt="Digeto" width={32} height={32} priority />
          </Link>
        )}

        {/* Nav links — desktop */}
        <nav className="hidden md:flex items-center gap-0.5">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.label}
                type="button"
                onClick={() => handleNavClick(link.id)}
                className="inline-flex items-center h-8 px-3 text-sm font-medium rounded-lg transition-colors duration-200 cursor-pointer hover:bg-white/[0.06]"
                style={{
                  color: isActive ? "#E543FF" : "rgba(255,255,255,0.90)",
                  background: isActive ? "rgba(229,67,255,0.08)" : undefined,
                  border: isActive ? "1px solid rgba(229,67,255,0.2)" : "1px solid transparent",
                }}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Become a GTM Partner */}
        <Link
          href="/gtm-partners"
          className="hidden md:inline-flex items-center h-8 px-3 text-sm font-semibold rounded-lg transition-all duration-200 hover:bg-[rgba(229,67,255,0.08)]"
          style={{ color: "#E543FF", border: "1px solid transparent" }}
        >
          Become a GTM Partner
        </Link>

        {/* CTA button */}
        <Link
          href={cta.href}
          className="hidden md:inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-white border border-white/25 transition-all duration-200 ease-out hover:-translate-y-px active:translate-y-px ml-1"
          style={{
            background: "linear-gradient(180deg, #ee55ff 0%, #e543ff 100%)",
            boxShadow: "0 1px 0 #be2edb, 0 2px 4px rgba(9,9,11,0.08), 0 4px 8px rgba(9,9,11,0.16), inset 0 1px 2px rgba(255,255,255,0.16)",
          }}
        >
          {cta.label}
          <ArrowRight weight="bold" size={14} />
        </Link>

        {/* Hamburger — mobile */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="relative z-50 flex md:hidden h-9 w-9 items-center justify-center rounded-lg cursor-pointer focus:outline-none"
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
          background: "rgba(0,0,0,0.97)",
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
                className="text-left text-3xl font-semibold tracking-tight transition-all duration-300 ease-out cursor-pointer"
                style={{
                  color: isActive ? "#E543FF" : "rgba(240,240,248,0.85)",
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
            className="text-left text-3xl font-semibold tracking-tight transition-all duration-300 ease-out"
            style={{
              color: "#E543FF",
              transform: menuOpen ? "translateY(0)" : "translateY(20px)",
              opacity: menuOpen ? 1 : 0,
              transitionDelay: menuOpen ? `${80 + navLinks.length * 50}ms` : "0ms",
              padding: "8px 0",
            }}
          >
            Become a GTM Partner
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
