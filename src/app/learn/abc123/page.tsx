import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PulsingDot } from "@/components/pulsing-dot";

export default function CourseContentPage() {
  // Showing Section 3 of 5 as per the brief (Emma is partway through)
  const currentSection = 3;
  const totalSections = 5;
  const progressPct = (currentSection / totalSections) * 100;

  return (
    <div>
      {/* Progress bar */}
      <div className="mb-10 h-1.5 w-full rounded-full bg-gray-100">
        <div
          className="h-1.5 rounded-full bg-brand-blue transition-all duration-500 ease-out"
          style={{ width: `${progressPct}%` }}
        />
      </div>

      {/* Section breadcrumb */}
      <p className="mb-10 text-[13px] font-medium tracking-wide text-gray-400">
        Section {currentSection} of {totalSections} &mdash; Recognising lone
        worker risks
      </p>

      {/* Content */}
      <article className="max-w-[680px] space-y-7 text-[15.5px] leading-[1.72] text-brand-black/90">
        <h1 className="text-[28px] font-semibold leading-snug tracking-tight text-brand-dark">
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
      <div className="mt-16 flex items-center justify-between border-t border-gray-100 pt-8">
        <Button variant="ghost" className="text-[13px] text-gray-400 hover:text-gray-600">
          <ChevronLeft className="mr-1.5 h-4 w-4" />
          Section 2
        </Button>
        <div className="relative inline-block">
          <Link href="/learn/abc123/assessment">
            <Button className="bg-brand-blue px-6 py-2.5 text-[14px] font-medium text-white shadow-sm hover:bg-brand-blue/90 hover:shadow-md transition-all">
              Section 4
              <ChevronRight className="ml-1.5 h-4 w-4" />
            </Button>
          </Link>
          <PulsingDot className="-top-1 -right-1" />
        </div>
      </div>
    </div>
  );
}
