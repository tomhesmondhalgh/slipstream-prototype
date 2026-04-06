import Image from "next/image";
import Link from "next/link";
import { Settings } from "lucide-react";
import { currentUser } from "@/lib/mock-data";

export function TopNavC() {
  return (
    <nav className="flex items-center justify-between border-b px-8 py-3"
         style={{ borderColor: "color-mix(in srgb, var(--ink) 8%, transparent)", backgroundColor: "var(--cream)" }}>
      {/* Left: Slipstream + org */}
      <div className="flex items-center gap-6">
        <Link href="/c/dashboard" className="flex items-center gap-2">
          <span className="text-[18px] font-bold tracking-tight" style={{ fontFamily: "var(--font-fraunces)", color: "var(--ink)" }}>
            Slipstream
          </span>
        </Link>
        <span className="text-[14px]" style={{ color: "var(--warm-gray)" }}>|</span>
        <div className="flex items-center gap-2.5">
          <Image src="/brightfield-logo.png" alt="Brightfield Care" width={28} height={28} className="rounded-md" />
          <span className="text-[14px] font-semibold" style={{ color: "var(--ink)" }}>
            {currentUser.organisation}
          </span>
        </div>
      </div>

      {/* Centre: nav links */}
      <div className="flex items-center gap-6">
        {[
          { label: "Courses", href: "/c/dashboard", active: true },
          { label: "Learners", href: "#" },
          { label: "Reports", href: "#" },
        ].map((item) => (
          <Link key={item.label} href={item.href}
            className="text-[14px] font-medium transition-colors"
            style={{ color: item.active ? "var(--accent)" : "var(--mid-gray)" }}>
            {item.label}
          </Link>
        ))}
      </div>

      {/* Right: settings + user */}
      <div className="flex items-center gap-4">
        <button className="rounded-lg p-2 transition-colors hover:bg-[var(--ink)]/[0.04]">
          <Settings className="h-[18px] w-[18px]" style={{ color: "var(--mid-gray)" }} />
        </button>
        <div className="flex h-8 w-8 items-center justify-center rounded-full text-[11px] font-bold"
             style={{ backgroundColor: "color-mix(in srgb, var(--accent) 15%, transparent)", color: "var(--accent)" }}>
          {currentUser.fullName.split(" ").map(n => n[0]).join("")}
        </div>
      </div>
    </nav>
  );
}
