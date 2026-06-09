import { ReactNode } from "react"
import { ArrowRightIcon } from "@radix-ui/react-icons"
import { cn } from "@/lib/utils"

export interface BentoCardProps {
  name?: string
  description?: string
  className?: string
  background?: ReactNode
  href?: string
  cta?: string
  /** Use white text — set when card has a dark background */
  light?: boolean
  /** Show gradient scrim over background for text readability (default true) */
  scrim?: boolean
  /** Blur background by default, clear on hover (default true) */
  blur?: boolean
}

interface BentoGridProps {
  children?: ReactNode
  className?: string
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div className={cn("grid w-full auto-rows-[22rem] grid-cols-3 gap-4", className)}>
      {children}
    </div>
  )
}

export function BentoCard({
  name,
  description,
  className,
  background,
  href,
  cta,
  light = false,
  scrim = true,
  blur = true,
}: BentoCardProps) {
  const textColor = light ? "text-foreground" : "text-white"
  const mutedColor = light ? "text-foreground/55" : "text-white/60"
  const ctaColor = light ? "text-foreground/70 hover:bg-black/[0.04]" : "text-white/80 hover:bg-white/10"
  const hasCta = Boolean(href && cta)

  return (
    <div
      className={cn(
        "group relative col-span-3 flex flex-col justify-start overflow-hidden rounded-xl",
        "bg-[#141414] border border-white/[0.07]",
        className,
      )}
    >
      {/* Background — starts below the text area */}
      {background && (
        <div
          className={cn(
            "absolute inset-0 top-[185px] transform-gpu transition-all duration-300 ease-out",
            blur && "blur-[1px] group-hover:blur-none",
          )}
        >
          {background}
        </div>
      )}

      {/* Text content — slides up on hover to reveal CTA */}
      {(name || description) && (
        <div
          className={cn(
            "pointer-events-none relative z-10 flex flex-col gap-2 p-8 sm:p-8 transition-all duration-300 ease-out",
            hasCta && "group-hover:-translate-y-8",
          )}
        >
          {name && (
            <h3 className={cn("text-lg sm:text-xl font-semibold leading-snug", textColor)}>
              {name}
            </h3>
          )}
          {description && (
            <p className={cn("text-sm sm:text-base leading-relaxed", mutedColor)}>
              {description}
            </p>
          )}
        </div>
      )}

      {/* CTA — rises from below on hover */}
      {hasCta && (
        <div className="pointer-events-none absolute bottom-0 z-10 flex w-full translate-y-full items-center p-3 opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
          <a
            href={href}
            className={cn(
              "pointer-events-auto inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors",
              ctaColor,
            )}
          >
            {cta}
            <ArrowRightIcon className="h-3.5 w-3.5" />
          </a>
        </div>
      )}

      {/* Hover overlay */}
      <div className="pointer-events-none absolute inset-0 transition-all duration-300 group-hover:bg-black/[.02]" />
    </div>
  )
}
