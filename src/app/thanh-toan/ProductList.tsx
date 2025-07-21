import React from "react";
import Image from "next/image";

export interface CheckoutProduct {
  id: number;
  image: string;
  name: string;
  originalPrice?: number;
  price: number;
  color: string;
  quantity: number;
}

interface ProductListProps {
  products: CheckoutProduct[];
}

export default function ProductList({ products }: ProductListProps) {
  return (
    <div className="bg-white overflow-hidden lg:rounded-lg lg:border lg:border-gray-200 lg:shadow-sm">
    
      <div className="flex items-center px-4 py-3 border-b border-gray-200">
        <span className="font-semibold text-sm text-gray-800">
          Tất cả ({products.length}) sản phẩm
        </span>
      </div>

      {/* List */}
      <div className="space-y-4 px-4 pb-4 mt-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="
              flex flex-col lg:flex-row 
              items-start lg:items-center 
              justify-between gap-4 py-4 
              border-b border-gray-200 last:border-b-0
            "
          >
            <div className="flex items-start gap-4 flex-1">
              <div className="relative w-20 h-20 flex-shrink-0 rounded-md overflow-hidden border border-gray-200">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 flex flex-col">
                <p className="text-sm font-medium text-gray-800 line-clamp-2">
                  {product.name}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Phân loại: {product.color}
                </p>
                <p className="text-xs text-gray-500">
                  Số lượng x{product.quantity}
                </p>

                <div className="mt-2 flex items-baseline space-x-2 lg:hidden">
                  {product.originalPrice && (
                    <span className="text-gray-400 line-through text-xs">
                      {product.originalPrice.toLocaleString()}₫
                    </span>
                  )}
                  <span className="text-base text-red-600">
                    {product.price.toLocaleString()}₫
                  </span>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex items-baseline space-x-2">
              {product.originalPrice && (
                <span className="text-gray-400 line-through text-xs">
                  {product.originalPrice.toLocaleString()}₫
                </span>
              )}
              <span className="text-base text-red-600">
                {product.price.toLocaleString()}₫
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center px-4 py-2 border-t border-gray-200 text-gray-800">
        <Image
          src="/images/cart/image 9.png"
          alt="Freeship"
          width={16}
          height={16}
          className="mr-2"
        />
        <span className="text-sm">
          Freeship 10k đơn từ 45k, Freeship 25k đơn từ 100k
        </span>
      </div>
    </div>
  );
}
