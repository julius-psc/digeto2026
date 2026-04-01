const partners = [
  {
    name: "Founders Institute",
    icon: "/assets/icons/founders-institute.svg",
  },
  {
    name: "Let's VAI",
    icon: "/assets/icons/lets-vai.svg",
  },
  {
    name: "T-Hub",
    icon: "/assets/icons/t-hub.svg",
  },
  {
    name: "LVL Up",
    icon: "/assets/icons/lvlUp.svg",
  },
];

export default function TrustedBy() {
  return (
    <section className="border-t border-[rgba(255,255,255,0.06)]">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-10 py-10 lg:py-12">
        <div className="flex flex-col items-center">
          <p className="text-sm text-neutral-500">Trusted by teams around the world</p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-7 gap-y-4">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="group inline-flex cursor-pointer items-center gap-3 text-neutral-500 transition-colors duration-300 ease-out hover:text-[#f0f0f0]"
              >
                <img
                  src={partner.icon}
                  alt=""
                  className="h-10 w-auto object-contain opacity-60 grayscale transition-all duration-300 ease-out group-hover:opacity-100 group-hover:grayscale-0"
                />
                <span className="text-[1.1rem] font-medium tracking-[0.01em]">
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
