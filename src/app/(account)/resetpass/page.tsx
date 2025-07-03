"use client";
import { Button } from "@/components/ui/button";
import FormFieldWithCounter from "@/components/ui/FormFieldWithCounter";
import React, { useState } from "react";

const ResetPassPage = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  return (
    <div className="bg-white pt-8 px-4 pb-6 rounded-lg md:grid grid-cols-4">
      <div className="space-y-3 col-start-2 col-span-2">
        <FormFieldWithCounter
          label="Mật khẩu hiện tại"
          placeholder="Nhập mật khẩu hiện tại"
          maxLength={null}
          type="password"
          value={currentPassword}
          onChange={setCurrentPassword}
        />
        <FormFieldWithCounter
          label="Mật khẩu mới "
          placeholder="Nhập mật khẩu mới"
          maxLength={null}
          type="password"
          value={currentPassword}
          onChange={setCurrentPassword}
        />
        <FormFieldWithCounter
          label="Nhập lại mật khẩu mới"
          placeholder="Nhập lại mật khẩu mới"
          maxLength={null}
          type="password"
          value={currentPassword}
          onChange={setCurrentPassword}
        />
        <div className="pt-1.5">
          <Button className="w-full lg:w-auto" disabled={true}>
            Lưu thay đổi
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResetPassPage;
