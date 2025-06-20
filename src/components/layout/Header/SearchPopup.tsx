"use client";

import React from "react";
import Link from "next/link";

interface SearchSuggestion {
  text: string;
  href: string;
}

interface SearchPopupProps {
  onClose: () => void;
}

const SearchPopup: React.FC<SearchPopupProps> = ({ onClose }) => {
  const suggestions: SearchSuggestion[] = [
    { text: "Sách giáo khoa lớp 1", href: "/search?q=sach+giao+khoa+lop+1" },
    { text: "Truyện Doraemon tập 2", href: "/search?q=doraemon+tap+2" },
    { text: "Thám tử lừng danh Conan", href: "/search?q=conan" },
    { text: "Sách giáo khoa lớp 7", href: "/search?q=sach+giao+khoa+lop+7" },
  ];

  return (
    <div
      className="
        absolute left-0 right-0 top-[calc(100%+4px)]
        bg-white
        border border-gray-200
        rounded-md shadow-lg
        z-50 py-2
        max-h-[300px] overflow-y-auto
        w-full sm:max-w-md
        animate-fadeIn
      "
      onClick={(e) => e.stopPropagation()}
    >
      <div className="px-4 pt-2 pb-1">
        <h3 className="text-sm font-semibold text-gray-600">
          Tra cứu hàng đầu
        </h3>
      </div>

      <ul>
        {suggestions.map((item, index) => (
          <li key={index} className="border-b border-gray-200 last:border-b-0">
            <Link href={item.href} legacyBehavior>
              <a
                onClick={onClose}
                className="
                  flex items-center px-4 py-2.5
                  text-sm text-gray-700
                  hover:bg-gray-100
                  hover:text-[var(--color-primary)]
                  transition-colors
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-gray-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
                <span className="ml-2">{item.text}</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchPopup;
