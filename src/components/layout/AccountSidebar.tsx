"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";

const menuItems = [
  {
    label: "Thông tin tài khoản",
    href: "/thong-tin-tai-khoan",
    icon: "/icon/accountSidebar/user.svg",
  },
  {
    label: "Quản lý đơn hàng",
    href: "/orders",
    icon: "/icon/accountSidebar/order.svg",
  },
  {
    label: "Sổ địa chỉ",
    href: "/so-dia-chi",
    icon: "/icon/accountSidebar/address.svg",
  },
  {
    label: "Sản phẩm đã xem",
    href: "/viewed",
    icon: "/icon/accountSidebar/faEye.svg",
  },
  {
    label: "Kho voucher",
    href: "/vouchers",
    icon: "/icon/accountSidebar/Vector.svg",
  },
];

export default function AccountSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-full max-w-[260px] bg-white rounded-md p-4 space-y-6">
      {/* Avatar + Info */}
      <div className="flex items-center gap-3">
        <div className="w-14 h-14 rounded-full bg-gray-400 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="28" height="28" viewBox="0 0 24 24">
            <circle cx="12" cy="7" r="4" />
            <path d="M5 21v-2a7 7 0 0 1 14 0v2" />
          </svg>
        </div>
        <div>
          <p className="text-base font-bold text-gray-900">Nguyễn Văn A</p>
          <p className="text-sm text-gray-500">user@gmail.com</p>
        </div>
      </div>

      {/* Sidebar menu */}
      <div className="space-y-1">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 px-4 py-2 rounded-md text-sm font-medium transition",
              pathname === item.href
                ? "bg-gray-200 text-black"
                : "hover:bg-gray-100 text-gray-700"
            )}
          >
            <Image src={item.icon} alt={item.label} width={18} height={18} />
            {item.label}
          </Link>
        ))}
      </div>
    </aside>
  );
}
