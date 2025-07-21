"use client";

import { MoreVertical } from "lucide-react";
import { useState } from "react";
import DropdownMenu from "../../../components/ui/Dropdown";
import Link from "next/link";

type Address = {
  id: number;
  name: string;
  address: string;
  phone: string;
  isDefault?: boolean;
};

const mockAddresses: Address[] = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    address: "Phường Lê Bình, Quận Cái Răng, Cần Thơ",
    phone: "0999999999",
    isDefault: true,
  },
  {
    id: 2,
    name: "Nguyễn Văn A",
    address: "Phường Lê Bình, Quận Cái Răng, Cần Thơ",
    phone: "0999999999",
  },
];

export default function SoDiaChiPage() {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  return (
    <>
      {/* Nội dung bên phải */}
      <section className="md:col-span-3 space-y-6">
        <h1 className="text-xl text-black px-2 py-1 rounded">Sổ địa chỉ</h1>
        <Link href={'/so-dia-chi/them-moi'} className="w-full border border-dashed border-gray-300 rounded-md py-3 flex items-center justify-center gap-2 bg-white hover:bg-gray-50 transition">
          <span className="text-blue-600 text-lg">+</span>
          <span className="text-blue-600 font-medium">Thêm địa chỉ mới</span>
        </Link>

        <div className="space-y-4">
          {mockAddresses.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-200 rounded-lg p-4 flex justify-between items-start"
            >
              <div>
                <div className="flex items-center gap-2">
                  <p className="">{item.name}</p>
                  {item.isDefault && (
                    <span className="text-green-600 text-sm font-medium flex items-center gap-1">
                      <span className="w-2 h-2 bg-green-500 rounded-full inline-block"></span>
                      Địa chỉ mặc định
                    </span>
                  )}
                </div>
                <p className="text-sm ">Địa chỉ: {item.address}</p>
                <p className="text-sm">Điện thoại: {item.phone}</p>
              </div>

              <div className="relative">
                <DropdownMenu />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
