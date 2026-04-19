import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.06)]">
      <div className="mx-auto max-w-[1400px] px-6 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-[1fr_auto] sm:items-center">
          <div className="flex flex-col gap-1.5">
            <Link href="/" className="inline-flex items-center shrink-0">
              <Image
                src="/assets/brand/digeto-logo-tag.svg"
                alt="Digeto logo"
                width={240}
                height={64}
                className="h-14 w-auto"
              />
            </Link>
          </div>

          <div className="flex flex-col gap-1 text-sm text-neutral-500 sm:items-end">
            <a
              href="mailto:contact@digeto.io"
              className="transition-colors hover:text-neutral-300"
            >
              contact@digeto.io
            </a>
            <a
              href="https://digeto.io"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-neutral-300"
            >
              digeto.io
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-[rgba(255,255,255,0.08)] pt-5 text-xs text-neutral-600 sm:mt-10 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <p>© 2026 Digeto. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="transition-colors hover:text-neutral-300">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="transition-colors hover:text-neutral-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
