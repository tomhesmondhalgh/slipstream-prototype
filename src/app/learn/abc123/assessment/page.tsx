"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PulsingDot } from "@/components/pulsing-dot";

export default function AssessmentPage() {
  // Showing Q2 with answer A selected (correct), as per the brief
  const question = {
    number: 2,
    total: 20,
    text: "Within how many hours must a safeguarding concern be logged in Brightfield Care\u2019s incident management system?",
    options: ["24 hours", "48 hours", "72 hours", "At the next team meeting"],
    selectedIndex: 0,
    correctIndex: 0,
    explanation:
      "Correct. Brightfield Care\u2019s policy requires all concerns to be logged within 24 hours of the incident in the SafeLog incident management system.",
  };

  return (
    <div>
      {/* Progress indicator */}
      <div className="mb-10 flex items-center justify-between">
        <p className="text-[13px] font-medium tracking-wide text-gray-400">
          Assessment &mdash; Question {question.number} of {question.total}
        </p>
        <p className="text-[13px] font-medium text-gray-400">
          {question.number}/{question.total}
        </p>
      </div>

      {/* Question card */}
      <div className="mx-auto max-w-[680px] rounded-2xl border border-gray-100 bg-white p-10 shadow-sm">
        <h2 className="mb-8 text-xl font-semibold leading-relaxed tracking-tight text-brand-dark">
          {question.text}
        </h2>

        {/* Answer options */}
        <div className="space-y-3">
          {question.options.map((option, index) => {
            const isSelected = index === question.selectedIndex;
            const isCorrect = index === question.correctIndex;

            return (
              <div
                key={index}
                className={`cursor-pointer rounded-xl border-2 px-5 py-4.5 text-[15px] transition-all duration-150 ${
                  isSelected && isCorrect
                    ? "border-brand-blue bg-brand-light text-brand-black shadow-sm"
                    : "border-gray-150 text-gray-600 hover:border-gray-300 hover:bg-gray-50/70 hover:shadow-sm"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 text-xs font-semibold transition-colors ${
                      isSelected && isCorrect
                        ? "border-brand-blue bg-brand-blue text-white"
                        : "border-gray-200 text-gray-400"
                    }`}
                  >
                    {String.fromCharCode(65 + index)}
                  </div>
                  <span className={isSelected ? "font-medium" : "font-normal"}>
                    {option}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Explanation (shown after answering) */}
        <div className="mt-8 rounded-xl border border-green-200/80 bg-green-50/70 px-6 py-5 text-[14.5px] leading-relaxed text-green-800">
          <span className="font-semibold">Correct.</span>{" "}
          {question.explanation.replace("Correct. ", "")}
        </div>

        {/* Next question button */}
        <div className="mt-10 flex justify-end">
          <div className="relative inline-block">
            <Link href="/learn/abc123/complete">
              <Button className="bg-brand-blue px-6 py-2.5 text-[14px] font-medium text-white shadow-sm hover:bg-brand-blue/90 hover:shadow-md transition-all">
                Next question &rarr;
              </Button>
            </Link>
            <PulsingDot className="-top-1 -right-1" />
          </div>
        </div>
      </div>
    </div>
  );
}
