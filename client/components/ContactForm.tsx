"use client";

import { useState } from "react";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

type FormState = {
  name: string;
  email: string;
  company: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "idle" | "success" | "error"; message: string }>({
    type: "idle",
    message: "",
  });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = (await response.json()) as { error?: string; message?: string };

      if (!response.ok) {
        throw new Error(data.error ?? "Something went wrong.");
      }

      setStatus({
        type: "success",
        message: data.message ?? "Thanks. Your message is on its way to Digeto.",
      });
      setForm(initialState);
    } catch (error) {
      setStatus({
        type: "error",
        message: error instanceof Error ? error.message : "We couldn't send your message.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  function updateField<K extends keyof FormState>(field: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 sm:gap-6">
      <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
        <label className="grid gap-2.5">
          <span className="text-sm font-medium text-foreground/72">Name</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            placeholder="Jane Doe"
            required
            className="h-12 rounded-2xl border border-white/[0.08] bg-white/[0.03] px-4 text-sm text-foreground outline-none transition-colors placeholder:text-foreground/25 focus:border-[#E543FF] focus:ring-2 focus:ring-[#E543FF]/20"
          />
        </label>
        <label className="grid gap-2.5">
          <span className="text-sm font-medium text-foreground/72">Work email</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            placeholder="jane@company.com"
            required
            className="h-12 rounded-2xl border border-white/[0.08] bg-white/[0.03] px-4 text-sm text-foreground outline-none transition-colors placeholder:text-foreground/25 focus:border-[#E543FF] focus:ring-2 focus:ring-[#E543FF]/20"
          />
        </label>
      </div>

      <label className="grid gap-2.5">
        <span className="text-sm font-medium text-foreground/72">Company</span>
        <input
          type="text"
          name="company"
          value={form.company}
          onChange={(event) => updateField("company", event.target.value)}
          placeholder="Your company"
          className="h-12 rounded-2xl border border-white/[0.08] bg-white/[0.03] px-4 text-sm text-foreground outline-none transition-colors placeholder:text-foreground/25 focus:border-[#E543FF] focus:ring-2 focus:ring-[#E543FF]/20"
        />
      </label>

      <label className="grid gap-2.5">
        <span className="text-sm font-medium text-foreground/72">What are you trying to unlock?</span>
        <textarea
          name="message"
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          placeholder="Tell us which market, timeline, or revenue goal you're targeting."
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
          style={{
            background: "linear-gradient(180deg, #ee55ff 0%, #e543ff 100%)",
            boxShadow: "0 1px 0 #be2edb, 0 2px 4px rgba(9,9,11,0.08), 0 4px 8px rgba(9,9,11,0.16), inset 0 1px 2px rgba(255,255,255,0.16)",
          }}
        >
          {isSubmitting ? "Sending..." : "Contact Digeto"}
          {!isSubmitting && <ArrowRight weight="bold" size={14} />}
        </button>

        <p className="text-sm text-foreground/45">
          Messages go directly to{" "}
          <span className="font-medium text-foreground/72">contact@digeto.io</span>.
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
