
"use client";

import React, { useState } from "react";


import ProductCard from "./productCard";
import BannerSlider from "@/components/ui/Banner";
import { Button } from "@/components/ui/button";
import ExploreCategories from "./ExploreCategories";
import SortBy from "./SortBy";
import FilterTags from "./FilterTags";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ChevronRight, Filter, X } from "lucide-react";
import Sidebar from "./Sidebar";


const mockBanners = [
  { id: 1, imageUrl: "/images/product/Rectangle 15.png" },
  { id: 2, imageUrl: "/images/product/Rectangle 16.png" },
  { id: 3, imageUrl: "/images/product/Rectangle 15.png" },
];


const mockProducts = [
  {
    image: "images/product/SANPHAM1.png",
    name: "ChatGPT Thực Chiến - Cuốn Sách Đầu Tiên Về ChatGPT Bằng Tiếng Việt",
    salePrice: 104000,
    regularPrice: 129000,
    discountPercent: 19,
    soldCount: 100,
    status: "discount" as const,
  },
  {
    image: "images/product/SANPHAM2.png",
    name: "Dám Mê Dám Rực - Bí Mật Của Những Người Phụ Nữ Hạnh Phúc",
    salePrice: 104000,
    regularPrice: 139000,
    discountPercent: 25,
    soldCount: 100,
    status: "discount" as const,
  },
  {
    image: "images/product/SANPHAM3.png",
    name: "Combo 4 cuốn: ChatGPT + Dám Mê Dám Rực + Tư Duy Ngược + Chinh Phục Mục Tiêu",
    salePrice: 0,
    status: "contact" as const,
  },
  {
    image: "images/product/SANPHAM4.png",
    name: "Sách cho bé từ 2 tuổi - Bộ 4 cuốn Phát triển Sáng tạo và Ngôn ngữ",
    salePrice: 150000,
    status: "normal" as const,
    soldCount: 50,
  },
  {
    image: "images/product/SANPHAM1.png",
    name: "ChatGPT Thực Chiến - Cuốn Sách Đầu Tiên Về ChatGPT Bằng Tiếng Việt",
    salePrice: 104000,
    regularPrice: 129000,
    discountPercent: 19,
    soldCount: 100,
    status: "discount" as const,
  },
  {
    image: "images/product/SANPHAM2.png",
    name: "Dám Mê Dám Rực - Bí Mật Của Những Người Phụ Nữ Hạnh Phúc",
    salePrice: 104000,
    regularPrice: 139000,
    discountPercent: 25,
    soldCount: 100,
    status: "discount" as const,
  },
  {
    image: "images/product/SANPHAM2.png",
    name: "Dám Mê Dám Rực - Bí Mật Của Những Người Phụ Nữ Hạnh Phúc",
    salePrice: 104000,
    regularPrice: 139000,
    discountPercent: 25,
    soldCount: 100,
    status: "discount" as const,
  },
  {
    image: "images/product/SANPHAM2.png",
    name: "Dám Mê Dám Rực - Bí Mật Của Những Người Phụ Nữ Hạnh Phúc",
    salePrice: 104000,
    regularPrice: 139000,
    discountPercent: 25,
    soldCount: 100,
    status: "discount" as const,
  },
];

const SanPhamPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="bg-gray-100 py-4">
      <main className="max-w-[1200px] w-full mx-auto">

        <div className="mb-2">
          <Breadcrumb>
            <BreadcrumbList className="gap-1 sm:gap-1">
              <BreadcrumbItem>
                <BreadcrumbLink
                  href="/"
                  className="text-gray-400 hover:text-gray-500"
                >
                  Trang chủ
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbSeparator className="text-black [&>svg]:w-4 [&>svg]:h-4 mx-0">
                <ChevronRight />
              </BreadcrumbSeparator>

              <BreadcrumbItem>
                <BreadcrumbPage className="text-black font-normal">
                  Nhà sách Hồng Ân
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          
          <Sidebar className="hidden lg:block lg:w-[310px] flex-shrink-0" />

   
          <div className="flex-1 space-y-2">
       
            <div className="hidden lg:block w-full lg:max-w-[970px] bg-white rounded-lg shadow p-4">
              <BannerSlider banners={mockBanners} />
            </div>

            
            <ExploreCategories />

        
            <SortBy />

           
            <FilterTags onFilterClick={() => setIsSidebarOpen(true)} />

         
            <div className="bg-white rounded-lg p-0 sm:px-4 lg:p-4"> 
              
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
                {mockProducts.map((product, idx) => (
                  <div
                    key={idx}
                    
                    className="relative group rounded-lg overflow-hidden lg:p-0"
                  >
                    <ProductCard
                      image={product.image}
                      name={product.name}
                      salePrice={product.salePrice}
                      regularPrice={product.regularPrice}
                      discountPercent={product.discountPercent}
                      soldCount={product.soldCount}
                      status={product.status}
                    />
                
                    <div
                      className="
                        absolute inset-0 
                        rounded-lg 
                        border-2 border-gray-300 
                        opacity-0 
                        group-hover:opacity-100 
                        transition-opacity
                      "
                    />
                  </div>
                ))}
              </div>
              <div className="flex justify-center items-center mt-6 relative">
                <Button variant="outline" size="md">
                  Xem thêm
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

  
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setIsSidebarOpen(false)} 
        ></div>

        
    <div
  className={`absolute left-0 top-0 h-full w-[300px] sm:w-[350px] bg-white shadow-lg
    flex flex-col transition-all duration-300
    ${isSidebarOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}
>

          
          <div className="p-4 bg-red-600 text-white flex-none flex items-center justify-between sticky top-0 z-10">
            <h2 className="flex items-center gap-2 text-white text-base font-bold uppercase">
              <Filter className="w-4 h-4 text-white" /> BỘ LỌC TÌM KIẾM
            </h2>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="text-white hover:text-gray-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto"> 
      
            <Sidebar className="w-full shadow-none" isMobile={true} /> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default SanPhamPage;