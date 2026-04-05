export default function StudioALayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontFamily: "var(--font-space-grotesk)",
        "--font-display": "var(--font-syne)",
        "--font-body": "var(--font-space-grotesk)",
        "--accent": "#0D9488",
        "--accent-light": "#0D948815",
        "--surface": "#FAFAF8",
        "--text-primary": "#111111",
        "--text-secondary": "#64748B",
        "--text-muted": "#94A3B8",
        "--warning": "#F97316",
        "--warning-light": "#F9731610",
        "--border": "#E2E2DE",
      } as React.CSSProperties}
      className="h-full"
    >
      {children}
    </div>
  );
}
