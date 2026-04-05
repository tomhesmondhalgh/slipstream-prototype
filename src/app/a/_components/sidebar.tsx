"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, BookOpen, Settings } from "lucide-react";
import { currentUser } from "@/lib/mock-data";

const navItems = [
  { label: "Dashboard", href: "/a/dashboard", icon: LayoutDashboard },
  { label: "Courses", href: "/a/courses", icon: BookOpen },
  { label: "Settings", href: "/a/settings", icon: Settings },
];

export function SidebarA() {
  const pathname = usePathname();

  const initials = currentUser.fullName
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <aside
      className="flex h-full flex-col"
      style={{
        width: 240,
        backgroundColor: "var(--sidebar-bg)",
        borderRight: "1px solid var(--border)",
      }}
    >
      {/* Wordmark */}
      <div className="px-6 pt-7 pb-8">
        <span
          className="text-[20px] leading-none"
          style={{
            fontFamily: "var(--font-instrument-serif)",
            fontStyle: "italic",
            color: "var(--text-primary)",
          }}
        >
          Slipstream
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3">
        <div className="space-y-1">
          {navItems.map((item) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 rounded-md px-3 py-2.5 text-[14px] font-medium transition-colors"
                style={{
                  fontFamily: "var(--font-jakarta)",
                  backgroundColor: isActive
                    ? "var(--accent-muted)"
                    : "transparent",
                  color: isActive
                    ? "var(--accent)"
                    : "var(--text-secondary)",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.03)";
                    e.currentTarget.style.color = "var(--text-primary)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "var(--text-secondary)";
                  }
                }}
              >
                <item.icon
                  className="h-[18px] w-[18px]"
                  strokeWidth={isActive ? 2 : 1.5}
                />
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* User info */}
      <div
        className="px-4 py-5"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <div className="flex items-center gap-3">
          <div
            className="flex h-8 w-8 items-center justify-center rounded-full text-[12px] font-semibold"
            style={{
              backgroundColor: "var(--accent-muted)",
              color: "var(--accent)",
            }}
          >
            {initials}
          </div>
          <div>
            <p
              className="text-[13px] font-semibold leading-tight"
              style={{ color: "var(--text-primary)" }}
            >
              {currentUser.fullName}
            </p>
            <p
              className="text-[12px] leading-tight mt-0.5"
              style={{ color: "var(--text-tertiary)" }}
            >
              {currentUser.organisation}
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
