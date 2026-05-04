import Image from "next/image"

const PROBLEMS = [
  "18 months to build a regional sales team",
  "€200k+ locked into fixed regional overhead",
  "Consultants deliver decks. Not deals.",
  "GTM Tools give you data. Not revenue.",
]

const SOLUTIONS = [
  "Generating pipeline in your first market within 30 days",
  "AI that finds, qualifies and sequences your best prospects",
  "Local closers who speak the language and win the deal",
  "Full execution & accountability from first lead to signed contract",
]

const TAG_ROTATIONS = [-2, 1.5, -1, 2]

export function HeroProblemAnimation() {
  return (
    <div className="flex items-center gap-6 w-full">

      {/* Problem tags — left */}
      <div className="flex flex-col gap-3 flex-1 min-w-0">
        {PROBLEMS.map((text, i) => (
          <div
            key={i}
            className="flex items-center gap-2.5 rounded-xl border border-white/[0.08] bg-card px-4 py-2.5 shadow-sm"
            style={{ transform: `rotate(${TAG_ROTATIONS[i]}deg)` }}
          >
            <span className="flex-shrink-0 w-4 h-4 flex items-center justify-center rounded-full bg-white/[0.08] text-[9px] font-bold text-foreground/50">
              ✕
            </span>
            <span className="text-xs sm:text-sm font-medium text-foreground/50 leading-snug">{text}</span>
          </div>
        ))}
      </div>

      {/* Digeto box — center */}
      <div
        className="flex-shrink-0 rounded-2xl bg-card flex items-center justify-center"
        style={{
          width: 88,
          height: 88,
          border: "1px solid rgba(229,67,255,0.3)",
          boxShadow: "0 0 48px rgba(229,67,255,0.4), 0 0 96px rgba(229,67,255,0.16)",
        }}
      >
        <Image src="/assets/brand/digeto-fav.svg" alt="Digeto" width={52} height={52} />
      </div>

      {/* Solution tags — right */}
      <div className="flex flex-col gap-3 flex-1 min-w-0">
        {SOLUTIONS.map((text, i) => (
          <div
            key={i}
            className="flex items-center gap-2.5 rounded-xl bg-card px-4 py-2.5"
            style={{
              border: "1px solid rgba(229,67,255,0.25)",
              color: "#E543FF",
            }}
          >
            <span
              className="flex-shrink-0 w-4 h-4 flex items-center justify-center rounded-full text-white text-[9px] font-bold"
              style={{ backgroundColor: "#E543FF" }}
            >
              ✓
            </span>
            <span className="text-xs sm:text-sm font-semibold leading-snug">{text}</span>
          </div>
        ))}
      </div>

    </div>
  )
}
