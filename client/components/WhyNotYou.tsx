import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export default function WhyNotYou() {
  return (
    <section id="contact" className="px-8 py-12 sm:px-16 sm:py-18">
      <div className="grid gap-10 py-4 sm:gap-12 sm:py-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start lg:gap-14">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em]" style={{ color: "#E543FF" }}>
            Contact Digeto
          </p>
          <h2 className="text-3xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Your next market is{" "}
            <span style={{ color: "#E543FF" }}>14 days away.</span>
          </h2>
          <p className="mt-4 max-w-xl text-sm font-medium leading-relaxed text-foreground/60 md:text-base">
            Stop planning global expansion and start executing it. Send us your market, timeline, and ambition, and we&apos;ll get back to you directly.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
            <Link href="/book-a-call" className="font-semibold text-[#ff8cff] transition-colors hover:text-white">
              Prefer a live conversation? Book a call.
            </Link>
            <a href="#pricing" className="font-medium text-foreground/50 transition-colors hover:text-foreground">
              Explore the platform first
            </a>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
