"use client";

export default function ProductReviews() {
  return (
    <div className="w-full bg-white p-6 rounded-md  space-y-5 self-start mt-6">
      <h2 className="text-base font-semibold text-gray-800 mb-4">
        Đánh giá sản phẩm
      </h2>

      <div className="flex flex-col md:flex-row md:items-start gap-6 justify-between">
        {/* Tổng điểm đánh giá */}
        <div className="flex flex-col items-center md:items-start md:w-[200px]">
          <div className="flex items-baseline">
            <span className="text-[48px] font-semibold text-[#1a1a1a] leading-none">
              5
            </span>
            <span className="text-[24px] text-[#1a1a1a] font-normal">/5</span>
          </div>

          <div className="flex space-x-1 mt-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5 text-[#f68c1f]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.293c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.293a1 1 0 00-.364-1.118L2.43 8.719c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          <p className="text-sm text-gray-500 mt-1">(43 đánh giá)</p>
        </div>

        {/* Biểu đồ sao & dòng đăng nhập */}
        <div className="flex flex-col gap-3 flex-1">
          <div className="space-y-1 text-sm text-gray-600">
            {[5, 4, 3, 2, 1].map((star) => (
              <div key={star} className="flex items-center gap-2">
                <span className="w-[60px]">{star} sao</span>
                <div className="bg-gray-200 w-full h-[6px] rounded-sm relative">
                  {star === 5 && (
                    <div className="bg-yellow-400 h-[6px] w-[95%] rounded-sm absolute top-0 left-0" />
                  )}
                  {star === 4 && (
                    <div className="bg-yellow-400 h-[6px] w-[2%] rounded-sm absolute top-0 left-0" />
                  )}
                  {star === 3 && (
                    <div className="bg-yellow-400 h-[6px] w-[2%] rounded-sm absolute top-0 left-0" />
                  )}
                </div>
                <span className="w-8 text-xs text-gray-500">
                  {star === 5 ? "95%" : star === 4 || star === 3 ? "2%" : "0%"}
                </span>
              </div>
            ))}
          </div>

          <p className="text-sm text-gray-500 mt-2">
            Chỉ có thành viên mới có thể viết nhận xét. Vui lòng{" "}
            <a href="#" className="text-blue-600 hover:underline">
              đăng nhập
            </a>{" "}
            hoặc{" "}
            <a href="#" className="text-blue-600 hover:underline">
              đăng ký
            </a>
            .
          </p>
        </div>
      </div>

      <div className="mt-6 flex gap-4 items-start">
        <div className="w-9 h-9 rounded-full bg-gray-300" />
        <div className="flex-1 text-sm space-y-1">
          <p className="font-semibold text-sm text-gray-800">Anh Trung</p>
          <p className="text-yellow-500 text-sm">5 ★</p>
          <p className="text-gray-800">Tuyệt vời</p>
          <p className="text-xs text-gray-500">
            3 tháng trước ·{" "}
            <button className="text-blue-600 hover:underline text-xs font-medium">
              Trả lời
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
