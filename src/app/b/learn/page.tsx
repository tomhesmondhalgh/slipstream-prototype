import Link from "next/link";
import { currentUser, courses, course3Sections } from "@/lib/mock-data";

const course = courses.find((c) => c.id === 1)!;
const sections = course3Sections.slice(0, 5); // content sections only

export default function LearnPage() {
  const completedSections = 3;
  const totalSections = sections.length;
  const progress = Math.round((completedSections / totalSections) * 100);

  return (
    <div className="flex min-h-screen flex-col bg-[#FAFAF9]">
      {/* Header */}
      <header className="border-b border-[#E4E4E7] bg-white px-8 py-6">
        <p className="text-[13px] font-medium tracking-wide text-[#71717A]">{currentUser.organisation}</p>
        <h1 className="mt-1.5 text-[24px] font-semibold tracking-[-0.02em] text-[#18181B]">Lone Worker Safety</h1>
        <div className="mt-5 max-w-md">
          <div className="flex items-center justify-between text-[13px]">
            <span className="text-[#71717A]">{completedSections} of {totalSections} sections complete</span>
            <span className="font-medium text-[#18181B]" style={{ fontVariantNumeric: "tabular-nums" }}>{progress}%</span>
          </div>
          <div className="mt-2 h-1.5 rounded-full bg-[#E4E4E7]">
            <div className="h-full rounded-full bg-[#8B5CF6] transition-all" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 px-8 py-16">
        <div className="mx-auto" style={{ maxWidth: "65ch" }}>
          <div className="space-y-3">
            {sections.map((section, index) => {
              const isCompleted = index < completedSections;
              const isCurrent = index === completedSections;
              const isLocked = index > completedSections;

              return (
                <div key={section.id} className={`rounded-xl border px-5 py-[18px] transition-colors ${
                  isCompleted
                    ? "border-[#E4E4E7] bg-white"
                    : isCurrent
                    ? "border-[#8B5CF6]/20 bg-white shadow-sm"
                    : "border-[#E4E4E7]/60 bg-[#F4F4F5]"
                }`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3.5">
                      <div className={`flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-semibold ${
                        isCompleted
                          ? "bg-emerald-500/10 text-emerald-600"
                          : isCurrent
                          ? "bg-[#8B5CF6]/10 text-[#8B5CF6]"
                          : "bg-[#E4E4E7] text-[#A1A1AA]"
                      }`}>
                        {isCompleted ? "\u2713" : index + 1}
                      </div>
                      <div>
                        <h3 className={`text-[16px] font-medium leading-snug ${
                          isLocked ? "text-[#A1A1AA]" : "text-[#18181B]"
                        }`}>
                          {section.title}
                        </h3>
                        <p className={`mt-0.5 text-[13px] ${isLocked ? "text-[#D4D4D8]" : "text-[#71717A]"}`}>
                          {section.durationMinutes} min
                        </p>
                      </div>
                    </div>
                    {isCompleted && (
                      <span className="text-[12px] font-medium text-emerald-600">Completed</span>
                    )}
                    {isCurrent && (
                      <span className="text-[12px] font-medium text-[#8B5CF6]">In progress</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Section 4 CTA */}
          <div className="mt-10 text-center">
            <Link href="/b/learn/assessment"
              className="inline-flex items-center justify-center rounded-xl bg-[#8B5CF6] px-7 py-3.5 text-[15px] font-semibold text-white transition-all hover:bg-[#7C3AED]">
              Continue to Section 4
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#E4E4E7] bg-white px-8 py-5">
        <p className="text-center text-[12px] text-[#A1A1AA]">
          {currentUser.organisation} &middot; Powered by Slipstream
        </p>
      </footer>
    </div>
  );
}
