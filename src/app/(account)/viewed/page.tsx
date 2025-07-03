// import { Card, CardContent, CardHeader } from "./ui/card";
import thumnail from "../../../../public/images/ProductHistory/image.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ui/productCard";
interface ProductHistoryProps {
  id: number;
  name: string;
  image: string;
  originPrice: number;
  sold: number;
  discount: any;
  ratting: number;
  status: any;
}

const product: ProductHistoryProps[] = [
  {
    id: 1,
    name: "Áo thun nam cotton basic",
    image: thumnail,
    originPrice: 199000,
    sold: 120,
    discount: null,
    ratting: 4,
    status: null,
  },
  {
    id: 2,
    name: "Quần jean nữ lưng cao",
    image: thumnail,
    originPrice: 349000,
    sold: 90,
    discount: 15,
    ratting: 4,
    status: "discount",
  },
  {
    id: 3,
    name: "Giày sneaker thể thao trắng",
    image: "thumnail",
    originPrice: 599000,
    sold: 240,
    discount: 30,
    ratting: 4,
    status: "discount",
  },
  {
    id: 4,
    name: "Túi đeo chéo mini thời trang",
    image: thumnail,
    originPrice: 259000,
    sold: 65,
    discount: 10,
    ratting: 4,
    status: "discount",
  },
  {
    id: 5,
    name: "Mũ lưỡi trai unisex",
    image: thumnail,
    originPrice: 99000,
    sold: 200,
    discount: 5,
    ratting: 4,
    status: "discount",
  },
  {
    id: 6,
    name: "Áo khoác bomber nam",
    image: thumnail,
    originPrice: 499000,
    sold: 150,
    discount: 25,
    ratting: 4,
    status: "discount",
  },
];
export default function ViewedPage() {
   return (
    <div className="container mx-auto">
      <div className="mt-4lg:rounded-lg lg:p-4">
        <div className="mb-2 hidden lg:inline-flex">
          <h1 className="font-bold ml-1 text-xl">Đã xem gần đây</h1>
        </div>
        <div className="grid grid-cols-2 gap-2 md:gap-4 md:grid-cols-3 lg:grid-cols-6 px-4">
          {product?.map((item, index) => (
            // <Card
            //   key={item.id}
            //   className="w-full background outline-1 outline-gray-200 border-none shadow-lg rounded-sm gap-0 py-0"
            // >
            //   <CardHeader className="relative w-full aspect-square overflow-hidden rounded-sm px-4">
            //     <Image
            //       src={thumnail}
            //       alt="ảnh"
            //       fill
            //       className="object-cover"
            //     />
            //   </CardHeader>

            //   <CardContent className="p-1.5 md:p-2.5">
            //     <h3 className="text-base font-medium line-clamp-2">
            //       {item.name}
            //     </h3>
            //     <div className="flex items-center gap-3">
            //       <p
            //         className={`text-lg font-semibold mt-1 ${
            //           item.discount ? "text-red-500" : "text-black"
            //         }`}
            //       >
            //         {item.originPrice.toLocaleString("vi-VN")}đ
            //       </p>
            //       {item.discount > 0 && (
            //         <span className="text-gray-600 text-xs font-semibold bg-gray-200 rounded-md p-1">
            //           -{item.discount}%
            //         </span>
            //       )}
            //     </div>
            //     <div className="text-sm text-gray-500 mt-1 flex items-center gap-1">
            //       <span className="text-yellow-500 ">★★★★★</span>
            //       <span className="border-r-2 border-gray-400 w-1 h-3.5 mr-1" />
            //       <span>Đã bán 1</span>
            //     </div>
            //   </CardContent>
            // </Card>
            <ProductCard
              key={index}
              image={thumnail}
              name={item.name}
              salePrice={item.originPrice}
              discountPercent={item.discount}
              status={item.status}
              soldCount={item.sold}
            />
          ))}
        </div>
        <div className="flex justify-center my-2.5 md:hidden">
          <Button variant={"outline"} className="border-2 py-1 text-center">
            Xem thêm
          </Button>
        </div>
      </div>
    </div>
  );
}
