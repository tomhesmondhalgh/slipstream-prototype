import Link from "next/link";
import { BookOpen, Users, TrendingUp, AlertTriangle } from "lucide-react";
import { SidebarB } from "../_components/sidebar";
import { TopBarB } from "../_components/top-bar";
import { dashboardStats, courses, recentActivity } from "@/lib/mock-data";

function PulsingDot() {
  return (
    <span className="relative ml-2 flex h-2 w-2">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8B5CF6] opacity-75" />
      <span className="relative inline-flex h-2 w-2 rounded-full bg-[#8B5CF6]" />
    </span>
  );
}

const statCards = [
  { label: "Total Courses", value: dashboardStats.totalCourses, icon: BookOpen },
  { label: "Learners Trained", value: dashboardStats.learnersTrained, icon: Users },
  { label: "Avg Completion", value: `${dashboardStats.avgCompletion}%`, icon: TrendingUp },
  { label: "Needs Review", value: dashboardStats.needsReview, icon: AlertTriangle },
];

export default function DashboardPage() {
  return (
    <div className="flex h-screen">
      <SidebarB />
      <div className="flex flex-1 flex-col overflow-hidden">
        <TopBarB />
        <main className="flex-1 overflow-y-auto bg-[#09090B] p-8">
          {/* Stats */}
          <div className="grid grid-cols-4 gap-4">
            {statCards.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-white/[0.06] bg-[#141416] p-5">
                <div className="flex items-center justify-between">
                  <p className="text-[12px] font-medium text-[#A1A1AA]">{stat.label}</p>
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#8B5CF6]/10">
                    <stat.icon className="h-4 w-4 text-[#8B5CF6]" />
                  </div>
                </div>
                <p className="mt-3 text-[28px] font-semibold text-[#F5F5F5]">{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Courses + Activity */}
          <div className="mt-8 grid grid-cols-3 gap-6">
            {/* Courses */}
            <div className="col-span-2 space-y-4">
              <h2 className="text-[14px] font-semibold text-[#F5F5F5]">Courses</h2>
              {courses.map((course) => {
                const isDraft = course.status === "draft";
                const href = course.id === 3 ? "/b/courses/3/review" : "/b/courses/1/completions";
                const completion = course.completed && course.learnersEnrolled
                  ? Math.round((course.completed / course.learnersEnrolled) * 100)
                  : 0;

                return (
                  <Link key={course.id} href={href} className="block rounded-xl border border-white/[0.06] bg-[#141416] p-5 transition-colors hover:border-white/[0.1]">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <h3 className="text-[14px] font-semibold text-[#F5F5F5]">{course.title}</h3>
                        {course.id === 3 && <PulsingDot />}
                      </div>
                      <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-medium ${
                        isDraft
                          ? "bg-[#8B5CF6]/10 text-[#A78BFA]"
                          : "bg-emerald-500/10 text-emerald-400"
                      }`}>
                        {isDraft ? "Draft" : "Active"}
                      </span>
                    </div>
                    <p className="mt-1.5 text-[12px] text-[#52525B]">{course.sourcePolicy}</p>

                    {course.banner && (
                      <div className={`mt-3 rounded-lg px-3 py-2 text-[12px] ${
                        course.banner.variant === "amber"
                          ? "bg-amber-500/10 text-amber-400"
                          : "bg-[#8B5CF6]/10 text-[#A78BFA]"
                      }`}>
                        {course.banner.text}
                      </div>
                    )}

                    {!isDraft && (
                      <div className="mt-4">
                        <div className="flex items-center justify-between text-[11px] text-[#A1A1AA]">
                          <span>{course.completed}/{course.learnersEnrolled} completed</span>
                          <span>{completion}%</span>
                        </div>
                        <div className="mt-1.5 h-1.5 rounded-full bg-white/[0.06]">
                          <div className="h-full rounded-full bg-[#8B5CF6]" style={{ width: `${completion}%` }} />
                        </div>
                      </div>
                    )}

                    {course.lastActivity && (
                      <p className="mt-3 text-[11px] text-[#3F3F46]">Last activity: {course.lastActivity}</p>
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Activity Feed */}
            <div>
              <h2 className="mb-4 text-[14px] font-semibold text-[#F5F5F5]">Recent Activity</h2>
              <div className="rounded-xl border border-white/[0.06] bg-[#141416] p-5">
                <div className="space-y-4">
                  {recentActivity.map((event) => (
                    <div key={event.id} className="flex items-start gap-3">
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#8B5CF6]/10">
                        <span className="text-[11px] font-semibold text-[#8B5CF6]">
                          {event.learnerName.split(" ").map((n) => n[0]).join("")}
                        </span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-[13px] font-medium text-[#F5F5F5]">{event.learnerName}</p>
                        <p className="text-[11px] text-[#52525B]">{event.courseTitle}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[13px] font-semibold text-emerald-400">{event.score}%</p>
                        <p className="text-[11px] text-[#3F3F46]">{event.date}</p>
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
