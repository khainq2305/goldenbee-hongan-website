
import ProductHistory from "@/components/ProductHistory";
import UserOrderTabs from "@/components/ui/UserOrderTabs";
import Footer from "@/components/layout/Footer/Footer";
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
    <div className="min-h-1000 flex justify-center items-center">
      <Footer />

    </div>
   <>
   <p className="text-red-500 ">abcfsefsefe</p>
    {/* <UserOrderTabs /> */}
    </>
  );
}
