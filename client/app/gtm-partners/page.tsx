"use client";

import { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Brain,
  CurrencyCircleDollar,
  Globe,
  Book,
  ShieldCheck,
  TrendUp,
} from "@phosphor-icons/react";
import { IconArrowRight, IconCheck } from "@tabler/icons-react";
import { Marquee } from "@/components/ui/marquee";
import { StripedPattern } from "@/components/magicui/striped-pattern";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ─── constants ─── */
const ACCENT = "#E543FF";

const primaryBtn: React.CSSProperties = {
  background: "linear-gradient(180deg, #ee55ff 0%, #e543ff 100%)",
  boxShadow:
    "0 1px 0 #be2edb, 0 2px 4px rgba(9,9,11,0.08), 0 4px 8px rgba(9,9,11,0.16), inset 0 1px 2px rgba(255,255,255,0.16)",
};

const secondaryBtn: React.CSSProperties = {
  border: "1px solid rgba(229,67,255,0.35)",
  color: ACCENT,
};

/* ─── data ─── */

const tickerItems = [
  { emoji: "🇪🇺", text: "Europe Open" },
  { emoji: "🌏", text: "APAC Open" },
  { emoji: "🕌", text: "MENA Open" },
  { emoji: "🌎", text: "Americas Open" },
  { emoji: "💰", text: "Earn Per Deal Closed" },
  { emoji: "🔄", text: "Recurring Revenue Share" },
  { emoji: "🤝", text: "Local Relationships. Global Reach." },
  { emoji: "🎉", text: "Free to Join" },
];

const whyCards = [
  {
    icon: Brain,
    title: "AI Does the Heavy Lifting",
    body: "Our India-based AI engine handles ICP definition, lead enrichment, and multi-channel sequencing. You show up to close, not to prospect.",
  },
  {
    icon: CurrencyCircleDollar,
    title: "You Earn When We Win",
    body: "Per-deal commissions plus recurring monthly revenue share. No retainers, no waiting — your earnings scale directly with the pipeline you generate.",
  },
  {
    icon: Globe,
    title: "Global Brand, Local You",
    body: "Digeto's brand opens doors. Your native relationships, cultural fluency, and regional networks close them. A combination that wins.",
  },
  {
    icon: Book,
    title: "Structured Playbooks",
    body: "Every partner gets a market playbook, ICP templates, outreach sequences, and onboarding support — so you're not starting from scratch.",
  },
  {
    icon: ShieldCheck,
    title: "Protected Territory",
    body: "Partners are assigned to specific markets and verticals. No internal competition. Your deals are yours.",
  },
  {
    icon: TrendUp,
    title: "Scale with the Ecosystem",
    body: "As Digeto grows, so do your earnings. Senior partner tiers unlock equity-adjacent incentives, co-marketing, and portfolio deal flow.",
  },
];

const tiers = [
  {
    emoji: "🌱",
    name: "Connector",
    tagline: "Refer & Earn",
    earn: "€500 per qualified intro that converts",
    features: [
      "Refer startups",
      "Tracking dashboard",
      "Brand kit",
      "No commitment",
    ],
    featured: false,
  },
  {
    emoji: "⚡",
    name: "Market Partner",
    tagline: "Own a Territory",
    earn: "10% per deal + 5% monthly recurring",
    features: [
      "Assigned market",
      "AI engine & leads",
      "Playbooks & sequences",
      "Deal-flow dashboard",
      "Dedicated contact",
    ],
    featured: true,
  },
  {
    emoji: "🏆",
    name: "Regional Lead",
    tagline: "Lead a Pod",
    earn: "12% + 8% recurring + override on sub-partners",
    features: [
      "Build & manage a pod",
      "Override on sub-partner earnings",
      "Co-branded presence",
      "Priority deal routing",
      "Quarterly strategy sessions",
    ],
    featured: false,
  },
  {
    emoji: "🌐",
    name: "Strategic Ally",
    tagline: "Anchor Partner",
    earn: "Custom",
    features: [
      "Equity-adjacent stake",
      "Co-investment",
      "Exclusive regional rights",
      "Board-level access",
      "Portfolio deal flow",
    ],
    featured: false,
  },
];

const howSteps = [
  {
    step: "01",
    title: "Apply & Get Vetted",
    body: "Fill in the form below. We review your market, network, and GTM experience within 72 hours.",
  },
  {
    step: "02",
    title: "Onboard in a Week",
    body: "Receive your market playbook, brand assets, AI engine access, and first ICP brief. No ramp-up theatre.",
  },
  {
    step: "03",
    title: "Execute & Engage",
    body: "Use the AI pipeline to open doors. Apply your local relationships to qualify and close. We back you at every step.",
  },
  {
    step: "04",
    title: "Earn & Scale",
    body: "Commissions paid monthly. Hit milestones, upgrade your tier, unlock greater earning rates and territory.",
  },
];

const markets = [
  { flag: "🇩🇪", name: "Germany / DACH", status: "Open Now" },
  { flag: "🇫🇷", name: "France / Benelux", status: "Open Now" },
  { flag: "🇬🇧", name: "United Kingdom", status: "Open Now" },
  { flag: "🇦🇪", name: "UAE / Gulf", status: "Open Now" },
  { flag: "🇸🇬", name: "Singapore / SEA", status: "Open Now" },
  { flag: "🇺🇸", name: "USA / Canada", status: "Open Now" },
  { flag: "🇧🇷", name: "Brazil / LatAm", status: "Coming Soon" },
  { flag: "🇯🇵", name: "Japan / Korea", status: "Coming Soon" },
];

const countryOptions = [
  "Germany / DACH",
  "France / Benelux",
  "United Kingdom",
  "UAE / Gulf",
  "Singapore / SEA",
  "USA / Canada",
  "Brazil / LatAm",
  "Japan / Korea",
  "Other",
];

const tierOptions = [
  "🌱 Connector — Refer & Earn",
  "⚡ Market Partner — Own a Territory",
  "🏆 Regional Lead — Lead a Pod",
  "🌐 Strategic Ally — Anchor Partner",
];

/* ─── animations ─── */

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: i * 0.08,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

/* ─── Earnings Calculator ─── */

function EarningsCalculator() {
  const [deals, setDeals] = useState(3);
  const [months, setMonths] = useState(12);

  const earnings = useMemo(() => deals * months * 2000 * 0.05, [deals, months]);

  return (
    <section className="px-8 sm:px-16 py-10 sm:py-14">
      <div className="max-w-3xl mx-auto">
        <p
          className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-3"
          style={{ color: ACCENT }}
        >
          Earnings Calculator
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.08] tracking-tight text-foreground">
          How much could you actually earn?
        </h2>
        <p className="mt-3 text-sm sm:text-base md:text-lg text-foreground/70 leading-relaxed max-w-xl">
          Most Market Partners close 2-4 deals per quarter. Each client pays
          Digeto monthly. Your recurring share compounds every month they stay.
        </p>

        {/* Reference figures */}
        <div className="mt-6 flex flex-wrap gap-3">
          {[
            { label: "Avg. deal value", value: "€2,000/mo" },
            { label: "Your recurring share", value: "5%/month" },
            { label: "Average client tenure", value: "12+ months" },
          ].map((r) => (
            <div
              key={r.label}
              className="rounded-xl px-4 py-3 border"
              style={{
                borderColor: "rgba(229,67,255,0.18)",
                background:
                  "linear-gradient(135deg, rgba(229,67,255,0.07) 0%, rgba(229,67,255,0.03) 100%)",
              }}
            >
              <p className="text-xs text-foreground/50">{r.label}</p>
              <p className="text-sm font-semibold text-foreground">{r.value}</p>
            </div>
          ))}
        </div>

        {/* Sliders */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <label className="grid gap-2">
            <span className="text-sm font-medium text-foreground/72">
              Deals closed per month:{" "}
              <span className="font-bold text-foreground">{deals}</span>
            </span>
            <input
              type="range"
              min={1}
              max={10}
              value={deals}
              onChange={(e) => setDeals(Number(e.target.value))}
              className="w-full accent-[#E543FF] h-2 rounded-full appearance-none cursor-pointer"
              style={{ background: "rgba(229,67,255,0.15)" }}
            />
            <div className="flex justify-between text-xs text-foreground/30">
              <span>1</span>
              <span>10</span>
            </div>
          </label>
          <label className="grid gap-2">
            <span className="text-sm font-medium text-foreground/72">
              Avg. client months retained:{" "}
              <span className="font-bold text-foreground">{months}</span>
            </span>
            <input
              type="range"
              min={1}
              max={24}
              value={months}
              onChange={(e) => setMonths(Number(e.target.value))}
              className="w-full accent-[#E543FF] h-2 rounded-full appearance-none cursor-pointer"
              style={{ background: "rgba(229,67,255,0.15)" }}
            />
            <div className="flex justify-between text-xs text-foreground/30">
              <span>1</span>
              <span>24</span>
            </div>
          </label>
        </div>

        {/* Result */}
        <div
          className="mt-8 rounded-2xl px-6 py-6 border text-center"
          style={{
            borderColor: "rgba(229,67,255,0.3)",
            background:
              "linear-gradient(135deg, rgba(229,67,255,0.10) 0%, rgba(229,67,255,0.04) 100%)",
            boxShadow: "0 0 32px rgba(229,67,255,0.10)",
          }}
        >
          <p className="text-sm text-foreground/50 mb-1">
            Estimated monthly recurring earnings
          </p>
          <p
            className="text-4xl sm:text-5xl font-bold tracking-tight"
            style={{ color: ACCENT }}
          >
            €{earnings.toLocaleString("en-DE")}
          </p>
          <p className="mt-3 text-xs text-foreground/40">
            {deals} deals × {months} months × €2,000 × 5% · Excludes per-deal
            commission. Indicative only.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── Apply Form ─── */

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  linkedin: string;
  country: string;
  tier: string;
  background: string;
};

const initialFormState: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  linkedin: "",
  country: "",
  tier: "",
  background: "",
};

function ApplyForm() {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    message: string;
  }>({ type: "idle", message: "" });

  function updateField<K extends keyof FormState>(
    field: K,
    value: FormState[K]
  ) {
    setForm((c) => ({ ...c, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${form.firstName} ${form.lastName}`,
          email: form.email,
          company: `LinkedIn: ${form.linkedin} | Market: ${form.country} | Tier: ${form.tier}`,
          message: `[Digeto X Partner Application]\n\n${form.background}`,
        }),
      });

      const data = (await response.json()) as {
        error?: string;
        message?: string;
      };

      if (!response.ok) throw new Error(data.error ?? "Something went wrong.");

      setStatus({
        type: "success",
        message: "Application received. We'll be in touch within 72 hours.",
      });
      setForm(initialFormState);
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "We couldn't send your application.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  const inputClass =
    "h-12 rounded-2xl border border-white/[0.08] bg-white/[0.03] px-4 text-sm text-foreground outline-none transition-colors placeholder:text-foreground/25 focus:border-[#E543FF] focus:ring-2 focus:ring-[#E543FF]/20";

  const selectClass =
    "h-12 rounded-2xl border border-white/[0.08] bg-white/[0.03] px-4 text-sm text-foreground outline-none transition-colors focus:border-[#E543FF] focus:ring-2 focus:ring-[#E543FF]/20 appearance-none cursor-pointer";

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 sm:gap-6">
      <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
        <label className="grid gap-2.5">
          <span className="text-sm font-medium text-foreground/72">
            First Name
          </span>
          <input
            type="text"
            value={form.firstName}
            onChange={(e) => updateField("firstName", e.target.value)}
            placeholder="Jane"
            required
            className={inputClass}
          />
        </label>
        <label className="grid gap-2.5">
          <span className="text-sm font-medium text-foreground/72">
            Last Name
          </span>
          <input
            type="text"
            value={form.lastName}
            onChange={(e) => updateField("lastName", e.target.value)}
            placeholder="Doe"
            required
            className={inputClass}
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
        <label className="grid gap-2.5">
          <span className="text-sm font-medium text-foreground/72">
            Work Email
          </span>
          <input
            type="email"
            value={form.email}
            onChange={(e) => updateField("email", e.target.value)}
            placeholder="jane@company.com"
            required
            className={inputClass}
          />
        </label>
        <label className="grid gap-2.5">
          <span className="text-sm font-medium text-foreground/72">
            LinkedIn Profile
          </span>
          <input
            type="url"
            value={form.linkedin}
            onChange={(e) => updateField("linkedin", e.target.value)}
            placeholder="https://linkedin.com/in/janedoe"
            required
            className={inputClass}
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
        <label className="grid gap-2.5">
          <span className="text-sm font-medium text-foreground/72">
            Country / Market
          </span>
          <select
            value={form.country}
            onChange={(e) => updateField("country", e.target.value)}
            required
            className={selectClass}
          >
            <option value="" disabled>
              Select a market
            </option>
            {countryOptions.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-2.5">
          <span className="text-sm font-medium text-foreground/72">
            Partner Tier Interest
          </span>
          <select
            value={form.tier}
            onChange={(e) => updateField("tier", e.target.value)}
            required
            className={selectClass}
          >
            <option value="" disabled>
              Select a tier
            </option>
            {tierOptions.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="grid gap-2.5">
        <span className="text-sm font-medium text-foreground/72">
          Your GTM Background
        </span>
        <textarea
          value={form.background}
          onChange={(e) => updateField("background", e.target.value)}
          placeholder="Tell us about your GTM experience, network, and why you'd be a great partner."
          required
          rows={5}
          className="min-h-36 rounded-2xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-foreground/25 focus:border-[#E543FF] focus:ring-2 focus:ring-[#E543FF]/20"
        />
      </label>

      <div className="flex flex-col gap-4 pt-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-white/25 px-5 text-sm font-semibold text-white transition-all duration-200 ease-out hover:-translate-y-px active:translate-y-px disabled:cursor-not-allowed disabled:opacity-70"
          style={primaryBtn}
        >
          {isSubmitting ? "Submitting..." : "Submit Application"}
          {!isSubmitting && <ArrowRight weight="bold" size={14} />}
        </button>
        <p className="text-sm text-foreground/45">
          Free to join. No commitment. We&apos;ll reach out within 72 hours.
        </p>
      </div>

      {status.type !== "idle" && (
        <p
          className={`pt-1 text-sm ${status.type === "success" ? "text-[#ff8cff]" : "text-red-300"}`}
          role="status"
        >
          {status.message}
        </p>
      )}
    </form>
  );
}

/* ─── PAGE ─── */

export default function ReferralsPage() {
  const [activeStep, setActiveStep] = useState(0);

  // Auto-cycle how-it-works steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % howSteps.length);
    }, 1600);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar cta={{ label: "Apply Now", href: "#apply" }} />

      {/* ─── HERO ─── */}
      <div className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 60% 50%, rgba(229,67,255,0.08) 0%, transparent 70%)",
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
          }}
        />
        <StripedPattern
          className="absolute inset-0 z-0 text-white/[0.07]"
          style={{
            maskImage:
              "radial-gradient(800px ellipse at 60% 50%, black, transparent), linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
          }}
        />
        <section className="relative z-10 px-8 sm:px-16 pt-24 sm:pt-28 pb-6 sm:pb-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.06] px-3 py-1 mb-8">
              <span
                className="inline-block h-1.5 w-1.5 rounded-full animate-pulse flex-shrink-0"
                style={{ backgroundColor: ACCENT }}
              />
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-foreground/60">
                GTM Partner Program — Open Globally
              </p>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.08] text-foreground">
              Turn your network
              <br />
              into{" "}
              <span style={{ color: ACCENT }}>revenue.</span>
            </h1>

            <p className="mt-5 text-sm sm:text-base lg:text-lg font-medium text-foreground/60 leading-relaxed max-w-2xl mx-auto">
              Digeto X is how the world&apos;s best GTM operators earn by
              helping startups go global. Pick your market. Pick your tier. Start
              earning.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#apply"
                className="inline-flex items-center justify-center gap-2 rounded-xl px-4 sm:px-5 py-2.5 text-sm font-semibold text-white border border-white/25 whitespace-nowrap transition-all duration-200 ease-out hover:-translate-y-px active:translate-y-px"
                style={primaryBtn}
              >
                Apply to Partner
                <ArrowRight weight="bold" size={14} />
              </a>
              <a
                href="#tiers"
                className="inline-flex items-center justify-center gap-1.5 rounded-xl px-4 sm:px-5 py-2.5 text-sm font-semibold whitespace-nowrap transition-all duration-200 ease-out hover:-translate-y-px active:translate-y-px"
                style={secondaryBtn}
              >
                See Partner Tiers
                <ArrowRight weight="bold" size={14} />
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* ─── STATS ─── */}
      <section className="px-8 sm:px-16 py-10 sm:py-14">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-8 sm:gap-0 sm:divide-x sm:divide-white/[0.10]">
          {[
            { stat: "100+", label: "Companies scaling with Digeto" },
            { stat: "4+ Regions", label: "EU · APAC · MENA · Americas" },
            { stat: "€0", label: "Cost to join. Revenue-first, always." },
          ].map((m, i) => (
            <div
              key={m.stat}
              className={`flex flex-col gap-1.5 text-center ${i > 0 ? "sm:pl-12" : ""} ${i < 2 ? "sm:pr-12" : ""}`}
            >
              <p
                className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight"
                style={{ color: ACCENT }}
              >
                {m.stat}
              </p>
              <p className="text-sm sm:text-base text-foreground/50">
                {m.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── TICKER ─── */}
      <section className="border-y border-white/[0.06] overflow-hidden">
        <Marquee className="py-4 [--duration:30s] [--gap:2rem]" pauseOnHover>
          {tickerItems.map((item) => (
            <span
              key={item.text}
              className="flex items-center gap-2.5 text-sm font-semibold tracking-wide whitespace-nowrap text-foreground/50"
            >
              <span className="text-base">{item.emoji}</span>
              {item.text}
            </span>
          ))}
        </Marquee>
      </section>

      {/* ─── WHY PARTNER ─── */}
      <section className="px-8 sm:px-16 py-10 sm:py-14">
        <div className="mb-8">
          <p
            className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-3"
            style={{ color: ACCENT }}
          >
            Why Partner with Us
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.08] tracking-tight text-foreground">
            Built for operators, not freelancers.
          </h2>
          <p className="mt-3 text-sm sm:text-base md:text-lg text-foreground/70 leading-relaxed max-w-xl">
            We give you the engine. You bring the market knowledge.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {whyCards.map((card, i) => (
            <motion.div
              key={card.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-2xl bg-card px-6 py-6 flex flex-col gap-3 border border-white/[0.07] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[rgba(229,67,255,0.25)] hover:shadow-[0_0_28px_rgba(229,67,255,0.10)]"
            >
              <span
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl"
                style={{ background: "rgba(229,67,255,0.12)" }}
              >
                <card.icon size={22} weight="duotone" style={{ color: ACCENT }} />
              </span>
              <p className="text-base md:text-lg lg:text-xl font-semibold text-foreground leading-snug">
                {card.title}
              </p>
              <p className="text-sm md:text-base text-foreground/65 leading-relaxed">
                {card.body}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── PARTNER TIERS ─── */}
      <section id="tiers" className="px-8 sm:px-16 py-10 sm:py-14">
        <div className="mb-8">
          <p
            className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-3"
            style={{ color: ACCENT }}
          >
            Partner Tiers
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.08] tracking-tight text-foreground">
            4 tiers. One mission. Your market, your terms.
          </h2>
          <p className="mt-3 text-sm sm:text-base md:text-lg text-foreground/70 leading-relaxed max-w-xl">
            Choose your entry point. Upgrade as you deliver.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-4 xl:items-stretch">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative group"
            >
              {tier.featured && (
                <div className="pointer-events-none absolute inset-x-4 -top-4 z-10 flex justify-center">
                  <span
                    className="rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white"
                    style={{
                      background:
                        "linear-gradient(180deg, #ee55ff 0%, #e543ff 100%)",
                      boxShadow: "0 4px 16px rgba(229,67,255,0.35)",
                    }}
                  >
                    Most Popular
                  </span>
                </div>
              )}
              <div
                className="relative flex h-full flex-col overflow-hidden rounded-[20px] border px-4 py-5 sm:rounded-[30px] sm:px-7 sm:py-8 transition-all duration-300 ease-out hover:-translate-y-1"
                style={{
                  borderColor: tier.featured
                    ? "rgba(229,67,255,0.35)"
                    : "rgba(255,255,255,0.08)",
                  background: tier.featured
                    ? "linear-gradient(180deg, rgba(229,67,255,0.10) 0%, rgba(229,67,255,0.05) 100%)"
                    : "var(--card)",
                  boxShadow: tier.featured
                    ? "0 0 0 1px rgba(229,67,255,0.15), 0 8px 32px rgba(229,67,255,0.15)"
                    : "0 1px 4px rgba(0,0,0,0.4)",
                }}
              >
                <div className="relative flex min-h-0 flex-1 flex-col">
                  <p className="text-2xl mb-1">{tier.emoji}</p>
                  <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                    {tier.name}
                  </h3>
                  <p className="mt-1 text-sm text-foreground/65">
                    {tier.tagline}
                  </p>

                  <div
                    className="mt-4 rounded-xl px-4 py-3 border"
                    style={{
                      borderColor: "rgba(229,67,255,0.18)",
                      background: "rgba(229,67,255,0.06)",
                    }}
                  >
                    <p className="text-xs text-foreground/50 mb-0.5">Earn</p>
                    <p
                      className="text-sm font-semibold"
                      style={{ color: ACCENT }}
                    >
                      {tier.earn}
                    </p>
                  </div>

                  <div className="mt-5 space-y-3">
                    {tier.features.map((f) => (
                      <div key={f} className="flex items-center gap-3">
                        <span
                          className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                          style={{ background: "rgba(229,67,255,0.15)" }}
                        >
                          <IconCheck
                            size={13}
                            stroke={2.5}
                            style={{ color: ACCENT }}
                          />
                        </span>
                        <span className="text-sm text-foreground/80">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative mt-8 sm:mt-auto sm:pt-9">
                  <a
                    href="#apply"
                    className="group/btn inline-flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-3.5 text-sm font-semibold text-white transition-all duration-300 ease-out sm:py-4 hover:-translate-y-0.5"
                    style={
                      tier.featured
                        ? {
                            ...primaryBtn,
                            border: "1px solid rgba(255,255,255,0.2)",
                          }
                        : {
                            background:
                              "linear-gradient(180deg, rgba(229,67,255,0.1) 0%, rgba(229,67,255,0.07) 100%)",
                            border: "1px solid rgba(229,67,255,0.25)",
                            color: ACCENT,
                          }
                    }
                  >
                    Apply Now
                    <IconArrowRight
                      size={16}
                      stroke={2.1}
                      className="transition-transform duration-300 ease-out group-hover/btn:translate-x-0.5"
                    />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="px-8 sm:px-16 py-10 sm:py-14">
        <div className="mb-8">
          <p
            className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-3"
            style={{ color: ACCENT }}
          >
            How It Works
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.08] tracking-tight text-foreground">
            From apply to earning in 4 steps.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {howSteps.map((item, i) => (
            <div
              key={item.step}
              className="relative rounded-2xl bg-card px-6 py-6 flex flex-col gap-3 overflow-hidden border transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[rgba(229,67,255,0.25)] hover:shadow-[0_0_28px_rgba(229,67,255,0.10)]"
              style={{
                borderColor:
                  activeStep === i
                    ? "rgba(229,67,255,0.22)"
                    : "rgba(255,255,255,0.07)",
              }}
            >
              <p
                className="text-4xl font-bold tracking-tight transition-all duration-500 ease-out"
                style={{
                  color: activeStep === i ? ACCENT : "rgba(229,67,255,0.18)",
                  textShadow:
                    activeStep === i
                      ? "0 0 24px rgba(229,67,255,0.55)"
                      : "none",
                  transform: activeStep === i ? "scale(1.08)" : "scale(1)",
                  transformOrigin: "left center",
                }}
              >
                {item.step}
              </p>
              <p className="text-base md:text-lg lg:text-xl font-semibold text-foreground leading-snug">
                {item.title}
              </p>
              <p className="text-sm md:text-base text-foreground/65 leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── EARNINGS CALCULATOR ─── */}
      <EarningsCalculator />

      {/* ─── OPEN MARKETS ─── */}
      <section className="px-8 sm:px-16 py-10 sm:py-14">
        <div className="mb-8">
          <p
            className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-3"
            style={{ color: ACCENT }}
          >
            Open Markets
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.08] tracking-tight text-foreground">
            Where we&apos;re hiring GTM partners now.
          </h2>
          <p className="mt-3 text-sm sm:text-base md:text-lg text-foreground/70 leading-relaxed max-w-xl">
            Priority markets are open. Apply now to secure your territory.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {markets.map((m) => {
            const isOpen = m.status === "Open Now";
            return (
              <div
                key={m.name}
                className="rounded-2xl bg-card px-5 py-5 flex items-center gap-4 border transition-all duration-300 ease-out hover:-translate-y-1"
                style={{
                  borderColor: isOpen
                    ? "rgba(229,67,255,0.18)"
                    : "rgba(255,255,255,0.07)",
                }}
              >
                <span className="text-3xl">{m.flag}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-foreground truncate">
                    {m.name}
                  </p>
                  <p
                    className="text-xs font-medium mt-0.5"
                    style={{
                      color: isOpen ? "#4ade80" : "rgba(240,240,248,0.4)",
                    }}
                  >
                    {m.status}
                  </p>
                </div>
                {isOpen && (
                  <span
                    className="inline-block h-2 w-2 rounded-full animate-pulse flex-shrink-0"
                    style={{ backgroundColor: "#4ade80" }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── APPLY FORM ─── */}
      <section id="apply" className="px-8 sm:px-16 py-10 sm:py-14">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8 text-center">
            <p
              className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-3"
              style={{ color: ACCENT }}
            >
              Apply
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.08] tracking-tight text-foreground">
              Your market. Your earning.
            </h2>
            <p className="mt-3 text-sm sm:text-base md:text-lg text-foreground/70 leading-relaxed max-w-xl mx-auto">
              Applications take under 5 minutes. We review every one personally
              and reply within 72 hours.
            </p>
          </div>
          <div
            className="rounded-[20px] sm:rounded-[30px] border px-5 py-6 sm:px-8 sm:py-10"
            style={{
              borderColor: "rgba(255,255,255,0.08)",
              background: "var(--card)",
            }}
          >
            <ApplyForm />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
