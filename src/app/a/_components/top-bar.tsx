export function TopBarA() {
  const today = new Date().toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header
      className="flex h-[52px] items-center justify-between border-b px-10"
      style={{ borderColor: "var(--border)" }}
    >
      <span
        className="text-[10px] font-semibold uppercase tracking-[0.18em]"
        style={{ color: "var(--text-muted)" }}
      >
        Admin
      </span>
      <span
        className="text-[11px] font-medium tabular-nums tracking-wide"
        style={{ color: "var(--text-muted)", fontFamily: "var(--font-body)" }}
      >
        {today}
      </span>
    </header>
  );
}
