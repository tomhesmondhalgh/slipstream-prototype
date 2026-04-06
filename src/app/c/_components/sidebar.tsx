"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, BookOpen, Settings } from "lucide-react";
import { currentUser } from "@/lib/mock-data";

const navItems = [
  { label: "Dashboard", href: "/c/dashboard", icon: LayoutDashboard },
  { label: "Courses", href: "/c/courses", icon: BookOpen },
  { label: "Settings", href: "/c/settings", icon: Settings },
];

export function SidebarC() {
  const pathname = usePathname();
  return (
    <aside className="flex h-full w-[180px] flex-col py-8 justify-between" style={{ backgroundColor: "var(--ink)" }}>
      <div className="flex flex-col gap-10">
        {/* Wordmark */}
        <Link href="/c/dashboard" className="group px-5">
          <span
            className="block text-[20px] font-black tracking-tight leading-none"
            style={{ fontFamily: "var(--font-fraunces)", color: "var(--cream)" }}
          >
            Slipstream
          </span>
        </Link>

        {/* Navigation */}
        <nav className="flex flex-col gap-1">
          {navItems.map((item) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative flex items-center gap-3 px-5 py-3 transition-all duration-200 rounded-r-lg"
                style={{
                  backgroundColor: isActive ? "var(--accent)" : "transparent",
                  color: isActive ? "var(--cream)" : "var(--warm-gray)",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = "var(--cream)";
                    e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.07)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = "var(--warm-gray)";
                    e.currentTarget.style.backgroundColor = "transparent";
                  }
                }}
              >
                {isActive && (
                  <span
                    className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-[3px] rounded-full"
                    style={{ backgroundColor: "var(--cream)" }}
                  />
                )}
                <item.icon className="h-[16px] w-[16px] shrink-0" />
                <span
                  className="text-[12px] font-medium uppercase tracking-[0.08em] leading-none"
                  style={{ fontFamily: "var(--font-jetbrains)" }}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* User avatar + name */}
      <div className="flex items-center gap-3 px-5">
        <div
          className="flex h-8 w-8 items-center justify-center rounded-full text-[12px] font-bold shrink-0"
          style={{
            backgroundColor: "var(--accent-muted)",
            color: "var(--accent)",
          }}
        >
          {currentUser.fullName
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
        <span
          className="text-[12px] font-medium truncate"
          style={{ fontFamily: "var(--font-jetbrains)", color: "var(--warm-gray)" }}
        >
          {currentUser.name}
        </span>
      </div>
    </aside>
  );
}
