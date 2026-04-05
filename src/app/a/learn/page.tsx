import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PulsingDot } from "@/components/pulsing-dot";

export default function LearnPageA() {
  const currentSection = 3;
  const totalSections = 5;

  return (
    <div
      className="flex min-h-screen flex-col"
      style={{ backgroundColor: "var(--surface)" }}
    >
      {/* Header — customer branded, no Slipstream */}
      <header
        className="border-b"
        style={{ borderColor: "var(--border)" }}
      >
        <div className="mx-auto flex h-16 max-w-[760px] items-center justify-between px-8">
          <span
            className="text-[11px] font-semibold tracking-[0.18em] uppercase"
            style={{ color: "var(--text-primary)" }}
          >
            Brightfield Care
          </span>
          <span
            className="text-[13px]"
            style={{ color: "var(--text-secondary)" }}
          >
            Lone Worker Safety
          </span>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1">
        <div className="mx-auto max-w-[760px] px-8 py-14">
          {/* Progress indicator — fraction style */}
          <div className="flex items-center gap-4">
            <span
              className="text-[28px] font-bold tracking-tight"
              style={{ fontFamily: "var(--font-syne)", color: "var(--accent)" }}
            >
              {currentSection}/{totalSections}
            </span>
            <div className="flex flex-col">
              <span
                className="text-[10px] font-semibold uppercase tracking-[0.14em]"
                style={{ color: "var(--text-secondary)" }}
              >
                Section Progress
              </span>
              {/* Thin accent bar alongside the fraction */}
              <div className="mt-1.5 h-[2px] w-24 bg-black/[0.06]">
                <div
                  className="h-[2px]"
                  style={{
                    backgroundColor: "var(--accent)",
                    width: `${(currentSection / totalSections) * 100}%`,
                  }}
                />
              </div>
            </div>
          </div>

          {/* Section label */}
          <p
            className="mt-8 text-[11px] font-semibold uppercase tracking-[0.14em]"
            style={{ color: "var(--text-secondary)" }}
          >
            Section {currentSection} &mdash; Recognising lone worker risks
          </p>

          {/* Article */}
          <article
            className="mt-6 max-w-[660px]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <h1
              className="text-[36px] font-bold leading-[1.15] tracking-tight"
              style={{ fontFamily: "var(--font-syne)", color: "var(--text-primary)" }}
            >
              Recognising lone worker risks
            </h1>

            <div
              className="mt-8 space-y-6 text-[17px] leading-[1.8]"
              style={{ color: "var(--text-primary)" }}
            >
              <p>
                As a Brightfield Care employee, you may work alone in a variety of
                settings — visiting service users in their homes, working night shifts
                with limited on-site colleagues, or travelling between care locations.
                Understanding the specific risks you face is the first step to staying
                safe.
              </p>

              <p>
                Brightfield Care&apos;s Lone Worker Policy v3.2 identifies three
                categories of risk for lone workers:
              </p>

              {/* Key point — pull quote with thick left border */}
              <div
                className="border-l-[3px] py-1 pl-6"
                style={{ borderColor: "var(--accent)" }}
              >
                <p className="font-medium">
                  <strong>Environmental risks</strong> — these include poorly lit car
                  parks, unfamiliar neighbourhoods, and properties with known hazards.
                  Before visiting a new location, check the care plan notes and speak to
                  your line manager if you have concerns.
                </p>
              </div>

              {/* Key point */}
              <div
                className="border-l-[3px] py-1 pl-6"
                style={{ borderColor: "var(--accent)" }}
              >
                <p className="font-medium">
                  <strong>Personal safety risks</strong> — these arise from working
                  with individuals who may exhibit challenging behaviour, or from
                  encounters with other people at a service user&apos;s property.
                  Brightfield Care&apos;s dynamic risk assessment must be completed
                  before every solo visit.
                </p>
              </div>

              {/* Key point */}
              <div
                className="border-l-[3px] py-1 pl-6"
                style={{ borderColor: "var(--accent)" }}
              >
                <p className="font-medium">
                  <strong>Health and wellbeing risks</strong> — working alone can
                  affect your mental health, particularly during evening and weekend
                  shifts. Brightfield Care provides access to a 24-hour employee
                  assistance programme. Your wellbeing matters as much as your physical
                  safety.
                </p>
              </div>

              <p>
                If you identify a risk that isn&apos;t covered by your existing risk
                assessment, report it to your line manager immediately. Do not proceed
                with a visit if you believe it is unsafe to do so — Brightfield Care
                will always support your decision to prioritise your safety.
              </p>
            </div>
          </article>

          {/* Bottom navigation */}
          <div
            className="mt-16 flex items-center justify-between border-t pt-8"
            style={{ borderColor: "var(--border)" }}
          >
            <button
              className="flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.08em] transition-colors hover:opacity-70"
              style={{ color: "var(--text-secondary)" }}
            >
              <ChevronLeft className="h-4 w-4" />
              Section 2
            </button>
            <div className="relative inline-block">
              <Link href="/a/learn/assessment">
                <button
                  className="flex items-center gap-2 px-7 py-3 text-[13px] font-semibold text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "var(--accent)" }}
                >
                  Section 4
                  <ChevronRight className="h-4 w-4" />
                </button>
              </Link>
              <PulsingDot className="-top-1 -right-1" />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer
        className="border-t py-6 text-center text-[11px] tracking-[0.05em]"
        style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
      >
        Powered by Slipstream
      </footer>
    </div>
  );
}
