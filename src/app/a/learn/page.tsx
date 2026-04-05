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
      {/* Header — customer branded, minimal, editorial */}
      <header
        className="border-b"
        style={{ borderColor: "var(--border)" }}
      >
        <div className="mx-auto flex h-14 max-w-[760px] items-center justify-between px-8">
          <span
            className="text-[11px] font-bold tracking-[0.22em] uppercase"
            style={{ color: "var(--text-primary)" }}
          >
            Brightfield Care
          </span>
          <span
            className="text-[13px] font-medium"
            style={{ color: "var(--text-secondary)" }}
          >
            Lone Worker Safety
          </span>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1">
        <div className="mx-auto max-w-[760px] px-8 pt-16 pb-14">
          {/* Progress — editorial section opener */}
          <div className="flex items-end gap-5">
            <span
              className="text-[32px] font-bold tracking-[-0.03em] leading-none tabular-nums"
              style={{ fontFamily: "var(--font-syne)", color: "var(--accent)" }}
            >
              {currentSection}/{totalSections}
            </span>
            <div className="flex flex-col pb-0.5">
              <span
                className="text-[10px] font-bold uppercase tracking-[0.16em]"
                style={{ color: "var(--text-muted)" }}
              >
                Section Progress
              </span>
              {/* Accent progress bar */}
              <div
                className="mt-2 h-[2px] w-28"
                style={{ backgroundColor: "var(--accent-light)" }}
              >
                <div
                  className="h-[2px] rounded-full transition-all"
                  style={{
                    backgroundColor: "var(--accent)",
                    width: `${(currentSection / totalSections) * 100}%`,
                  }}
                />
              </div>
            </div>
          </div>

          {/* Section label — small, confident */}
          <p
            className="mt-10 text-[10px] font-bold uppercase tracking-[0.16em]"
            style={{ color: "var(--text-secondary)" }}
          >
            Section {currentSection} &mdash; Recognising lone worker risks
          </p>

          {/* Article — magazine quality reading */}
          <article
            className="mt-5"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <h1
              className="max-w-[580px] text-[38px] font-bold leading-[1.12] tracking-[-0.02em]"
              style={{ fontFamily: "var(--font-syne)", color: "var(--text-primary)" }}
            >
              Recognising lone worker risks
            </h1>

            <div
              className="mt-10 max-w-[62ch] space-y-7 text-[17px] leading-[1.75]"
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

              {/* Key point callouts — thick left border, generous padding, tinted bg */}
              <div
                className="space-y-4 py-2"
              >
                <div
                  className="border-l-[3px] py-3 pl-7 pr-4"
                  style={{
                    borderColor: "var(--accent)",
                    backgroundColor: "var(--accent-light)",
                  }}
                >
                  <p className="text-[16px] font-medium leading-[1.65]">
                    <strong className="font-bold">Environmental risks</strong> — these include poorly lit car
                    parks, unfamiliar neighbourhoods, and properties with known hazards.
                    Before visiting a new location, check the care plan notes and speak to
                    your line manager if you have concerns.
                  </p>
                </div>

                <div
                  className="border-l-[3px] py-3 pl-7 pr-4"
                  style={{
                    borderColor: "var(--accent)",
                    backgroundColor: "var(--accent-light)",
                  }}
                >
                  <p className="text-[16px] font-medium leading-[1.65]">
                    <strong className="font-bold">Personal safety risks</strong> — these arise from working
                    with individuals who may exhibit challenging behaviour, or from
                    encounters with other people at a service user&apos;s property.
                    Brightfield Care&apos;s dynamic risk assessment must be completed
                    before every solo visit.
                  </p>
                </div>

                <div
                  className="border-l-[3px] py-3 pl-7 pr-4"
                  style={{
                    borderColor: "var(--accent)",
                    backgroundColor: "var(--accent-light)",
                  }}
                >
                  <p className="text-[16px] font-medium leading-[1.65]">
                    <strong className="font-bold">Health and wellbeing risks</strong> — working alone can
                    affect your mental health, particularly during evening and weekend
                    shifts. Brightfield Care provides access to a 24-hour employee
                    assistance programme. Your wellbeing matters as much as your physical
                    safety.
                  </p>
                </div>
              </div>

              <p>
                If you identify a risk that isn&apos;t covered by your existing risk
                assessment, report it to your line manager immediately. Do not proceed
                with a visit if you believe it is unsafe to do so — Brightfield Care
                will always support your decision to prioritise your safety.
              </p>
            </div>
          </article>

          {/* Bottom navigation — strong divider, generous spacing */}
          <div
            className="mt-20 flex items-center justify-between border-t pt-8"
            style={{ borderColor: "var(--border-strong)" }}
          >
            <button
              className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em] transition-opacity hover:opacity-60"
              style={{ color: "var(--text-secondary)" }}
            >
              <ChevronLeft className="h-4 w-4" />
              Section 2
            </button>
            <div className="relative inline-block">
              <Link href="/a/learn/assessment">
                <button
                  className="flex items-center gap-2.5 px-8 py-3.5 text-[12px] font-bold uppercase tracking-[0.08em] text-white transition-opacity hover:opacity-90"
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

      {/* Footer — quiet, understated */}
      <footer
        className="border-t py-7 text-center text-[10px] font-medium uppercase tracking-[0.14em]"
        style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
      >
        Powered by Slipstream
      </footer>
    </div>
  );
}
