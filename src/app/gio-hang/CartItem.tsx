"use client";

import React from "react";
import Image from "next/image";
import { Trash2 } from "lucide-react";
export interface CartItemType {
  id: number;
  image: string;
  name: string;
  originalPrice?: number;
  price: number;
  quantity: number;
  hasBookcare?: boolean;
}

interface CartItemProps {
  item: CartItemType;
  isSelected: boolean;
  onSelect: (id: number) => void;
  removeItem: (id: number) => void;
}

export default function CartItem({
  item,
  isSelected,
  onSelect,
  removeItem,
}: CartItemProps) {
  const noop = () => {};

  return (
    <div className="py-4 border-b border-gray-200 last:border-b-0">
      <div className="hidden lg:grid grid-cols-[30px_1fr_120px_120px_120px_50px] gap-4 px-4 items-center">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => onSelect(item.id)}
          className="w-5 h-5 text-red-600 border-gray-300 rounded checked:bg-red-600"
        />

        <div className="flex items-center">
          <Image
            src={item.image}
            alt={item.name}
            width={80}
            height={80}
            className="object-contain rounded-lg border border-gray-200"
          />
          <div className="ml-4">
            <p className="text-base font-medium text-gray-800 line-clamp-2 mb-1">
              {item.name}
            </p>
            {item.hasBookcare && (
              <p className="text-sm text-gray-500">Có thể bọc bằng Bookcare</p>
            )}
          </div>
        </div>

        <div className="text-red-600 font-semibold text-center text-sm">
          {item.price.toLocaleString()}₫
          {item.originalPrice && (
            <span className="text-gray-400 line-through text-xs ml-1">
              {item.originalPrice.toLocaleString()}₫
            </span>
          )}
        </div>

        <div className="flex items-center justify-center">
          <button
            onClick={noop}
            disabled
            className="w-8 h-8 border border-gray-300 rounded-l text-gray-400 cursor-default"
          >
            –
          </button>
          <div className="w-10 h-8 border-y border-gray-300 flex items-center justify-center">
            {item.quantity}
          </div>
          <button
            onClick={noop}
            disabled
            className="w-8 h-8 border border-gray-300 rounded-r text-gray-400 cursor-default"
          >
            +
          </button>
        </div>

        <div className="text-red-600 font-semibold text-center text-base">
          {(item.price * item.quantity).toLocaleString()}₫
        </div>

        <Trash2
  onClick={() => removeItem(item.id)}
  className="w-5 h-5 text-gray-400 hover:text-red-500 transition-colors duration-150 ml-auto cursor-pointer"
/>

      </div>

      <div className="lg:hidden grid grid-cols-[30px_80px_1fr_40px] gap-x-3 items-start px-4">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => onSelect(item.id)}
          className="w-5 h-5 text-red-600 border-gray-300 rounded checked:bg-red-600 mt-1"
        />

        <Image
          src={item.image}
          alt={item.name}
          width={80}
          height={80}
          className="object-contain rounded-lg border border-gray-200"
        />

        <div className="flex flex-col">
          <p className="text-sm font-medium text-gray-800 line-clamp-2 mb-1">
            {item.name}
          </p>
          {item.hasBookcare && (
            <p className="text-xs text-gray-500 mb-1">
              Có thể bọc bằng Bookcare
            </p>
          )}

          <div className="flex items-center space-x-1 text-red-600 font-semibold text-sm">
            <span>{item.price.toLocaleString()}₫</span>
            {item.originalPrice && (
              <span className="text-gray-400 line-through text-xs">
                {item.originalPrice.toLocaleString()}₫
              </span>
            )}
          </div>

          <div className="flex items-center mt-2">
            <button
              onClick={noop}
              disabled
              className="w-7 h-7 border border-gray-300 rounded-l text-sm text-gray-400 cursor-default"
            >
              –
            </button>
            <div className="w-8 h-7 border-y border-gray-300 flex items-center justify-center text-sm">
              {item.quantity}
            </div>
            <button
              onClick={noop}
              disabled
              className="w-7 h-7 border border-gray-300 rounded-r text-sm text-gray-400 cursor-default"
            >
              +
            </button>
          </div>
        </div>

        <Trash2
          onClick={() => removeItem(item.id)}
          className="w-5 h-5 text-gray-400 hover:text-red-500 cursor-pointer mt-1 justify-self-end"
        />
      </div>
    </div>
  );
}
