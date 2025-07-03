import AccountSidebar from "@/components/layout/AccountSidebar";

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  return (
   <div className=" bg-[#f5f5fa] min-h-screen pt-4">
    <div className="flex gap-4 max-w-[1200px] mx-auto">
      <AccountSidebar />
      <main className="flex-1 bg-white rounded-md">
        {children}
      </main>
    </div>
    </div>
  );
}
