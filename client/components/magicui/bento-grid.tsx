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
  const textColor = light ? "text-white" : "text-foreground"
  const mutedColor = light ? "text-white/70" : "text-foreground/55"
  const ctaColor = light ? "text-white/90 hover:bg-white/10" : "text-foreground/70 hover:bg-black/[0.04]"

  return (
    <div
      className={cn(
        "group relative col-span-3 flex flex-col justify-end overflow-hidden rounded-xl",
        "bg-card [box-shadow:0_0_0_1px_rgba(255,255,255,.04),0_2px_4px_rgba(0,0,0,.4),0_12px_24px_rgba(0,0,0,.4)]",
        className,
      )}
    >
      {/* Background */}
      {background && (
        <div
          className={cn(
            "absolute inset-0 transform-gpu transition-all duration-300 ease-out",
            blur && "blur-[1px] group-hover:blur-none",
          )}
        >
          {background}
        </div>
      )}

      {/* Gradient scrim for text readability */}
      {background && scrim && (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
      )}

      {/* Text content — slides up on hover to reveal CTA */}
      {(name || description) && (
        <div className="pointer-events-none relative z-10 flex flex-col gap-1 p-5 transition-all duration-300 ease-out group-hover:-translate-y-8">
          {name && (
            <h3 className={cn("text-base font-semibold leading-snug", textColor)}>
              {name}
            </h3>
          )}
          {description && (
            <p className={cn("text-sm leading-snug", mutedColor)}>
              {description}
            </p>
          )}
        </div>
      )}

      {/* CTA — rises from below on hover */}
      {href && cta && (
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
