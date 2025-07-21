"use client";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";

const images = [
  "/images/ProductDetail/vi-sao-khong-the-giet.png",
  "/images/ProductDetail/thumb-1.png",
  "/images/ProductDetail/thumb-2.png",
  "/images/ProductDetail/thumb-3.png",
];

export default function ProductImagesMobile() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const decrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  const increase = () => setQuantity((prev) => prev + 1);

  return (
    <>
      <div className="bg-white rounded-md overflow-hidden">
        {/* Swiper ảnh */}
        <div className="">
          <Swiper
            spaceBetween={10}
            modules={[Pagination]}
            onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex + 1)}
          >
            {images.map((img, i) => (
              <SwiperSlide key={i}>
                <div className=" w-full h-[360px] sm:h-[420px] flex justify-center items-center">
                  <Image
                    src={img}
                    alt={`main-${i}`}
                    fill
                    className="object-contain"
                  />
                  <div className="absolute bottom-3 left-3 z-10 bg-gray-500/80 text-white text-xs px-3 py-1 rounded-full font-medium backdrop-blur-sm shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
                    {currentIndex} / {images.length}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="space-y-2 px-[20px]">
            <div className="flex items-center gap-3">
              <p className="text-2xl font-bold text-[#d32128]">63.200 đ</p>
              <p className="text-sm line-through text-[#a0a0a0]">79.000 đ</p>
              <span className="bg-[#f4dada] text-[#d32128] text-xs px-2 py-1 rounded">
                -20%
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs whitespace-nowrap overflow-x-auto no-scrollbar">
              <div className="flex items-center gap-2 min-w-0 flex-1">
                <span className="bg-red-100 text-red-600 px-2 py-1 rounded truncate">
                  <span className="bg-red-600 text-white text-[10px] px-1 py-0.5 rounded mr-1">
                    🏷️
                  </span>
                  Mã Giảm 50K - Toàn quốc
                </span>
                <span className="bg-green-100 text-green-600 px-2 py-1 rounded truncate">
                  <span className="bg-green-600 text-white text-[10px] px-1 py-0.5 rounded mr-1">
                    🚚
                  </span>
                  Mã Giảm 25K phí vận chuyển
                </span>
              </div>
              <div className="shrink-0 text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>

            <div className="flex items-center gap-1 text-sm pt-1">
              <span className="bg-orange-100 text-orange-600 text-xs px-1.5 py-0.5 rounded">
                🔥 Xu hướng
              </span>
              <p className="font-medium text-black">
                Nhà Giả Kim (Tái Bản 2020)
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm pt-1">
              <span className="bg-black text-yellow-400 text-xs px-1.5 py-0.5 rounded">
                ★ 5.0
              </span>
              <span>(43)</span>
              <span className="text-[#444]">
                • Đã bán <strong>3.1k</strong>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white z-50 grid grid-cols-3 h-[48px] text-sm font-semibold text-center">
        <div className="flex items-center justify-center border border-r-0 border-gray-300">
          <button
            onClick={decrease}
            className="text-xl px-3 text-[#333] outline-none focus:outline-none"
          >
            −
          </button>
          <span className="mx-2 text-base">{quantity}</span>
          <button
            onClick={increase}
            className="text-xl px-3 text-[#333] outline-none focus:outline-none"
          >
            +
          </button>
        </div>

        <button className="text-[#cc0000] bg-white border border-r-0 border-gray-300 w-full h-full flex items-center justify-center leading-tight">
          Thêm vào
          <br />
          giỏ hàng
        </button>

        <button className="bg-[#cc0000] text-white w-full h-full flex items-center justify-center">
          Mua ngay
        </button>
      </div>
    </>
  );
}
