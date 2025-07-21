"use client";
import { useState } from "react";
import { formatPrice, formatDate } from "@/utils/format";
import { Order } from "@/types/oder";
import { MessageSquareMore } from "lucide-react";


const mockOrders: Order[] = [
  {
    id: "1",
    orderNumber: "HA001234",
    date: "2024-01-15",
    status: "delivered",
    total: 1250000,
    items: [
      {
        id: "1",
        name: "Áo sơ mi nam cao cấp",
        image: "/placeholder.svg?height=80&width=80",
        quantity: 2,
        price: 450000,
      },
      {
        id: "2",
        name: "Quần jean nữ",
        image: "/placeholder.svg?height=80&width=80",
        quantity: 1,
        price: 350000,
      },
    ],
  },
  {
    id: "2",
    orderNumber: "HA001235",
    date: "2024-01-20",
    status: "shipping",
    total: 890000,
    items: [
      {
        id: "3",
        name: "Giày thể thao có cái tên rất là dài dòng",
        image: "/placeholder.svg?height=80&width=80",
        quantity: 1,
        price: 890000,
      },
    ],
  },
  {
    id: "3",
    orderNumber: "HA001236",
    date: "2024-01-22",
    status: "pending",
    total: 650000,
    items: [
      {
        id: "4",
        name: "Túi xách nữ",
        image: "/placeholder.svg?height=80&width=80",
        quantity: 1,
        price: 650000,
      },
    ],
  },
  {
    id: "4",
    orderNumber: "HA001237",
    date: "2024-01-18",
    status: "cancelled",
    total: 420000,
    items: [
      {
        id: "5",
        name: "Áo khoác nam",
        image: "/placeholder.svg?height=80&width=80",
        quantity: 1,
        price: 420000,
      },
    ],
  },
];

const tabs = [
  { id: "all", label: "Tất cả", count: 1 },
  { id: "pending", label: "Chờ xác nhận", count: 0 },
  { id: "confirmed", label: "Đang xử lý", count: 0 },
  { id: "shipping", label: "Đang vận chuyển", count: 1 },
  { id: "delivered", label: "Đã giao", count: 0 },
  { id: "cancelled", label: "Đã hủy", count: 1 },
];

const statusLabels = {
  pending: "Chờ thanh toán",
  confirmed: "Đang xử lý",
  shipping: "Đang vận chuyển",
  delivered: "Đã giao",
  cancelled: "Đã hủy",
};
const statusButtons: Record<string, { label: string; href: string }[]> = {
  pending: [
    { label: "Thanh toán", href: "/thanh-toan" },
    { label: "Hủy đơn hàng", href: "/huy-don" },
  ],
  confirmed: [], // Đang xử lý không có nút mặc định
  shipping: [
    { label: "Đã nhận hàng", href: "/da-nhan" },
    { label: "Yêu cầu trả hàng/hoàn tiền", href: "/tra-hang" },
  ],
  delivered: [
    { label: "Đánh giá", href: "/danh-gia" },
    { label: "Yêu cầu trả hàng/hoàn tiền", href: "/tra-hang" },
  ],
  cancelled: [
    { label: "Mua lại", href: "/mua-lai" },
    { label: "Xem chi tiết đơn hủy", href: "/chi-tiet-huy" },
  ],
};

export default function UserOrderTabs() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredOrders =
    activeTab === "all"
      ? mockOrders
      : mockOrders.filter((order) => order.status === activeTab);

  return (
    // ĐÃ SỬA: Loại bỏ max-w-[970px] mx-auto để nó giãn full chiều rộng của container cha
    // Giữ p-4 sm:p-6 cho padding tổng thể của nội dung trang
    <div className="p-4 sm:p-6 overflow-x-hidden">
      <h1 className="hidden lg:inline-flex text-md text-gray-900 mb-8">
        Thông tin đơn hàng
      </h1>

      <div className="mb-1 scrollbar-hide">
        {/* ĐÃ SỬA: Loại bỏ px-2 để các tab sát ra viền */}
        <nav className="flex w-full gap-2 overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 min-w-max py-4 text-center border-b-2 font-medium text-md transition-colors whitespace-nowrap ${
                activeTab === tab.id
                  ? "border-red-500 text-red-500"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="space-y-6">
        {filteredOrders.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <svg
                className="w-12 h-12 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Không có đơn hàng nào
            </h3>
            <p className="text-gray-500">
              Bạn chưa có đơn hàng nào trong danh mục này.
            </p>
          </div>
        ) : (
          filteredOrders.map((order) => (
            <div key={order.id} className="bg-white rounded-md shadow-sm p-4 sm:p-6"> {/* Thêm padding và shadow cho mỗi card đơn hàng */}
              <div className="flex flex-col sm:flex-row lg:justify-between sm:items-center lg:py-2 border-b border-gray-200 pb-3 mb-3">
                {/* Đổi thành flex-col trên mobile, flex-row trên sm trở lên */}
                <div className="flex items-center gap-2 mb-2 sm:mb-0"> {/* Thêm gap và margin cho mobile */}
                  <h1 className="font-semibold text-base md:text-lg text-gray-900">
                    Nhà sách Hồng Ân
                  </h1>
                  {/* Có thể thêm icon MessageSquareMore ở đây nếu cần */}
                  {/* <MessageSquareMore size={20} className="text-gray-500" /> */}
                </div>
                <div className="flex gap-2 ml-0 sm:ml-auto items-center text-sm sm:text-base"> {/* Đổi ml-auto thành ml-0 trên mobile */}
                  {/* Hiển thị trạng thái đơn hàng */}
                  <p className="text-green-600 font-medium whitespace-nowrap">
                    {statusLabels[order.status] || order.status}
                  </p>
                  {/* Sửa border-l-3 thành border-l-2 */}
                  <span className="border-l-2 border-gray-300 h-4 mx-1"></span>
                  <p className="text-gray-400 whitespace-nowrap">
                    {order.orderNumber}
                  </p>
                </div>
              </div>

              <div className="py-3">
                <div className="space-y-4 border-b border-gray-200 pb-3 mb-3"> {/* Sửa border-b-3 thành border-b */}
                  {order.items.map((item) => (
                    <div key={item.id} className="flex items-start gap-3"> {/* Tăng gap cho item */}
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg border border-gray-200 flex-shrink-0" // Thêm flex-shrink-0
                      />
                      <div className="flex-1 min-w-0 flex flex-col md:flex-row md:justify-between"> {/* Đổi thành flex-col trên mobile */}
                        <div className="flex-1 min-w-0 pr-2"> {/* Thêm pr-2 để tránh text chạm vào giá */}
                          <h4 className="text-base lg:text-lg font-bold text-gray-900 truncate">
                            {item.name}
                          </h4>
                          <p className="text-sm text-gray-500 py-1 md:py-2.5">
                            Phân loại: màu hồng {/* Dữ liệu phân loại này cứng, nên thay bằng dữ liệu động */}
                          </p>
                          <p className="text-sm text-gray-500">
                            Số lượng x{item.quantity}
                          </p>
                        </div>
                        <div className="text-right mt-2 md:mt-0 md:flex md:flex-col md:justify-end"> {/* Điều chỉnh margin top cho mobile */}
                          <p className="text-lg sm:text-xl text-red-500 font-semibold"> {/* Điều chỉnh font-size */}
                            {formatPrice(item.price)}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between items-center my-2 gap-1 flex-wrap"> {/* Thêm flex-wrap */}
                  <h1 className="font-bold text-base sm:text-lg">Thành tiền:</h1>
                  <p className="text-red-500 text-xl sm:text-2xl font-medium">
                    {formatPrice(order.total)} {/* Sử dụng tổng tiền thực tế của đơn hàng */}
                  </p>
                </div>
                <div className="grid md:flex md:justify-between md:gap-5 items-start mt-3 gap-3">
                  <p className="order-2 sm:order-1 text-xs text-gray-400"> {/* Điều chỉnh text-xs cho mobile */}
                    Vui lòng chỉ nhấn "Đã nhận được hàng" khi đơn hàng đã được
                    giao đến bạn và sản phẩm nhận được không có vấn đề nào
                  </p>

                  <div className="order-1 sm:order-2 flex flex-col sm:flex-row gap-3 sm:justify-end">
                    {statusButtons[order.status]?.map((btn, idx) => (
                      <a
                        key={idx}
                        href={btn.href}
                        className={`py-2 px-4 text-sm font-medium rounded-md w-full text-center
                          ${
                            idx === 0
                              ? "bg-red-500 text-white"
                              : "bg-white text-gray-700 border border-gray-300"
                          }`}
                      >
                        {btn.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}