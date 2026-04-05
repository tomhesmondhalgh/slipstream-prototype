import { currentUser } from "@/lib/mock-data";

export function TopBarC() {
  const today = new Date().toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <header className="flex h-14 items-center justify-between border-b-2 border-[#1A1A1A]/5 px-10">
      <div className="flex items-baseline gap-3">
        <span
          className="text-xl font-bold tracking-tight text-[#1A1A1A]"
          style={{ fontFamily: "var(--font-fraunces)" }}
        >
          Slipstream
        </span>
        <span
          className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#6B6560]"
          style={{ fontFamily: "var(--font-jetbrains)" }}
        >
          / {currentUser.organisation}
        </span>
      </div>
      <span
        className="text-[11px] tracking-[0.05em] text-[#B8B2A8]"
        style={{ fontFamily: "var(--font-jetbrains)", fontVariantNumeric: "tabular-nums" }}
      >
        {today}
      </span>
    </header>
  );
}
