import Link from "next/link";
import { AlertTriangle, Info } from "lucide-react";
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
        className="text-[10px] font-semibold uppercase tracking-[0.1em]"
        style={{ color: "var(--accent)" }}
      >
        Active
      </span>
    );
  }
  return (
    <span
      className="text-[10px] font-semibold uppercase tracking-[0.1em]"
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
            {/* Greeting */}
            <h1
              className="text-[38px] font-bold leading-tight tracking-tight"
              style={{ fontFamily: "var(--font-syne)", color: "var(--text-primary)" }}
            >
              Good morning, {currentUser.name}
            </h1>
            <p
              className="mt-2 text-[14px]"
              style={{ color: "var(--text-secondary)" }}
            >
              Here&apos;s what&apos;s happening across your courses.
            </p>

            {/* Stats row — dramatic type with dividers */}
            <div
              className="mt-10 flex items-end divide-x py-6"
              style={{ borderColor: "var(--border)" }}
            >
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`flex flex-col ${i === 0 ? "pr-10" : "px-10"}`}
                  style={{ borderColor: "var(--border)" }}
                >
                  <span
                    className="text-[10px] font-semibold uppercase tracking-[0.14em]"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {stat.label}
                  </span>
                  <span
                    className="mt-1 text-[48px] font-bold leading-none tracking-tight"
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

            {/* Dividing line */}
            <div className="h-px w-full" style={{ backgroundColor: "var(--border)" }} />

            {/* Main content grid */}
            <div className="mt-10 grid grid-cols-[1fr_320px] gap-12">
              {/* Course list */}
              <div>
                <h2
                  className="text-[11px] font-semibold uppercase tracking-[0.14em]"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Your Courses
                </h2>

                <div className="mt-6 space-y-0">
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
                        className={`relative py-6 transition-colors hover:bg-black/[0.015] ${
                          index !== courses.length - 1 ? "border-b" : ""
                        }`}
                        style={{ borderColor: "var(--border)" }}
                      >
                        {/* Title row */}
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="flex items-center gap-4">
                              <h3
                                className="text-[22px] font-bold leading-snug tracking-tight"
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
                              className="mt-1 text-[13px]"
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
                            className="mt-3 flex items-center gap-2 py-2 text-[13px]"
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
                          <div className="mt-4 space-y-2">
                            {/* Squared-off progress bar, teal fill */}
                            <div className="h-[3px] w-full bg-black/[0.06]">
                              <div
                                className="h-[3px]"
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
                              className="flex items-center gap-3 text-[12px]"
                              style={{ color: "var(--text-secondary)" }}
                            >
                              <span>
                                {course.completed}/{course.learnersEnrolled} completed
                              </span>
                              <span style={{ color: "var(--text-muted)" }}>/</span>
                              <span>Avg {course.avgScore}%</span>
                              <span style={{ color: "var(--text-muted)" }}>/</span>
                              <span>{course.lastActivity}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Activity feed */}
              <div>
                <h2
                  className="text-[11px] font-semibold uppercase tracking-[0.14em]"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Recent Activity
                </h2>

                <div className="mt-6">
                  {recentActivity.map((event, index) => (
                    <div
                      key={event.id}
                      className={`flex items-baseline justify-between py-3.5 ${
                        index !== recentActivity.length - 1 ? "border-b" : ""
                      }`}
                      style={{ borderColor: "var(--border)" }}
                    >
                      <div className="min-w-0 flex-1">
                        <p
                          className="text-[13px] font-medium"
                          style={{ color: "var(--text-primary)" }}
                        >
                          {event.learnerName}
                        </p>
                        <p
                          className="mt-0.5 text-[12px]"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          {event.courseTitle}
                        </p>
                      </div>
                      <div className="ml-4 flex items-baseline gap-3 shrink-0">
                        <span
                          className="text-[18px] font-bold tracking-tight"
                          style={{
                            fontFamily: "var(--font-syne)",
                            color: "var(--text-primary)",
                          }}
                        >
                          {event.score}%
                        </span>
                        <span
                          className="text-[11px]"
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
