import {
  Megaphone,
  ChartBar,
  Kanban,
  UsersThree,
  HandCoins,
  TreeStructure,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";

type Feature = {
  Icon: Icon;
  title: string;
  desc: string;
};

const features: Feature[] = [
  {
    Icon: Megaphone,
    title: "Done-for-you outbound",
    desc: "SDR execution at scale. No hiring required. We run the full outbound motion on your behalf.",
  },
  {
    Icon: ChartBar,
    title: "Market intelligence",
    desc: "We identify where and who to target using real-time data and proprietary ICP analysis.",
  },
  {
    Icon: Kanban,
    title: "Pipeline and CRM",
    desc: "Full visibility from first contact to closed deal. Every stage tracked and managed for you.",
  },
  {
    Icon: UsersThree,
    title: "Local execution pods",
    desc: "Native speakers, local networks, real trust. We put humans on the ground in your target markets.",
  },
  {
    Icon: HandCoins,
    title: "Fundraising support",
    desc: "Access to 300+ investors. For startups raising capital while expanding internationally.",
  },
  {
    Icon: TreeStructure,
    title: "Global partner network",
    desc: "20+ strategic ecosystem partners across the world, opening doors in every region we enter.",
  },
];

export default function Market() {
  return (
    <section id="product" className="border-t border-[rgba(255,255,255,0.06)]">
      <div className="mx-auto max-w-[1400px] px-6 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-16">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-medium tracking-[0.18em] text-neutral-500 uppercase mb-5">
            What We Do
          </p>
          <h2 className="text-[2.6rem] font-medium leading-[1.04] tracking-tight text-[#f0f0f0] sm:text-5xl sm:leading-[1.1]">
            Full execution.{" "}
            <span style={{ color: "#E543FF" }}>Zero overhead.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ Icon, title, desc }) => (
            <div
              key={title}
              className="flex flex-col gap-6 rounded-2xl border p-7 sm:p-8"
              style={{
                borderColor: "rgba(229,67,255,0.14)",
                background:
                  "linear-gradient(160deg, rgba(255,255,255,0.03) 0%, rgba(229,67,255,0.05) 100%)",
                boxShadow: "inset 0 1px 0 rgba(229,67,255,0.08)",
              }}
            >
              <div
                className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                style={{
                  background: "rgba(229,67,255,0.12)",
                  border: "1px solid rgba(229,67,255,0.18)",
                }}
              >
                <Icon size={24} weight="duotone" color="#E543FF" />
              </div>
              <div className="flex flex-col gap-2.5">
                <p className="text-base font-semibold text-[#f0f0f0]">{title}</p>
                <p className="text-base leading-7 text-neutral-500">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
