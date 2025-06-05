import AccountSidebar from "@/components/layout/AccountSidebar";

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-4 bg-gray-100 min-h-screen p-6">
      <AccountSidebar />
      <main className="flex-1 bg-white rounded-md p-6 shadow-sm">
        {children}
      </main>
    </div>
  );
}
