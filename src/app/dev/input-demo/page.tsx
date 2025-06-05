import { Input } from "@/components/ui/input";

export default function InputDemoPage() {
  return (
    <div className="p-6 space-y-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold">Input Demo</h1>

      <Input placeholder="Nhập email..." type="email" />

      <Input placeholder="Mật khẩu" type="password" />

      <Input placeholder="Tên đầy đủ" />

      <Input placeholder="Disabled" disabled />

      <Input placeholder="Có lỗi" aria-invalid="true" />
    </div>
  );
}
