import Link from "next/link";
import { BookOpen, Users, TrendingUp, AlertTriangle, Info } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { courses, dashboardStats, recentActivity } from "@/lib/mock-data";
import { PulsingDot } from "@/components/pulsing-dot";

const statCards = [
  {
    label: "Total Courses",
    value: dashboardStats.totalCourses.toString(),
    icon: BookOpen,
    iconColor: "text-brand-blue",
    iconBg: "bg-brand-light",
  },
  {
    label: "Learners Trained",
    value: dashboardStats.learnersTrained.toString(),
    icon: Users,
    iconColor: "text-brand-blue",
    iconBg: "bg-brand-light",
  },
  {
    label: "Avg Completion",
    value: `${dashboardStats.avgCompletion}%`,
    icon: TrendingUp,
    iconColor: "text-brand-blue",
    iconBg: "bg-brand-light",
  },
  {
    label: "Needs Review",
    value: dashboardStats.needsReview.toString(),
    icon: AlertTriangle,
    iconColor: "text-amber-600",
    iconBg: "bg-amber-50",
    accent: true,
  },
];

function StatusBadge({ status }: { status: string }) {
  if (status === "active") {
    return (
      <Badge className="bg-green-50 text-green-700 border-green-200 hover:bg-green-50">
        Active
      </Badge>
    );
  }
  return (
    <Badge className="bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-50">
      Draft
    </Badge>
  );
}

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-[1200px] space-y-10">
      {/* Stats row */}
      <div className="grid grid-cols-4 gap-6">
        {statCards.map((stat) => (
          <Card
            key={stat.label}
            className={`shadow-sm ${stat.accent ? "border-l-[3px] border-l-amber-400" : ""}`}
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                    {stat.label}
                  </p>
                  <p className="mt-2 text-3xl font-semibold text-brand-dark">
                    {stat.value}
                  </p>
                </div>
                <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${stat.iconBg}`}>
                  <stat.icon className={`h-5 w-5 ${stat.iconColor}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main content: courses + activity feed */}
      <div className="grid grid-cols-[1fr_340px] gap-8">
        {/* Course cards */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-brand-dark">Your Courses</h2>
          {courses.map((course) => (
            <Link
              key={course.id}
              href={
                course.id === 3
                  ? "/courses/3/review"
                  : "/courses/1/completions"
              }
              className="block cursor-pointer"
            >
              <Card className="relative shadow-sm transition-all duration-150 hover:shadow-md hover:ring-brand-blue/20">
                <CardContent className="p-6">
                  {/* Header row */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <h3 className="text-base font-semibold text-brand-dark">
                        {course.title}
                      </h3>
                      <StatusBadge status={course.status} />
                    </div>
                    {course.id === 3 && (
                      <PulsingDot className="-top-1 -right-1" />
                    )}
                  </div>

                  {/* Source policy */}
                  <p className="mt-1 text-sm text-gray-500">
                    Generated from {course.sourcePolicy}
                  </p>

                  {/* Banner */}
                  {course.banner && (
                    <div
                      className={`mt-3 flex items-center gap-2 rounded-md px-3 py-2 text-sm ${
                        course.banner.variant === "amber"
                          ? "border border-amber-200 bg-amber-50 text-amber-700"
                          : "border border-brand-blue/20 bg-brand-light text-brand-blue"
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
                      {/* Progress bar */}
                      <div className="h-1.5 w-full rounded-full bg-gray-100">
                        <div
                          className="h-1.5 rounded-full bg-brand-blue"
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
                      <div className="flex items-center gap-4 text-sm text-gray-500">
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
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Activity feed */}
        <div>
          <h2 className="mb-4 text-lg font-semibold text-brand-dark">
            Recent Activity
          </h2>
          <Card className="shadow-sm">
            <CardContent className="p-0">
              {recentActivity.map((event, index) => (
                <div
                  key={event.id}
                  className={`flex items-start gap-3 px-5 py-3.5 ${
                    index !== recentActivity.length - 1
                      ? "border-b border-gray-100"
                      : ""
                  }`}
                >
                  {/* Avatar circle */}
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-light text-[11px] font-semibold text-brand-blue">
                    {event.learnerName
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-gray-700">
                      <span className="font-medium text-brand-black">{event.learnerName}</span>{" "}
                      completed {event.courseTitle}
                    </p>
                    <p className="mt-0.5 text-xs text-gray-400">
                      {event.score}% &middot; {event.date}
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
