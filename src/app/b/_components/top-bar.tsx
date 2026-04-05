import { currentUser } from "@/lib/mock-data";

export function TopBarB() {
  const today = new Date().toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
  return (
    <header className="flex h-12 items-center justify-between border-b border-white/[0.06] bg-[#09090B] px-8">
      <h1 className="text-[13px] font-medium text-[#A1A1AA]">Good morning, {currentUser.name}</h1>
      <span className="text-[12px] text-[#52525B]">{today}</span>
    </header>
  );
}
