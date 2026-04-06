"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { LayoutDashboard, BookOpen, Users, BarChart3, Settings } from "lucide-react";
import { currentUser } from "@/lib/mock-data";

const navItems = [
  { label: "Dashboard", href: "/c/dashboard", icon: LayoutDashboard },
  { label: "Courses", href: "/c/courses", icon: BookOpen },
  { label: "Learners", href: "/c/learners", icon: Users },
  { label: "Reports", href: "/c/reports", icon: BarChart3 },
  { label: "Settings", href: "/c/settings", icon: Settings },
];

export function SidebarC() {
  const pathname = usePathname();
  return (
    <aside
      className="flex h-full w-[220px] flex-col border-r py-6 justify-between"
      style={{ backgroundColor: "#F5F3F0", borderColor: "color-mix(in srgb, var(--ink) 8%, transparent)" }}
    >
      <div className="flex flex-col gap-6">
        {/* Wordmark */}
        <div className="px-5">
          <Link href="/c/dashboard">
            <span
              className="text-[20px] font-black tracking-tight leading-none"
              style={{ fontFamily: "var(--font-fraunces)", color: "var(--ink)" }}
            >
              Slipstream
            </span>
          </Link>
        </div>

        {/* Client logo card */}
        <div className="px-4">
          <div
            className="flex items-center gap-3 rounded-xl bg-white px-4 py-3"
            style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.02)" }}
          >
            <Image
              src="/brightfield-logo.png"
              alt="Brightfield Homecare"
              width={140}
              height={42}
              className="shrink-0"
            />
          </div>
          <p
            className="mt-2 px-1 text-[12px]"
            style={{ color: "var(--mid-gray)" }}
          >
            {currentUser.role}
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-0.5 px-3">
          {navItems.map((item) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] font-medium transition-all duration-200 ${
                  isActive
                    ? ""
                    : "hover:bg-[var(--ink)]/[0.04]"
                }`}
                style={{
                  backgroundColor: isActive ? "var(--accent)" : undefined,
                  color: isActive ? "#FFFFFF" : "var(--mid-gray)",
                }}
              >
                <item.icon className="h-[16px] w-[16px] shrink-0" />
                <span
                  className="uppercase tracking-[0.06em] leading-none"
                  style={{ fontFamily: "var(--font-jetbrains)" }}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* User */}
      <div className="flex items-center gap-3 px-5">
        <div
          className="flex h-8 w-8 items-center justify-center rounded-full text-[11px] font-bold shrink-0"
          style={{
            backgroundColor: "color-mix(in srgb, var(--accent) 15%, transparent)",
            color: "var(--accent)",
          }}
        >
          {currentUser.fullName
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
        <div className="min-w-0">
          <span className="block text-[13px] font-medium truncate" style={{ color: "var(--ink)" }}>
            {currentUser.fullName}
          </span>
          <span className="block text-[11px] truncate" style={{ color: "var(--warm-gray)" }}>
            {currentUser.role}
          </span>
        </div>
      </div>
    </aside>
  );
}
