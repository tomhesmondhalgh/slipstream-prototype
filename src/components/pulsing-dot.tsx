export function PulsingDot({ className }: { className?: string }) {
  return (
    <span className={`absolute flex h-3 w-3 ${className}`}>
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75" />
      <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-blue" />
    </span>
  );
}
