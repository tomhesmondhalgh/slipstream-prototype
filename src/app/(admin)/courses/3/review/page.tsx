"use client";

import { useState } from "react";
import Link from "next/link";
import { Info, Flag, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { course3Sections, course3Quiz } from "@/lib/mock-data";
import { PulsingDot } from "@/components/pulsing-dot";

export default function BuildReviewPage() {
  const [activeSection, setActiveSection] = useState(0);
  const section = course3Sections[activeSection];
  const isContentSection = activeSection < 5;

  // Get the 2 quiz questions to show for the active section (mock: show Q1 & Q2 for section 1)
  const sectionQuiz =
    activeSection === 0
      ? course3Quiz.slice(0, 2)
      : activeSection === 1
        ? [course3Quiz[2]]
        : [];

  return (
    <div className="mx-auto max-w-[1200px]">
      {/* Top bar */}
      <div className="mb-8 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-semibold text-brand-dark">
              Safeguarding Adults at Risk
            </h1>
            <Badge className="bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-50">
              Ready to review
            </Badge>
          </div>
          <p className="mt-2 text-sm text-gray-500">
            Generated from Safeguarding Policy 2025
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost" className="text-gray-500">
            Save draft
          </Button>
          <div className="relative inline-block">
            <Link href="/courses/3/send">
              <Button className="bg-brand-blue text-white hover:bg-brand-blue/90">
                Publish &amp; send
              </Button>
            </Link>
            <PulsingDot className="-top-1 -right-1" />
          </div>
        </div>
      </div>

      {/* Blue info callout */}
      <div className="mb-8 flex items-start gap-3 rounded-lg border border-brand-blue/20 bg-brand-light px-4 py-3.5 text-sm leading-relaxed text-brand-blue">
        <Info className="mt-0.5 h-4 w-4 shrink-0" />
        <p>
          This course was generated from your Safeguarding Policy 2025. All
          content references Brightfield Care&apos;s specific procedures and
          reporting obligations.
        </p>
      </div>

      {/* Main layout: sidebar + content */}
      <div className="grid grid-cols-[240px_1fr] gap-8">
        {/* Section list */}
        <Card className="shadow-sm self-start">
          <CardContent className="p-0">
            <div className="border-b border-gray-100 px-4 py-4">
              <p className="text-xs font-medium text-gray-400">
                Section {activeSection + 1} of {course3Sections.length - 1}{" "}
                reviewed
              </p>
              <div className="mt-2.5 h-1.5 w-full rounded-full bg-gray-100">
                <div
                  className="h-1.5 rounded-full bg-brand-blue transition-all"
                  style={{
                    width: `${((activeSection + 1) / (course3Sections.length - 1)) * 100}%`,
                  }}
                />
              </div>
            </div>
            {course3Sections.map((s, index) => (
              <button
                key={s.id}
                onClick={() => setActiveSection(index)}
                className={`flex w-full items-center gap-2.5 border-b border-gray-100 px-4 py-3 text-left text-sm transition-colors last:border-b-0 ${
                  index === activeSection
                    ? "bg-brand-light text-brand-blue font-medium"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <span className={`shrink-0 text-xs ${index === activeSection ? "text-brand-blue/60" : "text-gray-400"}`}>
                  {index + 1}.
                </span>
                <span className="truncate">{s.title}</span>
                {index === activeSection && (
                  <ChevronRight className="ml-auto h-3 w-3 shrink-0" />
                )}
              </button>
            ))}
          </CardContent>
        </Card>

        {/* Content panel */}
        <Card className="shadow-sm">
          <CardContent className="px-10 py-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-brand-dark">
                  {section.title}
                </h2>
                <p className="mt-1.5 text-sm text-gray-400">
                  {section.durationMinutes} min read
                </p>
              </div>
            </div>

            {/* Section content */}
            <div className="mt-8 max-w-[640px] space-y-4 text-[15px] leading-[1.7] text-gray-700">
              {section.content.split("\n\n").map((paragraph, i) => (
                <p key={i} dangerouslySetInnerHTML={{
                  __html: paragraph
                    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                    .replace(/\n/g, '<br />')
                }} />
              ))}
            </div>

            {/* Quiz questions for this section */}
            {isContentSection && sectionQuiz.length > 0 && (
              <div className="mt-10 border-t border-gray-100 pt-8">
                <h3 className="mb-5 text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Section Questions
                </h3>
                {sectionQuiz.map((q) => (
                  <div
                    key={q.id}
                    className="mb-5 rounded-lg border border-gray-200 bg-gray-50/50 p-5"
                  >
                    <p className="mb-4 text-sm font-medium text-brand-dark">
                      Q{q.id}: {q.question}
                    </p>
                    <div className="space-y-2">
                      {q.options.map((opt, i) => (
                        <div
                          key={i}
                          className={`rounded-md border px-3.5 py-2.5 text-sm ${
                            i === q.correctIndex
                              ? "border-green-200 bg-green-50 text-green-700"
                              : "border-gray-200 bg-white text-gray-600"
                          }`}
                        >
                          {opt}
                          {i === q.correctIndex && (
                            <span className="ml-2 text-xs font-medium text-green-600">
                              ✓ Correct
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 flex justify-end">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <Flag className="mr-1.5 h-3 w-3" />
                        Flag for review
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
