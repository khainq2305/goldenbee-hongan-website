"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";

interface SearchSuggestion {
  text: string;
  href: string;
}

interface SearchPopupMobileProps {
  onClose: () => void;
}

const SearchPopupMobile: React.FC<SearchPopupMobileProps> = ({ onClose }) => {
  const router = useRouter();
  const [query, setQuery] = React.useState("");

  const suggestions: SearchSuggestion[] = [
    { text: "Sách giáo khoa lớp 1", href: "/search?q=sach+giao+khoa+lop+1" },
    { text: "Truyện Doraemon tập 2", href: "/search?q=doraemon+tap+2" },
    { text: "Thám tử lừng danh Conan", href: "/search?q=conan" },
    { text: "Sách giáo khoa lớp 7", href: "/search?q=sach+giao+khoa+lop+7" },
  ];

  const handleSearchSubmit = (e?: React.KeyboardEvent) => {
    if (e && e.key !== "Enter") return;
    if (!query.trim()) return;
    onClose();
    router.push(`/search?q=${encodeURIComponent(query.trim())}`);
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-white">
      <div className="bg-red-600 px-2 py-3 flex items-center">
        <button onClick={onClose} className="p-2 text-white focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <div className="relative flex-1 mx-2">
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleSearchSubmit}
          
            placeholder="Bạn cần tìm gì trong hôm nay..."
            type="text"
            className="
              w-full
              h-10
              px-4
              pr-10           
              rounded-full
              bg-white
              border-none
              text-gray-800
              placeholder-gray-400
              focus:outline-none
            "
          />

          <button
            onClick={() => handleSearchSubmit()}
            className="absolute inset-y-0 right-3 flex items-center justify-center text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="px-4 pt-3 pb-1">
          <h3 className="text-sm font-semibold text-gray-600">
            Tra cứu hàng đầu
          </h3>
        </div>
        <ul>
          {suggestions.map((item, idx) => (
            <li key={idx} className="border-b border-gray-200 last:border-b-0">
              <Link href={item.href} legacyBehavior>
                <a
                  onClick={onClose}
                  className="
                    flex items-center px-4 py-3
                    text-gray-800 text-sm
                    hover:bg-gray-100
                    transition-colors
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                  <span className="ml-3">{item.text}</span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchPopupMobile;
