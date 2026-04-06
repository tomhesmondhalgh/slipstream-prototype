import Image from "next/image";
import Link from "next/link";
import { CircleCheck, Download } from "lucide-react";
import { PulsingDot } from "@/components/pulsing-dot";
import { currentUser, courses } from "@/lib/mock-data";

const course = courses[0];

export default function StudioCCompletePage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "var(--cream)" }}>
      {/* Header */}
      <header className="flex items-center justify-between border-b border-[#1A1A1A]/[0.06] px-10 py-4">
        <div>
          <div className="flex items-center gap-2.5">
            <Image src="/brightfield-logo.png" alt="Brightfield Care" width={28} height={28} className="rounded-sm" />
            <span
              className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#6B6560]"
              style={{ fontFamily: "var(--font-jetbrains)" }}
            >
              {currentUser.organisation}
            </span>
          </div>
          <span
            className="mt-0.5 block text-lg italic text-[#1A1A1A]"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            {course.title}
          </span>
        </div>
        <span
          className="text-[12px] text-[#B8B2A8]"
          style={{ fontFamily: "var(--font-jetbrains)" }}
        >
          {currentUser.fullName} | {currentUser.role}
        </span>
      </header>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-14">
        {/* Certificate card */}
        <div
          className="w-full max-w-[520px] rounded-2xl border border-[#1A1A1A]/[0.06] px-10 py-12 text-center shadow-[0_2px_16px_rgba(0,0,0,0.04)]"
          style={{ backgroundColor: "white" }}
        >
          {/* Checkmark */}
          <div className="mb-8 flex justify-center">
            <CircleCheck
              className="h-16 w-16"
              strokeWidth={1.5}
              style={{ color: "var(--success)" }}
            />
          </div>

          {/* Heading */}
          <h1
            className="text-[26px] font-bold tracking-tight"
            style={{
              fontFamily: "var(--font-fraunces)",
              color: "var(--ink)",
            }}
          >
            You&apos;ve completed this training
          </h1>

          {/* Course name */}
          <p
            className="mt-3 text-[17px] font-medium"
            style={{
              fontFamily: "var(--font-fraunces)",
              color: "var(--accent)",
              fontStyle: "italic",
            }}
          >
            {course.title}
          </p>

          {/* Score */}
          <p
            className="mt-8 leading-none"
            style={{
              fontFamily: "var(--font-fraunces)",
              fontSize: "44px",
              fontWeight: 700,
              color: "var(--ink)",
            }}
          >
            92%
          </p>
          <p className="mt-2 text-[15px] text-[#6B6560]">
            Your score
          </p>

          {/* Pass mark */}
          <p
            className="mt-2 text-[12px] font-medium"
            style={{
              fontFamily: "var(--font-jetbrains)",
              color: "var(--success)",
            }}
          >
            Pass mark: 75% &middot; Passed
          </p>

          {/* Divider */}
          <div className="my-8 border-t border-[#1A1A1A]/[0.06]" />

          {/* Certificate details */}
          <div
            className="rounded-lg px-8 py-6 text-[14px] leading-relaxed"
            style={{ backgroundColor: "var(--surface)" }}
          >
            <p className="font-semibold" style={{ color: "var(--ink)" }}>
              Emma Davies
            </p>
            <p className="mt-0.5 text-[#6B6560]">Brightfield Care Ltd</p>
            <p className="text-[#6B6560]">14 March 2026</p>
            <p
              className="mt-3 text-[12px] tracking-[0.08em] text-[#B8B2A8]"
              style={{ fontFamily: "var(--font-jetbrains)" }}
            >
              Certificate no. BC-LW-2026-0014
            </p>
          </div>

          {/* Download button */}
          <div className="relative mt-8">
            <Link
              href="/c/dashboard"
              className="flex w-full items-center justify-center gap-2 rounded-lg py-4 text-[12px] font-bold uppercase tracking-[0.08em] text-[#FAF8F5] transition-all duration-200 hover:opacity-90"
              style={{
                fontFamily: "var(--font-jetbrains)",
                backgroundColor: "var(--accent)",
              }}
            >
              <Download className="h-4 w-4" />
              Download your certificate
            </Link>
            <PulsingDot className="-top-1 -right-1" />
          </div>
        </div>

        {/* Completion notice */}
        <p
          className="mt-10 text-center text-[12px] tracking-[0.05em] text-[#B8B2A8]"
          style={{ fontFamily: "var(--font-jetbrains)" }}
        >
          Your completion has been recorded. Brightfield Care has been notified.
        </p>
      </div>

      {/* Footer */}
      <footer className="mt-8 border-t border-[#1A1A1A]/[0.06] px-10 py-5 flex items-center justify-between">
        <span
          className="text-[12px] text-[#6B6560]"
          style={{ fontFamily: "var(--font-jetbrains)" }}
        >
          {currentUser.organisation} &middot; {course.sourcePolicy}
        </span>
        <span
          className="text-[12px] tracking-[0.08em] text-[#C8C3BC]/70"
          style={{ fontFamily: "var(--font-jetbrains)" }}
        >
          Powered by Slipstream
        </span>
      </footer>
    </div>
  );
}
