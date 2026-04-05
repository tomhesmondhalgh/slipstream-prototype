"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, BookOpen, Settings } from "lucide-react";
import { currentUser } from "@/lib/mock-data";

const navItems = [
  { label: "Dashboard", href: "/b/dashboard", icon: LayoutDashboard },
  { label: "Courses", href: "/b/courses", icon: BookOpen },
  { label: "Settings", href: "/b/settings", icon: Settings },
];

export function SidebarB() {
  const pathname = usePathname();
  return (
    <aside className="flex h-full w-[232px] flex-col border-r border-white/[0.06] bg-[#0C0C0D]">
      {/* Brand */}
      <div className="px-5 pb-6 pt-6">
        <span className="text-[15px] font-bold tracking-[-0.02em] text-[#F5F5F5]">Slipstream</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-0.5 px-3">
        {navItems.map((item) => {
          const isActive = pathname.startsWith(item.href);
          return (
            <Link key={item.href} href={item.href}
              className={`flex items-center gap-2.5 rounded-lg px-3 py-[9px] text-[13px] font-medium transition-colors ${
                isActive
                  ? "bg-white/[0.06] text-[#F5F5F5]"
                  : "text-[#A1A1AA] hover:bg-white/[0.04] hover:text-[#F5F5F5]"
              }`}>
              <item.icon className={`h-[16px] w-[16px] ${isActive ? "" : "text-[#52525B]"}`} style={isActive ? { color: "var(--accent)" } : undefined} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* User info */}
      <div className="border-t border-white/[0.06] px-5 py-4">
        <p className="text-[13px] font-medium leading-tight text-[#F5F5F5]">{currentUser.fullName}</p>
        <p className="mt-1 text-[11px] text-[#52525B]">{currentUser.organisation}</p>
      </div>
    </aside>
  );
}
