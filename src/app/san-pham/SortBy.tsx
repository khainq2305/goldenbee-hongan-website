"use client";

import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const desktopOptions = [
  { name: "Mới nhất" },
  { name: "Phổ biến" },
  { name: "Bán chạy" },
  { name: "Giá thấp" },
  { name: "Giá cao" },
];

const mobileTabletOptions = [
  { name: "Mới nhất" },
  { name: "Phổ biến" },
  { name: "Bán chạy" },
];

export default function SortBy() {
  const [isPriceDropdownOpen, setIsPriceDropdownOpen] = React.useState(false);
  const [selectedSort, setSelectedSort] = React.useState("Bán chạy");

  React.useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        isPriceDropdownOpen &&
        !(event.target as HTMLElement).closest(".price-dropdown-container")
      ) {
        setIsPriceDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isPriceDropdownOpen]);

  const handleSortClick = (name: string) => {
    setSelectedSort(name);
    if (name !== "Giá tăng" && name !== "Giá giảm") {
      setIsPriceDropdownOpen(false);
    }
  };

  return (
    <div className="bg-white p-3 rounded-none lg:rounded-lg shadow-sm">
      <div className="hidden lg:flex items-center text-sm gap-3">
        <span className="font-semibold text-gray-700 whitespace-nowrap">
          Sắp xếp theo
        </span>

        {desktopOptions.map((option) => {
          let className = `px-4 py-2 rounded-md transition-colors duration-200 ease-in-out cursor-pointer flex-shrink-0`;

          if (option.name === selectedSort) {
            className += " bg-white text-blue-600 border border-blue-300";
          } else {
            className +=
              " bg-white text-gray-700 border border-gray-200 hover:bg-gray-100";
          }

          return (
            <button
              key={option.name}
              className={`${className} focus:outline-none`}
              onClick={() => handleSortClick(option.name)}
            >
              {option.name}
            </button>
          );
        })}
      </div>
      <div className="flex lg:hidden items-center justify-between text-sm">
        <span className="font-semibold text-gray-700 hidden">Sắp xếp theo</span>

        {mobileTabletOptions.map((option) => {
          let className = `px-3 py-1 transition-colors bg-white cursor-pointer`;

          if (option.name === selectedSort) {
            className += " text-blue-600 bg-transparent rounded-lg";
          } else {
            className += " text-gray-700 hover:bg-gray-100 bg-transparent";
          }

          return (
            <button
              key={option.name}
              className={`${className} focus:outline-none`}
              onClick={() => handleSortClick(option.name)}
            >
              {option.name}
            </button>
          );
        })}

        <div className="relative price-dropdown-container">
          <button
            onClick={() => setIsPriceDropdownOpen(!isPriceDropdownOpen)}
            className={`flex items-center px-3 py-1 transition-colors bg-white hover:bg-gray-100 focus:outline-none rounded-lg ${
              selectedSort === "Giá tăng" || selectedSort === "Giá giảm"
                ? "text-blue-600 bg-transparent"
                : "text-gray-700"
            }`}
          >
            Giá{" "}
            <span className="ml-1">
              {isPriceDropdownOpen ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </span>
          </button>

          {isPriceDropdownOpen && (
            <div className="absolute z-10 mt-2 w-[120px] bg-white shadow-md rounded-md p-1 border border-gray-200 right-0 focus:outline-none">
              <div
                className={`cursor-pointer px-3 py-1.5 hover:bg-gray-100 rounded text-gray-700 focus:bg-gray-100 focus:text-gray-900 focus:outline-none ${
                  selectedSort === "Giá tăng"
                    ? "text-blue-600 bg-transparent"
                    : ""
                }`}
                onClick={() => {
                  setSelectedSort("Giá tăng");
                  setIsPriceDropdownOpen(false);
                }}
              >
                Giá tăng
              </div>
              <div
                className={`cursor-pointer px-3 py-1.5 hover:bg-gray-100 rounded text-gray-700 focus:bg-gray-100 focus:text-gray-900 focus:outline-none ${
                  selectedSort === "Giá giảm"
                    ? "text-blue-600 bg-transparent"
                    : ""
                }`}
                onClick={() => {
                  setSelectedSort("Giá giảm");
                  setIsPriceDropdownOpen(false);
                }}
              >
                Giá giảm
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
