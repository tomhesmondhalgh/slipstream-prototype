"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { LayoutDashboard, BookOpen, Users, BarChart3, Settings } from "lucide-react";
import { currentUser } from "@/lib/mock-data";

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard, enabled: true },
  { label: "Courses", href: "/courses", icon: BookOpen, enabled: false },
  { label: "Learners", href: "/learners", icon: Users, enabled: false },
  { label: "Reports", href: "/reports", icon: BarChart3, enabled: false },
  { label: "Settings", href: "/settings", icon: Settings, enabled: false },
];

export function SidebarMain() {
  const pathname = usePathname();
  return (
    <aside
      className="flex h-full w-[220px] flex-col py-6 justify-between"
      style={{ backgroundColor: "var(--ink)" }}
    >
      <div className="flex flex-col gap-6">
        {/* Client logo card — customer brand comes first */}
        <div className="px-4">
          <div
            className="flex items-center justify-center rounded-xl bg-white px-4 py-3"
            style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.08)" }}
          >
            <Image
              src="/brightfield-logo.png"
              alt="Brightfield Homecare"
              width={170}
              height={50}
              className="shrink-0"
            />
          </div>
        </div>

        {/* Slipstream wordmark — secondary, centred beneath logo */}
        <div className="-mt-4 text-center">
          <span
            className="text-[11px] tracking-wide leading-none opacity-35"
            style={{ color: "var(--cream)" }}
          >
            powered by Slipstream
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-0.5 px-3">
          {navItems.map((item) => {
            const isActive = pathname.startsWith(item.href);

            if (!item.enabled) {
              return (
                <span
                  key={item.href}
                  className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] font-medium cursor-default"
                  style={{
                    color: "rgba(255,255,255,0.2)",
                  }}
                >
                  <item.icon className="h-[16px] w-[16px] shrink-0" />
                  <span
                    className="uppercase tracking-[0.06em] leading-none"
                    style={{ fontFamily: "var(--font-jetbrains)" }}
                  >
                    {item.label}
                  </span>
                </span>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] font-medium transition-all duration-200"
                style={{
                  backgroundColor: isActive ? "var(--accent)" : "transparent",
                  color: isActive ? "#FFFFFF" : "rgba(255,255,255,0.5)",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = "rgba(255,255,255,0.85)";
                    e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.07)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = "rgba(255,255,255,0.5)";
                    e.currentTarget.style.backgroundColor = "transparent";
                  }
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
            backgroundColor: "rgba(255,255,255,0.1)",
            color: "rgba(255,255,255,0.7)",
          }}
        >
          {currentUser.fullName
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
        <div className="min-w-0">
          <span className="block text-[13px] font-medium truncate" style={{ color: "rgba(255,255,255,0.8)" }}>
            {currentUser.fullName}
          </span>
          <span className="block text-[11px] truncate" style={{ color: "rgba(255,255,255,0.4)" }}>
            {currentUser.role}
          </span>
        </div>
      </div>
    </aside>
  );
}
