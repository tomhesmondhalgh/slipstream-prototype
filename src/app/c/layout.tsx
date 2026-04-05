export default function StudioCLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontFamily: "var(--font-dm-sans)",
        "--font-heading": "var(--font-fraunces)",
        "--font-mono": "var(--font-jetbrains)",
      } as React.CSSProperties}
      className="h-full"
    >
      {children}
    </div>
  );
}
