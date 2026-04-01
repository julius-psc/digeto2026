"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";

const navLinks = [
  { label: "Product", href: "#product" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { scrollY } = useScroll();

  const navWidth = useTransform(
    scrollY,
    [0, 220],
    ["min(1400px, 100%)", "min(1344px, calc(100% - 24px))"]
  );
  const paddingY = useTransform(scrollY, [0, 220], [16, 12]);
  const paddingLeft = useTransform(scrollY, [0, 220], [24, 24]);
  const paddingRight = useTransform(scrollY, [0, 220], [24, 18]);
  const borderRadius = useTransform(scrollY, [0, 220], [0, 18]);
  const borderAlpha = useTransform(scrollY, [0, 220], [0, 0.08]);
  const backgroundAlpha = useTransform(scrollY, [0, 220], [0, 0.55]);
  const marginTop = useTransform(scrollY, [0, 220], [0, 12]);

  const borderColor = useMotionTemplate`rgba(255,255,255,${borderAlpha})`;
  const backgroundColor = useMotionTemplate`rgba(10,10,12,${backgroundAlpha})`;

  return (
    <motion.header className="sticky top-0 z-50 w-full" style={{ paddingTop: marginTop }}>
      <motion.nav
        className="mx-auto flex items-center justify-between backdrop-blur-xl supports-[backdrop-filter]:backdrop-blur-xl"
        style={{
          width: navWidth,
          paddingTop: paddingY,
          paddingBottom: paddingY,
          paddingLeft,
          paddingRight,
          borderRadius,
          borderWidth: 1,
          borderStyle: "solid",
          borderColor,
          backgroundColor,
        }}
      >
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/brand/digeto-horizontal-logo.svg"
            alt="Digeto logo"
            width={144}
            height={38}
            className="h-9 w-auto"
            loading="eager"
          />
        </Link>

        <ul className="flex items-center gap-10">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                className="text-sm font-medium text-neutral-400 transition-colors hover:text-white"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="#book"
          className="inline-flex items-center rounded-[10px] border px-4 py-2.5 text-sm font-medium text-white shadow-[0_10px_30px_rgba(229,67,255,0.18)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_16px_40px_rgba(229,67,255,0.28)]"
          style={{
            borderColor: "rgba(229,67,255,0.35)",
            background:
              "linear-gradient(180deg, rgba(229,67,255,0.18) 0%, rgba(180,30,230,0.14) 100%)",
          }}
        >
          Book a meeting
        </Link>
      </motion.nav>
    </motion.header>
  );
}
