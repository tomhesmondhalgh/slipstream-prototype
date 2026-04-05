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
    <aside className="flex h-full w-[220px] flex-col border-r border-white/[0.06] bg-[#0C0C0E]">
      <div className="px-5 py-5">
        <span className="text-[15px] font-bold tracking-tight text-[#F5F5F5]">Slipstream</span>
      </div>
      <nav className="flex-1 space-y-0.5 px-2.5 pt-1">
        {navItems.map((item) => {
          const isActive = pathname.startsWith(item.href);
          return (
            <Link key={item.href} href={item.href}
              className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[13px] font-medium transition-colors ${
                isActive ? "bg-[#8B5CF6]/10 text-[#A78BFA]" : "text-[#A1A1AA] hover:bg-white/[0.04] hover:text-[#F5F5F5]"
              }`}>
              <item.icon className={`h-4 w-4 ${isActive ? "text-[#8B5CF6]" : "text-[#52525B]"}`} />
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="border-t border-white/[0.06] px-5 py-4">
        <p className="text-[13px] font-medium text-[#F5F5F5]">{currentUser.fullName}</p>
        <p className="mt-0.5 text-[11px] text-[#52525B]">{currentUser.organisation}</p>
      </div>
    </aside>
  );
}
