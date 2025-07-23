// src/components/ui/Banner.tsx
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

function chunkArray<T>(array: T[], size: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

export default function BannerSlider({ banners }: Props) {
  const groupedBanners = chunkArray(banners, 2); // group mỗi slide 2 ảnh
  const shouldLoop = groupedBanners.length > 1;

  return (
    <div className="w-full overflow-hidden">
      <div className="w-full h-[180px] sm:h-[240px] md:h-[320px] px-4 relative overflow-hidden">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={16}
          loop={shouldLoop}
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
          className="w-full h-full"
        >
          {groupedBanners.map((group, idx) => (
            <SwiperSlide key={idx} className="!w-full px-2 box-border">
              <div className="grid grid-cols-2 gap-3 h-full">
                {group.map((banner) => (
                  <div key={banner.id} className="w-full h-full rounded-lg overflow-hidden">
                    <img
                      src={banner.imageUrl}
                      alt={`Banner ${banner.id}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="custom-prev absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 rounded-full p-2 shadow z-10">
          <HiChevronLeft className="w-5 h-5 text-blue-600" />
        </button>
        <button className="custom-next absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 rounded-full p-2 shadow z-10">
          <HiChevronRight className="w-5 h-5 text-blue-600" />
        </button>
      </div>

<div className="custom-pagination mt-4 flex justify-center" />
    </div>
  );
}
