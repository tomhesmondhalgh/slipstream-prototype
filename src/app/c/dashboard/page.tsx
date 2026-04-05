import Link from "next/link";
import { SidebarC } from "../_components/sidebar";
import { TopBarC } from "../_components/top-bar";
import { PulsingDot } from "@/components/pulsing-dot";
import {
  currentUser,
  dashboardStats,
  courses,
  recentActivity,
} from "@/lib/mock-data";

export default function StudioCDashboard() {
  const stats = [
    { label: "Courses", value: dashboardStats.totalCourses, useAccent: false },
    {
      label: "Learners trained",
      value: dashboardStats.learnersTrained,
      useAccent: false,
    },
    {
      label: "Avg completion",
      value: `${dashboardStats.avgCompletion}%`,
      useAccent: false,
    },
    {
      label: "Needs review",
      value: dashboardStats.needsReview,
      useAccent: true,
    },
  ];

  return (
    <div className="flex h-screen" style={{ backgroundColor: "var(--cream)" }}>
      <SidebarC />
      <div className="flex flex-1 flex-col overflow-hidden">
        <TopBarC />
        <main className="flex-1 overflow-y-auto px-10 py-10">
          {/* Hero greeting */}
          <div className="flex items-end justify-between gap-8">
            <h1
              className="text-[52px] font-black leading-[1.05] tracking-tight"
              style={{ fontFamily: "var(--font-fraunces)", color: "var(--ink)" }}
            >
              Good morning, {currentUser.name}.
            </h1>
            <Link
              href="/c/courses/new"
              className="shrink-0 px-6 py-3 text-[11px] font-bold uppercase tracking-[0.15em] transition-all hover:opacity-90 active:scale-[0.98]"
              style={{
                fontFamily: "var(--font-jetbrains)",
                backgroundColor: "var(--accent)",
                color: "var(--cream)",
              }}
            >
              Create Course
            </Link>
          </div>

          {/* Stats row — ink borders, no cards. The Scher signature. */}
          <div className="mt-10 border-y-2 border-[var(--ink)] py-7">
            <div className="grid grid-cols-4 divide-x-2 divide-[var(--ink)]">
              {stats.map((stat) => (
                <div key={stat.label} className="px-6 first:pl-0 last:pr-0">
                  <span
                    className="block text-[11px] font-medium uppercase tracking-[0.15em]"
                    style={{ fontFamily: "var(--font-jetbrains)", color: "var(--mid-gray)" }}
                  >
                    {stat.label}
                  </span>
                  <span
                    className="mt-1 block text-[46px] font-light leading-none"
                    style={{
                      fontFamily: "var(--font-fraunces)",
                      color: stat.useAccent ? "var(--accent)" : "var(--ink)",
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Course list */}
          <section className="mt-14">
            <h2
              className="text-[11px] font-medium uppercase tracking-[0.15em]"
              style={{ fontFamily: "var(--font-jetbrains)", color: "var(--mid-gray)" }}
            >
              Your courses
            </h2>
            <div className="mt-5 divide-y-2 divide-[var(--ink)]/10">
              {courses.map((course) => {
                const href =
                  course.id === 3
                    ? "/c/courses/3/review"
                    : "/c/courses/1/completions";
                const pct =
                  course.learnersEnrolled && course.completed
                    ? Math.round(
                        (course.completed / course.learnersEnrolled) * 100
                      )
                    : 0;
                return (
                  <Link
                    key={course.id}
                    href={href}
                    className="group block py-6 first:pt-4 transition-colors hover:bg-[var(--ink)]/[0.02]"
                  >
                    <div className="flex items-start justify-between gap-8">
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <div className="relative">
                            <h3
                              className="text-[28px] font-bold leading-tight tracking-tight"
                              style={{ fontFamily: "var(--font-fraunces)", color: "var(--ink)" }}
                            >
                              {course.title}
                            </h3>
                            {course.id === 3 && <PulsingDot className="-top-1 -right-3" />}
                          </div>
                          <span
                            className="inline-flex items-center px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.15em]"
                            style={{
                              fontFamily: "var(--font-jetbrains)",
                              backgroundColor:
                                course.status === "active"
                                  ? "var(--ink)"
                                  : "var(--accent)",
                              color: "var(--cream)",
                            }}
                          >
                            {course.status}
                          </span>
                        </div>
                        <p
                          className="mt-2 text-[13px] font-medium"
                          style={{ fontFamily: "var(--font-jetbrains)", color: "var(--mid-gray)" }}
                        >
                          {course.sourcePolicy}
                        </p>
                      </div>
                      {course.learnersEnrolled != null && (
                        <div className="w-48 shrink-0 pt-1">
                          <div className="flex items-baseline justify-between">
                            <span
                              className="text-[11px] font-medium uppercase tracking-[0.15em]"
                              style={{
                                fontFamily: "var(--font-jetbrains)",
                                fontVariantNumeric: "tabular-nums",
                                color: "var(--mid-gray)",
                              }}
                            >
                              {course.completed}/{course.learnersEnrolled}
                            </span>
                            <span
                              className="text-[11px] font-medium"
                              style={{
                                fontFamily: "var(--font-jetbrains)",
                                fontVariantNumeric: "tabular-nums",
                                color: "var(--mid-gray)",
                              }}
                            >
                              {pct}%
                            </span>
                          </div>
                          <div className="mt-2 h-1.5 w-full" style={{ backgroundColor: "var(--surface)" }}>
                            <div
                              className="h-full transition-all"
                              style={{ width: `${pct}%`, backgroundColor: "var(--ink)" }}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>

          {/* Activity feed */}
          <section className="mt-14">
            <h2
              className="text-[11px] font-medium uppercase tracking-[0.15em]"
              style={{ fontFamily: "var(--font-jetbrains)", color: "var(--mid-gray)" }}
            >
              Recent activity
            </h2>
            <div className="mt-5 border-t-2" style={{ borderColor: "var(--ink)" }}>
              {recentActivity.map((event) => (
                <div
                  key={event.id}
                  className="flex items-center justify-between border-b py-3.5"
                  style={{ borderColor: "color-mix(in srgb, var(--ink) 10%, transparent)" }}
                >
                  <div className="flex items-baseline gap-3">
                    <span className="text-[15px] font-semibold" style={{ color: "var(--ink)" }}>
                      {event.learnerName}
                    </span>
                    <span
                      className="text-[11px]"
                      style={{ fontFamily: "var(--font-jetbrains)", color: "var(--mid-gray)" }}
                    >
                      {event.courseTitle}
                    </span>
                  </div>
                  <div className="flex items-baseline gap-5">
                    <span
                      className="text-[18px] font-bold"
                      style={{
                        fontFamily: "var(--font-jetbrains)",
                        fontVariantNumeric: "tabular-nums",
                        color: "var(--ink)",
                      }}
                    >
                      {event.score}%
                    </span>
                    <span
                      className="text-[11px]"
                      style={{
                        fontFamily: "var(--font-jetbrains)",
                        fontVariantNumeric: "tabular-nums",
                        color: "var(--warm-gray)",
                      }}
                    >
                      {event.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
