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
    <aside className="flex h-full w-[220px] flex-col border-r border-black/[0.04] bg-white/72 backdrop-blur-2xl">
      <div className="px-7 pt-7 pb-6">
        <span className="text-[15px] font-semibold tracking-[-0.01em] text-[#1D1D1F]">
          Slipstream
        </span>
      </div>
      <nav className="flex-1 space-y-0.5 px-3">
        {navItems.map((item) => {
          const isActive = pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-lg px-4 py-2.5 text-[13px] font-medium transition-colors ${
                isActive
                  ? "bg-[#F5F5F7] text-[#007AFF]"
                  : "text-[#86868B] hover:bg-[#F5F5F7] hover:text-[#1D1D1F]"
              }`}
            >
              <item.icon
                className={`h-[16px] w-[16px] ${isActive ? "text-[#007AFF]" : "text-[#AEAEB2]"}`}
                strokeWidth={1.5}
              />
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="border-t border-black/[0.04] px-7 py-5">
        <p className="text-[13px] font-medium text-[#1D1D1F]">{currentUser.fullName}</p>
        <p className="mt-0.5 text-[11px] text-[#AEAEB2]">{currentUser.organisation}</p>
      </div>
    </aside>
  );
}
