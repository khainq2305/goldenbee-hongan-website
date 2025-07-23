// app/(account)/layout.tsx

"use client";

import AccountSidebar from "@/components/layout/AccountSidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const breadcrumbs = [
    { label: "Trang chủ", href: "/" },
  ];

  const pathLabelMap: { [key: string]: string } = {
    "profile": "Thông tin tài khoản",
    "don-hang": "Quản lý đơn hàng",
    "address": "Sổ địa chỉ",
    "viewed": "Sản phẩm đã xem",
    "vouchers": "Kho voucher",
  };

  const pathSegments = pathname.split('/').filter(segment => segment !== '' && segment !== '(account)');

  if (pathSegments.length > 0) {
    const lastSegment = pathSegments[pathSegments.length - 1];
    const currentLabel = pathLabelMap[lastSegment];

    if (currentLabel) {
      breadcrumbs.push({ label: currentLabel, href: pathname });
    } else {
      const defaultLabel = lastSegment;
      breadcrumbs.push({ label: defaultLabel.charAt(0).toUpperCase() + defaultLabel.slice(1), href: pathname });
    }
  }

  return (
  <div className="bg-gray-100 min-h-screen py-6">
    <div className="max-w-[1200px] mx-auto w-full px-4 flex flex-col lg:flex-row lg:gap-6">
      {breadcrumbs.length > 1 && (
        <div className="w-full lg:hidden mb-4">
          <nav className="text-sm text-gray-500" aria-label="breadcrumb">
            <ol className="list-none p-0 inline-flex">
              {breadcrumbs.map((crumb, index) => (
                <li key={crumb.href} className="flex items-center">
                  <Link
                    href={crumb.href}
                    className={`${
                      index === breadcrumbs.length - 1
                        ? "font-bold text-gray-900"
                        : "hover:underline hover:text-red-500"
                    }`}
                  >
                    {crumb.label}
                  </Link>
                  {index < breadcrumbs.length - 1 && (
                    <span className="mx-2 text-gray-400">&gt;</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </div>
      )}

      <AccountSidebar />

      <main className="flex-1 min-w-0 bg-white rounded-md shadow-sm">
        {children}
      </main>
    </div>
  </div>
);

}