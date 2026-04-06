import Link from "next/link";
import Image from "next/image";
import { PulsingDot } from "@/components/pulsing-dot";
import { currentUser, courses, course3Sections } from "@/lib/mock-data";

const course = courses[0]; // Lone Worker Safety
const currentSection = 3;
const totalSections = 5;

export default function StudioCLearnPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--cream)" }}>
      {/* Header */}
      <header className="flex items-center justify-between border-b px-10 py-4" style={{ borderColor: "color-mix(in srgb, var(--ink) 8%, transparent)", backgroundColor: "color-mix(in srgb, var(--accent) 4%, var(--cream))" }}>
        <div>
          <div className="flex items-center gap-2.5">
            <Image src="/brightfield-logo.png" alt="Brightfield Care" width={36} height={36} className="rounded-md" />
            <span
              className="text-[16px] font-semibold"
              style={{ color: "var(--mid-gray)" }}
            >
              {currentUser.organisation}
            </span>
          </div>
          <span
            className="mt-0.5 block text-xl italic"
            style={{ fontFamily: "var(--font-fraunces)", color: "var(--ink)" }}
          >
            {course.title}
          </span>
        </div>
        <span
          className="text-[13px]"
          style={{ fontFamily: "var(--font-jetbrains)", color: "var(--warm-gray)" }}
        >
          {currentUser.fullName} | {currentUser.role}
        </span>
      </header>

      <div className="mx-auto max-w-3xl px-6 py-14">
        {/* Progress */}
        <div className="flex items-baseline justify-between">
          <span
            className="text-[12px] font-medium uppercase tracking-[0.08em]"
            style={{ fontFamily: "var(--font-jetbrains)", color: "var(--mid-gray)" }}
          >
            Section {currentSection} of {totalSections}
          </span>
          <span
            className="text-[42px] font-light leading-none"
            style={{
              fontFamily: "var(--font-fraunces)",
              color: "var(--accent)",
              fontVariantNumeric: "tabular-nums",
            }}
          >
            60%
          </span>
        </div>
        <div className="mt-3 h-[3px] w-full rounded-full" style={{ backgroundColor: "var(--surface)" }}>
          <div
            className="h-full w-[60%] rounded-full"
            style={{ backgroundColor: "var(--accent)" }}
          />
        </div>

        {/* Section stepper */}
        <div className="mt-10 mb-2 flex items-center gap-2">
          {Array.from({ length: totalSections }, (_, i) => {
            const step = i + 1;
            const isCompleted = step < currentSection;
            const isCurrent = step === currentSection;
            return (
              <div key={step} className="flex items-center gap-2">
                <div
                  className="flex h-7 w-7 items-center justify-center rounded-full text-[12px] font-bold"
                  style={{
                    fontFamily: "var(--font-jetbrains)",
                    backgroundColor: isCompleted
                      ? "var(--ink)"
                      : isCurrent
                        ? "var(--accent)"
                        : "transparent",
                    color: isCompleted || isCurrent
                      ? "var(--cream)"
                      : "var(--warm-gray)",
                    border: !isCompleted && !isCurrent
                      ? "1.5px solid var(--warm-gray)"
                      : "1.5px solid transparent",
                  }}
                >
                  {step}
                </div>
                {step < totalSections && (
                  <div
                    className="h-[1.5px] w-6"
                    style={{
                      backgroundColor: isCompleted ? "var(--ink)" : "var(--surface)",
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
            className="text-[42px] font-black leading-[1.1] tracking-tight"
            style={{ fontFamily: "var(--font-fraunces)", color: "var(--ink)" }}
          >
            Recognising signs of abuse or neglect
          </h1>
          <div
            className="mt-3 h-[3px] w-16"
            style={{ backgroundColor: "var(--accent)" }}
          />

          {/* Body text — 16px+, 1.8 line-height, max 65ch for reading comfort */}
          <div
            className="mt-12 space-y-6 text-[16px] leading-[1.8]"
            style={{ maxWidth: "65ch", color: "#3D3A37" }}
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
              className="rounded-xl border-l-[3px] py-6 pl-7 pr-4"
              style={{ borderColor: "var(--accent)", backgroundColor: "color-mix(in srgb, var(--accent) 6%, transparent)" }}
            >
              <h3
                className="text-[12px] font-bold uppercase tracking-[0.08em]"
                style={{
                  fontFamily: "var(--font-jetbrains)",
                  color: "var(--accent)",
                }}
              >
                Physical &amp; Sexual Abuse
              </h3>
              <p className="mt-2.5 text-[16px] leading-[1.75]" style={{ maxWidth: "65ch", color: "#3D3A37" }}>
                Hitting, slapping, pushing, restraint, misuse of medication, or any
                sexual activity without informed consent. Watch for unexplained
                bruising, flinching, or fear of specific individuals.
              </p>
            </div>
            <div className="rounded-xl border-l-[3px] py-6 pl-7 pr-4" style={{ borderColor: "var(--ink)", backgroundColor: "color-mix(in srgb, var(--ink) 5%, transparent)" }}>
              <h3
                className="text-[12px] font-bold uppercase tracking-[0.08em]"
                style={{ fontFamily: "var(--font-jetbrains)", color: "var(--ink)" }}
              >
                Emotional &amp; Financial Abuse
              </h3>
              <p className="mt-2.5 text-[16px] leading-[1.75]" style={{ maxWidth: "65ch", color: "#3D3A37" }}>
                Threats, humiliation, controlling behaviour, isolation, theft,
                fraud, or coercion regarding finances. Look for withdrawal,
                anxiety, or unexplained changes in financial circumstances.
              </p>
            </div>
            <div className="rounded-xl border-l-[3px] py-6 pl-7 pr-4" style={{ borderColor: "var(--warm-gray)", backgroundColor: "color-mix(in srgb, var(--warm-gray) 7%, transparent)" }}>
              <h3
                className="text-[12px] font-bold uppercase tracking-[0.08em]"
                style={{ fontFamily: "var(--font-jetbrains)", color: "var(--mid-gray)" }}
              >
                Neglect &amp; Organisational Abuse
              </h3>
              <p className="mt-2.5 text-[16px] leading-[1.75]" style={{ maxWidth: "65ch", color: "#3D3A37" }}>
                Ignoring medical or physical care needs, withholding necessities,
                poor care standards, or rigid routines. Indicators include poor
                hygiene, malnutrition, or untreated medical conditions.
              </p>
            </div>
          </div>

          {/* Bottom nav */}
          <div className="mt-16 flex items-center justify-between pt-7" style={{ borderTop: "1px solid color-mix(in srgb, var(--ink) 10%, transparent)" }}>
            <span
              className="text-[12px] font-medium uppercase tracking-[0.08em]"
              style={{ fontFamily: "var(--font-jetbrains)", color: "var(--warm-gray)" }}
            >
              Section {currentSection} of {totalSections}
            </span>
            <div className="flex items-center gap-3">
              <button
                className="px-4 py-2.5 text-[12px] font-bold uppercase tracking-[0.08em] opacity-60 transition-all duration-200 hover:opacity-100"
                style={{ fontFamily: "var(--font-jetbrains)", color: "var(--ink)" }}
              >
                Previous
              </button>
              <div className="relative inline-block">
                <Link
                  href="/c/learn/assessment"
                  className="block rounded-lg px-6 py-2.5 text-[12px] font-bold uppercase tracking-[0.08em] transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
                  style={{
                    fontFamily: "var(--font-jetbrains)",
                    backgroundColor: "var(--accent)",
                    color: "#FFFFFF",
                  }}
                >
                  Continue &rarr;
                </Link>
                <PulsingDot className="-top-1 -right-1" />
              </div>
            </div>
          </div>
        </article>
      </div>

      {/* Footer */}
      <footer className="mt-8 flex items-center justify-between border-t px-10 py-5" style={{ borderColor: "color-mix(in srgb, var(--ink) 8%, transparent)" }}>
        <span
          className="text-[12px]"
          style={{ fontFamily: "var(--font-jetbrains)", color: "var(--mid-gray)" }}
        >
          {currentUser.organisation} &middot; {course.sourcePolicy}
        </span>
        <span
          className="text-[12px] uppercase tracking-[0.08em]"
          style={{ fontFamily: "var(--font-jetbrains)", color: "color-mix(in srgb, var(--warm-gray) 70%, transparent)" }}
        >
          Powered by Slipstream
        </span>
      </footer>
    </div>
  );
}
