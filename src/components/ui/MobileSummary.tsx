"use client";

import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

interface MobileSummaryProps {
  subtotal: number;
  discount: number;
  totalPay: number;
  currentTotal: number;
  itemCount: number;
}

export default function MobileSummary({
  subtotal,
  discount,
  totalPay,
  currentTotal,
  itemCount,
}: MobileSummaryProps) {
  return (
    <div className="lg:hidden bg-white rounded-none shadow-sm mt-4 overflow-hidden border border-gray-200">
      <div className="px-4">
        <div className="flex justify-between items-center py-2 border-b border-gray-200">
          <span className="text-gray-500 text-[13px]">Tổng tiền hàng</span>
          <span className="text-gray-900 text-[13px]">
            {subtotal.toLocaleString()}₫
          </span>
        </div>

        <div className="flex justify-between items-center py-2 border-b border-gray-200">
          <span className="text-green-600 text-[13px]">Giảm giá trực tiếp</span>
          <span className="text-green-600 text-[13px]">
            -{discount.toLocaleString()}₫
          </span>
        </div>

        <div className="flex justify-between items-center py-2">
          <span className="font-medium text-gray-800 text-[13px]">
            Tổng tiền thanh toán
          </span>
          <span className="font-semibold text-gray-900 text-[13px]">
            {totalPay.toLocaleString()}₫
          </span>
        </div>

        <div className="flex justify-between items-center py-2">
          <span className="text-gray-500 text-[13px]">Tiết kiệm</span>
          <span className="text-green-600 text-[13px]">
            {discount.toLocaleString()}₫
          </span>
        </div>
      </div>

      <div className="border-t border-gray-200 px-4 pt-3 pb-4 bg-gray-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/images/cart/coupon 1.png"
              alt="promo"
              width={16}
              height={16}
            />
            <span className="text-sm font-semibold">Hồng Ân khuyến mãi</span>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </div>
        <p className="mt-2 text-[13px] text-gray-600">
          Mua thêm để freeship 50k cho đơn từ 299k, giảm 3% cho đơn từ 499k
        </p>
      </div>

      <div className="flex items-center justify-between px-4 py-4 border-t border-gray-200">
        <div>
          <p className="text-sm text-black">
            Tổng tiền
            <br />
            <span className="text-[#d70018] font-semibold text-base">
              {currentTotal.toLocaleString()}₫
            </span>
          </p>
          <p className="text-sm text-green-600">
            Tiết kiệm {discount.toLocaleString()}₫
          </p>
        </div>
        <button className="bg-[#d70018] text-white py-2 px-5 rounded font-semibold">
          Mua hàng ({itemCount})
        </button>
      </div>
    </div>
  );
}
