import { Plus } from "lucide-react";
import { currentUser } from "@/lib/mock-data";

export function TopBarB() {
  const today = new Date().toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
  return (
    <header className="flex h-[52px] items-center justify-between border-b border-white/[0.06] bg-[#0A0A0B] px-8">
      <h1 className="text-[13px] font-medium text-[#A1A1AA]">
        Good morning, <span className="text-[#F5F5F5]">{currentUser.name}</span>
      </h1>
      <div className="flex items-center gap-4">
        <span className="text-[11px] tabular-nums text-[#52525B]">{today}</span>
        <button
          className="flex items-center gap-1.5 rounded-lg px-3.5 py-[7px] text-[13px] font-semibold text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: "var(--accent)" }}
        >
          <Plus className="h-3.5 w-3.5" />
          Create Course
        </button>
      </div>
    </header>
  );
}
