import Link from "next/link";
import { currentUser, courses, course3Sections } from "@/lib/mock-data";

const course = courses[0]; // Lone Worker Safety
const currentSection = 3;
const totalSections = 5;

export default function StudioCLearnPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--cream)" }}>
      {/* Header */}
      <header className="flex items-center justify-between border-b border-[#1A1A1A]/10 px-10 py-4">
        <div>
          <span
            className="block text-[10px] font-bold uppercase tracking-[0.25em] text-[#6B6560]"
            style={{ fontFamily: "var(--font-jetbrains)" }}
          >
            {currentUser.organisation}
          </span>
          <span
            className="mt-0.5 block text-lg italic text-[#1A1A1A]"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            {course.title}
          </span>
        </div>
        <span
          className="text-[10px] text-[#B8B2A8]"
          style={{ fontFamily: "var(--font-jetbrains)" }}
        >
          {currentUser.fullName} | {currentUser.role}
        </span>
      </header>

      <div className="mx-auto max-w-3xl px-6 py-14">
        {/* Progress */}
        <div className="flex items-baseline justify-between">
          <span
            className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#6B6560]"
            style={{ fontFamily: "var(--font-jetbrains)" }}
          >
            Section {currentSection} of {totalSections}
          </span>
          <span
            className="text-[48px] font-light leading-none"
            style={{
              fontFamily: "var(--font-fraunces)",
              color: "var(--accent)",
              fontVariantNumeric: "tabular-nums",
            }}
          >
            60%
          </span>
        </div>
        <div className="mt-3 h-[2px] w-full" style={{ backgroundColor: "var(--surface)" }}>
          <div
            className="h-full w-[60%]"
            style={{ backgroundColor: "var(--accent)" }}
          />
        </div>

        {/* Section stepper */}
        <div className="mt-8 flex items-center gap-2">
          {Array.from({ length: totalSections }, (_, i) => {
            const step = i + 1;
            const isCompleted = step < currentSection;
            const isCurrent = step === currentSection;
            return (
              <div key={step} className="flex items-center gap-2">
                <div
                  className="flex h-7 w-7 items-center justify-center text-[11px] font-bold"
                  style={{
                    fontFamily: "var(--font-jetbrains)",
                    backgroundColor: isCompleted
                      ? "var(--ink)"
                      : isCurrent
                        ? "var(--accent)"
                        : "transparent",
                    color: isCompleted || isCurrent
                      ? "#FAF8F5"
                      : "#B8B2A8",
                    border: !isCompleted && !isCurrent
                      ? "1.5px solid #B8B2A8"
                      : "1.5px solid transparent",
                  }}
                >
                  {step}
                </div>
                {step < totalSections && (
                  <div
                    className="h-[1.5px] w-6"
                    style={{
                      backgroundColor: isCompleted ? "var(--ink)" : "#D9D5CF",
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Article */}
        <article className="mt-12">
          <h1
            className="text-[42px] font-black leading-[1.1] tracking-tight text-[#1A1A1A]"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Recognising signs of abuse or neglect
          </h1>
          <div
            className="mt-3 h-[3px] w-16"
            style={{ backgroundColor: "var(--accent)" }}
          />

          {/* Body text — 16px+, 1.8 line-height, max 65ch for reading comfort */}
          <div
            className="mt-10 space-y-6 text-[16px] leading-[1.8] text-[#3D3A37]"
            style={{ maxWidth: "65ch" }}
          >
            <p>
              Abuse can take many forms. Brightfield Care&apos;s Safeguarding Policy
              2025 identifies several categories that all staff must be able to
              recognise. Early identification is critical — the longer abuse
              continues undetected, the greater the harm to the individual.
            </p>
            <p>
              Signs may include unexplained injuries, withdrawal, changes in
              behaviour, poor hygiene, or reluctance to be alone with certain
              people. Trust your professional judgement — if something feels wrong,
              report it.
            </p>
          </div>

          {/* Risk categories — pull-quote blocks with generous padding */}
          <div className="mt-12 space-y-6">
            <div
              className="border-l-4 py-4 pl-7 pr-4"
              style={{ borderColor: "var(--accent)" }}
            >
              <h3
                className="text-[13px] font-bold uppercase tracking-[0.15em]"
                style={{
                  fontFamily: "var(--font-jetbrains)",
                  color: "var(--accent)",
                }}
              >
                Physical &amp; Sexual Abuse
              </h3>
              <p className="mt-2.5 text-[16px] leading-[1.75] text-[#3D3A37]" style={{ maxWidth: "65ch" }}>
                Hitting, slapping, pushing, restraint, misuse of medication, or any
                sexual activity without informed consent. Watch for unexplained
                bruising, flinching, or fear of specific individuals.
              </p>
            </div>
            <div className="border-l-4 border-[#1A1A1A] py-4 pl-7 pr-4">
              <h3
                className="text-[13px] font-bold uppercase tracking-[0.15em] text-[#1A1A1A]"
                style={{ fontFamily: "var(--font-jetbrains)" }}
              >
                Emotional &amp; Financial Abuse
              </h3>
              <p className="mt-2.5 text-[16px] leading-[1.75] text-[#3D3A37]" style={{ maxWidth: "65ch" }}>
                Threats, humiliation, controlling behaviour, isolation, theft,
                fraud, or coercion regarding finances. Look for withdrawal,
                anxiety, or unexplained changes in financial circumstances.
              </p>
            </div>
            <div className="border-l-4 border-[#B8B2A8] py-4 pl-7 pr-4">
              <h3
                className="text-[13px] font-bold uppercase tracking-[0.15em] text-[#6B6560]"
                style={{ fontFamily: "var(--font-jetbrains)" }}
              >
                Neglect &amp; Organisational Abuse
              </h3>
              <p className="mt-2.5 text-[16px] leading-[1.75] text-[#3D3A37]" style={{ maxWidth: "65ch" }}>
                Ignoring medical or physical care needs, withholding necessities,
                poor care standards, or rigid routines. Indicators include poor
                hygiene, malnutrition, or untreated medical conditions.
              </p>
            </div>
          </div>

          {/* Bottom nav */}
          <div className="mt-16 flex items-center justify-between border-t border-[#1A1A1A]/10 pt-7">
            <span
              className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#B8B2A8]"
              style={{ fontFamily: "var(--font-jetbrains)" }}
            >
              Section {currentSection} of {totalSections}
            </span>
            <div className="flex items-center gap-3">
              <button
                className="px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#6B6560] transition-colors hover:text-[#1A1A1A]"
                style={{ fontFamily: "var(--font-jetbrains)" }}
              >
                Previous
              </button>
              <Link
                href="/c/learn/assessment"
                className="px-6 py-2.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#FAF8F5] transition-colors hover:opacity-90"
                style={{
                  fontFamily: "var(--font-jetbrains)",
                  backgroundColor: "var(--ink)",
                }}
              >
                Continue &rarr;
              </Link>
            </div>
          </div>
        </article>
      </div>

      {/* Footer */}
      <footer className="border-t border-[#1A1A1A]/10 px-10 py-5 flex items-center justify-between">
        <span
          className="text-[11px] text-[#6B6560]"
          style={{ fontFamily: "var(--font-jetbrains)" }}
        >
          {currentUser.organisation} &middot; {course.sourcePolicy}
        </span>
        <span
          className="text-[9px] tracking-[0.1em] text-[#C8C3BC]"
          style={{ fontFamily: "var(--font-jetbrains)" }}
        >
          Powered by Slipstream
        </span>
      </footer>
    </div>
  );
}
