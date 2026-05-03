"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@phosphor-icons/react";
import { buttonVariants } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const productItems = [
  {
    title: "AI Engine",
    href: "/product/ai-engine",
    description: "Intelligent outreach and pipeline automation at scale.",
  },
  {
    title: "Global Pods",
    href: "/product/global-pods",
    description: "On-the-ground sales teams in markets that matter.",
  },
  {
    title: "Partner Network",
    href: "/product/partner-network",
    description: "Leverage our curated network of regional partners.",
  },
];

const solutionsItems = [
  {
    title: "For Early Stage",
    href: "/solutions/early-stage",
    description: "Get your first international customers without building a team.",
  },
  {
    title: "For Series A+",
    href: "/solutions/series-a",
    description: "Accelerate growth into new markets with proven playbooks.",
  },
];

const companyItems = [
  {
    title: "About Us",
    href: "/about",
    description: "Why we built Digeto and what drives us.",
  },
  {
    title: "Founders",
    href: "/founders",
    description: "Meet the team behind the platform.",
  },
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

        {/* Nav */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="gap-0.5">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-sm font-medium h-8 px-3">
                Product
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-1 p-3">
                  {productItems.map((item) => (
                    <DropdownItem key={item.title} {...item} />
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-sm font-medium h-8 px-3">
                Solutions
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-1 p-3">
                  {solutionsItems.map((item) => (
                    <DropdownItem key={item.title} {...item} />
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href="/pricing"
                className="inline-flex items-center h-8 px-3 text-sm font-medium rounded-lg transition-colors hover:bg-muted"
              >
                Pricing
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-sm font-medium h-8 px-3">
                Company
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[320px] gap-1 p-3">
                  {companyItems.map((item) => (
                    <DropdownItem key={item.title} {...item} />
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* CTA */}
        <div className="flex-shrink-0">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-white border border-white/25 transition-all duration-200 ease-out hover:-translate-y-px active:translate-y-px"
            style={{
              background: "linear-gradient(180deg, #ee55ff 0%, #e543ff 100%)",
              boxShadow: "0 1px 0 #be2edb, 0 2px 4px rgba(9,9,11,0.08), 0 4px 8px rgba(9,9,11,0.16), inset 0 1px 2px rgba(255,255,255,0.16)",
            }}
          >
            Book a call
            <ArrowRightIcon weight="bold" size={14} />
          </Link>
        </div>
      </div>
    </header>
  );
}

function DropdownItem({
  title,
  href,
  description,
}: {
  title: string;
  href: string;
  description: string;
}) {
  return (
    <li>
      <NavigationMenuLink
        href={href}
        className="block rounded-md px-3 py-2.5 no-underline hover:bg-accent focus:bg-accent"
      >
        <div className="text-sm font-semibold text-foreground mb-0.5">{title}</div>
        <p className="text-xs leading-snug text-muted-foreground">{description}</p>
      </NavigationMenuLink>
    </li>
  );
}
