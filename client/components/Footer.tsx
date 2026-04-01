import Image from "next/image";
import Link from "next/link";

const contactItems = [
  { label: "Email", value: "contact@digeto.io", href: "mailto:contact@digeto.io" },
  {
    label: "Headquarters",
    value: "Station F, 75013 Paris, France",
    href: "https://www.google.com/maps/search/?api=1&query=Station+F%2C+75013+Paris%2C+France",
    external: true,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.06)]">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-10 py-14 lg:py-14">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.95fr)] lg:gap-16">
          <div className="max-w-2xl">
            <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
              <Link href="/" className="inline-flex items-center shrink-0">
                <Image
                  src="/assets/brand/digeto-horizontal-logo.svg"
                  alt="Digeto logo"
                  width={144}
                  height={38}
                  className="h-9 w-auto"
                />
              </Link>

              <p className="max-w-md text-sm leading-7 text-neutral-500">
                International GTM execution for founders ready to unlock global traction with more speed, clarity, and credibility.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-10">
              {contactItems.map((item) => (
                <div key={item.label}>
                  <p className="text-xs uppercase tracking-[0.18em] text-neutral-600">
                    {item.label}
                  </p>
                  <a
                    href={item.href}
                    {...(item.external ? { target: "_blank", rel: "noreferrer" } : {})}
                    className="mt-2 inline-block text-sm leading-7 text-neutral-300 transition-colors hover:text-white"
                  >
                    {item.value}
                  </a>
                </div>
              ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-[rgba(255,255,255,0.08)] pt-5 text-sm text-neutral-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Digeto. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-neutral-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="transition-colors hover:text-neutral-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
