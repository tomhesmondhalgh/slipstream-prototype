import Link from "next/link";
import { BookOpen, Users, TrendingUp, AlertTriangle } from "lucide-react";
import { SidebarB } from "../_components/sidebar";
import { TopBarB } from "../_components/top-bar";
import { dashboardStats, courses, recentActivity } from "@/lib/mock-data";

function PulsingDot() {
  return (
    <span className="relative ml-2 flex h-2 w-2">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" style={{ backgroundColor: "var(--accent)" }} />
      <span className="relative inline-flex h-2 w-2 rounded-full" style={{ backgroundColor: "var(--accent)" }} />
    </span>
  );
}

const statCards = [
  { label: "Total courses", value: dashboardStats.totalCourses, icon: BookOpen, accent: false },
  { label: "Learners trained", value: dashboardStats.learnersTrained, icon: Users, accent: false },
  { label: "Avg completion", value: `${dashboardStats.avgCompletion}%`, icon: TrendingUp, accent: false },
  { label: "Needs review", value: dashboardStats.needsReview, icon: AlertTriangle, accent: true },
];

export default function DashboardPage() {
  return (
    <div className="flex h-screen">
      <SidebarB />
      <div className="flex flex-1 flex-col overflow-hidden">
        <TopBarB />
        <main className="flex-1 overflow-y-auto bg-[#0A0A0B] px-8 pb-12 pt-8">
          {/* Stats row — distinct treatment from course cards */}
          <div className="grid grid-cols-4 gap-3">
            {statCards.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-white/[0.06] bg-[#141415] px-5 pb-5 pt-4">
                <div className="flex items-center justify-between">
                  <p className="text-[12px] font-medium text-[#52525B]">{stat.label}</p>
                  <stat.icon className={`h-4 w-4 ${stat.accent ? "text-amber-400" : "text-[#52525B]"}`} />
                </div>
                <p className="mt-3 text-[30px] font-semibold leading-none tracking-[-0.02em] text-[#F5F5F5]" style={{ fontVariantNumeric: "tabular-nums" }}>
                  {stat.value}
                </p>
              </div>
            ))}
          </div>

          {/* Courses + Activity */}
          <div className="mt-10 grid grid-cols-3 gap-6">
            {/* Courses */}
            <div className="col-span-2">
              <h2 className="mb-4 text-[11px] font-medium uppercase tracking-[0.06em] text-[#52525B]">Courses</h2>
              <div className="space-y-3">
                {courses.map((course) => {
                  const isDraft = course.status === "draft";
                  const href = course.id === 3 ? "/b/courses/3/review" : "/b/courses/1/completions";
                  const completion = course.completed && course.learnersEnrolled
                    ? Math.round((course.completed / course.learnersEnrolled) * 100)
                    : 0;

                  return (
                    <Link key={course.id} href={href} className="block rounded-xl border border-white/[0.06] bg-[#141415] p-5 transition-colors hover:border-white/[0.10] hover:bg-[#18181B]">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <h3 className="text-[14px] font-semibold text-[#F5F5F5]">{course.title}</h3>
                          {course.id === 3 && <PulsingDot />}
                        </div>
                        <span
                          className={`rounded-full px-2.5 py-0.5 text-[11px] font-medium ${
                            isDraft ? "" : "bg-emerald-500/10 text-emerald-400"
                          }`}
                          style={isDraft ? { backgroundColor: "var(--accent-muted)", color: "var(--accent)" } : undefined}
                        >
                          {isDraft ? "Draft" : "Active"}
                        </span>
                      </div>
                      <p className="mt-1.5 text-[13px] text-[#52525B]">{course.sourcePolicy}</p>

                      {course.banner && (
                        <div
                          className={`mt-3 rounded-lg px-3 py-2 text-[12px] font-medium ${
                            course.banner.variant === "amber"
                              ? "bg-amber-500/10 text-amber-400"
                              : ""
                          }`}
                          style={course.banner.variant !== "amber" ? { backgroundColor: "var(--accent-muted)", color: "var(--accent)" } : undefined}
                        >
                          {course.banner.text}
                        </div>
                      )}

                      {!isDraft && (
                        <div className="mt-4">
                          <div className="flex items-center justify-between text-[11px]">
                            <span className="text-[#A1A1AA]" style={{ fontVariantNumeric: "tabular-nums" }}>{course.completed}/{course.learnersEnrolled} completed</span>
                            <span className="font-medium text-[#F5F5F5]" style={{ fontVariantNumeric: "tabular-nums" }}>{completion}%</span>
                          </div>
                          <div className="mt-1.5 h-1 rounded-full bg-white/[0.06]">
                            <div className="h-full rounded-full transition-all" style={{ width: `${completion}%`, backgroundColor: "var(--accent)" }} />
                          </div>
                        </div>
                      )}

                      {course.lastActivity && (
                        <p className="mt-3 text-[12px] text-[#3F3F46]">Last activity: {course.lastActivity}</p>
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Activity Feed */}
            <div>
              <h2 className="mb-4 text-[11px] font-medium uppercase tracking-[0.06em] text-[#52525B]">Recent Activity</h2>
              <div className="rounded-xl border border-white/[0.06] bg-[#141415] p-5">
                <div className="space-y-4">
                  {recentActivity.map((event, idx) => (
                    <div key={event.id}>
                      <div className="flex items-start gap-3">
                        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#1C1C1E]">
                          <span className="text-[11px] font-semibold text-[#A1A1AA]">
                            {event.learnerName.split(" ").map((n) => n[0]).join("")}
                          </span>
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-[13px] font-medium text-[#F5F5F5]">{event.learnerName}</p>
                          <p className="text-[11px] text-[#52525B]">{event.courseTitle}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-[13px] font-semibold text-emerald-400" style={{ fontVariantNumeric: "tabular-nums" }}>{event.score}%</p>
                          <p className="text-[11px] text-[#3F3F46]">{event.date}</p>
                        </div>
                      </div>
                      {idx < recentActivity.length - 1 && (
                        <div className="ml-11 mt-4 border-t border-white/[0.04]" />
                      )}
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
