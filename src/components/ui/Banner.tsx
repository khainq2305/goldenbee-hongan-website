"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../styles/banner.css";

type Banner = {
  id: number;
  imageUrl: string;
};

type Props = {
  banners: Banner[];
};

export default function BannerSlider({ banners }: Props) {
  return (
    <div className="w-full max-w-[1046px] mx-auto px-4">
      {/* Responsive height with md:h-[404px] from Figma */}
      <div className="relative h-[180px] sm:h-[240px] md:h-[404px]">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={12}
          loop
          autoplay={{ delay: 4000 }}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          pagination={{
            el: ".custom-pagination",
            clickable: true,
            renderBullet: (_, className) =>
              `<span class="${className} swiper-custom-bullet"></span>`,
          }}
          breakpoints={{
            640: { slidesPerView: 1 }, // mobile
            768: { slidesPerView: 1 }, // ✅ tablet vẫn 1 ảnh
            1024: { slidesPerView: 2 }, // desktop 2 ảnh
          }}
          className="w-full h-full"
        >
          {banners.map((banner) => (
            <SwiperSlide key={banner.id}>
              <div className="w-full h-full rounded-lg overflow-hidden">
                <img
                  src={banner.imageUrl}
                  alt={`Banner ${banner.id}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation buttons */}
        <button className="custom-prev absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 rounded-full p-2 shadow z-10">
          <HiChevronLeft className="w-5 h-5 text-blue-600" />
        </button>
        <button className="custom-next absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 rounded-full p-2 shadow z-10">
          <HiChevronRight className="w-5 h-5 text-blue-600" />
        </button>
      </div>

      {/* Pagination */}
<div className="custom-pagination mt-4 hidden lg:flex justify-center" />
    </div>
  );
}
