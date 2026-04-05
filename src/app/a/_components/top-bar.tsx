export function TopBarA() {
  const today = new Date().toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="flex h-14 items-center justify-between border-b px-10" style={{ borderColor: "var(--border)" }}>
      <span
        className="text-[11px] font-medium uppercase tracking-[0.12em]"
        style={{ color: "var(--text-secondary)" }}
      >
        Admin
      </span>
      <span
        className="text-[12px]"
        style={{ color: "var(--text-muted)", fontFamily: "var(--font-body)" }}
      >
        {today}
      </span>
    </header>
  );
}
