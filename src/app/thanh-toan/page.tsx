"use client";

import React from "react";
import OrderSummary from "@/components/ui/OrderSummary";
import ProductList, { CheckoutProduct } from "./ProductList";
import PaymentMethods, { PaymentMethod } from "./PaymentMethods";
import MobileSummary from "@/components/ui/MobileSummary";
import { ChevronRight, MapPin } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const mockCheckoutProducts: CheckoutProduct[] = [
  {
    id: 1,
    image: "/images/product/SANPHAM1.png",
    name: "MoFi Kitty Cat Mixed - Bộ combo bàn phím giả cơ và chuột không dây Geezer M3 kèm đèn LED RGB, switch Gateron Brown, base nhôm, đệm tay cao su non, thiết kế ergonomic",
    originalPrice: 450000,
    price: 440000,
    color: "màu hồng",
    quantity: 1,
  },
  {
    id: 2,
    image: "/images/product/SANPHAM2.png",
    name: "MoFi Kitty Cat Mixed - Phiên bản giới hạn với họa tiết mèo Kitty dán laser, nút keycap PBT dye-sublimation, kết nối Bluetooth 5.1, pin 2000mAh, thời gian sử dụng lên đến 100 giờ",
    originalPrice: 450000,
    price: 440000,
    color: "màu hồng",
    quantity: 1,
  },
  {
    id: 3,
    image: "/images/product/SANPHAM1.png",
    name: "MoFi Kitty Cat Mixed - Combo bàn phím MecaPro TKL Pro, chuột Geezer M5 Wireless, pad lót silicon chống trượt, switch Tata Silent Red, foam chống ồn, case nhựa ABS cao cấp",
    originalPrice: 450000,
    price: 440000,
    color: "màu hồng",
    quantity: 1,
  },
];

const mockPaymentMethods: PaymentMethod[] = [
  {
    id: "cash",
    name: "Thanh toán tiền mặt",
    icon: "/images/payment/istockphoto-942191652-612x612.jpg",
  },
  { id: "momo", name: "Ví Momo", icon: "/images/payment/image 14.png" },
  { id: "vnpay", name: "VNPay", icon: "/images/payment/image 15.png" },
  { id: "zalopay", name: "ZaloPay", icon: "/images/payment/image 16.png" },
  {
    id: "creditcard",
    name: "Thẻ tín dụng, ghi nợ",
    icon: "/images/payment/image 17.png",
  },
];

export default function CheckoutPage() {
  const addressName = "Hồ Trần";
  const addressPhone = "0912022074";
  const addressDetail =
    "FPT Polytechnic, Phường Thường Thạnh, Quận Cái Răng, Cần Thơ";

  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    React.useState("cash");

  const subtotal = mockCheckoutProducts.reduce(
    (sum, p) => sum + p.price * p.quantity,
    0
  );
  const discount = 35900;
  const total = subtotal - discount;

  return (
    <div className="bg-gray-100 min-h-screen py-6">
      <main className="max-w-[1200px] w-full mx-auto pb-[80px] px-0">
        <div className="mb-3 px-0 lg:px-4">
          <Breadcrumb>
            <BreadcrumbList className="gap-1">
              <BreadcrumbItem>
                <BreadcrumbLink
                  href="/"
                  className="text-gray-400 hover:text-gray-500 text-sm"
                >
                  Trang chủ
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-black [&>svg]:w-4 [&>svg]:h-4 mx-0">
                <ChevronRight />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage className="text-black font-normal text-sm">
                  Thanh toán
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="lg:hidden bg-white border border-gray-200 rounded-none p-4 mb-4 flex items-center justify-between">
          <div className="flex items-center">
            <MapPin className="w-5 h-5 text-blue-600 mr-2" />
            <div>
              <p className="text-sm font-medium text-gray-900 mb-1">
                {addressName} | {addressPhone}
              </p>
              <p className="text-xs text-gray-500">{addressDetail}</p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </div>

        <div className="flex flex-col lg:flex-row gap-6 px-0">
          <div className="flex-1 flex flex-col gap-3">
            <ProductList products={mockCheckoutProducts} />

            <div className="lg:hidden">
              <MobileSummary
                subtotal={subtotal}
                discount={discount}
                totalPay={total}
                currentTotal={subtotal}
                itemCount={mockCheckoutProducts.length}
              />
            </div>

            <PaymentMethods
              methods={mockPaymentMethods}
              selected={selectedPaymentMethod}
              onChange={setSelectedPaymentMethod}
            />
          </div>

          <div className="hidden lg:block w-full lg:w-[320px] flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-base font-bold text-gray-900">
                  Địa chỉ giao hàng
                </h3>
                <button className="text-sm text-blue-600 hover:underline">
                  Thay đổi
                </button>
              </div>
              <div className="flex items-center mb-3">
                <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                <p className="text-base font-medium text-gray-900">
                  {addressName} | {addressPhone}
                </p>
              </div>
              <p className="text-sm text-gray-600 break-words leading-snug">
                {addressDetail}
              </p>
            </div>
            <OrderSummary
              totalSelectedItems={mockCheckoutProducts.length}
              subtotalAmount={subtotal}
              discountAmount={discount}
              totalPrice={total}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
