"use client";

import { useState } from "react";
import Link from "next/link";
import { Info, Flag } from "lucide-react";
import { SidebarC } from "../../../_components/sidebar";
import { TopBarC } from "../../../_components/top-bar";
import { course3Sections, course3Quiz } from "@/lib/mock-data";
import { PulsingDot } from "@/components/pulsing-dot";

export default function StudioCBuildReviewPage() {
  const [activeSection, setActiveSection] = useState(0);
  const section = course3Sections[activeSection];
  const isContentSection = activeSection < 5;

  const sectionQuiz =
    activeSection === 0
      ? course3Quiz.slice(0, 2)
      : activeSection === 1
        ? [course3Quiz[2]]
        : [];

  return (
    <div className="flex h-screen" style={{ backgroundColor: "var(--cream)" }}>
      <SidebarC />
      <div className="flex flex-1 flex-col overflow-hidden">
        <TopBarC />
        <main className="flex-1 overflow-y-auto px-10 py-10">
          {/* Header */}
          <div className="flex items-start justify-between gap-8">
            <div>
              <div className="flex items-center gap-4">
                <h1
                  className="text-[38px] font-black leading-tight tracking-tight"
                  style={{
                    fontFamily: "var(--font-fraunces)",
                    color: "var(--ink)",
                  }}
                >
                  Safeguarding Adults at Risk
                </h1>
                <span
                  className="inline-flex items-center px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em]"
                  style={{
                    fontFamily: "var(--font-jetbrains)",
                    backgroundColor: "var(--accent)",
                    color: "var(--cream)",
                  }}
                >
                  Ready to review
                </span>
              </div>
              <p
                className="mt-2 text-[13px] font-medium"
                style={{
                  fontFamily: "var(--font-jetbrains)",
                  color: "var(--mid-gray)",
                }}
              >
                Generated from Safeguarding Policy 2025
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <button
                className="px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.15em] transition-opacity hover:opacity-70"
                style={{
                  fontFamily: "var(--font-jetbrains)",
                  color: "var(--mid-gray)",
                }}
              >
                Save draft
              </button>
              <div className="relative inline-block">
                <Link
                  href="/c/courses/3/send"
                  className="inline-flex items-center gap-2 px-6 py-2.5 text-[11px] font-bold uppercase tracking-[0.15em] transition-opacity hover:opacity-90"
                  style={{
                    fontFamily: "var(--font-jetbrains)",
                    backgroundColor: "var(--accent)",
                    color: "var(--cream)",
                  }}
                >
                  Publish &amp; send
                </Link>
                <PulsingDot className="-top-1 -right-1" />
              </div>
            </div>
          </div>

          {/* Info callout */}
          <div
            className="mt-8 flex items-start gap-3 border-2 px-5 py-4 text-[14px] leading-relaxed"
            style={{
              borderColor: "color-mix(in srgb, var(--accent) 20%, transparent)",
              backgroundColor:
                "color-mix(in srgb, var(--accent) 6%, transparent)",
              color: "var(--ink)",
            }}
          >
            <Info
              className="mt-0.5 h-4 w-4 shrink-0"
              style={{ color: "var(--accent)" }}
            />
            <p>
              This course was generated from your Safeguarding Policy 2025. All
              content references Brightfield Care&apos;s specific procedures and
              reporting obligations.
            </p>
          </div>

          {/* Main layout: section list + content */}
          <div className="mt-10 flex gap-8">
            {/* Section list — left panel */}
            <div className="w-[220px] shrink-0 self-start">
              <div className="border-b-2 pb-3" style={{ borderColor: "var(--ink)" }}>
                <p
                  className="text-[11px] font-medium uppercase tracking-[0.2em]"
                  style={{
                    fontFamily: "var(--font-jetbrains)",
                    color: "var(--mid-gray)",
                  }}
                >
                  Sections
                </p>
                {/* Progress bar */}
                <div
                  className="mt-2 h-1.5 w-full"
                  style={{ backgroundColor: "var(--surface)" }}
                >
                  <div
                    className="h-full transition-all"
                    style={{
                      backgroundColor: "var(--ink)",
                      width: `${((activeSection + 1) / (course3Sections.length - 1)) * 100}%`,
                    }}
                  />
                </div>
                <p
                  className="mt-1.5 text-[10px]"
                  style={{
                    fontFamily: "var(--font-jetbrains)",
                    color: "var(--warm-gray)",
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {activeSection + 1} of {course3Sections.length - 1} reviewed
                </p>
              </div>
              <div className="mt-1">
                {course3Sections.map((s, index) => (
                  <button
                    key={s.id}
                    onClick={() => setActiveSection(index)}
                    className="flex w-full items-start gap-2.5 py-3 text-left text-[13px] transition-colors border-b"
                    style={{
                      borderColor:
                        "color-mix(in srgb, var(--ink) 8%, transparent)",
                      backgroundColor:
                        index === activeSection
                          ? "color-mix(in srgb, var(--accent) 8%, transparent)"
                          : "transparent",
                      color:
                        index === activeSection
                          ? "var(--ink)"
                          : "var(--mid-gray)",
                      paddingLeft: "8px",
                      paddingRight: "8px",
                    }}
                  >
                    <span
                      className="shrink-0 text-[11px] font-bold mt-px"
                      style={{
                        fontFamily: "var(--font-jetbrains)",
                        color:
                          index === activeSection
                            ? "var(--accent)"
                            : "var(--warm-gray)",
                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                      className="leading-snug"
                      style={{
                        fontWeight: index === activeSection ? 600 : 400,
                      }}
                    >
                      {s.title}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Content panel */}
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline justify-between border-b-2 pb-4" style={{ borderColor: "var(--ink)" }}>
                <div>
                  <h2
                    className="text-[28px] font-bold leading-tight tracking-tight"
                    style={{
                      fontFamily: "var(--font-fraunces)",
                      color: "var(--ink)",
                    }}
                  >
                    {section.title}
                  </h2>
                  <p
                    className="mt-1 text-[11px] font-medium uppercase tracking-[0.12em]"
                    style={{
                      fontFamily: "var(--font-jetbrains)",
                      color: "var(--warm-gray)",
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    {section.durationMinutes} min read
                  </p>
                </div>
              </div>

              {/* Section content */}
              <div
                className="mt-8 max-w-[640px] space-y-5 text-[16px]"
                style={{
                  lineHeight: 1.8,
                  color: "var(--ink)",
                }}
              >
                {section.content.split("\n\n").map((paragraph, i) => (
                  <p
                    key={i}
                    dangerouslySetInnerHTML={{
                      __html: paragraph
                        .replace(
                          /\*\*(.*?)\*\*/g,
                          '<strong style="font-weight:600">$1</strong>'
                        )
                        .replace(/\n/g, "<br />"),
                    }}
                  />
                ))}
              </div>

              {/* Quiz questions for this section */}
              {isContentSection && sectionQuiz.length > 0 && (
                <div
                  className="mt-12 border-t-2 pt-8"
                  style={{ borderColor: "var(--ink)" }}
                >
                  <h3
                    className="mb-6 text-[11px] font-medium uppercase tracking-[0.2em]"
                    style={{
                      fontFamily: "var(--font-jetbrains)",
                      color: "var(--mid-gray)",
                    }}
                  >
                    Section Questions
                  </h3>
                  {sectionQuiz.map((q) => (
                    <div
                      key={q.id}
                      className="mb-6 border-2 p-6"
                      style={{
                        borderColor:
                          "color-mix(in srgb, var(--ink) 10%, transparent)",
                        backgroundColor: "var(--surface)",
                      }}
                    >
                      <p
                        className="mb-5 text-[15px] font-semibold"
                        style={{ color: "var(--ink)" }}
                      >
                        <span
                          className="text-[11px] font-bold uppercase tracking-[0.1em] mr-2"
                          style={{
                            fontFamily: "var(--font-jetbrains)",
                            color: "var(--mid-gray)",
                          }}
                        >
                          Q{q.id}
                        </span>
                        {q.question}
                      </p>
                      <div className="space-y-2">
                        {q.options.map((opt, i) => (
                          <div
                            key={i}
                            className="border-2 px-4 py-3 text-[14px]"
                            style={{
                              borderColor:
                                i === q.correctIndex
                                  ? "var(--success)"
                                  : "color-mix(in srgb, var(--ink) 10%, transparent)",
                              backgroundColor:
                                i === q.correctIndex
                                  ? "color-mix(in srgb, var(--success) 8%, transparent)"
                                  : "white",
                              color:
                                i === q.correctIndex
                                  ? "var(--success)"
                                  : "var(--mid-gray)",
                            }}
                          >
                            {opt}
                            {i === q.correctIndex && (
                              <span
                                className="ml-2 text-[11px] font-bold uppercase tracking-[0.1em]"
                                style={{
                                  fontFamily: "var(--font-jetbrains)",
                                  color: "var(--success)",
                                }}
                              >
                                Correct
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 flex justify-end">
                        <button
                          className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.12em] transition-opacity hover:opacity-70"
                          style={{
                            fontFamily: "var(--font-jetbrains)",
                            color: "var(--warm-gray)",
                          }}
                        >
                          <Flag className="h-3 w-3" />
                          Flag for review
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
