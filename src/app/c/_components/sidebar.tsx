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
    <aside className="flex h-full w-[180px] flex-col bg-[#1A1A1A] py-8 justify-between">
      <div className="flex flex-col gap-10">
        {/* Wordmark */}
        <Link href="/c/dashboard" className="group px-5">
          <span
            className="block text-[20px] font-black tracking-tight text-[#FAF8F5] leading-none"
            style={{ fontFamily: "var(--font-fraunces)" }}
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
                className="relative flex items-center gap-3 px-5 py-2.5 transition-all"
                style={{
                  backgroundColor: isActive ? "var(--accent)" : "transparent",
                  color: isActive ? "#FAF8F5" : "#B8B2A8",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = "#FAF8F5";
                    e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.07)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = "#B8B2A8";
                    e.currentTarget.style.backgroundColor = "transparent";
                  }
                }}
              >
                {isActive && (
                  <span
                    className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-[3px] rounded-r-full"
                    style={{ backgroundColor: "#FAF8F5" }}
                  />
                )}
                <item.icon className="h-[16px] w-[16px] shrink-0" />
                <span
                  className="text-[11px] font-medium uppercase tracking-[0.18em] leading-none"
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
          className="flex h-8 w-8 items-center justify-center rounded-full text-[11px] font-bold shrink-0"
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
          className="text-[11px] font-medium text-[#B8B2A8] truncate"
          style={{ fontFamily: "var(--font-jetbrains)" }}
        >
          {currentUser.name}
        </span>
      </div>
    </aside>
  );
}
