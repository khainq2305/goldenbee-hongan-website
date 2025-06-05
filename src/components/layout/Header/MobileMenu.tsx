"use client";

import React from "react";
import Link from "next/link";

interface MobileMenuItem {
  label: string;
  href: string;
  hasDropdown: boolean;
}

interface MobileMenuProps {
  isOpen: boolean;
  items: MobileMenuItem[];
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, items, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
   
      <div
        id="mobile-menu"
        className="
          fixed inset-y-0 left-0 z-50
          bg-white h-full flex flex-col shadow-lg
          transform transition-transform duration-300 ease-out translate-x-0
          w-full sm:w-[80vw] sm:max-w-[320px]
        "
      >
        
        <div className="flex items-center justify-between p-3 bg-[var(--color-primary)] text-white w-full flex-shrink-0 relative">
          <Link
            href="/"
            className="text-2xl font-bold ml-4"
            onClick={onClose}
          >
            Hồng Ân
          </Link>
          <button
            onClick={onClose}
            aria-label="Đóng menu"
            className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1.5"
          >
            <div className="flex items-center justify-center bg-red-700 hover:bg-red-800 p-1.5 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </button>
        </div>

      
        <div className="bg-white w-full h-full overflow-y-auto">
          <nav className="py-2">
            <ul>
              {items.map((item, index) => (
                <li
                  key={index}
                  className="border-b border-gray-200 last:border-b-0"
                >
                  <Link
                    href={item.href}
                    onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                     
                      if (item.label === "Tài khoản") {
                        e.preventDefault();
                      
                      }
                      onClose();
                    }}
                    className="
                      flex items-center justify-between px-4 py-3 text-gray-700
                      hover:bg-gray-100 hover:text-[var(--color-primary)] transition-colors
                    "
                  >
                    <span>{item.label}</span>
                    {item.hasDropdown && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4 text-gray-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

     
      <div
        className="fixed inset-0 bg-black/40 z-40"
        onClick={onClose}
      />
    </>
  );
};

export default MobileMenu;
