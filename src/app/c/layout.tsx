export default function StudioCLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontFamily: "var(--font-dm-sans)",
        "--font-heading": "var(--font-fraunces)",
        "--font-mono": "var(--font-jetbrains)",
        "--accent": "#7C8C2F",
        "--accent-muted": "color-mix(in srgb, var(--accent) 15%, transparent)",
        "--ink": "#1A1A1A",
        "--cream": "#FAF8F5",
        "--warm-gray": "#B8B2A8",
        "--mid-gray": "#6B6560",
        "--surface": "#EDEBE8",
        "--success": "#16A34A",
      } as React.CSSProperties}
      className="h-full"
    >
      {children}
    </div>
  );
}
