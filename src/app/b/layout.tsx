export default function StudioBLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ fontFamily: "var(--font-jakarta)" }} className="h-full bg-[#09090B] text-[#F5F5F5] antialiased">
      {children}
    </div>
  );
}
