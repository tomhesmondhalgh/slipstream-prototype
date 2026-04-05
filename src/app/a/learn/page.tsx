import Link from "next/link";
import { ChevronLeft, Check } from "lucide-react";
import { PulsingDot } from "@/components/pulsing-dot";

export default function LearnPageA() {
  const currentSection = 3;
  const totalSections = 5;

  return (
    <div
      className="flex min-h-screen flex-col"
      style={{ backgroundColor: "var(--bg)" }}
    >
      {/* Header — customer branded */}
      <header
        style={{
          backgroundColor: "var(--surface)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div className="mx-auto flex h-14 max-w-[720px] items-center justify-between px-6">
          <span
            className="text-[14px] font-semibold"
            style={{ color: "var(--text-primary)" }}
          >
            Brightfield Care
          </span>
          <span
            className="text-[14px]"
            style={{ color: "var(--text-secondary)" }}
          >
            Lone Worker Safety
          </span>
        </div>
      </header>

      {/* Section stepper */}
      <div
        style={{
          backgroundColor: "var(--surface)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div className="mx-auto flex max-w-[720px] items-center justify-center px-6 py-5">
          <div className="flex items-center">
            {Array.from({ length: totalSections }, (_, i) => {
              const step = i + 1;
              const isCompleted = step < currentSection;
              const isCurrent = step === currentSection;
              return (
                <div key={step} className="flex items-center">
                  <div
                    className="flex h-8 w-8 items-center justify-center rounded-full text-[13px] font-semibold"
                    style={{
                      backgroundColor: isCompleted
                        ? "var(--accent)"
                        : "transparent",
                      color: isCompleted
                        ? "white"
                        : isCurrent
                        ? "var(--accent)"
                        : "var(--text-tertiary)",
                      border: isCurrent
                        ? "2px solid var(--accent)"
                        : !isCompleted
                        ? "1.5px solid var(--border)"
                        : "none",
                    }}
                  >
                    {isCompleted ? (
                      <Check className="h-4 w-4" strokeWidth={2.5} />
                    ) : (
                      step
                    )}
                  </div>
                  {step < totalSections && (
                    <div
                      className="h-[1.5px] w-10"
                      style={{
                        backgroundColor: isCompleted
                          ? "var(--accent)"
                          : "var(--border)",
                      }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mx-auto w-full max-w-[720px] px-6 pt-6">
        <div
          className="h-1 w-full overflow-hidden rounded-full"
          style={{ backgroundColor: "var(--accent-muted)" }}
        >
          <div
            className="h-1 rounded-full transition-all"
            style={{
              backgroundColor: "var(--accent)",
              width: `${(currentSection / totalSections) * 100}%`,
            }}
          />
        </div>
        <p
          className="mt-2 text-[13px]"
          style={{ color: "var(--text-secondary)" }}
        >
          Section {currentSection} of {totalSections}
        </p>
      </div>

      {/* Article content */}
      <main className="flex-1">
        <div className="mx-auto max-w-[720px] px-6 pt-10 pb-16">
          <article>
            <h1
              className="text-[28px] leading-[1.2]"
              style={{
                fontFamily: "var(--font-instrument-serif)",
                color: "var(--text-primary)",
              }}
            >
              Recognising lone worker risks
            </h1>

            <div
              className="mt-8 space-y-6 text-[16px] leading-[1.75]"
              style={{
                color: "var(--text-primary)",
                maxWidth: "65ch",
              }}
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

              {/* Key point callouts */}
              <div className="space-y-3">
                <div
                  className="rounded-md py-4 pl-6 pr-5"
                  style={{
                    borderLeft: "3px solid var(--accent)",
                    backgroundColor: "var(--accent-muted)",
                  }}
                >
                  <p className="text-[15px] font-medium leading-[1.7]">
                    <strong className="font-bold">Environmental risks</strong> — these
                    include poorly lit car parks, unfamiliar neighbourhoods, and
                    properties with known hazards. Before visiting a new location, check
                    the care plan notes and speak to your line manager if you have
                    concerns.
                  </p>
                </div>

                <div
                  className="rounded-md py-4 pl-6 pr-5"
                  style={{
                    borderLeft: "3px solid var(--accent)",
                    backgroundColor: "var(--accent-muted)",
                  }}
                >
                  <p className="text-[15px] font-medium leading-[1.7]">
                    <strong className="font-bold">Personal safety risks</strong> — these
                    arise from working with individuals who may exhibit challenging
                    behaviour, or from encounters with other people at a service
                    user&apos;s property. Brightfield Care&apos;s dynamic risk assessment
                    must be completed before every solo visit.
                  </p>
                </div>

                <div
                  className="rounded-md py-4 pl-6 pr-5"
                  style={{
                    borderLeft: "3px solid var(--accent)",
                    backgroundColor: "var(--accent-muted)",
                  }}
                >
                  <p className="text-[15px] font-medium leading-[1.7]">
                    <strong className="font-bold">Health and wellbeing risks</strong> —
                    working alone can affect your mental health, particularly during
                    evening and weekend shifts. Brightfield Care provides access to a
                    24-hour employee assistance programme. Your wellbeing matters as much
                    as your physical safety.
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

          {/* Bottom navigation */}
          <div
            className="mt-16 flex items-center justify-between pt-8"
            style={{ borderTop: "1px solid var(--border)" }}
          >
            <button
              className="flex items-center gap-2 rounded-md px-4 py-2.5 text-[14px] font-medium transition-colors"
              style={{
                color: "var(--text-secondary)",
                border: "1px solid var(--border)",
              }}
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </button>
            <div className="relative inline-block">
              <Link href="/a/learn/assessment">
                <button
                  className="flex items-center gap-2 rounded-md px-6 py-2.5 text-[14px] font-semibold text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "var(--accent)" }}
                >
                  Continue &rarr;
                </button>
              </Link>
              <PulsingDot className="-top-1 -right-1" />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer
        className="py-6 text-center text-[12px]"
        style={{
          color: "var(--text-tertiary)",
          borderTop: "1px solid var(--border)",
        }}
      >
        Prepared by Brightfield Care Ltd &middot; Powered by Slipstream
      </footer>
    </div>
  );
}
