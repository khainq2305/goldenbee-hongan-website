"use client";
import Image from "next/image";

export default function OrderSummary() {
  return (
    <div className="w-[320px] h-[432px] flex flex-col justify-between space-y-4">
      <div className="bg-white rounded-[12px] border shadow-sm p-4 space-y-3">
        <p className="text-sm font-semibold text-black">Hồng Ân Khuyến Mãi</p>
        <div className="relative w-full h-[60px]">
          <Image
            src="/icon/accountSidebar/Subtract.png"
            alt="coupon"
            fill
            className="absolute inset-0 object-cover z-0"
          />
          <div className="relative z-10 flex items-center h-full px-3 gap-2">
            <Image
              src="/icon/accountSidebar/promo-icon.svg"
              alt="promo"
              width={45}
              height={45}
            />
            <Image
              src="/icon/accountSidebar/dash-divider.svg"
              alt="divider"
              width={2}
              height={32}
              className="ml-[17px] mr-[8px]"
            />
            <span className="text-[13px] font-medium text-black mr-[6px]">
              Giảm 25K
            </span>
            <div className="flex-1" />
            <Image
              src="/icon/accountSidebar/info.svg" // ← thay bằng icon bạn vừa upload
              alt="info"
              width={18}
              height={18}
            />
            <button className="text-xs px-2 py-[3px] bg-[#1677ff] text-white rounded font-semibold">
              Bỏ chọn
            </button>
          </div>
        </div>
        <button className="flex items-center gap-1 text-blue-600 text-xs font-medium pl-1 hover:no-underline">
          <Image
            src="/icon/accountSidebar/coupon 1.svg"
            alt="add"
            width={16}
            height={16}
          />
          Thêm mã khuyến mãi
        </button>
      </div>

      <div className="bg-white rounded-[12px] border shadow-sm flex flex-col flex-1">
        <div className="p-4 space-y-2 text-[13px] text-gray-800">
          <div className="flex justify-between">
            <span className="text-gray-500">Tổng tiền hàng</span>
            <span className="font-semibold text-gray-900">241.800₫</span>
          </div>
          <div className="flex justify-between font-medium text-green-600">
            <span>Giảm giá trực tiếp</span>
            <span>-35.900₫</span>
          </div>

          <hr className="border-dashed border-t border-gray-200" />

          <div className="space-y-1 text-[14px]">
            <div className="flex justify-between text-[15px] font-bold">
              <span className="text-black">Tổng tiền thanh toán</span>
              <span className="text-[#d70018] text-[17px]">205.900₫</span>
            </div>
            <p className="text-[15px] text-green-600 font-medium text-right">
              Tiết kiệm 35.900₫
            </p>
            <p className="text-[11px] text-gray-400 italic text-right">
              (Đã bao gồm VAT nếu có)
            </p>
          </div>
        </div>

        <div className="p-4 border-t">
          <button className="w-full bg-[#d70018] hover:brightness-110 text-white py-2 rounded-[8px] font-semibold text-[14px] transition">
            Mua hàng (2)
          </button>
        </div>
      </div>
    </div>
  );
}
