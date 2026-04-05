import Link from "next/link";
import { currentUser, courses, course3Sections } from "@/lib/mock-data";

const course = courses.find((c) => c.id === 1)!;
const sections = course3Sections.slice(0, 5); // content sections only

export default function LearnPage() {
  const completedSections = 3;
  const totalSections = sections.length;
  const progress = Math.round((completedSections / totalSections) * 100);

  return (
    <div className="flex min-h-screen flex-col bg-[#09090B]">
      {/* Header */}
      <header className="border-b border-white/[0.06] bg-[#09090B] px-8 py-5">
        <p className="text-[12px] font-medium text-[#52525B]">{currentUser.organisation}</p>
        <h1 className="mt-1 text-[18px] font-semibold text-[#F5F5F5]">Lone Worker Safety</h1>
        <div className="mt-4">
          <div className="flex items-center justify-between text-[12px] text-[#A1A1AA]">
            <span>{completedSections} of {totalSections} sections complete</span>
            <span>{progress}%</span>
          </div>
          <div className="mt-2 h-1.5 rounded-full bg-white/[0.06]">
            <div className="h-full rounded-full bg-[#8B5CF6]" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 px-8 py-14">
        <div className="mx-auto max-w-[780px]">
          <div className="space-y-3">
            {sections.map((section, index) => {
              const isCompleted = index < completedSections;
              const isCurrent = index === completedSections;
              const isLocked = index > completedSections;

              return (
                <div key={section.id} className={`rounded-xl border p-5 transition-colors ${
                  isCompleted
                    ? "border-white/[0.06] bg-[#141416]"
                    : isCurrent
                    ? "border-[#8B5CF6]/20 bg-[#141416]"
                    : "border-white/[0.04] bg-[#0C0C0E]"
                }`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-semibold ${
                        isCompleted
                          ? "bg-emerald-500/10 text-emerald-400"
                          : isCurrent
                          ? "bg-[#8B5CF6]/10 text-[#8B5CF6]"
                          : "bg-white/[0.04] text-[#3F3F46]"
                      }`}>
                        {isCompleted ? "\u2713" : index + 1}
                      </div>
                      <div>
                        <h3 className={`text-[14px] font-medium ${
                          isLocked ? "text-[#3F3F46]" : "text-[#F5F5F5]"
                        }`}>
                          {section.title}
                        </h3>
                        <p className={`text-[11px] ${isLocked ? "text-[#27272A]" : "text-[#52525B]"}`}>
                          {section.durationMinutes} min
                        </p>
                      </div>
                    </div>
                    {isCompleted && (
                      <span className="text-[11px] font-medium text-emerald-400">Completed</span>
                    )}
                    {isCurrent && (
                      <span className="text-[11px] font-medium text-[#A78BFA]">In progress</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Section 4 CTA */}
          <div className="mt-8 text-center">
            <Link href="/b/learn/assessment"
              className="inline-flex items-center justify-center rounded-xl bg-[#8B5CF6] px-6 py-3 text-[14px] font-semibold text-white shadow-[0_0_20px_rgba(139,92,246,0.25)] transition-all hover:bg-[#7C3AED] hover:shadow-[0_0_30px_rgba(139,92,246,0.35)]">
              Continue to Section 4
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] bg-[#09090B] px-8 py-4">
        <p className="text-center text-[11px] text-[#3F3F46]">
          {currentUser.organisation} &middot; Powered by Slipstream
        </p>
      </footer>
    </div>
  );
}
