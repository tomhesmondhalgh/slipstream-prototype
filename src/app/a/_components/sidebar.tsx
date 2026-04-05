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

  return (
    <aside
      className="flex h-full w-[220px] flex-col"
      style={{ backgroundColor: "var(--sidebar-bg)" }}
    >
      {/* Wordmark — dramatic, offset */}
      <div className="px-7 pt-8 pb-10">
        <span
          className="text-[13px] font-bold uppercase tracking-[0.22em] text-white/90"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          Slipstream
        </span>
        <div
          className="mt-2.5 h-[2px] w-8"
          style={{ backgroundColor: "var(--accent)" }}
        />
      </div>

      {/* Navigation — generous vertical rhythm */}
      <nav className="flex-1 px-4">
        <div className="space-y-1">
          {navItems.map((item) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group flex items-center gap-3.5 rounded-sm px-3 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] transition-all ${
                  isActive
                    ? "text-white bg-white/[0.06]"
                    : "text-white/35 hover:text-white/65 hover:bg-white/[0.03]"
                }`}
              >
                {/* Active accent bar */}
                <span
                  className="h-4 w-[2px] rounded-full transition-colors"
                  style={{
                    backgroundColor: isActive ? "var(--accent)" : "transparent",
                  }}
                />
                <item.icon
                  className="h-[15px] w-[15px]"
                  strokeWidth={isActive ? 2 : 1.5}
                />
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* User info — asymmetric bottom area */}
      <div className="border-t border-white/[0.07] px-7 py-6">
        <p className="text-[13px] font-medium tracking-tight text-white/85">
          {currentUser.fullName}
        </p>
        <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/25">
          {currentUser.organisation}
        </p>
      </div>
    </aside>
  );
}
