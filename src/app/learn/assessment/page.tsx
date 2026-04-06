"use client";

import Link from "next/link";
import Image from "next/image";
import { currentUser, courses } from "@/lib/mock-data";

const course = { title: "Safeguarding Adults at Risk — The Brightfield Way" };

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
      <header className="flex items-center justify-between px-8 py-3" style={{ backgroundColor: "var(--accent)" }}>
        <Image src="/brightfield-logo.png" alt="Brightfield Homecare" width={180} height={45} className="rounded-md bg-white/90 px-2 py-1" />
        <span className="text-[15px] italic text-white/90" style={{ fontFamily: "var(--font-fraunces)" }}>
          {course.title}
        </span>
      </header>

      {/* Content */}
      <div className="flex-1 mx-auto w-full max-w-3xl px-6 py-14">
        {/* Progress label */}
        <p
          className="text-[12px] font-medium uppercase tracking-[0.08em] text-[#6B6560]"
          style={{ fontFamily: "var(--font-jetbrains)" }}
        >
          Assessment &mdash; Question {question.number} of {question.total}
        </p>

        {/* Question card */}
        <div className="mx-auto mt-10 max-w-[680px] rounded-xl">
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
                  className="cursor-pointer rounded-xl transition-all duration-200"
                  style={{
                    padding: "22px 22px",
                    border: isSelected && isCorrect
                      ? "1px solid color-mix(in srgb, var(--accent) 40%, transparent)"
                      : "1px solid rgba(26,26,26,0.08)",
                    backgroundColor: isSelected && isCorrect
                      ? "var(--accent-muted)"
                      : "transparent",
                  }}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[12px] font-bold"
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
            className="mt-8 rounded-xl px-6 py-6 text-[15px] leading-relaxed"
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
              href="/learn/complete"
              className="relative inline-flex items-center gap-2 rounded-lg px-7 py-3 text-[12px] font-bold uppercase tracking-[0.08em] text-[#FAF8F5] transition-all duration-200 hover:opacity-90"
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
      <footer className="mt-8 border-t border-[#1A1A1A]/[0.06] px-10 py-5 text-center">
        <span
          className="text-[12px] tracking-[0.08em]"
          style={{ fontFamily: "var(--font-jetbrains)", color: "var(--warm-gray)" }}
        >
          Powered by Slipstream
        </span>
      </footer>
    </div>
  );
}
