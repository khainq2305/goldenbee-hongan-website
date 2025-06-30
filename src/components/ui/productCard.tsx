import React from "react";

type ProductStatus = "normal" | "discount" | "contact" | "disabled";

interface Props {
  image: string;
  name: string;
  salePrice?: number;
  regularPrice?: number;
  discountPercent?: number;
  soldCount?: number;
  status?: ProductStatus;
}

const ProductCard: React.FC<Props> = ({
  image,
  name,
  salePrice,
  regularPrice,
  discountPercent,
  soldCount = 0,
  status = "normal",
}) => {
  return (
<div className=" bg-[#ffffff] shadow-sm rounded p-3 flex flex-col w-full">
      {" "}
      {/* bỏ max-w */}
      {/* Ảnh sản phẩm */}
      <div className="flex justify-center">
        <div className=" overflow-hidden p-2">
          <img
            src={image}
            alt={name}
            className="w-[140px] h-[200px] object-contain"
          />
        </div>
      </div>
      <div className="mt-2 flex flex-col gap-1">
        {/* Tên sản phẩm */}
        <p className="line-clamp-2 font-medium text-black text-[15px] leading-tight">
          {name}
        </p>

        {/* Giá & Badge thô */}
        <div className="flex items-center gap-2">
          {status === "contact" ? (
            <p className="text-red-600 font-medium text-sm">Liên hệ</p>
          ) : status === "disabled" ? (
            <p className="text-red-600 font-medium text-sm">Ngừng kinh doanh</p>
          ) : (
            <>
              <p
                className={`font-semibold text-[15px] ${
                  status === "discount" ? "text-red-600" : "text-black"
                }`}
              >
                {salePrice?.toLocaleString()}₫
              </p>

              {/* Gắn cứng -XX% nếu là giảm giá */}
              {status === "discount" && discountPercent && (
                <span className="bg-gray-100 border border-gray-300 text-black text-xs px-1.5 py-0.5 rounded">
                  -{discountPercent}%
                </span>
              )}
            </>
          )}
        </div>

        {/* Sao & Đã bán */}
        {status !== "disabled" && status !== "contact" && (
<div className="flex items-center gap-[2px] text-xs mt-1">
  {Array.from({ length: 5 }).map((_, i) => (
    <svg
      key={i}
      xmlns="http://www.w3.org/2000/svg"
      fill="#ffc107"
      viewBox="0 0 24 24"
      stroke="none"
      className="w-4 h-4"
    >
      <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.782 1.4 8.171L12 18.897l-7.334 3.85 1.4-8.171L.132 9.211l8.2-1.193z" />
    </svg>
  ))}
  <span className="text-gray-500 ml-1 whitespace-nowrap">| Đã bán {soldCount}</span>
</div>

        )}
      </div>
    </div>
  );
};

export default ProductCard;
