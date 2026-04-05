export function PulsingDot({ className, color }: { className?: string; color?: string }) {
  const dotColor = color || "var(--accent, #2E75B6)";
  return (
    <span className={`absolute flex h-3 w-3 ${className}`}>
      <span
        className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
        style={{ backgroundColor: dotColor }}
      />
      <span
        className="relative inline-flex rounded-full h-3 w-3"
        style={{ backgroundColor: dotColor }}
      />
    </span>
  );
}
