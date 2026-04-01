export default function DashboardPreview() {
  return (
    <div className="relative w-full">
      <div className="absolute inset-x-16 -top-4 h-16 rounded-full bg-[radial-gradient(circle,rgba(229,67,255,0.09),transparent_68%)] blur-3xl" />

      <div className="relative overflow-hidden rounded-[16px] border border-[rgba(255,255,255,0.08)] bg-[#111113] shadow-[0_18px_60px_rgba(0,0,0,0.5)]">
        <div className="border-b border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] px-4 py-4 backdrop-blur-xl sm:px-5">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5">
              <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
              <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
              <span className="h-3 w-3 rounded-full bg-[#28C840]" />
            </div>

            <div className="text-[11px] font-normal tracking-[0.01em] text-neutral-500 sm:text-xs">
              app.digeto.io
            </div>

            <div className="w-[52px]" />
          </div>
        </div>

        <div className="grid min-h-[400px] grid-cols-[160px_1fr] bg-[#111113]">
          <aside className="border-r border-[rgba(255,255,255,0.06)] bg-[#111113] px-4 py-4">
            <div className="mb-6 h-3 w-16 rounded-full bg-[#27272a]" />

            <div className="space-y-2">
              <div className="rounded-lg border border-[rgba(255,255,255,0.08)] bg-[#18181b] px-3 py-2">
                <div className="h-2.5 w-14 rounded-full bg-[#2e2e34]" />
              </div>
              <div className="rounded-lg px-3 py-2">
                <div className="h-2.5 w-12 rounded-full bg-[#27272a]" />
              </div>
              <div className="rounded-lg px-3 py-2">
                <div className="h-2.5 w-16 rounded-full bg-[#27272a]" />
              </div>
              <div className="rounded-lg px-3 py-2">
                <div className="h-2.5 w-10 rounded-full bg-[#27272a]" />
              </div>
            </div>
          </aside>

          <div className="relative overflow-hidden bg-[#111113] p-4 sm:p-5">
            <div className="relative flex h-full flex-col rounded-[12px] border border-[rgba(255,255,255,0.06)] bg-[#111113] p-4 sm:p-5">
              <div className="flex items-center justify-between">
                <div className="h-3 w-24 rounded-full bg-[#27272a]" />
                <div className="h-7 w-14 rounded-full border border-[rgba(255,255,255,0.08)] bg-[#18181b]" />
              </div>

              <div className="mt-5 grid flex-1 grid-cols-[1.2fr_0.8fr] gap-4">
                <div className="rounded-[10px] border border-[rgba(255,255,255,0.06)] bg-[#111113]">
                  <div className="h-full rounded-[10px] bg-[#111113]" />
                </div>

                <div className="rounded-[10px] border border-[rgba(255,255,255,0.06)] bg-[#111113] p-3">
                  <div className="space-y-3">
                    <div className="h-20 rounded-[8px] border border-[rgba(255,255,255,0.05)] bg-[#18181b]" />
                    <div className="h-20 rounded-[8px] border border-[rgba(255,255,255,0.05)] bg-[#18181b]" />
                    <div className="h-20 rounded-[8px] border border-[rgba(255,255,255,0.05)] bg-[#18181b]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
