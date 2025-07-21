"use client";

import ProductCard from "../../components/ui/productCard";

export default function SuggestedProducts() {
  const items = [
    {
      image: "/images/ProductDetail/image 3.png",
      name: "ChatGPT thực chiến",
      salePrice: 104000,
      soldCount: 100,
      status: "normal",
    },
    {
      image: "/book.png",
      name: "Dẫn Dắt Một Bầy Sói Hay Chăn Một Đàn Cừu",
      salePrice: 104000,
      regularPrice: 168000,
      discountPercent: 38,
      soldCount: 100,
      status: "discount",
    },
    {
      image: "/book.png",
      name: "Combo 4 cuốn: ChatGPT + ChatGPT thực chiến + AI 5.0",
      status: "contact",
    },
    {
      image: "/book.png",
      name: "Sách cho bé từ 3 tuổi - Bộ 4 cuốn Phát triển sáng tạo",
      status: "disabled",
    },
    {
      image: "/book.png",
      name: "Con Đường Chẳng Mấy Ai Đi",
      status: "disabled",
    },
    {
      image: "/book.png",
      name: "Đắc Nhân Tâm (Tái bản 2021)",
      salePrice: 104000,
      soldCount: 100,
      status: "normal",
    },
    {
      image: "/book.png",
      name: "Đắc Nhân Tâm (Tái bản 2021)",
      salePrice: 104000,
      soldCount: 100,
      status: "normal",
    },
    {
      image: "/book.png",
      name: "Đắc Nhân Tâm (Tái bản 2021)",
      salePrice: 104000,
      soldCount: 100,
      status: "normal",
    },
    {
      image: "/book.png",
      name: "Đắc Nhân Tâm (Tái bản 2021)",
      salePrice: 104000,
      soldCount: 100,
      status: "normal",
    },
    {
      image: "/book.png",
      name: "Đắc Nhân Tâm (Tái bản 2021)",
      salePrice: 104000,
      soldCount: 100,
      status: "normal",
    },
    {
      image: "/book.png",
      name: "Khi Mọi Điều Không Như Ý",
      salePrice: 104000,
      regularPrice: 168000,
      discountPercent: 38,
      soldCount: 100,
      status: "discount",
    },
        {
      image: "/book.png",
      name: "Khi Mọi Điều Không Như Ý",
      salePrice: 104000,
      regularPrice: 168000,
      discountPercent: 38,
      soldCount: 100,
      status: "discount",
    },    {
      image: "/book.png",
      name: "Khi Mọi Điều Không Như Ý",
      salePrice: 104000,
      regularPrice: 168000,
      discountPercent: 38,
      soldCount: 100,
      status: "discount",
    },    {
      image: "/book.png",
      name: "Khi Mọi Điều Không Như Ý",
      salePrice: 104000,
      regularPrice: 168000,
      discountPercent: 38,
      soldCount: 100,
      status: "discount",
    },
    {
      image: "/book.png",
      name: "Thế Hệ Lo Âu",
      status: "contact",
    },
  ];

  return (
    <div className="bg-[#f9f9fb] p-4 rounded-md">
      <h2 className="text-base font-semibold mb-4 px-2">SẢN PHẨM GỢI Ý</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
        {items.map((item, index) => (
          <ProductCard
            key={index}
            image={item.image}
            name={item.name}
            salePrice={item.salePrice}
            regularPrice={item.regularPrice}
            discountPercent={item.discountPercent}
            soldCount={item.soldCount}
            status={item.status as any}
          />
        ))}
      </div>

      <div className="mt-4 text-center">
        <button className="px-6 py-1.5 rounded border text-sm text-[#ee4d2d] border-[#ee4d2d] hover:bg-[#fff1ee] transition">
          Xem thêm
        </button>
      </div>
    </div>
  );
}
