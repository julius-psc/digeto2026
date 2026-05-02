import Image from "next/image";

const partners = [
  { name: "Founders Institute", icon: "/assets/icons/founders-institute.svg" },
  { name: "Let's VAI",          icon: "/assets/icons/lets-vai.svg" },
  { name: "T-Hub",              icon: "/assets/icons/t-hub.svg" },
  { name: "LVL Up",             icon: "/assets/icons/lvlUp.svg" },
];

export default function TrustedBy() {
  return (
    <section>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-12 sm:py-16">
        <div className="flex flex-col items-center">
          <p className="text-xs sm:text-sm font-medium tracking-[0.18em] text-foreground/40 uppercase">
            They trusted us
          </p>
          <div className="mt-8 grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-6 sm:gap-x-10 sm:gap-y-6">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="group inline-flex cursor-pointer items-center gap-2.5 sm:gap-3 text-foreground/40 transition-colors duration-300 ease-out hover:text-foreground justify-center"
              >
                <Image
                  src={partner.icon}
                  alt={partner.name}
                  width={40}
                  height={40}
                  className="h-7 sm:h-8 w-auto object-contain opacity-40 grayscale transition-all duration-300 ease-out group-hover:opacity-100 group-hover:grayscale-0"
                />
                <span className="text-sm sm:text-base font-medium tracking-[0.01em]">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
