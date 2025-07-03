"use client";

import { Calendar, Lock, Mail, Phone, User, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProfilePage() {
  return (
    <div className="">
      <div className="max-w-[1200px] mx-auto py-8 px-4">
        
        <h1 className="hidden lg:block text-lg font-semibold mb-4"> 
          Thông tin tài khoản
        </h1>

        <div className="bg-white p-6 w-full flex flex-col lg:flex-row justify-between gap-y-8 lg:gap-x-8">
          <div className="flex w-full lg:w-[70%] flex-col">
           
            <h2 className="text-base font-medium mb-4 text-center lg:text-left">
              Thông tin cá nhân
            </h2>
            <div className="flex flex-col items-start gap-6 lg:flex-row">
              <div className="relative w-20 h-20 shrink-0 mx-auto lg:mx-0">
                <div className="w-full h-full rounded-full border-2 border-[#d70018] overflow-hidden">
                  <User className="w-full h-full text-blue-500 p-3" />
                </div>

                <div className="absolute bottom-0 right-1 bg-black text-white rounded-full w-6 h-6 flex items-center justify-center cursor-pointer">
                  <Pencil className="w-[10px] h-[10px]" />
                </div>
              </div>

              <div className="flex-1 space-y-4 w-full">
                <div className="flex flex-col items-stretch gap-2 lg:flex-row lg:items-center lg:gap-5">
                  <div className="w-full lg:w-1/4 shrink-0">
                    <label className="text-sm block text-gray-700">
                      Họ và tên
                    </label>
                  </div>
                  <div className="w-full lg:w-3/4">
                    <input
                      type="text"
                      defaultValue="Nguyễn Văn A"
                      className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                    />
                  </div>
                </div>

                <div className="flex flex-col items-stretch gap-2 lg:flex-row lg:items-center lg:gap-5">
                  <div className="w-full lg:w-1/4 shrink-0">
                    <label className="text-sm block text-gray-700">
                      Ngày sinh
                    </label>
                  </div>
                  <div className="w-full lg:w-3/4">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="dd/mm/yyyy"
                        className="w-full border border-gray-300 rounded px-3 py-2 text-sm pr-10"
                      />
                      <Calendar className="absolute right-3 top-2.5 w-4 h-4 text-gray-500" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-2 pt-1 lg:flex-row lg:items-center lg:gap-5">
                  <div className="w-full lg:w-1/4 shrink-0">
                    <label className="text-sm block text-gray-700">
                      Giới tính
                    </label>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm w-full lg:w-3/4">
                    <label className="flex items-center gap-1">
                      <input
                        type="radio"
                        name="gender"
                        defaultChecked
                        className="form-radio text-[#d70018] border-gray-300"
                      />
                      Nam
                    </label>
                    <label className="flex items-center gap-1">
                      <input
                        type="radio"
                        name="gender"
                        className="form-radio text-[#d70018] border-gray-300"
                      />
                      Nữ
                    </label>
                    <label className="flex items-center gap-1">
                      <input
                        type="radio"
                        name="gender"
                        className="form-radio text-[#d70018] border-gray-300"
                      />
                      Khác
                    </label>
                  </div>
                </div>

                <Button
                  variant="primary"
                  size="md"
                  className="mt-6 py-1 px-8 w-full lg:w-auto"
                >
                  Lưu thay đổi
                </Button>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[30%] flex flex-col pt-8 lg:pt-0">
            <div className="space-y-4">
              <h2 className="text-base font-medium">Số điện thoại và Email</h2>

              <div className="flex justify-between items-center mt-3">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <Phone className="w-4 h-4" />
                  0999999999
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="px-4 py-1.5 hover:!bg-red-50 hover:!text-[#d70018] border-[#d70018]"
                >
                  Cập nhật
                </Button>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <Mail className="w-4 h-4" />
                  user@gmail.com
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="px-4 py-1.5 hover:!bg-red-50 hover:!text-[#d70018] border-[#d70018]"
                >
                  Cập nhật
                </Button>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4 mt-6 space-y-4">
              <h2 className="text-base font-medium">Bảo mật</h2>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <Lock className="w-4 h-4" />
                  Đổi mật khẩu
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="px-4 py-1.5 hover:!bg-red-50 hover:!text-[#d70018] border-[#d70018]"
                >
                  Cập nhật
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}