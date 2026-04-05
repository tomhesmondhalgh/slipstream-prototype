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
    <aside className="flex h-full w-[64px] flex-col items-center bg-[#1A1A1A] py-6 justify-between">
      <div className="flex flex-col items-center gap-8">
        <Link href="/c/dashboard" className="group">
          <span
            className="block text-[22px] font-black tracking-tight text-[#FAF8F5] leading-none [writing-mode:vertical-lr] rotate-180"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            S
          </span>
        </Link>
        <nav className="flex flex-col items-center gap-1">
          {navItems.map((item) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                title={item.label}
                className={`relative flex h-10 w-10 items-center justify-center rounded-sm transition-all ${
                  isActive
                    ? "bg-[#E63946] text-[#FAF8F5]"
                    : "text-[#B8B2A8] hover:text-[#FAF8F5] hover:bg-white/10"
                }`}
              >
                <item.icon className="h-[18px] w-[18px]" />
                {isActive && (
                  <span className="absolute -left-[8px] top-1/2 -translate-y-1/2 h-5 w-[3px] rounded-r-full bg-[#E63946]" />
                )}
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="flex flex-col items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E63946]/20 text-[11px] font-bold text-[#E63946]">
          {currentUser.fullName
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
      </div>
    </aside>
  );
}
