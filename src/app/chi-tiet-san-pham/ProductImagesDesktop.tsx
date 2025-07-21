"use client";

import Image from "next/image";
import { useState } from "react";
// 1. Import thêm "FreeMode" từ swiper/modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, FreeMode } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { FaTruck, FaUndo, FaGift } from "react-icons/fa";

// CSS cho Swiper
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

const images = [
  "/images/ProductDetail/vi-sao-khong-the-giet.png",
  "/images/ProductDetail/thumb-1.png",
  "/images/ProductDetail/thumb-2.png",
  "/images/ProductDetail/thumb-3.png",
];

export default function ProductImagesDesktop() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <div className="bg-white p-4 rounded-lg">
      <Swiper
        spaceBetween={10}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Thumbs]}
        className="rounded-md"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full aspect-[3/4] overflow-hidden rounded-md">
              <Image
                src={img}
                alt={`Ảnh chính sản phẩm ${i + 1}`}
                fill
                sizes="(max-width: 1200px) 40vw, 33vw"
                className="object-contain"
                priority={i === 0}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView="auto"
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        className="mt-3"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i} className="!w-[80px] flex-shrink-0 group">
            <div className="w-full aspect-[3/4] rounded-md overflow-hidden cursor-pointer">
              <Image
                src={img}
                alt={`Thumbnail ${i + 1}`}
                width={80}
                height={107}
                className="object-contain w-full h-full bg-white border-2 border-gray-200 group-hover:border-red-400 transition-colors group-[.swiper-slide-thumb-active]:border-red-500"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-6 pt-4 ">
        <h3 className="text-base font-semibold mb-4 text-gray-800">
          Chính sách ưu đãi của Hồng Ân
        </h3>
        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex items-center justify-between cursor-pointer hover:text-red-500 transition-colors">
            <div className="flex items-center gap-3">
              <FaTruck className="text-red-500 w-5 h-5" />
              <span>Thời gian giao hàng: Giao nhanh và uy tín</span>
            </div>
            <span className="text-gray-400">&gt;</span>
          </li>
          <li className="flex items-center justify-between cursor-pointer hover:text-red-500 transition-colors">
            <div className="flex items-center gap-3">
              <FaUndo className="text-red-500 w-5 h-5" />
              <span>Chính sách đổi trả: Đổi trả miễn phí toàn quốc</span>
            </div>
            <span className="text-gray-400">&gt;</span>
          </li>
          <li className="flex items-center justify-between cursor-pointer hover:text-red-500 transition-colors">
            <div className="flex items-center gap-3">
              <FaGift className="text-red-500 w-5 h-5" />
              <span>Chính sách khách sỉ: Ưu đãi khi mua số lượng lớn</span>
            </div>
            <span className="text-gray-400">&gt;</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
