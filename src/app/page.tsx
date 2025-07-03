import ProductHistory from "@/components/ProductHistory";
import UserOrderTabs from "@/components/ui/UserOrderTabs";
import Image from "next/image";
import NewAddressPage from "./(account)/address/new/page";
import AccountSidebar from "@/components/layout/AccountSidebar";

export default function Home() {
  return (
   <div className="container mx-auto">
    {/* <UserOrderTabs />
    <ProductHistory/> */}
    <AccountSidebar/>
    <NewAddressPage />
    </div>
  );
}
