import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowSquareOut } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Book a Call | Digeto",
  description: "Schedule a 30-minute call with Digeto.",
};

const calendlyUrl = "https://calendly.com/contact-digeto/30min";

export default function BookACallPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 12%, rgba(229,67,255,0.14) 0%, rgba(229,67,255,0.05) 42%, transparent 74%)",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-8 py-8 sm:px-16 sm:py-10">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
          >
            <ArrowLeft size={16} weight="bold" />
            Back to Digeto
          </Link>

          <a
            href={calendlyUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-foreground/70 transition-all hover:border-[rgba(229,67,255,0.32)] hover:text-foreground"
          >
            Open in Calendly
            <ArrowSquareOut size={15} weight="bold" />
          </a>
        </div>

        <div className="mx-auto mt-10 flex w-full max-w-3xl flex-col items-center text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: "#E543FF" }}>
            Book a Call
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Let&apos;s talk about your next market.
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-foreground/60 sm:text-base">
            Pick a 30-minute slot and we&apos;ll walk through your expansion goals, target markets, and whether Digeto is the right execution layer for your growth.
          </p>
        </div>

        <div className="relative mt-8 flex-1 rounded-[28px] border border-white/[0.08] bg-card/80 p-2 shadow-[0_0_0_1px_rgba(255,255,255,.03),0_18px_50px_rgba(0,0,0,.35)] backdrop-blur-sm">
          <iframe
            src={calendlyUrl}
            title="Book a call with Digeto"
            className="h-[72vh] min-h-[720px] w-full rounded-[22px] bg-white"
          />
        </div>
      </div>
    </main>
  );
}
