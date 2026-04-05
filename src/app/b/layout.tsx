export default function StudioBLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontFamily: "var(--font-jakarta)",
        "--accent": "#8B5CF6",
        "--accent-muted": "rgba(139, 92, 246, 0.1)",
      } as React.CSSProperties}
      className="h-full bg-[#0A0A0B] text-[#F5F5F5] antialiased"
    >
      {children}
    </div>
  );
}
