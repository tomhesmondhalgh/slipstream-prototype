import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PulsingDot } from "@/components/pulsing-dot";

export default function LearnPageA() {
  const currentSection = 3;
  const totalSections = 5;
  const progressPct = (currentSection / totalSections) * 100;

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Minimal header */}
      <header className="border-b border-black/[0.04]">
        <div className="mx-auto flex h-16 max-w-[720px] items-center justify-between px-8">
          <span className="text-[13px] font-semibold tracking-wide uppercase text-[#1D1D1F]">
            Brightfield Care
          </span>
          <span className="text-[13px] font-medium text-[#86868B]">
            Lone Worker Safety
          </span>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1">
        <div className="mx-auto max-w-[720px] px-8 py-14">
          {/* Progress bar — hair-thin 2px */}
          <div className="mb-10 h-[2px] w-full rounded-full bg-[#F5F5F7]">
            <div
              className="h-[2px] rounded-full bg-[#007AFF] transition-all duration-500 ease-out"
              style={{ width: `${progressPct}%` }}
            />
          </div>

          {/* Section breadcrumb */}
          <p className="mb-10 text-[13px] font-medium tracking-wide text-[#86868B]">
            Section {currentSection} of {totalSections} &mdash; Recognising lone
            worker risks
          </p>

          {/* Reading-optimised article */}
          <article className="max-w-[640px] space-y-7 text-[16px] leading-[1.8] text-[#1D1D1F]/90">
            <h1 className="text-[32px] font-light leading-snug tracking-tight text-[#1D1D1F]">
              Recognising lone worker risks
            </h1>

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

            <p>
              <strong>Environmental risks</strong> — these include poorly lit car
              parks, unfamiliar neighbourhoods, and properties with known hazards.
              Before visiting a new location, check the care plan notes and speak to
              your line manager if you have concerns.
            </p>

            <p>
              <strong>Personal safety risks</strong> — these arise from working
              with individuals who may exhibit challenging behaviour, or from
              encounters with other people at a service user&apos;s property.
              Brightfield Care&apos;s dynamic risk assessment must be completed
              before every solo visit.
            </p>

            <p>
              <strong>Health and wellbeing risks</strong> — working alone can
              affect your mental health, particularly during evening and weekend
              shifts. Brightfield Care provides access to a 24-hour employee
              assistance programme. Your wellbeing matters as much as your physical
              safety.
            </p>

            <p>
              If you identify a risk that isn&apos;t covered by your existing risk
              assessment, report it to your line manager immediately. Do not proceed
              with a visit if you believe it is unsafe to do so — Brightfield Care
              will always support your decision to prioritise your safety.
            </p>
          </article>

          {/* Bottom navigation */}
          <div className="mt-16 flex items-center justify-between border-t border-black/[0.04] pt-8">
            <button className="flex items-center gap-1.5 text-[13px] font-medium text-[#86868B] transition-colors hover:text-[#1D1D1F]">
              <ChevronLeft className="h-4 w-4" />
              Section 2
            </button>
            <div className="relative inline-block">
              <Link href="/a/learn/assessment">
                <button className="flex items-center gap-1.5 rounded-full bg-[#007AFF] px-6 py-2.5 text-[14px] font-medium text-white shadow-sm transition-all hover:bg-[#0066DD] hover:shadow-md">
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
      <footer className="border-t border-black/[0.04] py-6 text-center text-[11px] tracking-wide text-[#AEAEB2]">
        Prepared by Brightfield Care Ltd{" "}
        <span className="mx-1.5">&middot;</span> Powered by Slipstream
      </footer>
    </div>
  );
}
