import { currentUser } from "@/lib/mock-data";

export function TopBarA() {
  const today = new Date().toLocaleDateString("en-GB", {
    weekday: "long", day: "numeric", month: "long", year: "numeric",
  });

  return (
    <header className="flex h-12 items-center justify-between bg-transparent px-10">
      <h1 className="text-[13px] font-medium text-[#86868B]">Good morning, {currentUser.name}</h1>
      <span className="text-[12px] text-[#AEAEB2]">{today}</span>
    </header>
  );
}
