"use client";

import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ChevronDown } from "lucide-react"; // Import ChevronDown cho menu thả xuống


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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // Khai báo kiểu tường minh cho dropdownRef là HTMLDivElement hoặc null
  const dropdownRef = useRef<HTMLDivElement>(null); 

  // Đóng menu thả xuống khi nhấp ra ngoài
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => { // Thêm kiểu cho event
      // Kiểm tra xem dropdownRef.current có tồn tại và là một HTMLElement hay không
      // event.target có thể là Node hoặc EventTarget, nên cần ép kiểu an toàn
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) { 
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  // Xác định nhãn cho tab đang hoạt động hiện tại cho nút thả xuống
  const currentActiveItem = menuItems.find(item => item.href === pathname);
  const dropdownButtonLabel = currentActiveItem ? currentActiveItem.label : "Chọn mục...";

  return (
    <>
      {/* Menu thả xuống di động - Hiển thị trên màn hình nhỏ hơn 'lg' */}
      <div className="relative w-full lg:hidden mb-4" ref={dropdownRef}>
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center justify-between w-full p-3 bg-white rounded-md shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors"
          aria-expanded={isDropdownOpen}
        >
          <div className="flex items-center">
            {/* Ảnh đại diện & Thông tin người dùng (Di động) */}
            <div className="w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center mr-2 flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="16" height="16" viewBox="0 0 24 24">
                <circle cx="12" cy="7" r="4" />
                <path d="M5 21v-2a7 7 0 0 1 14 0v2" />
              </svg>
            </div>
            <div className="text-left overflow-hidden">
                {/* Hiển thị nhãn tab đang hoạt động hoặc văn bản mặc định */}
              <p className="font-medium text-sm text-gray-900 truncate">
                {dropdownButtonLabel}
              </p>
            </div>
          </div>
          <ChevronDown
            size={20}
            className={`text-gray-600 transform transition-transform ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
          />
        </button>

        {isDropdownOpen && (
          <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg z-30">
            <nav>
              <ul>
                {menuItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setIsDropdownOpen(false)} // Đóng menu thả xuống khi nhấp vào liên kết
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
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </div>

      {/* Thanh bên trên máy tính để bàn - Ẩn trên màn hình nhỏ hơn 'lg', hiển thị nếu không */}
      <aside className="w-full max-w-[260px] bg-white rounded-md p-4 space-y-6 hidden lg:block">
        {/* Ảnh đại diện + Thông tin */}
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

        {/* Menu thanh bên */}
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
    </>
  );
}