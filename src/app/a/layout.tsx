export default function StudioALayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontFamily: "var(--font-jakarta)",
        "--accent": "#FF5C35",
        "--accent-muted": "rgba(255, 92, 53, 0.08)",
        "--bg": "#FAFAF9",
        "--surface": "#FFFFFF",
        "--sidebar-bg": "#F7F5F2",
        "--text-primary": "#1F1F1F",
        "--text-secondary": "#6B7280",
        "--text-tertiary": "#9CA3AF",
        "--border": "#E5E7EB",
        "--success": "#059669",
        "--warning": "#D97706",
      } as React.CSSProperties}
      className="h-full"
    >
      {children}
    </div>
  );
}
