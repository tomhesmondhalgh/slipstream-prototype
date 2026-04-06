import { currentUser } from "@/lib/mock-data";

export function TopBarC() {
  const today = new Date().toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <header className="flex h-14 items-center justify-between border-b px-10" style={{ borderColor: "color-mix(in srgb, var(--ink) 8%, transparent)" }}>
      <div className="flex items-baseline gap-3">
        <span
          className="text-xl font-bold tracking-tight"
          style={{ fontFamily: "var(--font-fraunces)", color: "var(--ink)" }}
        >
          Slipstream
        </span>
        <span
          className="text-[12px] font-medium uppercase tracking-[0.08em]"
          style={{ fontFamily: "var(--font-jetbrains)", color: "var(--mid-gray)" }}
        >
          / {currentUser.organisation}
        </span>
      </div>
      <span
        className="text-[12px] tracking-[0.05em]"
        style={{ fontFamily: "var(--font-jetbrains)", fontVariantNumeric: "tabular-nums", color: "var(--warm-gray)" }}
      >
        {today}
      </span>
    </header>
  );
}
