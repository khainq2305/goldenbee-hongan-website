"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import CartItem, { CartItemType } from "./CartItem";
import MobileSummary from "@/components/ui/MobileSummary";
import MobileAddressBar from "./MobileAddressBar";
import OrderSummary from "@/components/ui/OrderSummary";
import { ChevronRight, Trash2 } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
const mockCartItems: CartItemType[] = [
  {
    id: 1,
    image: "/images/product/SANPHAM1.png",
    name: "Khi Mọi Điều Không Như Ý",
    originalPrice: 100000,
    price: 80600,
    quantity: 1,
    hasBookcare: true,
  },
  {
    id: 2,
    image: "/images/product/SANPHAM2.png",
    name: "Cùng Chơi Với Bé - Xin Chào! - 2023",
    originalPrice: 109000,
    price: 80600,
    quantity: 1,
    hasBookcare: true,
  },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItemType[]>(mockCartItems);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState<number[]>(
    mockCartItems.map((p) => p.id)
  );

  const calcTotal = () =>
    cartItems.reduce(
      (t, i) => (selectedItems.includes(i.id) ? t + i.price * i.quantity : t),
      0
    );

  useEffect(() => {
    setSelectAll(
      cartItems.length > 0 && selectedItems.length === cartItems.length
    );
  }, [cartItems, selectedItems]);

  const toggleAll = () => {
    setSelectedItems(selectAll ? [] : cartItems.map((i) => i.id));
    setSelectAll(!selectAll);
  };
  const toggleItem = (id: number) =>
    setSelectedItems((p) =>
      p.includes(id) ? p.filter((x) => x !== id) : [...p, id]
    );
  const removeItem = (id: number) => {
    setCartItems((p) => p.filter((x) => x.id !== id));
    setSelectedItems((p) => p.filter((x) => x !== id));
  };

  /* ----- DEMO SỐ LIỆU ----- */
  const subtotalDemo = 241_800;
  const discountDemo = 35_900;
  const totalDemo = 205_900;
  const currentTotal = calcTotal();
  const totalSelected = selectedItems.length;

  return (
    <div className="bg-gray-100 min-h-screen py-6">
      <main className="max-w-[1200px] w-full mx-auto pb-[80px] lg:pb-0">
        <div className="mb-3 px-0">
          <Breadcrumb>
            <BreadcrumbList className="flex items-center gap-x-1">
              <BreadcrumbItem>
                <BreadcrumbLink
                  href="/"
                  className="text-gray-400 hover:text-gray-500 text-base"
                >
                  Trang chủ
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbSeparator className="mx-0">
                <ChevronRight className="w-4 h-4 text-black" />
              </BreadcrumbSeparator>

              <BreadcrumbItem>
                <BreadcrumbPage className="text-black font-medium text-base">
                  Giỏ hàng
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <MobileAddressBar address="Đ. Số 24, Phường Thường Thạnh, Quận Cái Răng, Cần Thơ" />

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1">
            <div className="bg-white shadow-sm overflow-hidden rounded-none lg:rounded-lg">
              <div className="hidden lg:grid grid-cols-[30px_1fr_120px_120px_120px_50px] gap-4 px-4 py-3 text-gray-500 text-sm font-medium border-b border-gray-200">
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={toggleAll}
                  className="w-5 h-5 text-red-600 rounded border-gray-300 checked:bg-red-600"
                />
                <span>Tất cả ({cartItems.length}) sản phẩm</span>
                <span className="text-center">Đơn giá</span>
                <span className="text-center">Số lượng</span>
                <span className="text-center">Thành tiền</span>
                <Trash2 className="w-5 h-5 text-gray-500 hover:text-red-500 transition-colors duration-150 ml-auto cursor-pointer" />

              </div>

              <div className="lg:hidden flex items-center px-4 py-3 border-b border-gray-200">
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={toggleAll}
                  className="w-5 h-5 text-red-600 rounded border-gray-300 checked:bg-red-600 mr-3"
                />
                <span className="font-semibold text-sm">
                  Tất cả ({cartItems.length}) sản phẩm
                </span>
                <Trash2 className="w-5 h-5 text-gray-400 ml-auto hover:text-red-500" />
              </div>

              {cartItems.length === 0 ? (
                <p className="text-center py-8 text-gray-500 px-4">
                  Giỏ hàng của bạn trống.
                </p>
              ) : (
                cartItems.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    isSelected={selectedItems.includes(item.id)}
                    onSelect={toggleItem}
                    removeItem={removeItem}
                  />
                ))
              )}

              <div className="flex items-center gap-2 px-4 py-3 text-black text-sm font-medium border-t border-gray-300">
                <Image
                  src="/images/cart/image 9.png"
                  alt="Freeship"
                  width={20}
                  height={20}
                  className="mr-1"
                />
                <span>Freeship 10k đơn từ 45k, Freeship 25k đơn từ 100k</span>
              </div>

              <MobileSummary
                subtotal={subtotalDemo}
                discount={discountDemo}
                totalPay={totalDemo}
                currentTotal={currentTotal}
                itemCount={totalSelected}
              />
            </div>
          </div>

          <div className="hidden lg:block w-full lg:w-[320px] flex-shrink-0">
            <OrderSummary
              totalSelectedItems={totalSelected}
              subtotalAmount={subtotalDemo}
              discountAmount={discountDemo}
              totalPrice={totalDemo}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
