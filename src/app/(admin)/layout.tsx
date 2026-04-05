import { Sidebar } from "@/components/sidebar";
import { TopBar } from "@/components/top-bar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <TopBar />
        <main className="flex-1 overflow-y-auto bg-gray-50/70 px-10 py-8">
          {children}
        </main>
      </div>
    </div>
  );
}
