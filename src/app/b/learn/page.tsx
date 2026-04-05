import Link from "next/link";
import { Check } from "lucide-react";
import { currentUser } from "@/lib/mock-data";

const currentSection = 3;
const totalSections = 5;
const progress = Math.round((currentSection / totalSections) * 100);

function PulsingDot() {
  return (
    <span className="relative ml-2 flex h-2.5 w-2.5">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" style={{ backgroundColor: "var(--accent)" }} />
      <span className="relative inline-flex h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "var(--accent)" }} />
    </span>
  );
}

export default function LearnPage() {
  const steps = [
    { num: 1, label: "What is adult safeguarding?", status: "done" },
    { num: 2, label: "The six safeguarding principles", status: "done" },
    { num: 3, label: "Recognising lone worker risks", status: "current" },
    { num: 4, label: "Reporting procedure", status: "upcoming" },
    { num: 5, label: "Your responsibilities", status: "upcoming" },
  ];

  return (
    <div
      className="flex min-h-screen flex-col bg-[#FAFAF9]"
      style={{ "--accent": "#8B5CF6", "--accent-muted": "rgba(139, 92, 246, 0.1)" } as React.CSSProperties}
    >
      {/* Header */}
      <header className="border-b border-[#E4E4E7] bg-white px-8 py-6">
        <div className="mx-auto" style={{ maxWidth: "65ch" }}>
          <p className="text-[13px] font-medium tracking-wide text-[#71717A]">{currentUser.organisation}</p>
          <h1 className="mt-1 text-[22px] font-semibold tracking-[-0.02em] text-[#18181B]">Lone Worker Safety</h1>

          {/* Section stepper */}
          <div className="mt-5 flex items-center gap-1.5">
            {steps.map((step, i) => (
              <div key={step.num} className="flex items-center gap-1.5">
                <div
                  className={`flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-semibold ${
                    step.status === "done"
                      ? "bg-emerald-500/10 text-emerald-600"
                      : step.status === "current"
                      ? "text-white"
                      : "bg-[#E4E4E7] text-[#A1A1AA]"
                  }`}
                  style={step.status === "current" ? { backgroundColor: "var(--accent)" } : undefined}
                >
                  {step.status === "done" ? <Check className="h-3 w-3" /> : step.num}
                </div>
                {i < steps.length - 1 && (
                  <div className={`h-[1.5px] w-6 ${
                    step.status === "done" ? "bg-emerald-400/30" : "bg-[#E4E4E7]"
                  }`} />
                )}
              </div>
            ))}
          </div>

          {/* Progress bar */}
          <div className="mt-5 max-w-md">
            <div className="flex items-center justify-between text-[13px]">
              <span className="text-[#71717A]">Section {currentSection} of {totalSections}</span>
              <span className="font-medium text-[#18181B]" style={{ fontVariantNumeric: "tabular-nums" }}>{progress}%</span>
            </div>
            <div className="mt-2 h-1.5 rounded-full bg-[#E4E4E7]">
              <div className="h-full rounded-full transition-all" style={{ width: `${progress}%`, backgroundColor: "var(--accent)" }} />
            </div>
          </div>
        </div>
      </header>

      {/* Article content */}
      <main className="flex-1 px-8 py-14">
        <article className="mx-auto" style={{ maxWidth: "65ch" }}>
          <p className="text-[12px] font-medium text-[#71717A]">Section {currentSection} of {totalSections}</p>
          <h2 className="mt-2 text-[28px] font-semibold leading-[1.2] tracking-[-0.02em] text-[#18181B]">
            Recognising lone worker risks
          </h2>

          <div className="mt-10 space-y-7 text-[16px] leading-[1.7] text-[#3F3F46]">
            <p>
              As a {currentUser.organisation} employee, you may work alone in a variety of
              settings — visiting service users in their homes, working night shifts
              with limited on-site colleagues, or travelling between care locations.
              Understanding the specific risks you face is the first step to staying
              safe.
            </p>

            <p>
              {currentUser.organisation}&apos;s <strong className="font-semibold text-[#18181B]">Lone Worker Policy v3.2</strong> identifies
              three categories of risk for lone workers:
            </p>

            {/* Key point callouts */}
            <div className="space-y-4">
              <div
                className="rounded-lg border-l-[3px] py-4 pl-6 pr-5"
                style={{ borderColor: "var(--accent)", backgroundColor: "var(--accent-muted)" }}
              >
                <p className="text-[16px] font-medium leading-[1.65] text-[#18181B]">
                  <strong className="font-semibold">Environmental risks</strong>
                </p>
                <p className="mt-1.5 text-[16px] leading-[1.7] text-[#3F3F46]">
                  These include poorly lit car parks, unfamiliar neighbourhoods, and
                  properties with known hazards. Before visiting a new location, check
                  the care plan notes and speak to your line manager if you have concerns.
                </p>
              </div>

              <div
                className="rounded-lg border-l-[3px] py-4 pl-6 pr-5"
                style={{ borderColor: "var(--accent)", backgroundColor: "var(--accent-muted)" }}
              >
                <p className="text-[16px] font-medium leading-[1.65] text-[#18181B]">
                  <strong className="font-semibold">Personal safety risks</strong>
                </p>
                <p className="mt-1.5 text-[16px] leading-[1.7] text-[#3F3F46]">
                  These arise from working with individuals who may exhibit challenging
                  behaviour, or from encounters with other people at a service
                  user&apos;s property. {currentUser.organisation}&apos;s dynamic risk
                  assessment must be completed before every solo visit.
                </p>
              </div>

              <div
                className="rounded-lg border-l-[3px] py-4 pl-6 pr-5"
                style={{ borderColor: "var(--accent)", backgroundColor: "var(--accent-muted)" }}
              >
                <p className="text-[16px] font-medium leading-[1.65] text-[#18181B]">
                  <strong className="font-semibold">Health and wellbeing risks</strong>
                </p>
                <p className="mt-1.5 text-[16px] leading-[1.7] text-[#3F3F46]">
                  Working alone can affect your mental health, particularly during
                  evening and weekend shifts. {currentUser.organisation} provides access
                  to a <strong className="font-semibold text-[#18181B]">24-hour employee assistance programme</strong>.
                  Your wellbeing matters as much as your physical safety.
                </p>
              </div>
            </div>

            <p>
              If you identify a risk that isn&apos;t covered by your existing risk
              assessment, report it to your line manager immediately. Do not proceed
              with a visit if you believe it is unsafe to do so — {currentUser.organisation} will
              always support your decision to prioritise your safety.
            </p>
          </div>

          {/* Continue CTA */}
          <div className="mt-14 flex items-center justify-between border-t border-[#E4E4E7] pt-8">
            <span className="text-[13px] text-[#A1A1AA]">Section {currentSection} of {totalSections}</span>
            <Link
              href="/b/learn/assessment"
              className="inline-flex items-center justify-center rounded-xl px-7 py-3.5 text-[15px] font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "var(--accent)" }}
            >
              Continue
              <span className="ml-1">&rarr;</span>
              <PulsingDot />
            </Link>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#E4E4E7] bg-white px-8 py-5">
        <p className="text-center text-[12px] text-[#A1A1AA]">
          Powered by Slipstream
        </p>
      </footer>
    </div>
  );
}
