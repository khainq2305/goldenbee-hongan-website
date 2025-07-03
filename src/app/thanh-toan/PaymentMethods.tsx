import React from "react";
import Image from "next/image";

export interface PaymentMethod {
  id: string;
  name: string;
  icon: string;
}

interface PaymentMethodsProps {
  methods: PaymentMethod[];
  selected: string;
  onChange: (id: string) => void;
}

export default function PaymentMethods({
  methods,
  selected,
  onChange,
}: PaymentMethodsProps) {
  return (
    <div className="bg-white shadow-sm p-4 rounded-none lg:rounded-lg">
      <h2 className="text-base font-semibold text-gray-800 mb-4">
        Phương thức thanh toán
      </h2>
      <div className="space-y-2">
        {methods.map((m) => (
          <label
            key={m.id}
            className={`flex items-center space-x-3 py-3 px-4 cursor-pointer transition-colors ${
              selected === m.id ? "bg-gray-50" : "hover:bg-gray-50"
            }`}
          >
            <input
              type="radio"
              name="paymentMethod"
              value={m.id}
              checked={selected === m.id}
              onChange={() => onChange(m.id)}
              className="form-radio h-4 w-4 text-red-600 border-gray-300 focus:ring-red-500"
            />
            <Image
              src={m.icon}
              alt={m.name}
              width={24}
              height={24}
              className="flex-shrink-0"
            />
            <span className="text-sm text-gray-700">{m.name}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
