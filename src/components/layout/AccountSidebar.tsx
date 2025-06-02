"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";


const menuItems = [
  {
    label: "Thông tin tài khoản",
    href: "/account/profile",
 icon: (
      <Image
        src="/icon/accountSidebar/user.svg"
        alt="User"
        width={18}
        height={18}
      />
    ),
  },
  {
    label: "Quản lý đơn hàng",
    href: "/account/orders",
 icon: (
      <Image
        src="/icon/accountSidebar/order.svg"
        alt="order"
        width={18}
        height={18}
      />
    ),
  },
  {
    label: "Sổ địa chỉ",
    href: "/account/address",
 icon: (
      <Image
        src="/icon/accountSidebar/user.svg"
        alt="User"
        width={18}
        height={18}
      />
    ),
  },
  {
    label: "Sản phẩm đã xem",
    href: "/account/viewed-products",
 icon: (
      <Image
        src="/icon/accountSidebar/faEye.svg"
        alt="User"
        width={18}
        height={18}
      />
    ),
  },
  {
    label: "Kho voucher",
    href: "/account/vouchers",
 icon: (
      <Image
        src="/icon/accountSidebar/Vector.svg"
        alt="User"
        width={18}
        height={18}
      />
    ),
  },
];

export default function AccountSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-full max-w-[240px] space-y-4">
      {/* Avatar + Info */}
<div className="flex items-center gap-3">
  <div className="w-14 h-14 rounded-full bg-[#98a0ae] flex items-center justify-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="white"
    >
      <circle cx="12" cy="7" r="4" />
      <path d="M5 21v-2a7 7 0 0 1 14 0v2" />
    </svg>
  </div>
  <div>
    <p className="text-base font-bold text-black leading-none">Nguyễn Văn A</p>
    <p className="text-base text-[#4b5563] leading-none mt-1">user@gmail.com</p>
  </div>
</div>


      {/* Menu */}
      <div className="bg-white rounded-md overflow-hidden">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 px-4 py-3 text-sm transition",
              pathname === item.href
                ? "bg-gray-200 text-black"
                : "hover:bg-gray-100 text-black"
            )}
          >
            {item.icon}
            {item.label}
          </Link>
        ))}
      </div>
    </aside>
  );
}
