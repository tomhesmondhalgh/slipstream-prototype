import Link from "next/link";
import { currentUser, courses, course3Sections } from "@/lib/mock-data";

const course = courses[0]; // Lone Worker Safety
const currentSection = 3;
const totalSections = 5;

export default function StudioCLearnPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Header */}
      <header className="flex items-center justify-between border-b border-[#1A1A1A]/10 px-10 py-4">
        <div>
          <span
            className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#6B6560]"
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

      <div className="mx-auto max-w-3xl px-6 py-12">
        {/* Progress */}
        <div className="flex items-baseline justify-between">
          <span
            className="text-[11px] font-medium uppercase tracking-[0.15em] text-[#6B6560]"
            style={{ fontFamily: "var(--font-jetbrains)" }}
          >
            Section {currentSection} of {totalSections}
          </span>
          <span
            className="text-[48px] font-light leading-none text-[#E63946]"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            60%
          </span>
        </div>
        <div className="mt-3 h-[1px] w-full bg-[#EDEBE8]">
          <div className="h-full w-[60%] bg-[#E63946]" />
        </div>

        {/* Article */}
        <article className="mt-14">
          <h1
            className="text-[42px] font-black leading-[1.1] tracking-tight text-[#1A1A1A]"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Recognising signs of abuse or neglect
          </h1>
          <div className="mt-2 h-[3px] w-16 bg-[#E63946]" />

          <div className="mt-8 space-y-5 text-[16px] leading-[1.8] text-[#3D3A37]">
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

          {/* Risk categories */}
          <div className="mt-10 space-y-5">
            <div className="border-l-4 border-[#E63946] py-3 pl-6">
              <h3
                className="text-sm font-bold uppercase tracking-[0.1em] text-[#E63946]"
                style={{ fontFamily: "var(--font-jetbrains)" }}
              >
                Physical &amp; Sexual Abuse
              </h3>
              <p className="mt-2 text-[15px] leading-[1.7] text-[#3D3A37]">
                Hitting, slapping, pushing, restraint, misuse of medication, or any
                sexual activity without informed consent. Watch for unexplained
                bruising, flinching, or fear of specific individuals.
              </p>
            </div>
            <div className="border-l-4 border-[#1A1A1A] py-3 pl-6">
              <h3
                className="text-sm font-bold uppercase tracking-[0.1em] text-[#1A1A1A]"
                style={{ fontFamily: "var(--font-jetbrains)" }}
              >
                Emotional &amp; Financial Abuse
              </h3>
              <p className="mt-2 text-[15px] leading-[1.7] text-[#3D3A37]">
                Threats, humiliation, controlling behaviour, isolation, theft,
                fraud, or coercion regarding finances. Look for withdrawal,
                anxiety, or unexplained changes in financial circumstances.
              </p>
            </div>
            <div className="border-l-4 border-[#B8B2A8] py-3 pl-6">
              <h3
                className="text-sm font-bold uppercase tracking-[0.1em] text-[#6B6560]"
                style={{ fontFamily: "var(--font-jetbrains)" }}
              >
                Neglect &amp; Organisational Abuse
              </h3>
              <p className="mt-2 text-[15px] leading-[1.7] text-[#3D3A37]">
                Ignoring medical or physical care needs, withholding necessities,
                poor care standards, or rigid routines. Indicators include poor
                hygiene, malnutrition, or untreated medical conditions.
              </p>
            </div>
          </div>

          {/* Bottom nav */}
          <div className="mt-14 flex items-center justify-between border-t border-[#1A1A1A]/10 pt-6">
            <span
              className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#B8B2A8]"
              style={{ fontFamily: "var(--font-jetbrains)" }}
            >
              Section {currentSection} of {totalSections}
            </span>
            <div className="flex items-center gap-3">
              <button
                className="px-4 py-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#6B6560] transition-colors hover:text-[#1A1A1A]"
                style={{ fontFamily: "var(--font-jetbrains)" }}
              >
                Previous
              </button>
              <Link
                href="/c/learn/assessment"
                className="bg-[#1A1A1A] px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#FAF8F5] transition-colors hover:bg-[#333]"
                style={{ fontFamily: "var(--font-jetbrains)" }}
              >
                Section 4
              </Link>
            </div>
          </div>
        </article>
      </div>

      {/* Footer */}
      <footer className="border-t border-[#1A1A1A]/10 px-10 py-4">
        <span
          className="text-[10px] text-[#B8B2A8]"
          style={{ fontFamily: "var(--font-jetbrains)" }}
        >
          {currentUser.organisation} | {course.sourcePolicy} | Slipstream
        </span>
      </footer>
    </div>
  );
}
