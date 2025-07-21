
"use client";
import React from "react";
const categories = [
  { name: "English book", imageUrl: "images/product/image.png" },
  { name: "Sách tiếng Việt", imageUrl: "images/product/image (1).png" },
  { name: "Văn phòng phẩm", imageUrl: "images/product/image (2).png" },
  { name: "Quà lưu niệm", imageUrl: "images/product/image (3).png" },
];

export default function ExploreCategories() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h3 className="font-normal text-base text-gray-800 mb-4">
        Khám phá theo danh mục
      </h3>
   
      <div className="flex overflow-x-auto justify-start gap-x-8 lg:gap-x-16 py-2 no-scrollbar"> 
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="flex flex-col items-center cursor-pointer flex-shrink-0"
           
            style={{ width: '90px' }}
          >
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-transparent ">
              <img
                src={cat.imageUrl}
                alt={cat.name}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-2 text-sm text-center text-gray-700 whitespace-nowrap">
              {cat.name}
            </p>
          </div>
        ))}
      </div>
 
       <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
            display: none; /* Hide scrollbar for Chrome, Safari and Opera */
        }
        .no-scrollbar {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
        }
      `}</style>
    </div>
  );
}