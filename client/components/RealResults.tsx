import { Marquee } from "@/components/ui/marquee";

type Testimonial = {
  quote: string;
  name: string;
  title: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Digeto didn't just give us a report; they gave us a revenue-generating engine in Tokyo. We saw a 300% increase in lead generation within two months.",
    name: "Sarah Chen",
    title: "VP Growth, TechNexus",
  },
  {
    quote:
      "The autonomous SDR operations are a game-changer. We entered the DACH region with zero German-speaking staff and closed our first enterprise deal in 45 days.",
    name: "Marcello Rossi",
    title: "CEO, DataFlow Systems",
  },
  {
    quote:
      "Navigating the regulatory landscape in Brazil seemed impossible until we used their Compliance Tech. They handled everything from fintech licensing to local GTM.",
    name: "Elena Rodriguez",
    title: "Founder, PayCloud",
  },
  {
    quote:
      "Their team translated a clear strategic vision into a site that genuinely reflects the Digeto brand. Working together felt seamless, focused, and highly productive.",
    name: "Raphaël Forner",
    title: "Creative Partner",
  },
  {
    quote:
      "Digeto combined constant support, real progress from day one, and a human-centered approach to growth. They became a strategic partner I could trust to move the vision forward.",
    name: "Aida Aicha Bodian",
    title: "Founder, Afrobloomy",
  },
];

function StarIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-3.5 w-3.5"
      aria-hidden="true"
    >
      <path
        d="M8.58737 8.23597L11.1849 3.00376C11.5183 2.33208 12.4817 2.33208 12.8151 3.00376L15.4126 8.23597L21.2215 9.08017C21.9668 9.18848 22.2638 10.0994 21.7243 10.6219L17.5217 14.6918L18.5135 20.4414C18.6409 21.1798 17.8614 21.7428 17.1945 21.3941L12 18.678L6.80547 21.3941C6.1386 21.7428 5.35909 21.1798 5.48645 20.4414L6.47825 14.6918L2.27575 10.6219C1.73617 10.0994 2.03322 9.18848 2.77852 9.08017L8.58737 8.23597Z"
        fill="currentColor"
      />
    </svg>
  );
}

function TestimonialCard({ quote, name, title }: Testimonial) {
  return (
    <figure
      className="relative w-[320px] shrink-0 overflow-hidden rounded-[24px] border px-5 py-5 sm:w-[340px]"
      style={{
        borderColor: "rgba(255,255,255,0.08)",
        background: "rgba(255,255,255,0.02)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)",
      }}
    >
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(229,67,255,0.5) 50%, transparent 100%)",
        }}
      />
      <div className="min-w-0">
        <div className="mb-4 flex items-center gap-1.5 text-[#E543FF]">
          {Array.from({ length: 5 }).map((_, index) => (
            <StarIcon key={index} />
          ))}
        </div>
        <p className="text-[0.97rem] leading-7 text-[#f0f0f0]">{quote}</p>
        <figcaption className="mt-5">
          <p className="text-[0.98rem] font-medium text-[#f0f0f0]">{name}</p>
          <p className="mt-1 text-sm text-neutral-500">{title}</p>
        </figcaption>
      </div>
    </figure>
  );
}

export default function RealResults() {
  return (
    <section className="overflow-hidden border-t border-[rgba(255,255,255,0.06)]">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-10 py-24 lg:py-32">
        <div className="max-w-2xl">
          <p className="text-xs font-medium tracking-[0.18em] text-neutral-500 uppercase mb-5">
            Real Results
          </p>
          <h2 className="text-4xl font-medium tracking-tight text-[#f0f0f0] sm:text-5xl leading-[1.1]">
            Founders Who <span style={{ color: "#E543FF" }}>Scaled Successfully.</span>
          </h2>
          <p className="mt-5 text-neutral-500 text-sm leading-7">
            100+ companies have used Digeto to unlock international growth and achieve global traction faster.
          </p>
        </div>

        <div className="relative mt-12">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#0a0a0c] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#0a0a0c] to-transparent" />

          <Marquee pauseOnHover repeat={8} className="[--duration:36s] [--gap:1.25rem]">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={`${testimonial.name}-${index}`}
                {...testimonial}
              />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
