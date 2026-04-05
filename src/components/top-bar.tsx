import { currentUser } from "@/lib/mock-data";

export function TopBar() {
  const today = new Date().toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="flex h-14 items-center justify-between border-b border-gray-200 bg-white px-8">
      <h1 className="text-sm font-medium text-gray-700">
        Good morning, {currentUser.name}
      </h1>
      <span className="text-xs text-gray-400">{today}</span>
    </header>
  );
}
