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
    <aside className="flex h-full w-[200px] flex-col bg-[#111111]">
      {/* Wordmark */}
      <div className="px-6 pt-7 pb-8">
        <span
          className="text-[15px] font-bold uppercase tracking-[0.15em] text-white"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          Slipstream
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-0.5 px-3">
        {navItems.map((item) => {
          const isActive = pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`group flex items-center gap-3 px-3 py-2.5 text-[12px] font-medium uppercase tracking-[0.08em] transition-colors ${
                isActive
                  ? "text-white"
                  : "text-white/40 hover:text-white/70"
              }`}
            >
              {/* Teal active indicator bar */}
              <span
                className="h-4 w-[2px] rounded-full transition-colors"
                style={{
                  backgroundColor: isActive ? "var(--accent)" : "transparent",
                }}
              />
              <item.icon
                className="h-[14px] w-[14px]"
                strokeWidth={1.5}
              />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* User info */}
      <div className="border-t border-white/10 px-6 py-5">
        <p className="text-[12px] font-medium text-white/80">
          {currentUser.fullName}
        </p>
        <p className="mt-0.5 text-[10px] uppercase tracking-[0.08em] text-white/30">
          {currentUser.organisation}
        </p>
      </div>
    </aside>
  );
}
