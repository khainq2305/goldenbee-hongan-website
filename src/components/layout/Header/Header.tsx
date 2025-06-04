"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import SearchPopup from "./SearchPopup";              
import SearchPopupMobile from "./SearchPopupMobile"; 
import MobileMenu from "./MobileMenu";                
import AccountPopup from "./AccountPopup";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchPopupOpen, setIsSearchPopupOpen] = useState(false);
  const [isAccountPopupOpen, setIsAccountPopupOpen] = useState(false);


  const searchContainerRef = useRef<HTMLDivElement | null>(null);
  const accountButtonRef = useRef<HTMLButtonElement | null>(null);
  const mobileMenuButtonRef = useRef<HTMLButtonElement | null>(null);

  const toggleMobileMenu = () => setIsMobileMenuOpen((v) => !v);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const openSearchPopup = () => setIsSearchPopupOpen(true);
  const closeSearchPopup = () => setIsSearchPopupOpen(false);

  const toggleAccountPopup = () => setIsAccountPopupOpen((v) => !v);
  const closeAccountPopup = () => setIsAccountPopupOpen(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
     
      const tgt = event.target as Node;

      
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(tgt)
      ) {
        closeSearchPopup();
      }


      if (
        isMobileMenuOpen &&
        mobileMenuButtonRef.current &&
        !mobileMenuButtonRef.current.contains(tgt) &&
        !(document.getElementById("mobile-menu")?.contains(tgt))
      ) {
        closeMobileMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen, isSearchPopupOpen, isAccountPopupOpen]);


  const infoItems = [
    {
      iconComponent: (
        <Image
          src="/icons/guarantee/check-mark.svg"
          alt="100% hàng thật"
          width={16}
          height={16}
        />
      ),
      text: "100% hàng thật",
    },
    {
      iconComponent: (
        <Image
          src="/icons/guarantee/truck.svg"
          alt="Freeship mọi đơn"
          width={16}
          height={16}
        />
      ),
      text: "Freeship mọi đơn",
    },
    {
      iconComponent: (
        <Image
          src="/icons/guarantee/return.svg"
          alt="Hoàn 200% nếu hàng giả"
          width={16}
          height={16}
        />
      ),
      text: "Hoàn 200% nếu hàng giả",
    },
    {
      iconComponent: (
        <Image
          src="/icons/guarantee/calendar-days.svg"
          alt="30 ngày đổi trả"
          width={16}
          height={16}
        />
      ),
      text: "30 ngày đổi trả",
    },
    {
      iconComponent: (
        <Image
          src="/icons/guarantee/bolt.svg"
          alt="Giao nhanh 2h"
          width={16}
          height={16}
        />
      ),
      text: "Giao nhanh 2h",
    },
    {
      iconComponent: (
        <Image
          src="/icons/guarantee/dollar-sign.svg"
          alt="Giá siêu rẻ"
          width={16}
          height={16}
        />
      ),
      text: "Giá siêu rẻ",
    },
  ];

  
  const mobileMenuItems = [
    { label: "Trang chủ", href: "/", hasDropdown: false },
    { label: "Sách tiếng Việt", href: "/sach-tieng-viet", hasDropdown: true },
    { label: "English book", href: "/english-book", hasDropdown: true },
    { label: "Văn phòng phẩm", href: "/van-phong-pham", hasDropdown: true },
    { label: "Đồ chơi", href: "/do-choi", hasDropdown: true },
    { label: "Quà lưu niệm", href: "/qua-luu-niem", hasDropdown: false },
    { label: "Tài khoản", href: "#", hasDropdown: false },
    { label: "Giới thiệu", href: "/gioi-thieu", hasDropdown: false },
    { label: "Liên hệ", href: "/lien-he", hasDropdown: false },
  ];

  
  const primaryTextClass = "text-[var(--color-primary)]";
  const primaryBgClass = "bg-[var(--color-primary)]";
  const primaryHoverTextClass = "hover:text-[var(--color-default-hover-text)]";
  const commitmentTitleColorClass = "text-blue-600";

  return (
    <header>
      
      <div className="lg:hidden relative">
        <div className={`${primaryBgClass} h-24 flex flex-col`}>
       
          <div className="text-white flex items-center justify-between px-3 py-2">
            <button
              ref={mobileMenuButtonRef}
              aria-label="Mở menu"
              className="p-1"
              onClick={toggleMobileMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
            <Link href="/" className="text-2xl font-bold">
              Hồng Ân
            </Link>
            <Link
              href="/gio-hang"
              aria-label="Giỏ hàng"
              className="relative flex items-center justify-center bg-red-700 hover:bg-red-800 p-1.5 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437
                     M7.5 14.25a3 3 0 0 0-3 3h15.75
                     m-12.75-3h11.218
                     c1.121-2.3 2.1-4.684 2.924-7.138
                     a60.114 60.114 0 0 0-16.536-1.84
                     M7.5 14.25l-2.394-8.978
                     M6 20.25a.75.75 0 1 1-1.5 0
                     .75.75 0 0 1 1.5 0
                     Zm12.75 0a.75.75 0 1 1-1.5 0
                     .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </Link>
          </div>


          <div className="px-3 flex-grow flex items-center">
            <div className="relative w-full" ref={searchContainerRef}>
              <Input
                type="text"
                placeholder="Bạn cần tìm gì trong hôm nay..."
                onFocus={openSearchPopup}
                className="
                  w-full
                  py-2.5
                  pl-4
                  pr-10
                  rounded-full
                  border border-gray-200
                  bg-white
                  text-gray-900
                  placeholder-gray-500
                  focus:outline-none
                  focus:border-[var(--color-primary)]
                  focus:ring-1 focus:ring-[var(--color-primary)]/50
                "
              />
              <button className="absolute inset-y-0 right-3 flex items-center text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197
                       m0 0A7.5 7.5 0 1 0 5.196 5.196
                       a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </button>

              {isSearchPopupOpen && <SearchPopupMobile onClose={closeSearchPopup} />}
            </div>
          </div>
        </div>

        {/* Mobile (MobileMenu) */}
        <MobileMenu
          isOpen={isMobileMenuOpen}
          items={mobileMenuItems}
          onClose={closeMobileMenu}
        />
      </div>

      {/*DESKTOP  */}
      <div className="hidden lg:block">
        <div
          className={`
            ${primaryBgClass} text-white text-center text-xs font-medium h-10
            flex items-center justify-center
          `}
        >
          Nhà sách Hồng Ân – Điểm đến của tri thức
        </div>
        <div className="bg-white px-6 lg:px-12 h-[100px] flex items-center justify-between">
          <div className="max-w-[1200px] w-full mx-auto flex items-center justify-between">
            <div className="flex-shrink-0">
              <Link href="/" className="cursor-pointer">
                <Image
                  src="/images/header/logo.svg"
                  alt="Nhà Sách Hồng Ân"
                  width={150}
                  height={50}
                  priority
                />
              </Link>
            </div>

           
            <div
              ref={searchContainerRef}
              className="flex-grow mx-4 lg:mx-8 max-w-xl relative"
            >
              <Input
                type="text"
                placeholder="Bạn cần tìm kiếm gì..."
                className={`
                  w-full py-2 pl-4 pr-10 rounded-md placeholder-gray-500
                  border border-gray-300
                  focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)]/50
                `}
                onFocus={openSearchPopup}
              />
              <button
                className={`absolute inset-y-0 right-0 flex items-center px-3 ${primaryTextClass}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197
                       m0 0A7.5 7.5 0 1 0 5.196 5.196
                       a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </button>
              {isSearchPopupOpen && <SearchPopup onClose={closeSearchPopup} />}
            </div>

            <div className="flex items-center space-x-4 lg:space-x-6 text-sm text-gray-700">
              <div className={`flex items-center space-x-1 cursor-pointer ${primaryHoverTextClass}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`w-5 h-5 ${primaryTextClass}`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25
                       S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
                <span className="font-medium hidden lg:inline">
                  Q. Ninh Kiều, P. An Khánh, Cần Thơ
                </span>
              </div>
              <button
                ref={accountButtonRef}
                onClick={toggleAccountPopup}
                className={`flex items-center space-x-1 ${primaryHoverTextClass} cursor-pointer`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`w-5 h-5 ${primaryTextClass}`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0
                       ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0
                       A17.933 17.933 0 0 1 12 21.75
                       c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
                <span>Tài khoản</span>
              </button>
              <Link href="/gio-hang" className={`flex items-center space-x-1 ${primaryHoverTextClass}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className={`w-5 h-5 ${primaryTextClass}`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437
                       M7.5 14.25a3 3 0 0 0-3 3h15.75
                       m-12.75-3h11.218
                       c1.121-2.3 2.1-4.684 2.924-7.138
                       a60.114 60.114 0 0 0-16.536-1.84
                       M7.5 14.25l-2.394-8.978
                       M6 20.25a.75.75 0 1 1-1.5 0
                       .75.75 0 0 1 1.5 0
                       Zm12.75 0a.75.75 0 1 1-1.5 0
                       .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
                <span>Giỏ hàng</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="px-6 lg:px-6 h-10 border-t border-[#D3D3D3] flex items-center justify-center">
          <div className="max-w-[1200px] w-full mx-auto flex flex-wrap items-center justify-center gap-x-4 lg:gap-x-3 gap-y-2">
            <span className={`font-semibold ${commitmentTitleColorClass} flex-shrink-0`}>
              Cam kết
            </span>
            {infoItems.map((item, index) => (
              <React.Fragment key={index}>
                {index > 0 && (
                  <span className="mx-1 text-gray-400 flex-shrink-0 hidden sm:inline">|</span>
                )}
                <div className="flex items-center space-x-1 flex-shrink-0">
                  <div className="flex-shrink-0">{item.iconComponent}</div>
                  <span className="text-xs lg:text-sm text-gray-800">{item.text}</span>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {isAccountPopupOpen && <AccountPopup onClose={closeAccountPopup} />}
    </header>
  );
};

export default Header;
