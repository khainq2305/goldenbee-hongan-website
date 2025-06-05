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
    if (isSearchPopupOpen || isMobileMenuOpen || isAccountPopupOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isSearchPopupOpen, isMobileMenuOpen, isAccountPopupOpen]);

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
        !document.getElementById("mobile-menu")?.contains(tgt)
      ) {
        closeMobileMenu();
      }

      if (
        isAccountPopupOpen &&
        accountButtonRef.current &&
        !accountButtonRef.current.contains(tgt) &&
        !document.getElementById("account-popup")?.contains(tgt)
      ) {
        closeAccountPopup();
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

  
  const primaryBgClass = "bg-[var(--color-primary)]";

  return (
    <header>
      {/* ================== MOBILE HEADER (lg:hidden) ================== */}
      <div className="lg:hidden relative z-10">
        <div className={`${primaryBgClass} h-24 flex flex-col`}>
          <div className="text-white flex items-center justify-between px-3 py-2">
            <button
              ref={mobileMenuButtonRef}
              aria-label="Mở menu"
              className="p-1"
              onClick={toggleMobileMenu}
            >
              <Image
                src="/icons/guarantee/Button dialog → SVG.svg"
                alt="Menu"
                width={24}
                height={24}
              />
            </button>
            <Link href="/" className="text-2xl font-bold">
              Hồng Ân
            </Link>
            <Link
              href="/gio-hang"
              aria-label="Giỏ hàng"
              className="relative flex items-center justify-center bg-red-700 hover:bg-red-800 p-2.5 rounded-full"
            >
              <Image
                src="/icons/guarantee/Container.svg"
                alt="Giỏ hàng"
                width={21}
                height={21}
              />
            </Link>
          </div>

          <div className="px-3 flex-grow flex items-center">
            <div className="relative w-full" ref={searchContainerRef}>
              <Input
                type="text"
                placeholder="Bạn cần tìm gì trong hôm nay..."
                onFocus={openSearchPopup}
                className="
                  w-full py-2.5 pl-4 pr-10
                  rounded-full border border-gray-200
                  bg-white text-gray-900 placeholder-gray-500
                  focus:outline-none focus:border-[var(--color-primary)]
                  focus:ring-1 focus:ring-[var(--color-primary)]/50
                "
              />
              <button className="absolute inset-y-0 right-3 flex items-center">
                <Image
                  src="/icons/guarantee/search.svg"
                  alt="Tìm kiếm"
                  width={20}
                  height={20}
                />
              </button>

              {isSearchPopupOpen && (
                <>
                  <div
                    className="fixed left-0 right-0 bottom-0 top-[96px] bg-black/30 z-40"
                    onClick={closeSearchPopup}
                  />

                  <div className="absolute left-0 right-0 top-[calc(100%+4px)] z-50">
                    <SearchPopupMobile onClose={closeSearchPopup} />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        <MobileMenu
          isOpen={isMobileMenuOpen}
          items={mobileMenuItems}
          onClose={closeMobileMenu}
        />
      </div>

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
              className="flex-grow mx-4 lg:mx-8 max-w-xl relative z-10"
            >
              <Input
                type="text"
                placeholder="Bạn cần tìm kiếm gì..."
                className="
                  w-full py-2 pl-4 pr-10 rounded-md placeholder-gray-500
                  border border-gray-300
                  focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)]/50
                "
                onFocus={openSearchPopup}
              />
              <button
                className={`absolute inset-y-0 right-0 flex items-center px-3`}
                type="button"
              >
                <Image
                  src="/icons/guarantee/search.svg"
                  alt="Tìm kiếm"
                  width={20}
                  height={20}
                />
              </button>

              {isSearchPopupOpen && (
                <>
                  <div
                    className="fixed left-0 right-0 bottom-0 top-[180px] bg-black/30 z-40"
                    onClick={closeSearchPopup}
                  />

                  <div className="absolute left-0 right-0 top-[calc(100%+4px)] z-50">
                    <SearchPopup onClose={closeSearchPopup} />
                  </div>
                </>
              )}
            </div>

            <div className="flex items-center space-x-4 lg:space-x-6 text-sm text-gray-700">
              <div className="flex items-center space-x-1 cursor-pointer">
                <Image
                  src="/icons/guarantee/map-pin.svg"
                  alt="Địa chỉ"
                  width={20}
                  height={20}
                />
                <span className="font-medium hidden lg:inline">
                  Q. Ninh Kiều, P. An Khánh, Cần Thơ
                </span>
              </div>

              <button
                ref={accountButtonRef}
                onClick={toggleAccountPopup}
                className="flex items-center space-x-1 cursor-pointer"
              >
                <Image
                  src="/icons/guarantee/user.svg"
                  alt="Tài khoản"
                  width={20}
                  height={20}
                />
                <span>Tài khoản</span>
              </button>

              <Link
                href="/gio-hang"
                className="flex items-center space-x-1 cursor-pointer"
              >
                <Image
                  src="/icons/guarantee/shopping-cart.svg"
                  alt="Giỏ hàng"
                  width={20}
                  height={20}
                />
                <span>Giỏ hàng</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="px-6 lg:px-6 h-10 border-t border-[#D3D3D3] flex items-center justify-center">
          <div className="max-w-[1200px] w-full mx-auto flex flex-wrap items-center justify-center gap-x-4 lg:gap-x-3 gap-y-2">
            <span className="font-semibold text-blue-500 flex-shrink-0">
              Cam kết
            </span>
            {infoItems.map((item, index) => (
              <React.Fragment key={index}>
                {index > 0 && (
                  <span className="mx-1 text-gray-400 flex-shrink-0 hidden sm:inline">
                    |
                  </span>
                )}
                <div className="flex items-center space-x-1 flex-shrink-0">
                  <div className="flex-shrink-0">{item.iconComponent}</div>
                  <span className="text-xs lg:text-sm text-gray-800">
                    {item.text}
                  </span>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {isAccountPopupOpen && (
        <div id="account-popup" className="relative z-20">
          <AccountPopup onClose={closeAccountPopup} />
        </div>
      )}
    </header>
  );
};

export default Header;
