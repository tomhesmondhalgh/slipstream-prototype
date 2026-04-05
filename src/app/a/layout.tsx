export default function StudioALayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontFamily: "var(--font-space-grotesk)",
        "--font-display": "var(--font-syne)",
        "--font-body": "var(--font-space-grotesk)",
        "--accent": "#0D9488",
        "--accent-light": "#0D948812",
        "--accent-mid": "#0D948830",
        "--surface": "#FAFAF8",
        "--surface-raised": "#F5F5F0",
        "--text-primary": "#111111",
        "--text-secondary": "#5C6370",
        "--text-muted": "#8E95A2",
        "--warning": "#E8590C",
        "--warning-light": "#E8590C10",
        "--success": "#0D9488",
        "--border": "#E2E0DA",
        "--border-strong": "#D0CEC6",
        "--sidebar-bg": "#0E0E0E",
      } as React.CSSProperties}
      className="h-full"
    >
      {children}
    </div>
  );
}
