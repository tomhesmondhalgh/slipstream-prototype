import Link from "next/link";
import { AlertTriangle, Info, Plus, Users, BookOpen, TrendingUp, AlertCircle } from "lucide-react";
import { courses, dashboardStats, recentActivity, currentUser } from "@/lib/mock-data";
import { PulsingDot } from "@/components/pulsing-dot";
import { SidebarA } from "../_components/sidebar";
import { TopBarA } from "../_components/top-bar";

const stats = [
  {
    label: "Total Courses",
    value: dashboardStats.totalCourses.toString(),
    icon: BookOpen,
  },
  {
    label: "Learners Trained",
    value: dashboardStats.learnersTrained.toString(),
    icon: Users,
  },
  {
    label: "Avg Completion",
    value: `${dashboardStats.avgCompletion}%`,
    icon: TrendingUp,
  },
  {
    label: "Needs Review",
    value: dashboardStats.needsReview.toString(),
    icon: AlertCircle,
    warning: true,
  },
];

function StatusBadge({ status }: { status: string }) {
  if (status === "active") {
    return (
      <span
        className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-semibold"
        style={{
          backgroundColor: "rgba(5, 150, 105, 0.08)",
          color: "var(--success)",
        }}
      >
        Active
      </span>
    );
  }
  return (
    <span
      className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-semibold"
      style={{
        backgroundColor: "var(--accent-muted)",
        color: "var(--accent)",
      }}
    >
      Draft
    </span>
  );
}

export default function DashboardPageA() {
  return (
    <div className="flex h-screen" style={{ backgroundColor: "var(--bg)" }}>
      <SidebarA />
      <div className="flex flex-1 flex-col overflow-hidden">
        <TopBarA />
        <main className="flex-1 overflow-y-auto px-10 py-8">
          <div className="mx-auto max-w-[1080px]">
            {/* Greeting + CTA */}
            <div className="flex items-center justify-between">
              <h1
                className="text-[30px] leading-[1.15]"
                style={{
                  fontFamily: "var(--font-instrument-serif)",
                  color: "var(--text-primary)",
                }}
              >
                Good morning, {currentUser.name}
              </h1>
              <Link href="/a/courses/new">
                <button
                  className="flex items-center gap-2 rounded-md px-5 py-2.5 text-[14px] font-semibold text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "var(--accent)" }}
                >
                  <Plus className="h-4 w-4" strokeWidth={2.5} />
                  Create Course
                </button>
              </Link>
            </div>

            {/* Stats row */}
            <div className="mt-8 grid grid-cols-4 gap-5">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg p-6"
                  style={{
                    backgroundColor: "var(--surface)",
                    boxShadow:
                      "0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.02)",
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="text-[13px] font-medium"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {stat.label}
                    </span>
                    <div
                      className="flex h-8 w-8 items-center justify-center rounded-full"
                      style={{
                        backgroundColor: stat.warning
                          ? "rgba(217, 119, 6, 0.08)"
                          : "var(--accent-muted)",
                      }}
                    >
                      <stat.icon
                        className="h-4 w-4"
                        style={{
                          color: stat.warning
                            ? "var(--warning)"
                            : "var(--accent)",
                        }}
                        strokeWidth={1.75}
                      />
                    </div>
                  </div>
                  <span
                    className="mt-3 block text-[32px] leading-none tracking-tight tabular-nums"
                    style={{
                      fontFamily: "var(--font-instrument-serif)",
                      color: stat.warning
                        ? "var(--warning)"
                        : "var(--text-primary)",
                    }}
                  >
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Two-column: courses + activity */}
            <div className="mt-10 grid gap-6" style={{ gridTemplateColumns: "7fr 3fr" }}>
              {/* Course cards */}
              <div className="space-y-4">
                <h2
                  className="text-[13px] font-semibold uppercase tracking-wide"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Your Courses
                </h2>

                <div className="space-y-4">
                  {courses.map((course) => (
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
                        className="relative rounded-lg p-6 transition-shadow hover:shadow-md"
                        style={{
                          backgroundColor: "var(--surface)",
                          boxShadow:
                            "0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.02)",
                        }}
                      >
                        {/* Title row */}
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="flex items-center gap-3">
                              <h3
                                className="text-[18px] font-semibold leading-snug"
                                style={{ color: "var(--text-primary)" }}
                              >
                                {course.title}
                              </h3>
                              <StatusBadge status={course.status} />
                            </div>
                            <p
                              className="mt-1 text-[13px]"
                              style={{ color: "var(--text-secondary)" }}
                            >
                              From {course.sourcePolicy}
                            </p>
                          </div>
                          {course.id === 3 && (
                            <PulsingDot className="-top-1.5 -right-1.5" />
                          )}
                        </div>

                        {/* Banner */}
                        {course.banner && (
                          <div
                            className="mt-4 flex items-center gap-2 rounded-md px-3.5 py-2.5 text-[13px] font-medium"
                            style={{
                              backgroundColor:
                                course.banner.variant === "amber"
                                  ? "rgba(217, 119, 6, 0.06)"
                                  : "var(--accent-muted)",
                              color:
                                course.banner.variant === "amber"
                                  ? "var(--warning)"
                                  : "var(--accent)",
                            }}
                          >
                            {course.banner.variant === "amber" ? (
                              <AlertTriangle className="h-4 w-4 shrink-0" />
                            ) : (
                              <Info className="h-4 w-4 shrink-0" />
                            )}
                            {course.banner.text}
                          </div>
                        )}

                        {/* Progress bar for active courses */}
                        {course.status === "active" && (
                          <div className="mt-5">
                            <div
                              className="h-1 w-full overflow-hidden rounded-full"
                              style={{ backgroundColor: "var(--accent-muted)" }}
                            >
                              <div
                                className="h-1 rounded-full"
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
                            <p
                              className="mt-2 text-[13px] tabular-nums"
                              style={{ color: "var(--text-secondary)" }}
                            >
                              {course.completed}/{course.learnersEnrolled}{" "}
                              completed &middot; Avg {course.avgScore}%
                              &middot; {course.lastActivity}
                            </p>
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
                  className="text-[13px] font-semibold uppercase tracking-wide"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Recent Activity
                </h2>

                <div
                  className="mt-4 rounded-lg p-5"
                  style={{
                    backgroundColor: "var(--surface)",
                    boxShadow:
                      "0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.02)",
                  }}
                >
                  <div className="space-y-0">
                    {recentActivity.map((event, index) => {
                      const initials = event.learnerName
                        .split(" ")
                        .map((n) => n[0])
                        .join("");
                      return (
                        <div
                          key={event.id}
                          className="flex items-start gap-3 py-3.5"
                          style={{
                            borderBottom:
                              index !== recentActivity.length - 1
                                ? "1px solid var(--border)"
                                : "none",
                          }}
                        >
                          <div
                            className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold"
                            style={{
                              backgroundColor: "var(--accent-muted)",
                              color: "var(--accent)",
                            }}
                          >
                            {initials}
                          </div>
                          <div className="min-w-0 flex-1">
                            <p
                              className="text-[13px] font-semibold leading-snug"
                              style={{ color: "var(--text-primary)" }}
                            >
                              {event.learnerName}
                            </p>
                            <p
                              className="mt-0.5 text-[12px] leading-snug"
                              style={{ color: "var(--text-secondary)" }}
                            >
                              Completed {event.courseTitle} &middot;{" "}
                              <span
                                className="font-semibold tabular-nums"
                                style={{ color: "var(--text-primary)" }}
                              >
                                {event.score}%
                              </span>
                            </p>
                            <p
                              className="mt-1 text-[11px]"
                              style={{ color: "var(--text-tertiary)" }}
                            >
                              {event.date}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
