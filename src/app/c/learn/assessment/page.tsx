"use client";

import Link from "next/link";
import { currentUser, courses } from "@/lib/mock-data";

const course = courses[0];

const question = {
  number: 2,
  total: 20,
  text: "Within how many hours must a safeguarding concern be logged in Brightfield Care\u2019s incident management system?",
  options: ["24 hours", "48 hours", "72 hours", "At the next team meeting"],
  selectedIndex: 0,
  correctIndex: 0,
  explanation:
    "Brightfield Care\u2019s policy requires all concerns to be logged within 24 hours of the incident in the SafeLog incident management system.",
};

const letters = ["A", "B", "C", "D"];

export default function StudioCAssessmentPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "var(--cream)" }}>
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

      {/* Content */}
      <div className="flex-1 mx-auto w-full max-w-3xl px-6 py-14">
        {/* Progress label */}
        <p
          className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#6B6560]"
          style={{ fontFamily: "var(--font-jetbrains)" }}
        >
          Assessment &mdash; Question {question.number} of {question.total}
        </p>

        {/* Question card */}
        <div className="mx-auto mt-10 max-w-[680px]">
          <h2
            className="text-[21px] font-bold leading-relaxed text-[#1A1A1A]"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            {question.text}
          </h2>

          {/* Answer options */}
          <div className="mt-8 space-y-3">
            {question.options.map((option, index) => {
              const isSelected = index === question.selectedIndex;
              const isCorrect = index === question.correctIndex;

              return (
                <div
                  key={index}
                  className="cursor-pointer transition-all duration-150"
                  style={{
                    padding: "20px 22px",
                    border: isSelected && isCorrect
                      ? "2px solid var(--accent)"
                      : "2px solid rgba(26,26,26,0.10)",
                    backgroundColor: isSelected && isCorrect
                      ? "var(--accent-muted)"
                      : "transparent",
                  }}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className="flex h-7 w-7 shrink-0 items-center justify-center text-[11px] font-bold"
                      style={{
                        fontFamily: "var(--font-jetbrains)",
                        backgroundColor: isSelected && isCorrect ? "var(--accent)" : "transparent",
                        color: isSelected && isCorrect ? "#FAF8F5" : "#6B6560",
                        border: isSelected && isCorrect
                          ? "1.5px solid var(--accent)"
                          : "1.5px solid #B8B2A8",
                      }}
                    >
                      {letters[index]}
                    </span>
                    <span
                      className="text-[15px]"
                      style={{
                        color: isSelected ? "var(--ink)" : "#6B6560",
                        fontWeight: isSelected ? 600 : 400,
                      }}
                    >
                      {option}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Explanation panel */}
          <div
            className="mt-8 px-6 py-5 text-[15px] leading-relaxed"
            style={{
              borderLeft: "3px solid var(--success)",
              backgroundColor: "color-mix(in srgb, var(--success) 6%, transparent)",
              color: "var(--ink)",
            }}
          >
            <span className="font-bold">Correct.</span>{" "}
            {question.explanation}
          </div>

          {/* Continue button */}
          <div className="mt-10 flex justify-end">
            <Link
              href="/c/learn/complete"
              className="relative inline-flex items-center gap-2 px-7 py-3 text-[10px] font-bold uppercase tracking-[0.15em] text-[#FAF8F5] transition-colors hover:opacity-90"
              style={{
                fontFamily: "var(--font-jetbrains)",
                backgroundColor: "var(--accent)",
              }}
            >
              Continue &rarr;
              {/* PulsingDot */}
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span
                  className="absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping"
                  style={{ backgroundColor: "var(--accent)" }}
                />
                <span
                  className="relative inline-flex h-3 w-3 rounded-full"
                  style={{ backgroundColor: "var(--accent)" }}
                />
              </span>
            </Link>
          </div>
        </div>
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
