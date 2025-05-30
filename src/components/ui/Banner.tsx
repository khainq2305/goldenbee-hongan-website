'use client';

import { useState } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

type Banner = {
  id: number;
  title: string;
  subtitle: string;
  imageUrl: string;
  ctaText: string;
};

type Props = {
  banners: Banner[];
};

export default function BannerSlider({ banners }: Props) {
  const [current, setCurrent] = useState(0);
  const total = banners.length;

  const next = () => setCurrent((prev) => (prev + 1) % total);
  const prev = () => setCurrent((prev) => (prev - 1 + total) % total);

  return (
    <div className="relative w-full max-w-[970px] h-[320px] overflow-hidden rounded-xl shadow-md mx-auto">
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={banner.imageUrl}
            alt={banner.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex flex-col justify-center px-10 text-white">
            <h2 className="text-2xl font-bold">{banner.title}</h2>
            <p className="mt-2 text-sm">{banner.subtitle}</p>
            <button className="mt-4 px-4 py-2 bg-white text-blue-600 rounded-full w-max text-sm hover:bg-gray-100">
              {banner.ctaText}
            </button>
          </div>
        </div>
      ))}

      {/* Arrows */}
      <button
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 text-gray-700 hover:bg-white shadow"
        onClick={prev}
      >
        <HiChevronLeft className="w-5 h-5" />
      </button>
      <button
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 text-gray-700 hover:bg-white shadow"
        onClick={next}
      >
        <HiChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}
