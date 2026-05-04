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

const TAG_META = [
  { x:  0, rotate: -3   },
  { x: 16, rotate:  2   },
  { x: -8, rotate: -1.5 },
  { x:  8, rotate:  1   },
]

const W        = 316
const TAG_GAP  = 60
const BOX_TOP  = 282
const BOX_SIZE = 100
const SOL_TOP  = BOX_TOP + BOX_SIZE + 28
const HEIGHT   = SOL_TOP + 260

export function HeroProblemAnimation() {
  return (
    <div className="relative flex-shrink-0" style={{ width: W, height: HEIGHT }}>

      {/* Problem tags */}
      {PROBLEMS.map((text, i) => (
        <div
          key={i}
          className="absolute left-0 right-0 flex items-center gap-2.5 rounded-xl border border-white/[0.08] bg-card px-4 py-2.5 shadow-sm"
          style={{
            top: i * TAG_GAP,
            transform: `translateX(${TAG_META[i].x}px) rotate(${TAG_META[i].rotate}deg)`,
          }}
        >
          <span className="flex-shrink-0 w-4 h-4 flex items-center justify-center rounded-full bg-white/[0.08] text-[9px] font-bold text-foreground/50">
            ✕
          </span>
          <span className="text-sm font-medium text-foreground/50 leading-snug">{text}</span>
        </div>
      ))}

      {/* Digeto box */}
      <div
        className="absolute left-1/2 -translate-x-1/2 rounded-2xl bg-card flex items-center justify-center"
        style={{
          top: BOX_TOP,
          width: BOX_SIZE,
          height: BOX_SIZE,
          border: "1px solid rgba(229,67,255,0.3)",
          boxShadow: "0 0 48px rgba(229,67,255,0.4), 0 0 96px rgba(229,67,255,0.16)",
        }}
      >
        <Image src="/assets/brand/digeto-fav.svg" alt="Digeto" width={60} height={60} />
      </div>

      {/* Solution tags — flex column for equal gaps regardless of text wrapping */}
      <div className="absolute left-0 right-0 flex flex-col gap-3" style={{ top: SOL_TOP }}>
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
            <span className="text-sm font-semibold leading-snug">{text}</span>
          </div>
        ))}
      </div>

    </div>
  )
}
