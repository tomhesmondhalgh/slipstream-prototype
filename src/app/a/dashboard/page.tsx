import Link from "next/link";
import { BookOpen, Users, TrendingUp, AlertTriangle, Info } from "lucide-react";
import { courses, dashboardStats, recentActivity } from "@/lib/mock-data";
import { PulsingDot } from "@/components/pulsing-dot";
import { SidebarA } from "../_components/sidebar";
import { TopBarA } from "../_components/top-bar";

const statCards = [
  {
    label: "Total Courses",
    value: dashboardStats.totalCourses.toString(),
    icon: BookOpen,
    accent: false,
  },
  {
    label: "Learners Trained",
    value: dashboardStats.learnersTrained.toString(),
    icon: Users,
    accent: false,
  },
  {
    label: "Avg Completion",
    value: `${dashboardStats.avgCompletion}%`,
    icon: TrendingUp,
    accent: false,
  },
  {
    label: "Needs Review",
    value: dashboardStats.needsReview.toString(),
    icon: AlertTriangle,
    accent: true,
  },
];

function StatusBadge({ status }: { status: string }) {
  if (status === "active") {
    return (
      <span className="inline-flex items-center rounded-full bg-[#E8FAF0] px-2.5 py-0.5 text-[11px] font-medium text-[#34C759]">
        Active
      </span>
    );
  }
  return (
    <span className="inline-flex items-center rounded-full bg-[#F0E8FA] px-2.5 py-0.5 text-[11px] font-medium text-[#AF52DE]">
      Draft
    </span>
  );
}

export default function DashboardPageA() {
  return (
    <div className="flex h-screen bg-[#FAFAFA]">
      <SidebarA />
      <div className="flex flex-1 flex-col overflow-hidden">
        <TopBarA />
        <main className="flex-1 overflow-y-auto px-12 py-8">
          <div className="mx-auto max-w-[1200px] space-y-10">
            {/* Stats row */}
            <div className="grid grid-cols-4 gap-5">
              {statCards.map((stat) => (
                <div
                  key={stat.label}
                  className={`rounded-2xl bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)] ${
                    stat.accent ? "ring-1 ring-[#FF9F0A]/20" : ""
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[11px] font-medium uppercase tracking-wider text-[#86868B]">
                        {stat.label}
                      </p>
                      <p className="mt-2 text-[48px] font-light leading-none tracking-tight text-[#1D1D1F]">
                        {stat.value}
                      </p>
                    </div>
                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-xl ${
                        stat.accent ? "bg-[#FF9F0A]/10" : "bg-[#F5F5F7]"
                      }`}
                    >
                      <stat.icon
                        className={`h-[16px] w-[16px] ${
                          stat.accent ? "text-[#FF9F0A]" : "text-[#007AFF]"
                        }`}
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Main content: courses + activity feed */}
            <div className="grid grid-cols-[1fr_340px] gap-8">
              {/* Course cards */}
              <div className="space-y-4">
                <h2 className="text-[15px] font-semibold text-[#1D1D1F]">Your Courses</h2>
                {courses.map((course) => (
                  <Link
                    key={course.id}
                    href={
                      course.id === 3
                        ? "/a/courses/3/review"
                        : "/a/courses/1/completions"
                    }
                    className="block cursor-pointer"
                  >
                    <div className="relative rounded-2xl bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-200 hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)]">
                      {/* Header row */}
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <h3 className="text-[15px] font-semibold text-[#1D1D1F]">
                            {course.title}
                          </h3>
                          <StatusBadge status={course.status} />
                        </div>
                        {course.id === 3 && (
                          <PulsingDot className="-top-1 -right-1" />
                        )}
                      </div>

                      {/* Source policy */}
                      <p className="mt-1 text-[13px] text-[#86868B]">
                        Generated from {course.sourcePolicy}
                      </p>

                      {/* Banner */}
                      {course.banner && (
                        <div
                          className={`mt-3 flex items-center gap-2 rounded-xl px-3.5 py-2.5 text-[13px] ${
                            course.banner.variant === "amber"
                              ? "bg-[#FF9F0A]/8 text-[#CC7700]"
                              : "bg-[#007AFF]/6 text-[#007AFF]"
                          }`}
                        >
                          {course.banner.variant === "amber" ? (
                            <AlertTriangle className="h-4 w-4 shrink-0" />
                          ) : (
                            <Info className="h-4 w-4 shrink-0" />
                          )}
                          {course.banner.text}
                        </div>
                      )}

                      {/* Stats row */}
                      {course.status === "active" && (
                        <div className="mt-4 space-y-2">
                          {/* Progress bar — hair-thin 2px */}
                          <div className="h-[2px] w-full rounded-full bg-[#F5F5F7]">
                            <div
                              className="h-[2px] rounded-full bg-[#007AFF]"
                              style={{
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
                          <div className="flex items-center gap-4 text-[12px] text-[#86868B]">
                            <span>
                              {course.completed} of {course.learnersEnrolled}{" "}
                              completed
                            </span>
                            <span>&middot;</span>
                            <span>Avg score: {course.avgScore}%</span>
                            <span>&middot;</span>
                            <span>Last activity: {course.lastActivity}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </Link>
                ))}
              </div>

              {/* Activity feed */}
              <div>
                <h2 className="mb-4 text-[15px] font-semibold text-[#1D1D1F]">
                  Recent Activity
                </h2>
                <div className="rounded-2xl bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                  {recentActivity.map((event, index) => (
                    <div
                      key={event.id}
                      className={`flex items-start gap-3 px-5 py-3.5 ${
                        index !== recentActivity.length - 1
                          ? "border-b border-black/[0.04]"
                          : ""
                      }`}
                    >
                      {/* Avatar circle */}
                      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F5F5F7] text-[11px] font-semibold text-[#007AFF]">
                        {event.learnerName
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-[13px] text-[#1D1D1F]">
                          <span className="font-medium">{event.learnerName}</span>{" "}
                          completed {event.courseTitle}
                        </p>
                        <p className="mt-0.5 text-[11px] text-[#AEAEB2]">
                          {event.score}% &middot; {event.date}
                        </p>
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
