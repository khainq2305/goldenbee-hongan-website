import OrderSummary from "@/components/ui/OrderSummary";

export default function CartPage() {
  return (
    <div className="flex gap-6 p-6 bg-gray-50 min-h-screen">
      <div className="flex-1 bg-white p-4 rounded shadow">
        <h1 className="text-xl font-bold mb-4">Giỏ hàng</h1>
      </div>
      <OrderSummary />
    </div>
  );
}
