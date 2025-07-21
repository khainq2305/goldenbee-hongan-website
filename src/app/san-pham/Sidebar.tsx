
"use client";
import React from "react";
import { ChevronDown, Filter } from "lucide-react";

import { Button } from "@/components/ui/button";

const categories = [
  "English book",
  "Sách tiếng Việt",
  "Văn phòng phẩm",
  "Quà lưu niệm",
];
const filterCategories = ["Sách", "Văn phòng phẩm", "Quà lưu niệm"];
const brands = ["Thiên Long", "Casio", "Deli"];

interface SidebarProps {
  className?: string;
  isMobile?: boolean;
}

export default function Sidebar({ className, isMobile = false }: SidebarProps) {
  return (
    
    <div className={`w-full space-y-4 ${className} ${!isMobile ? 'lg:sticky lg:top-20' : ''} ${isMobile ? 'p-4' : ''}`}>
      
    
      {!isMobile && (
        <div className={`bg-white p-4 rounded-lg shadow-sm`}>
          <h3 className="font-bold text-base capitalize pb-2 text-gray-700 border-b border-gray-200">
            Khám phá theo danh mục
          </h3>
          <div className="text-sm">
            {categories.map((cat, index) => (
              <div
                key={cat}
                className={`flex justify-between items-center py-2 text-[15px] cursor-pointer
                             text-gray-700
                             hover:text-blue-600 hover:underline transition-colors duration-150 ease-in-out
                             ${index < categories.length - 1 ? "border-b border-gray-200" : ""}`}
              >
                <a href="#" className="flex-grow">
                  <span>{cat}</span>
                </a>
                <ChevronDown
                  className="w-4 h-4 text-black"
                  strokeWidth={2.5}
                />
              </div>
            ))}
          </div>
        </div>
      )}

    
      <div className={`bg-white ${isMobile ? 'shadow-none' : 'p-4 rounded-lg shadow-sm'}`}> 
        
        {!isMobile && (
            <h3 className="font-medium text-base uppercase flex items-center gap-2 text-gray-800">
                <Filter className="w-4 h-4 text-black" /> BỘ LỌC TÌM KIẾM
            </h3>
        )}
        
      
        <div className={`text-sm ${isMobile ? 'mt-0 space-y-3' : 'mt-2 space-y-3'}`}> 
        
          <div className="pt-0"> 
            <p className="font-medium mb-1 text-gray-700 text-[15px]">
              Theo danh mục
            </p>
            <ul className="space-y-2">
              {filterCategories.map((c) => (
                <li key={c}>
                  <label className="flex items-center text-gray-700 hover:text-black cursor-pointer">
                    <input
                      type="checkbox"
                      className="mr-2 h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                    />
                    {c}
                  </label>
                </li>
              ))}
            </ul>
          </div>
         
          <div className="pt-3 border-t border-gray-200">
            <p className="font-medium mb-1 text-gray-700 text-[15px]">
              Thương hiệu
            </p>
            <ul className="space-y-2">
              {brands.map((b) => (
                <li key={b}>
                  <label className="flex items-center text-gray-700 hover:text-black cursor-pointer">
                    <input
                      type="checkbox"
                      className="mr-2 h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                    />
                    {b}
                  </label>
                </li>
              ))}
            </ul>
          </div>
   
          <div className="pt-3 border-t border-gray-200">
            <p className="font-medium mb-1 text-gray-700 text-[15px]">
              Khoảng giá
            </p>
            <div className="flex items-center gap-2">
              <input
                type="number"
                placeholder="Từ"
                className="w-full border border-gray-300 rounded px-2 py-1 h-8 text-gray-700 text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
              />
              <span className="text-gray-500">-</span>
              <input
                type="number"
                placeholder="Đến"
                className="w-full border border-gray-300 rounded px-2 py-1 h-8 text-gray-700 text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
              />
            </div>
          </div>
         
          <div className="pt-3 border-t border-gray-200">
            <p className="font-medium mb-1 text-gray-700 text-[15px]">Đánh giá</p>
            <ul className="space-y-2">
                <li>
                    <label className="flex items-center text-gray-700 hover:text-black cursor-pointer">
                        <input type="radio" name="rating" className="mr-2 h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded-full" /> 5 <span className="ml-1">⭐</span>
                    </label>
                </li>
                <li>
                    <label className="flex items-center text-gray-700 hover:text-black cursor-pointer">
                        <input type="radio" name="rating" className="mr-2 h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded-full" /> Từ 4 <span className="ml-1">⭐</span>
                    </label>
                </li>
                <li>
                    <label className="flex items-center text-gray-700 hover:text-black cursor-pointer">
                        <input type="radio" name="rating" className="mr-2 h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded-full" /> Từ 3 <span className="ml-1">⭐</span>
                    </label>
                </li>
            </ul>
          </div>
       
          <Button className="w-full bg-red-600 hover:bg-red-700 text-white py-2.5 mt-4">
            Áp dụng
          </Button>
        </div>
      </div>
    </div>
  );
}