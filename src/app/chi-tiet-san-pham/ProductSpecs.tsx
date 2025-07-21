export default function ProductSpecs() {
  const specs = {
    "Mã hàng": "8935325018060",
    "Tên Nhà Cung Cấp": (
      <a href="#" className="text-[#007bff] hover:underline">
        AZ Việt Nam
      </a>
    ),
    "Tác giả": "Ippongi Toru",
    "Người Dịch": "Võ Phương Ngân",
    NXB: "Thế Giới",
    "Năm XB": "2024",
    "Ngôn Ngữ": "Tiếng Việt",
    "Trọng lượng (gr)": "350",
    "Kích Thước Bao Bì": "20.5 x 14.5 x 1.6 cm",
    "Số trang": "336",
  };

  return (
    <div className="w-full bg-white rounded-md  space-y-5 text-xs">
      <div className="bg-white rounded-md p-4 space-y-3">
        <h2 className="text-base font-semibold text-gray-800">
          Thông tin chi tiết
        </h2>

        <table className="w-full">
          <tbody>
            {Object.entries(specs).map(([key, val], idx) => (
              <tr
                key={key}
                className={`${
                  idx !== Object.entries(specs).length - 1
                    ? "border-b border-gray-100"
                    : ""
                }`}
              >
                <td className="py-2 px-4 text-gray-600 whitespace-nowrap align-top">
                  {key}
                </td>
                <td className="py-2 px-4">{val}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex">
          <span className="min-w-[160px] text-gray-600">Hình thức</span>
          <span className="font-medium">Bìa Mềm</span>
        </div>
        <div className="flex">
          <span className="min-w-[160px] text-gray-600">
            Sản phẩm bán chạy nhất
          </span>
          <a href="#" className="text-[#007bff] hover:underline">
            Top 100 sản phẩm Truyện Trinh Thám - Kiếm Hiệp bán chạy của tháng
          </a>
        </div>

        <p className="text-[12px] text-gray-600 leading-relaxed mt-2">
          Giá sản phẩm trên Fahasa.com đã bao gồm thuế theo luật hiện hành. Bên
          cạnh đó, tùy vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có
          thể phát sinh thêm chi phí khác như Phụ phí đóng gói, phí vận chuyển,
          phụ phí hàng cồng kềnh,...
        </p>
        <p className="text-[12px] text-red-600">
          Chính sách khuyến mãi trên Fahasa.com không áp dụng cho Hệ thống Nhà
          sách Fahasa trên toàn quốc
        </p>
      </div>
    </div>
  );
}
