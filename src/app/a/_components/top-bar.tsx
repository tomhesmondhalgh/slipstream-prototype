import { currentUser } from "@/lib/mock-data";

export function TopBarA() {
  const today = new Date().toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header
      className="flex items-center justify-between px-10"
      style={{
        height: 58,
        backgroundColor: "var(--surface)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <span
        className="text-[15px] font-medium"
        style={{
          color: "var(--text-primary)",
          fontFamily: "var(--font-jakarta)",
        }}
      >
        Good morning, {currentUser.name}
      </span>
      <span
        className="text-[13px] tabular-nums"
        style={{ color: "var(--text-tertiary)" }}
      >
        {today}
      </span>
    </header>
  );
}
