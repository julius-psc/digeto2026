"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  GraduationCap,
  Timer,
  Robot,
  BookOpen,
  IdentificationCard,
  Desktop,
  Globe,
  TrendUp,
  Buildings,
  ShoppingBag,
} from "@phosphor-icons/react/dist/ssr";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ─── constants ─── */
const ACCENT = "#E543FF";

const primaryBtn: React.CSSProperties = {
  background: "linear-gradient(180deg, #ee55ff 0%, #e543ff 100%)",
  boxShadow:
    "0 1px 0 #be2edb, 0 2px 4px rgba(9,9,11,0.08), 0 4px 8px rgba(9,9,11,0.16), inset 0 1px 2px rgba(255,255,255,0.16)",
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

/* ─── data ─── */

const whoCards = [
  {
    icon: <Briefcase size={24} weight="duotone" style={{ color: ACCENT }} />,
    title: "Sales Professionals",
    body: "Put your network and experience to work. Represent Digeto and our client portfolio in your market. Close deals, earn commission.",
  },
  {
    icon: <GraduationCap size={24} weight="duotone" style={{ color: ACCENT }} />,
    title: "Fresh Graduates",
    body: "Want real-world sales experience with a global brand behind you? Start here. Full training provided. No prior experience needed.",
  },
  {
    icon: <Timer size={24} weight="duotone" style={{ color: ACCENT }} />,
    title: "Side Income Seekers",
    body: "Already working? Join in your spare time. No minimum hours. Sell when it works for you and earn commission on every deal.",
  },
];

const howSteps = [
  { step: "01", title: "Apply Online", body: "Fill in the form below. Takes under 5 minutes. Fully remote." },
  { step: "02", title: "Get Selected", body: "We review every application and reply within 72 hours." },
  { step: "03", title: "Online Training", body: "Access our partner training portal. Learn our products and process at your own pace." },
  { step: "04", title: "Start Selling", body: "Use your network and our AI-powered tools to generate leads and close deals." },
  { step: "05", title: "Get Paid", body: "10% commission on every sale, paid monthly. No cap." },
];

const whatYouGetCards = [
  {
    icon: <Robot size={24} weight="duotone" style={{ color: ACCENT }} />,
    title: "AI-Powered Sales Tools",
    body: "Access Digeto's AI engine for lead generation, ICP targeting, and outbound sequences. You show up to close, not to prospect.",
  },
  {
    icon: <BookOpen size={24} weight="duotone" style={{ color: ACCENT }} />,
    title: "Online Training Program",
    body: "Full onboarding and product training delivered online before you start. Learn at your own pace, on any device.",
  },
  {
    icon: <IdentificationCard size={24} weight="duotone" style={{ color: ACCENT }} />,
    title: "Official Business Card",
    body: "Digital and physical Digeto business cards. Walk into meetings as a Digeto representative with a global brand behind you.",
  },
  {
    icon: <Desktop size={24} weight="duotone" style={{ color: ACCENT }} />,
    title: "Digeto Workspace Access",
    body: "Full access to our internal workspace, collaboration tools, CRM, and partner portal. You're inside the organisation.",
  },
  {
    icon: <Globe size={24} weight="duotone" style={{ color: ACCENT }} />,
    title: "Regional Pod Support",
    body: "Work within your regional pod. Get support from the local team lead, share market intelligence, and collaborate on deals.",
  },
  {
    icon: <TrendUp size={24} weight="duotone" style={{ color: ACCENT }} />,
    title: "Grow Your Tier",
    body: "Consistent performers move up. Regional Lead and Strategic Ally tiers unlock higher rates, overrides, and exclusive benefits.",
  },
];

const availabilityOptions = ["Full time", "Part time", "Flexible"];
const profileOptions = ["Sales professional", "Fresh graduate", "Entrepreneur", "Other"];

/* ─── Apply Form ─── */

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  linkedin: string;
  availability: string;
  profile: string;
  background: string;
};

const initialFormState: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  country: "",
  linkedin: "",
  availability: "",
  profile: "",
  background: "",
};

function ApplyForm() {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "idle" | "success" | "error"; message: string }>({
    type: "idle",
    message: "",
  });

  function updateField<K extends keyof FormState>(field: K, value: FormState[K]) {
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
          company: `Phone: ${form.phone} | Country: ${form.country} | LinkedIn: ${form.linkedin} | Availability: ${form.availability} | Profile: ${form.profile}`,
          message: `[GTM Partner Application]\n\n${form.background}`,
        }),
      });

      const data = (await response.json()) as { error?: string; message?: string };

      if (!response.ok) throw new Error(data.error ?? "Something went wrong.");

      setStatus({ type: "success", message: "Application received. We'll be in touch within 72 hours." });
      setForm(initialFormState);
    } catch (error) {
      setStatus({
        type: "error",
        message: error instanceof Error ? error.message : "We couldn't send your application.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  const inputClass =
    "h-12 w-full rounded-xl border border-[rgba(229,67,255,0.25)] bg-[rgba(229,67,255,0.03)] px-4 text-sm text-foreground outline-none transition-colors placeholder:text-foreground/30 focus:border-[#E543FF] focus:ring-2 focus:ring-[#E543FF]/15";

  const selectClass =
    "h-12 w-full rounded-xl border border-[rgba(229,67,255,0.25)] bg-[rgba(229,67,255,0.03)] px-4 text-sm text-foreground outline-none transition-colors focus:border-[#E543FF] focus:ring-2 focus:ring-[#E543FF]/15 appearance-none cursor-pointer";

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2">
          <span className="text-sm font-medium text-foreground/70">First Name</span>
          <input type="text" value={form.firstName} onChange={(e) => updateField("firstName", e.target.value)} placeholder="Jane" required className={inputClass} />
        </label>
        <label className="grid gap-2">
          <span className="text-sm font-medium text-foreground/70">Last Name</span>
          <input type="text" value={form.lastName} onChange={(e) => updateField("lastName", e.target.value)} placeholder="Doe" required className={inputClass} />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2">
          <span className="text-sm font-medium text-foreground/70">Email Address</span>
          <input type="email" value={form.email} onChange={(e) => updateField("email", e.target.value)} placeholder="jane@email.com" required className={inputClass} />
        </label>
        <label className="grid gap-2">
          <span className="text-sm font-medium text-foreground/70">Phone / WhatsApp</span>
          <input type="tel" value={form.phone} onChange={(e) => updateField("phone", e.target.value)} placeholder="+1 234 567 8900" required className={inputClass} />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2">
          <span className="text-sm font-medium text-foreground/70">Country</span>
          <input type="text" value={form.country} onChange={(e) => updateField("country", e.target.value)} placeholder="France" required className={inputClass} />
        </label>
        <label className="grid gap-2">
          <span className="text-sm font-medium text-foreground/70">LinkedIn Profile</span>
          <input type="url" value={form.linkedin} onChange={(e) => updateField("linkedin", e.target.value)} placeholder="https://linkedin.com/in/janedoe" required className={inputClass} />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2">
          <span className="text-sm font-medium text-foreground/70">Availability</span>
          <select value={form.availability} onChange={(e) => updateField("availability", e.target.value)} required className={selectClass}>
            <option value="" disabled>Select availability</option>
            {availabilityOptions.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </label>
        <label className="grid gap-2">
          <span className="text-sm font-medium text-foreground/70">Profile</span>
          <select value={form.profile} onChange={(e) => updateField("profile", e.target.value)} required className={selectClass}>
            <option value="" disabled>Select your profile</option>
            {profileOptions.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </label>
      </div>

      <label className="grid gap-2">
        <span className="text-sm font-medium text-foreground/70">Background and Why You Want to Join</span>
        <textarea
          value={form.background}
          onChange={(e) => updateField("background", e.target.value)}
          placeholder="Tell us about yourself and why you want to join the Digeto GTM Partner network."
          required
          rows={5}
          className="w-full rounded-xl border border-[rgba(229,67,255,0.25)] bg-[rgba(229,67,255,0.03)] px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-foreground/30 focus:border-[#E543FF] focus:ring-2 focus:ring-[#E543FF]/15"
        />
      </label>

      <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-white/25 px-6 text-sm font-semibold text-white transition-all duration-200 ease-out hover:-translate-y-px active:translate-y-px disabled:cursor-not-allowed disabled:opacity-70"
          style={primaryBtn}
        >
          {isSubmitting ? "Submitting..." : "Submit Application"}
          {!isSubmitting && <ArrowRight weight="bold" size={14} />}
        </button>
        <p className="text-sm text-foreground/45">Free to join. No commitment. Your data is kept confidential.</p>
      </div>

      {status.type !== "idle" && (
        <p className={`text-sm ${status.type === "success" ? "text-[#ff8cff]" : "text-red-400"}`} role="status">
          {status.message}
        </p>
      )}
    </form>
  );
}

/* ─── PAGE ─── */

export default function GTMPartnersPage() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % howSteps.length);
    }, 1600);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero + Navbar inside FlickeringGrid */}
      <div className="relative">
        <FlickeringGrid
          className="pointer-events-none absolute inset-0 z-0"
          squareSize={3}
          gridGap={8}
          color="#E543FF"
          maxOpacity={0.28}
          flickerChance={0.18}
        />
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={{ maskImage: "radial-gradient(ellipse 70% 90% at 50% 35%, black 30%, transparent 100%)" }}
        />
        <div className="relative z-10">
          <Navbar cta={{ label: "Apply Now", href: "#apply" }} />

          <section className="px-8 sm:px-16 pt-24 sm:pt-28 pb-6 sm:pb-10">
            <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
              <div className="inline-flex items-center gap-3 rounded-full px-4 py-1.5 mb-8" style={{ background: "rgba(229,67,255,0.12)" }}>
                <span className="relative flex-shrink-0 flex items-center justify-center w-3.5 h-3.5 -ml-1">
                  <span className="absolute inline-block w-3.5 h-3.5 rounded-full" style={{ backgroundColor: "rgba(229,67,255,0.30)" }} />
                  <span className="relative inline-block w-2 h-2 rounded-full" style={{ backgroundColor: ACCENT }} />
                </span>
                <p className="text-sm font-semibold tracking-[0.08em]" style={{ color: ACCENT }}>
                  Now Recruiting Globally
                </p>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.08] text-foreground">
                Sell globally.{" "}
                <span style={{ color: ACCENT }}>Earn on your terms.</span>
              </h1>

              <p className="mt-5 text-sm sm:text-base lg:text-lg font-medium text-foreground/60 leading-relaxed max-w-2xl mx-auto">
                Join Digeto&apos;s GTM Partner network. Use your skills and network to open doors for startups worldwide, full time or in your spare time. Commission on every sale.
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="#apply"
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-4 sm:px-5 py-2.5 text-sm font-semibold text-white border border-white/25 whitespace-nowrap transition-all duration-200 ease-out hover:-translate-y-px active:translate-y-px"
                  style={primaryBtn}
                >
                  Apply in 5 minutes
                  <ArrowRight weight="bold" size={14} />
                </a>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center gap-1.5 rounded-xl px-4 sm:px-5 py-2.5 text-sm font-semibold whitespace-nowrap transition-all duration-200 ease-out hover:-translate-y-px active:translate-y-px"
                  style={{ border: "1px solid rgba(229,67,255,0.35)", color: ACCENT }}
                >
                  How it works
                  <ArrowRight weight="bold" size={14} />
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* ─── STATS ─── */}
      <section className="px-8 sm:px-16 py-10 sm:py-14">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-8 sm:gap-0 sm:divide-x sm:divide-foreground/[0.08]">
          {[
            { stat: "10%",  label: "Commission on every sale" },
            { stat: "8+",   label: "Markets open worldwide" },
            { stat: "€0",   label: "Cost to join" },
            { stat: "100%", label: "Fully remote. Apply online." },
          ].map((m, i) => (
            <div
              key={m.stat}
              className={`flex flex-col gap-1.5 text-center ${i > 0 ? "sm:pl-12" : ""} ${i < 3 ? "sm:pr-12" : ""}`}
            >
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight" style={{ color: ACCENT }}>
                {m.stat}
              </p>
              <p className="text-sm sm:text-base text-foreground/50">{m.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── WHO CAN JOIN (black) ─── */}
      <section className="px-8 sm:px-16 py-10 sm:py-14" style={{ background: "#0A0A0A" }}>
        <div className="mb-8">
          <p className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-3" style={{ color: ACCENT }}>
            Who Can Join
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.08] tracking-tight text-white">
            Open to everyone with drive.
          </h2>
          <p className="mt-3 text-sm sm:text-base md:text-lg text-white/60 leading-relaxed max-w-xl">
            No geography. No age limit. No fixed schedule required.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {whoCards.map((card, i) => (
            <motion.div
              key={card.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-2xl px-6 py-7 flex flex-col gap-3 border transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[rgba(229,67,255,0.25)] hover:shadow-[0_0_28px_rgba(229,67,255,0.10)]"
              style={{ background: "#141414", borderColor: "rgba(255,255,255,0.07)" }}
            >
              <span className="flex-shrink-0">{card.icon}</span>
              <p className="text-base md:text-lg font-semibold text-white leading-snug">{card.title}</p>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">{card.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section id="how-it-works" className="px-8 sm:px-16 py-10 sm:py-14">
        <div className="mb-8">
          <p className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-3" style={{ color: ACCENT }}>
            How It Works
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.08] tracking-tight text-foreground">
            From apply to earning in days, not months.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {howSteps.map((item, i) => (
            <div
              key={item.step}
              className="relative rounded-2xl bg-card px-6 py-6 flex flex-col gap-3 overflow-hidden border transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[rgba(229,67,255,0.25)] hover:shadow-[0_0_28px_rgba(229,67,255,0.10)]"
              style={{ borderColor: activeStep === i ? "rgba(229,67,255,0.22)" : "rgba(0,0,0,0.08)" }}
            >
              <p
                className="text-4xl font-bold tracking-tight transition-all duration-500 ease-out"
                style={{
                  color: activeStep === i ? ACCENT : "rgba(229,67,255,0.18)",
                  textShadow: activeStep === i ? "0 0 24px rgba(229,67,255,0.55)" : "none",
                  transform: activeStep === i ? "scale(1.08)" : "scale(1)",
                  transformOrigin: "left center",
                }}
              >
                {item.step}
              </p>
              <p className="text-base font-semibold text-foreground leading-snug">{item.title}</p>
              <p className="text-sm md:text-base text-foreground/65 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── WHAT YOU'LL SELL (black) ─── */}
      <section className="px-8 sm:px-16 py-10 sm:py-14" style={{ background: "#0A0A0A" }}>
        <div className="mb-8">
          <p className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-3" style={{ color: ACCENT }}>
            What You&apos;ll Sell
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.08] tracking-tight text-white">
            Two powerful revenue streams.
          </h2>
          <p className="mt-3 text-sm sm:text-base md:text-lg text-white/60 leading-relaxed max-w-xl">
            You choose which to focus on. Or do both.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
          <div
            className="rounded-2xl px-6 py-7 flex flex-col gap-4 border"
            style={{ background: "#141414", borderColor: "rgba(255,255,255,0.07)" }}
          >
            <span className="flex-shrink-0">
              <Buildings size={24} weight="duotone" style={{ color: ACCENT }} />
            </span>
            <p className="text-lg font-semibold text-white leading-snug">Acquire clients for Digeto</p>
            <p className="text-sm md:text-base text-white/60 leading-relaxed">
              Introduce startups and SMEs to Digeto&apos;s global sales infrastructure. Help them go international. You earn when they sign.
            </p>
          </div>

          <div
            className="rounded-2xl px-6 py-7 flex flex-col gap-4 border"
            style={{ background: "#141414", borderColor: "rgba(255,255,255,0.07)" }}
          >
            <span className="flex-shrink-0">
              <ShoppingBag size={24} weight="duotone" style={{ color: ACCENT }} />
            </span>
            <p className="text-lg font-semibold text-white leading-snug">Sell for our clients</p>
            <p className="text-sm md:text-base text-white/60 leading-relaxed">
              Digeto&apos;s client portfolio includes innovative products and services across sectors. Sell them into your market and earn on every deal closed.
            </p>
          </div>

          <div
            className="rounded-2xl px-6 py-7 flex flex-col gap-4 border"
            style={{
              borderColor: "rgba(229,67,255,0.30)",
              background: "linear-gradient(135deg, rgba(229,67,255,0.10) 0%, rgba(229,67,255,0.04) 100%)",
              boxShadow: "0 0 32px rgba(229,67,255,0.10)",
            }}
          >
            <p className="text-4xl font-bold tracking-tight" style={{ color: ACCENT }}>10%</p>
            <p className="text-lg font-semibold text-white">Commission on every sale</p>
            <div className="flex flex-col gap-2">
              {[
                "Paid monthly. No delays.",
                "No cap on earnings",
                "Commission on all Digeto revenue generated",
                "Scale up to higher partner tiers over time",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <span className="mt-0.5 text-xs font-bold flex-shrink-0" style={{ color: ACCENT }}>✓</span>
                  <span className="text-sm text-white/70">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHAT YOU GET ─── */}
      <section className="px-8 sm:px-16 py-10 sm:py-14">
        <div className="mb-8">
          <p className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-3" style={{ color: ACCENT }}>
            What You Get
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.08] tracking-tight text-foreground">
            You&apos;re not a freelancer.{" "}
            <span style={{ color: ACCENT }}>You&apos;re part of the team.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base md:text-lg text-foreground/70 leading-relaxed max-w-xl">
            Partners are fully embedded in Digeto, with all the tools, brand, and backing to sell with confidence.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {whatYouGetCards.map((card, i) => (
            <motion.div
              key={card.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-2xl bg-card px-6 py-6 flex flex-col gap-3 border border-foreground/[0.07] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[rgba(229,67,255,0.25)] hover:shadow-[0_0_28px_rgba(229,67,255,0.08)]"
            >
              <span className="flex-shrink-0">{card.icon}</span>
              <p className="text-base md:text-lg font-semibold text-foreground leading-snug">{card.title}</p>
              <p className="text-sm md:text-base text-foreground/65 leading-relaxed">{card.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── IMPACT ─── */}
      <section className="px-8 sm:px-16 py-10 sm:py-14" style={{ background: "#0A0A0A" }}>
        <div className="mb-8">
          <p className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-3" style={{ color: ACCENT }}>
            Impact
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.08] tracking-tight text-white">
            Every sale helps a small business go global.
          </h2>
          <p className="mt-3 text-sm sm:text-base md:text-lg text-white/60 leading-relaxed max-w-2xl">
            Digeto&apos;s mission is to give 1,000+ small businesses access to global markets they could never reach alone. When you close a deal, you&apos;re not just earning. You&apos;re creating real economic impact across the world.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-start gap-8 sm:gap-0 sm:divide-x sm:divide-white/[0.08]">
          {[
            { stat: "1,000+", label: "SMEs we aim to scale globally" },
            { stat: "12+",    label: "Countries already active" },
            { stat: "30+",    label: "Jobs created in the network" },
          ].map((m, i) => (
            <div key={m.stat} className={`flex flex-col gap-1.5 ${i > 0 ? "sm:pl-12" : ""} ${i < 2 ? "sm:pr-12" : ""}`}>
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight" style={{ color: ACCENT }}>
                {m.stat}
              </p>
              <p className="text-sm sm:text-base text-white/50">{m.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── APPLY ─── */}
      <section id="apply" className="px-8 sm:px-16 py-10 sm:py-14">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8 text-center">
            <p className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-3" style={{ color: ACCENT }}>
              Apply Now
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.08] tracking-tight text-foreground">
              Ready to start?
            </h2>
            <p className="mt-3 text-sm sm:text-base md:text-lg text-foreground/70 leading-relaxed max-w-xl mx-auto">
              Takes under 5 minutes. Fully online. We reply within 72 hours.
            </p>
          </div>
          <ApplyForm />
        </div>
      </section>

      <Footer />
    </>
  );
}
