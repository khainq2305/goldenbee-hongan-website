"use client";

import { useState, useEffect, useRef } from "react";
import { Info, TicketPercent, Truck, Copy } from "lucide-react";

// Định nghĩa kiểu Voucher
type Voucher = {
  id: number;
  type: "DISCOUNT" | "FREESHIP";
  title: string;
  condition: string;
  expiryDate: string;
  logoSrc?: string;
  code: string;
  details?: string[];
};

// Dữ liệu mock cho các voucher
const initialVouchers: Voucher[] = [
  {
    id: 1,
    type: "DISCOUNT",
    title: "Giảm 10K",
    condition: "Cho đơn hàng từ 600K",
    expiryDate: "2025-06-30",
    logoSrc: "/images/voucher-logo-1.png",
    code: "SK30KQ2",
    details: [
      "Giảm 10K cho đơn hàng từ 600K.",
      "Áp dụng cho sản phẩm của GIẢI PHÁP SỐNG KHỎE.",
    ],
  },
  {
    id: 2,
    type: "FREESHIP",
    title: "Giảm 30K",
    condition: "Cho đơn hàng từ 70K",
    expiryDate: "2025-06-30",
    code: "FS30K",
    details: [
      "Giảm 30K phí vận chuyển.",
      "Áp dụng cho đơn hàng tối thiểu 70K.",
    ],
  },
  {
    id: 3,
    type: "DISCOUNT",
    title: "Giảm 20K",
    condition: "Cho đơn hàng từ 500K",
    expiryDate: "2025-07-15",
    logoSrc: "/images/voucher-logo-2.png",
    code: "SK20KQ3",
    details: ["Giảm 20K cho đơn hàng từ 500K."],
  },
  {
    id: 4,
    type: "DISCOUNT",
    title: "Giảm 15K",
    condition: "Cho đơn hàng từ 300K",
    expiryDate: "2025-07-20",
    logoSrc: "/images/voucher-logo-3.png",
    code: "SK15KQ4",
    details: ["Giảm 15K cho đơn hàng từ 300K."],
  },
  {
    id: 5,
    type: "FREESHIP",
    title: "Freeship toàn quốc",
    condition: "Không giới hạn giá trị đơn",
    expiryDate: "2025-07-25",
    code: "FSFREE",
    details: ["Miễn phí vận chuyển toàn quốc cho mọi đơn hàng."],
  },
  {
    id: 6,
    type: "DISCOUNT",
    title: "Giảm 25K",
    condition: "Cho đơn từ 1 triệu",
    expiryDate: "2025-08-01",
    logoSrc: "/images/voucher-logo-4.png",
    code: "SK25K1000",
    details: ["Giảm 25K cho đơn từ 1 triệu.", "Không áp dụng kèm khuyến mãi khác."],
  },
  {
    id: 7,
    type: "DISCOUNT",
    title: "Giảm 5%",
    condition: "Cho đơn từ 2 triệu",
    expiryDate: "2025-08-10",
    logoSrc: "/images/voucher-logo-5.png",
    code: "SK5PERCENT",
    details: ["Giảm 5% cho đơn từ 2 triệu.", "Tối đa giảm 100K."],
  },
  {
    id: 8,
    type: "FREESHIP",
    title: "Freeship nội thành",
    condition: "Chỉ áp dụng HN & HCM",
    expiryDate: "2025-08-15",
    code: "FSCITY",
    details: ["Miễn phí giao hàng nội thành Hà Nội và TP.HCM."],
  },
  {
    id: 9,
    type: "DISCOUNT",
    title: "Giảm 50K",
    condition: "Cho đơn sách từ 1.5 triệu",
    expiryDate: "2025-08-30",
    logoSrc: "/images/voucher-logo-6.png",
    code: "BOOK50K",
    details: ["Chỉ áp dụng cho danh mục Sách.", "Giảm 50K đơn từ 1.5 triệu."],
  },
  {
    id: 10,
    type: "FREESHIP",
    title: "Freeship đơn đầu",
    condition: "Cho khách mới",
    expiryDate: "2025-12-31",
    code: "WELCOMEFS",
    details: ["Chỉ áp dụng đơn đầu tiên của tài khoản mới."],
  },
];

// Component VoucherCard (được đặt trong cùng file)
function VoucherCard({ voucher }: { voucher: Voucher }) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [position, setPosition] = useState<"top" | "bottom">("bottom");
  const tooltipRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  const expiry = new Date(voucher.expiryDate);
  const expiryMessage = `HSD: ${expiry.getDate().toString().padStart(2, "0")}/${(expiry.getMonth() + 1)
    .toString()
    .padStart(2, "0")}/${expiry.getFullYear()}`;

  useEffect(() => {
    if (showTooltip && tooltipRef.current && iconRef.current) {
      const tooltipRect = tooltipRef.current.getBoundingClientRect();
      const iconRect = iconRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Tính toán nếu tooltip cần được đặt ở trên
      // Thêm 10px buffer để không bị quá sát đáy màn hình
      if (iconRect.bottom + tooltipRect.height + 10 > viewportHeight && iconRect.top - tooltipRect.height > 0) {
        setPosition("top");
      } else {
        setPosition("bottom");
      }
    }
  }, [showTooltip]);

  return (
    // Thay đổi flex thành flex-col trên mobile, và sm:flex để hiển thị ngang trên màn hình lớn
    <div className="bg-white flex flex-col sm:flex-row rounded-xl shadow-md relative min-h-[100px] overflow-hidden">
      {/* Thay đổi w-32 thành w-full trên mobile, sm:w-32 trên màn hình nhỏ trở lên */}
      <div className={`flex-none w-full sm:w-32 flex items-center justify-center px-3 py-4 text-center border-b-2 sm:border-b-0 sm:border-r-2 border-dashed border-gray-200 ${voucher.type === "FREESHIP" ? "bg-[#d60000] text-white" : ""}`}>
        {voucher.type === "FREESHIP" ? (
          <div>
            <Truck className="mx-auto" size={28} />
            <p className="text-sm font-semibold mt-1 leading-tight">Miễn phí vận chuyển</p>
          </div>
        ) : (
          <img src={voucher.logoSrc} alt="Voucher Logo" className="w-16 h-16 object-contain" />
        )}
      </div>

      <div className="flex-1 p-4">
        <h3 className="font-bold text-base text-gray-800">{voucher.title}</h3>
        <p className="text-sm text-gray-600 mt-1">{voucher.condition}</p>
        <p className="text-sm text-[#d60000] font-semibold mt-2">{expiryMessage}</p>
      </div>

      <div className="absolute top-3 right-3" ref={iconRef}>
        <div
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          onClick={() => setShowTooltip(!showTooltip)} // Thêm onClick cho mobile
          className="text-[#d60000] cursor-pointer"
        >
          <Info size={18} />
        </div>

        {showTooltip && (
          <div
            ref={tooltipRef}
            // Điều chỉnh width cho responsive
            className={`absolute z-50 w-[calc(100vw-32px)] sm:w-[320px] max-w-xs bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.1)] border border-gray-200 text-sm text-gray-800
              ${position === "bottom" ? "top-8 right-0" : "bottom-8 right-0"}
            `}
          >
            <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
              <span className="text-gray-600 font-medium">Mã</span>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-gray-900 break-all">{voucher.code}</span> {/* Thêm break-all */}
                <Copy size={16} className="text-[#d60000] cursor-pointer hover:opacity-80" onClick={() => navigator.clipboard.writeText(voucher.code)} />
              </div>
            </div>

            <div className="px-4 py-3 border-b border-gray-100">
              <span className="text-gray-600 font-medium">Hạn sử dụng</span>
              <p className="font-semibold text-gray-900 mt-1 text-sm">{expiryMessage.replace("HSD: ", "")}</p>
            </div>

            <div className="px-4 py-3 bg-gray-50 rounded-b-xl">
              <span className="text-gray-600 font-medium">Điều kiện</span>
              <ul className="list-disc list-inside mt-1 space-y-1 text-gray-900">
                {voucher.details?.map((line, i) => <li key={i}>{line}</li>)}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Component chính VoucherPage
export default function VoucherPage() {
  const [activeTab, setActiveTab] = useState<"all" | "expired">("all");
  const [code, setCode] = useState("");
  const [vouchers] = useState<Voucher[]>(initialVouchers);
  const [showAll, setShowAll] = useState(false);

  const isSaveButtonEnabled = code.trim().length > 0;
  const displayedVouchers = showAll ? vouchers : vouchers.slice(0, 4);

  return (
    // Responsive padding và min-h-screen để đảm bảo trang không bị trống quá nhiều trên mobile
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen">
      <h1 className="text-xl font-bold mb-4">Kho voucher</h1>

      <div className="bg-white rounded-lg p-4 mb-5 shadow-sm">
        <label className="text-sm font-medium text-gray-800 mb-2 block">
          Mã voucher
        </label>
        {/* Đảm bảo flex wrap trên mobile nếu không đủ không gian */}
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Nhập mã voucher tại đây"
            className="flex-1 px-4 py-2 rounded-md text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#d60000]"
          />
          <button
            className={`px-6 py-2 rounded-md text-sm font-semibold transition-colors ${
              isSaveButtonEnabled
                ? "bg-[#d60000] text-white hover:bg-red-700"
                : "bg-gray-200 text-gray-500 cursor-not-allowed"
            }`}
            disabled={!isSaveButtonEnabled}
          >
            Lưu
          </button>
        </div>
      </div>

      <div className="flex text-sm border-b border-gray-200 mb-4">
        {[
          { id: "all", label: "Tất cả" },
          { id: "expired", label: "Hết hiệu lực" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as "all" | "expired")}
            className={`px-4 py-2 -mb-px transition-all ${
              activeTab === tab.id
                ? "text-[#d60000] border-b-2 border-[#d60000] font-semibold"
                : "text-gray-600 border-b-2 border-transparent hover:text-[#d60000]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="pt-2">
        {activeTab === "all" ? (
          <>
            {/* Thay đổi grid-cols-2 thành grid-cols-1 trên mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {displayedVouchers.map((voucher) => (
                <VoucherCard key={voucher.id} voucher={voucher} />
              ))}
            </div>
            {vouchers.length > 4 && (
              <div className="text-center mt-4">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="text-[#d60000] font-semibold hover:underline text-sm"
                >
                  {showAll ? "Thu gọn" : "Xem thêm"}
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="bg-white rounded-md p-6 flex flex-col items-center justify-center h-60 text-center">
            <TicketPercent className="w-12 h-12 text-gray-300 mb-3" />
            <p className="text-sm text-gray-500">
              Bạn không có voucher nào đã hết hiệu lực.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}