export default function StudioALayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontFamily: "var(--font-dm-sans)",
        "--brand-dark": "#1D1D1F",
        "--brand-blue": "#007AFF",
        "--brand-light": "#F5F5F7",
        "--brand-secondary": "#86868B",
        "--brand-tertiary": "#AEAEB2",
      } as React.CSSProperties}
      className="h-full"
    >
      {children}
    </div>
  );
}
