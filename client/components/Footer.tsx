import Image from "next/image";
import Link from "next/link";

const contactItems = [
  { label: "Email", value: "deepak@digeto.io", href: "mailto:deepak@digeto.io" },
  { label: "Phone", value: "+91 974 152 1915", href: "tel:+919741521915" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.06)]">
      <div className="mx-auto max-w-[1400px] px-6 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.95fr)] lg:gap-16">
          <div className="max-w-2xl">
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-5">
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

        <div className="mt-8 flex flex-col gap-3 border-t border-[rgba(255,255,255,0.08)] pt-5 text-sm text-neutral-600 sm:mt-10 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
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
