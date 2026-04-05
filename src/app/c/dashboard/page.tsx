import Link from "next/link";
import { SidebarC } from "../_components/sidebar";
import { TopBarC } from "../_components/top-bar";
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
          <h1
            className="text-[52px] font-black leading-[1.05] tracking-tight text-[#1A1A1A]"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Good morning, {currentUser.name}.
          </h1>

          {/* Stats row — ink borders, no cards. The Scher signature. */}
          <div className="mt-10 border-y-2 border-[#1A1A1A] py-7">
            <div className="grid grid-cols-4 divide-x-2 divide-[#1A1A1A]">
              {stats.map((stat) => (
                <div key={stat.label} className="px-6 first:pl-0 last:pr-0">
                  <span
                    className="block text-[10px] font-medium uppercase tracking-[0.2em] text-[#6B6560]"
                    style={{ fontFamily: "var(--font-jetbrains)" }}
                  >
                    {stat.label}
                  </span>
                  <span
                    className="mt-1 block text-[64px] font-light leading-none"
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
              className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#6B6560]"
              style={{ fontFamily: "var(--font-jetbrains)" }}
            >
              Your courses
            </h2>
            <div className="mt-5 divide-y-2 divide-[#1A1A1A]/10">
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
                    className="group block py-6 transition-colors hover:bg-[#1A1A1A]/[0.02]"
                  >
                    <div className="flex items-start justify-between gap-8">
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <h3
                            className="text-[28px] font-bold leading-tight tracking-tight text-[#1A1A1A]"
                            style={{ fontFamily: "var(--font-fraunces)" }}
                          >
                            {course.title}
                          </h3>
                          <span
                            className="inline-flex items-center px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em]"
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
                          className="mt-1.5 text-[13px] font-medium text-[#6B6560]"
                          style={{ fontFamily: "var(--font-jetbrains)" }}
                        >
                          {course.sourcePolicy}
                        </p>
                      </div>
                      {course.learnersEnrolled != null && (
                        <div className="w-48 shrink-0 pt-1">
                          <div className="flex items-baseline justify-between">
                            <span
                              className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#6B6560]"
                              style={{
                                fontFamily: "var(--font-jetbrains)",
                                fontVariantNumeric: "tabular-nums",
                              }}
                            >
                              {course.completed}/{course.learnersEnrolled}
                            </span>
                            <span
                              className="text-[11px] font-medium text-[#6B6560]"
                              style={{
                                fontFamily: "var(--font-jetbrains)",
                                fontVariantNumeric: "tabular-nums",
                              }}
                            >
                              {pct}%
                            </span>
                          </div>
                          <div className="mt-1.5 h-2 w-full" style={{ backgroundColor: "var(--surface)" }}>
                            <div
                              className="h-full bg-[#1A1A1A]"
                              style={{ width: `${pct}%` }}
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
              className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#6B6560]"
              style={{ fontFamily: "var(--font-jetbrains)" }}
            >
              Recent activity
            </h2>
            <div className="mt-5 border-t-2 border-[#1A1A1A]">
              {recentActivity.map((event) => (
                <div
                  key={event.id}
                  className="flex items-center justify-between border-b border-[#1A1A1A]/10 py-3.5"
                >
                  <div className="flex items-baseline gap-3">
                    <span className="text-[15px] font-semibold text-[#1A1A1A]">
                      {event.learnerName}
                    </span>
                    <span
                      className="text-[11px] text-[#6B6560]"
                      style={{ fontFamily: "var(--font-jetbrains)" }}
                    >
                      {event.courseTitle}
                    </span>
                  </div>
                  <div className="flex items-baseline gap-5">
                    <span
                      className="text-[18px] font-bold text-[#1A1A1A]"
                      style={{
                        fontFamily: "var(--font-jetbrains)",
                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      {event.score}%
                    </span>
                    <span
                      className="text-[11px] text-[#B8B2A8]"
                      style={{
                        fontFamily: "var(--font-jetbrains)",
                        fontVariantNumeric: "tabular-nums",
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
