import Link from "next/link";
import { Info } from "lucide-react";
import { SidebarC } from "../../../_components/sidebar";
import { course3Sections } from "@/lib/mock-data";
import { PulsingDot } from "@/components/pulsing-dot";

const learningObjectives = [
  "Understand what adult safeguarding means and why it matters",
  "Know the six safeguarding principles and how Brightfield Care applies them",
  "Recognise signs of abuse, neglect, and organisational harm",
  "Follow Brightfield Care's reporting procedure using SafeLog",
  "Understand your personal responsibilities as a staff member",
];

export default function CourseProgrammePage() {
  const contentSections = course3Sections;
  const totalMinutes = contentSections.reduce(
    (sum, s) => sum + s.durationMinutes,
    0
  );

  return (
    <div className="flex h-screen" style={{ backgroundColor: "var(--cream)" }}>
      <SidebarC />
      <main className="flex-1 overflow-y-auto px-10 py-10">
          <div className="mx-auto max-w-[720px] py-8">
            {/* Heading */}
            <h1
              className="text-[28px] font-bold leading-tight tracking-tight"
              style={{
                fontFamily: "var(--font-fraunces)",
                color: "var(--ink)",
              }}
            >
              Course Programme
            </h1>
            <p
              className="mt-2 text-[16px] leading-relaxed"
              style={{
                fontFamily: "var(--font-dm-sans)",
                color: "var(--mid-gray)",
              }}
            >
              Safeguarding Adults at Risk &mdash; The Brightfield Way
            </p>

            {/* Info callout */}
            <div
              className="mt-8 flex items-start gap-3 rounded-xl border px-6 py-5 text-[14px] leading-relaxed"
              style={{
                borderColor:
                  "color-mix(in srgb, var(--accent) 20%, transparent)",
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
                We&apos;ve analysed your Safeguarding Policy 2025 and created
                this programme. Review and edit before generating content.
              </p>
            </div>

            {/* Programme details */}
            <div className="mt-10 flex flex-col gap-8">
              {/* Course title */}
              <div className="flex flex-col gap-2">
                <label
                  className="text-[12px] font-medium uppercase tracking-[0.08em]"
                  style={{
                    fontFamily: "var(--font-jetbrains)",
                    color: "var(--mid-gray)",
                  }}
                >
                  Course title
                </label>
                <input
                  type="text"
                  readOnly
                  defaultValue="Safeguarding Adults at Risk — The Brightfield Way"
                  className="rounded-lg border px-4 py-3 text-[16px] outline-none"
                  style={{
                    borderColor: "var(--surface)",
                    backgroundColor: "white",
                    color: "var(--ink)",
                    fontFamily: "var(--font-dm-sans)",
                  }}
                />
              </div>

              {/* Target audience */}
              <div className="flex flex-col gap-2">
                <label
                  className="text-[12px] font-medium uppercase tracking-[0.08em]"
                  style={{
                    fontFamily: "var(--font-jetbrains)",
                    color: "var(--mid-gray)",
                  }}
                >
                  Target audience
                </label>
                <input
                  type="text"
                  readOnly
                  defaultValue="All Brightfield Care staff working with adults at risk"
                  className="rounded-lg border px-4 py-3 text-[16px] outline-none"
                  style={{
                    borderColor: "var(--surface)",
                    backgroundColor: "white",
                    color: "var(--ink)",
                    fontFamily: "var(--font-dm-sans)",
                  }}
                />
              </div>

              {/* Learning objectives */}
              <div className="flex flex-col gap-2">
                <label
                  className="text-[12px] font-medium uppercase tracking-[0.08em]"
                  style={{
                    fontFamily: "var(--font-jetbrains)",
                    color: "var(--mid-gray)",
                  }}
                >
                  Learning objectives
                </label>
                <ol className="flex flex-col gap-2.5 rounded-lg border bg-white px-4 py-4"
                  style={{ borderColor: "var(--surface)" }}
                >
                  {learningObjectives.map((obj, i) => (
                    <li key={i} className="flex items-start gap-3 text-[15px] leading-relaxed">
                      <span
                        className="shrink-0 text-[13px] font-bold mt-px"
                        style={{
                          fontFamily: "var(--font-jetbrains)",
                          color: "var(--accent)",
                          fontVariantNumeric: "tabular-nums",
                        }}
                      >
                        {i + 1}.
                      </span>
                      <span style={{ color: "var(--ink)" }}>{obj}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Estimated duration */}
              <div className="flex flex-col gap-2">
                <label
                  className="text-[12px] font-medium uppercase tracking-[0.08em]"
                  style={{
                    fontFamily: "var(--font-jetbrains)",
                    color: "var(--mid-gray)",
                  }}
                >
                  Estimated duration
                </label>
                <input
                  type="text"
                  readOnly
                  defaultValue={`${totalMinutes} minutes (5 sections + assessment)`}
                  className="rounded-lg border px-4 py-3 text-[16px] outline-none"
                  style={{
                    borderColor: "var(--surface)",
                    backgroundColor: "white",
                    color: "var(--ink)",
                    fontFamily: "var(--font-dm-sans)",
                  }}
                />
              </div>

              {/* Sections */}
              <div className="flex flex-col gap-2">
                <label
                  className="text-[12px] font-medium uppercase tracking-[0.08em]"
                  style={{
                    fontFamily: "var(--font-jetbrains)",
                    color: "var(--mid-gray)",
                  }}
                >
                  Sections
                </label>
                <div
                  className="flex flex-col rounded-lg border bg-white"
                  style={{ borderColor: "var(--surface)" }}
                >
                  {contentSections.map((s, i) => (
                    <div
                      key={s.id}
                      className="flex items-center gap-3 px-4 py-3.5 text-[15px]"
                      style={{
                        borderBottom:
                          i < contentSections.length - 1
                            ? "1px solid var(--surface)"
                            : "none",
                      }}
                    >
                      <span
                        className="shrink-0 text-[13px] font-bold"
                        style={{
                          fontFamily: "var(--font-jetbrains)",
                          color: "var(--accent)",
                          fontVariantNumeric: "tabular-nums",
                          width: "20px",
                        }}
                      >
                        {i + 1}.
                      </span>
                      <span
                        className="flex-1"
                        style={{
                          color: "var(--ink)",
                          fontFamily: "var(--font-dm-sans)",
                        }}
                      >
                        {s.title}
                      </span>
                      <span
                        className="shrink-0 text-[12px]"
                        style={{
                          fontFamily: "var(--font-jetbrains)",
                          color: "var(--warm-gray)",
                          fontVariantNumeric: "tabular-nums",
                        }}
                      >
                        {s.durationMinutes} min
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="mt-4 flex flex-col gap-3">
                <div className="relative">
                  <Link
                    href="/c/courses/3/review"
                    className="relative flex w-full items-center justify-center rounded-lg py-4 text-[13px] font-bold uppercase tracking-[0.08em] transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
                    style={{
                      fontFamily: "var(--font-jetbrains)",
                      backgroundColor: "var(--accent)",
                      color: "var(--cream)",
                    }}
                  >
                    Generate Content &rarr;
                    <PulsingDot className="-top-1 -right-1" />
                  </Link>
                </div>
                <button
                  className="flex w-full items-center justify-center rounded-lg border py-4 text-[13px] font-bold uppercase tracking-[0.08em] transition-all duration-200 hover:opacity-70"
                  style={{
                    fontFamily: "var(--font-jetbrains)",
                    borderColor: "var(--surface)",
                    color: "var(--mid-gray)",
                    backgroundColor: "transparent",
                  }}
                >
                  Edit Programme
                </button>
              </div>
            </div>
          </div>
      </main>
    </div>
  );
}
