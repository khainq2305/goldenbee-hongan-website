"use client";
import { useState } from "react";
import { ShoppingCart } from "lucide-react";

export default function ProductInfoUpdated() {
  const [quantity, setQuantity] = useState(1);

  const decrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  const increase = () => setQuantity((prev) => prev + 1);

  return (
    <div className="space-y-3">
      <div className="w-full bg-white p-6 rounded-md  space-y-5 self-start">
        <h1 className="text-2xl font-bold text-gray-900">
          Vì Sao Không Thể Giết?
        </h1>

        <div className="flex justify-between text-sm text-gray-600">
          <div>
            <p>
              Nhà cung cấp:{" "}
              <span className="text-[#007bff] text-sm hover:underline cursor-pointer">
                AZ Việt Nam
              </span>
            </p>
            <p>
              Nhà xuất bản:{" "}
              <span className="font-medium text-gray-800">Thế Giới</span>
            </p>
          </div>
          <p>
            Tác giả:{" "}
            <span className="font-medium text-gray-800">Ippongi Toru</span>
          </p>
        </div>

        <div className="flex items-center gap-2 text-yellow-500 text-sm">
          {"★★★★★"} <span className="text-gray-500 ml-2">Đã bán 6</span>
        </div>

        <div className="flex items-center justify-between flex-wrap gap-y-3 pt-2">
          <div className="flex items-center gap-3">
            <p className="text-3xl font-bold text-[#d32128]">77.350 đ</p>
            <p className="text-sm text-gray-400 line-through">119.000 ₫</p>
            <span className="bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">
              -35%
            </span>
          </div>

          <div className="flex items-center gap-3 text-sm">
            <span className="font-semibold text-lg text-gray-800">
              Số lượng:
            </span>
            <div className="flex items-center border border-gray-300 overflow-hidden">
              <button
                onClick={decrease}
                className="px-3 py-1 text-lg hover:bg-gray-50"
              >
                −
              </button>
              <span className="px-4 py-1 border-x border-gray-300 font-medium">
                {quantity}
              </span>
              <button
                onClick={increase}
                className="px-3 py-1 text-lg hover:bg-gray-50"
              >
                +
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-stretch gap-3 pt-3">
          <button className="w-full flex items-center justify-center gap-2 border-2 border-[#d32128] text-[#d32128] px-4 py-3 rounded-md hover:bg-red-50">
            <ShoppingCart size={20} />
            <span>Thêm vào giỏ hàng</span>
          </button>

          <button className="w-full bg-[#d32128] text-white px-4 py-3 rounded-md hover:bg-red-800">
            Mua ngay
          </button>
        </div>

        <div className="text-sm text-[#007bff] bg-[#edf4ff] rounded-md px-4 py-2 w-full">
          4 nhà sách còn hàng
        </div>
      </div>
    </div>
  );
}
