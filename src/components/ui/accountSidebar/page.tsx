"use client";

import AccountSidebar from "../../layout/AccountSidebar";

export default function AccountPage() {
  return (
    <div className="flex flex-col lg:flex-row gap-6 p-6 bg-gray-50 min-h-screen">
      <AccountSidebar />

      <div className="flex-1 bg-white p-6 rounded-md shadow border">
        <h2 className="text-xl font-semibold mb-4">Thông tin tài khoản</h2>

        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Họ và tên</label>
              <input
                type="text"
                defaultValue="Nguyễn Văn A"
                className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Ngày sinh</label>
              <input
                type="date"
                className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Giới tính</label>
            <div className="flex gap-4 mt-1">
              <label><input type="radio" name="gender" defaultChecked /> Nam</label>
              <label><input type="radio" name="gender" /> Nữ</label>
              <label><input type="radio" name="gender" /> Khác</label>
            </div>
          </div>

          <button
            type="submit"
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          >
            Lưu thay đổi
          </button>
        </form>
      </div>
    </div>
  );
}
