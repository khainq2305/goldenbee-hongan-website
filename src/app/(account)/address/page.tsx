import ActionMenu from "@/components/ActionMenu";
import { Container } from "@/components/Container";
import { CircleCheck, Plus } from "lucide-react";
import Link from "next/link";

interface Address {
  id: number;
  name: string;
  address: string | [];
  numberPhone: number | string;
  isDefaul: boolean;
}
const AddressData: Address[] = [
  {
    id: 1,
    name: "Nguyễn Văn Thạnh",
    address: "Châu phú, Long Xuyên, Cần Thơ",
    numberPhone: "084353444535",
    isDefaul: true,
  },
  {
    id: 2,
    name: "Nguyễn Văn Đoàn",
    address: "Châu phú, Long Xuyên, HCMT",
    numberPhone: "0843534445435",
    isDefaul: false,
  },
];
export default function address() {
  return (
    <div>
      <div className="mb-2 hidden lg:inline-flex">
        <h1 className="">Sổ địa chỉ</h1>
      </div>
      <div className="bg-white">
        <Link
          href={"/address/new"}
          className="flex flex-wrap items-center justify-center border border-dashed border-red-500 rounded-md text-md gap-6 text-[#007AFF]/60 p-1.5"
        >
          <Plus size={18} />
          Thêm địa chỉ mới
        </Link>
      </div>
      <div className="flex flex-col gap-0.5 mt-2">
        {AddressData?.map((item) => (
          <div key={item.id} className="bg-white rounded-lg">
            <div className="p-3.5 rounded-b-md">
              <div className="flex justify-between mb-1">
                <div className="flex gap-3">
                  <h1 className="text-sm shrink-0">{item.name}</h1>
                  {item.isDefaul && (
                    <div className="flex items-center gap-2">
                      <CircleCheck color="#ffff" fill="#00AB56" size={16} className="shrink-0" />
                      <p className="text-sm text-[#00AB56] shrink-0">Địa chỉ mặc định</p>
                    </div>
                  )}
                </div>
                <ActionMenu/>
              </div>
              <div className="flex gap-1 text-sm">
                <p className="text-gray-500 shrink-0">Địa chỉ:</p>
                <p className="line-clamp-1">{item.address}</p>
              </div>
              <div className="flex gap-1 text-sm">
                <p className="text-gray-500">Điện thoại:</p>
                <p className="line-clamp-1">{item.numberPhone}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
