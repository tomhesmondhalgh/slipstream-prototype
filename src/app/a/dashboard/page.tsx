import Link from "next/link";
import { AlertTriangle, Info, Plus } from "lucide-react";
import { courses, dashboardStats, recentActivity, currentUser } from "@/lib/mock-data";
import { PulsingDot } from "@/components/pulsing-dot";
import { SidebarA } from "../_components/sidebar";
import { TopBarA } from "../_components/top-bar";

const stats = [
  { label: "Courses", value: dashboardStats.totalCourses.toString() },
  { label: "Learners Trained", value: dashboardStats.learnersTrained.toString() },
  { label: "Avg Completion", value: `${dashboardStats.avgCompletion}%` },
  { label: "Needs Review", value: dashboardStats.needsReview.toString(), warning: true },
];

function StatusLabel({ status }: { status: string }) {
  if (status === "active") {
    return (
      <span
        className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.14em]"
        style={{ color: "var(--accent)" }}
      >
        <span
          className="inline-block h-[5px] w-[5px] rounded-full"
          style={{ backgroundColor: "var(--accent)" }}
        />
        Active
      </span>
    );
  }
  return (
    <span
      className="text-[10px] font-bold uppercase tracking-[0.14em]"
      style={{ color: "var(--text-muted)" }}
    >
      Draft
    </span>
  );
}

export default function DashboardPageA() {
  return (
    <div className="flex h-screen" style={{ backgroundColor: "var(--surface)" }}>
      <SidebarA />
      <div className="flex flex-1 flex-col overflow-hidden">
        <TopBarA />
        <main className="flex-1 overflow-y-auto px-12 py-10">
          <div className="mx-auto max-w-[1100px]">
            {/* Greeting — editorial scale: big display heading, small subtitle, primary CTA */}
            <div className="flex items-start justify-between">
              <div>
                <h1
                  className="text-[40px] font-bold leading-[1.1] tracking-[-0.02em]"
                  style={{ fontFamily: "var(--font-syne)", color: "var(--text-primary)" }}
                >
                  Good morning, {currentUser.name}
                </h1>
                <p
                  className="mt-3 text-[15px] leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Here&apos;s what&apos;s happening across your courses.
                </p>
              </div>
              <Link href="/a/courses/new">
                <button
                  className="flex items-center gap-2.5 px-7 py-3.5 text-[12px] font-bold uppercase tracking-[0.08em] text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "var(--accent)" }}
                >
                  <Plus className="h-4 w-4" strokeWidth={2.5} />
                  Create Course
                </button>
              </Link>
            </div>

            {/* Stats row — dramatic large numbers, label above, tight coupling */}
            <div
              className="mt-12 flex items-end"
            >
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`flex flex-col ${
                    i === 0 ? "pr-12" : "px-12"
                  } ${i !== 0 ? "border-l" : ""}`}
                  style={{ borderColor: "var(--border)" }}
                >
                  <span
                    className="text-[10px] font-bold uppercase tracking-[0.16em]"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {stat.label}
                  </span>
                  <span
                    className="mt-1.5 text-[52px] font-bold leading-none tracking-[-0.03em] tabular-nums"
                    style={{
                      fontFamily: "var(--font-syne)",
                      color: stat.warning ? "var(--warning)" : "var(--text-primary)",
                    }}
                  >
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Dividing rule — full bleed, stronger weight */}
            <div
              className="mt-10 h-[1px] w-full"
              style={{ backgroundColor: "var(--border-strong)" }}
            />

            {/* Main content: asymmetric two-column */}
            <div className="mt-10 grid grid-cols-[1fr_300px] gap-16">
              {/* Course list — editorial index style */}
              <div>
                <h2
                  className="text-[10px] font-bold uppercase tracking-[0.18em]"
                  style={{ color: "var(--text-muted)" }}
                >
                  Your Courses
                </h2>

                <div className="mt-5">
                  {courses.map((course, index) => (
                    <Link
                      key={course.id}
                      href={
                        course.id === 3
                          ? "/a/courses/3/review"
                          : "/a/courses/1/completions"
                      }
                      className="block"
                    >
                      <div
                        className={`relative py-7 transition-colors hover:bg-black/[0.012] ${
                          index !== courses.length - 1 ? "border-b" : ""
                        }`}
                        style={{ borderColor: "var(--border)" }}
                      >
                        {/* Title row */}
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="flex items-center gap-4">
                              <h3
                                className="text-[22px] font-bold leading-snug tracking-[-0.01em]"
                                style={{
                                  fontFamily: "var(--font-syne)",
                                  color: "var(--text-primary)",
                                }}
                              >
                                {course.title}
                              </h3>
                              <StatusLabel status={course.status} />
                            </div>
                            <p
                              className="mt-1.5 text-[13px] font-medium"
                              style={{ color: "var(--text-secondary)" }}
                            >
                              From {course.sourcePolicy}
                            </p>
                          </div>
                          {course.id === 3 && (
                            <PulsingDot className="-top-1 -right-1" />
                          )}
                        </div>

                        {/* Banner */}
                        {course.banner && (
                          <div
                            className="mt-3 flex items-center gap-2.5 text-[13px] font-medium"
                            style={{
                              color:
                                course.banner.variant === "amber"
                                  ? "var(--warning)"
                                  : "var(--accent)",
                            }}
                          >
                            {course.banner.variant === "amber" ? (
                              <AlertTriangle className="h-3.5 w-3.5 shrink-0" />
                            ) : (
                              <Info className="h-3.5 w-3.5 shrink-0" />
                            )}
                            {course.banner.text}
                          </div>
                        )}

                        {/* Progress bar + stats for active courses */}
                        {course.status === "active" && (
                          <div className="mt-5 space-y-2.5">
                            {/* Progress bar — thin, crisp */}
                            <div
                              className="h-[3px] w-full rounded-full"
                              style={{ backgroundColor: "var(--accent-light)" }}
                            >
                              <div
                                className="h-[3px] rounded-full transition-all"
                                style={{
                                  backgroundColor: "var(--accent)",
                                  width: `${
                                    course.learnersEnrolled
                                      ? Math.round(
                                          ((course.completed ?? 0) /
                                            course.learnersEnrolled) *
                                            100
                                        )
                                      : 0
                                  }%`,
                                }}
                              />
                            </div>
                            <div
                              className="flex items-center gap-2 text-[11px] font-medium tabular-nums"
                              style={{ color: "var(--text-secondary)" }}
                            >
                              <span>
                                {course.completed}/{course.learnersEnrolled} completed
                              </span>
                              <span
                                className="text-[8px]"
                                style={{ color: "var(--border-strong)" }}
                              >
                                /
                              </span>
                              <span>Avg {course.avgScore}%</span>
                              <span
                                className="text-[8px]"
                                style={{ color: "var(--border-strong)" }}
                              >
                                /
                              </span>
                              <span>{course.lastActivity}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Activity feed — tighter, denser editorial sidebar */}
              <div>
                <h2
                  className="text-[10px] font-bold uppercase tracking-[0.18em]"
                  style={{ color: "var(--text-muted)" }}
                >
                  Recent Activity
                </h2>

                <div className="mt-5">
                  {recentActivity.map((event, index) => (
                    <div
                      key={event.id}
                      className={`flex items-baseline justify-between py-4 ${
                        index !== recentActivity.length - 1 ? "border-b" : ""
                      }`}
                      style={{ borderColor: "var(--border)" }}
                    >
                      <div className="min-w-0 flex-1 pr-4">
                        <p
                          className="text-[13px] font-semibold tracking-tight"
                          style={{ color: "var(--text-primary)" }}
                        >
                          {event.learnerName}
                        </p>
                        <p
                          className="mt-0.5 text-[11px] font-medium"
                          style={{ color: "var(--text-muted)" }}
                        >
                          {event.courseTitle}
                        </p>
                      </div>
                      <div className="flex items-baseline gap-2.5 shrink-0">
                        <span
                          className="text-[20px] font-bold tracking-[-0.02em] tabular-nums"
                          style={{
                            fontFamily: "var(--font-syne)",
                            color: "var(--text-primary)",
                          }}
                        >
                          {event.score}%
                        </span>
                        <span
                          className="text-[10px] font-medium tabular-nums"
                          style={{ color: "var(--text-muted)" }}
                        >
                          {event.date}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
