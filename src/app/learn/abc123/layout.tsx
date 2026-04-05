export default function LearnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Minimal header */}
      <header className="border-b border-gray-100">
        <div className="mx-auto flex h-16 max-w-[780px] items-center justify-between px-8">
          <span className="text-[13px] font-semibold tracking-wide uppercase text-brand-dark">
            Brightfield Care
          </span>
          <span className="text-[13px] font-medium text-gray-400">
            Lone Worker Safety
          </span>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1">
        <div className="mx-auto max-w-[780px] px-8 py-14">{children}</div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-6 text-center text-[11px] tracking-wide text-gray-300">
        Prepared by Brightfield Care Ltd{" "}
        <span className="mx-1.5">&middot;</span> Powered by Slipstream
      </footer>
    </div>
  );
}
