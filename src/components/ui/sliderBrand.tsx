"use client";

import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
type Book = {
  id: number;
  title: string;
  category: string;
  image: string;
};

const books: Book[] = [
  {
    id: 1,
    title: "Tổng ôn ngữ pháp",
    category: "Ôn thi THPT",
    image:
      "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/tong_on_ngu_phap_tieng_anh_tap_1_tap_2_bo_2_tap/2022_10_14_15_29_35_1-390x510.jpg",
  },
  {
    id: 2,
    title: "Dễ Mất Quỷ",
    category: "Kinh dị - Bí ẩn",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS84t2p5x4vNirz7N0KdkXyTdXP-OTNodzZIA&s",
  },
  {
    id: 3,
    title: "Yêu những ngày nắng nhẹ...",
    category: "Tô màu cảm xúc",
    image:
      "https://i0.wp.com/sach.nhuttruong.com/wp-content/uploads/2024/08/Ebook-Yeu-Nhung-Ngay-Nang-Chang-Ghet-Nhung-Ngay-Mua-PDF.jpg?fit=450%2C680&ssl=1",
  },
  {
    id: 4,
    title: "Tắt đèn",
    category: "Văn học Việt Nam",
    image: "https://thuvienkontum.vn/images/khoanh/thum_16328760570.jpg",
  },
  {
    id: 5,
    title: "Mắt biếc",
    category: "Nguyễn Nhật Ánh",
    image: "https://salt.tikicdn.com/media/catalog/product/m/a/mat-biec.jpg",
  },
  {
    id: 6,
    title: "Bố già",
    category: "Tác phẩm kinh điển",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOudWbAA068eT0iF8B7fmFNsxBsOZXLgTtBGiKLIu5Ug&s",
  },
  {
    id: 7,
    title: "Mắt biếc",
    category: "Nguyễn Nhật Ánh",
    image: "https://salt.tikicdn.com/media/catalog/product/m/a/mat-biec.jpg",
  },
  {
    id: 8,
    title: "Mắt biếc",
    category: "Nguyễn Nhật Ánh",
    image: "https://salt.tikicdn.com/media/catalog/product/m/a/mat-biec.jpg",
  },
  {
    id: 9,
    title: "Mắt biếc",
    category: "Nguyễn Nhật Ánh",
    image: "https://salt.tikicdn.com/media/catalog/product/m/a/mat-biec.jpg",
  },
  {
    id: 10,
    title: "Mắt biếc",
    category: "Nguyễn Nhật Ánh",
    image: "https://salt.tikicdn.com/media/catalog/product/m/a/mat-biec.jpg",
  },
];

const BookSlider: React.FC = () => {
  return (
    <div className="relative bg-[#FCE4EC] p-4 rounded-xl">
      <h2 className="text-lg font-semibold px-2 pb-3">Tủ sách nổi bật</h2>

      <div className="relative">
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerGroup={5} 
          spaceBetween={12}
          loop
          autoplay={{ delay: 3000 }}
          navigation={{
            prevEl: ".book-prev",
            nextEl: ".book-next",
          }}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          className="!px-2"
        >
          {books.map((book) => (
            <SwiperSlide key={book.id}>
              <div className="bg-white border border-gray-200 rounded shadow-sm w-full">
                <div className="p-2">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full aspect-[3/4] object-cover rounded"
                  />
                </div>
                <div className="text-center px-2 pb-3">
                  <p className="text-sm font-medium">{book.category}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <button className="book-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-100">
          <ChevronLeft size={20} />
        </button>
        <button className="book-next absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-100">
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default BookSlider;
