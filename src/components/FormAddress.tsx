"use client";
import { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Select, SelectTrigger, SelectValue } from "./ui/select";
import { SelectContent, SelectGroup, SelectItem } from "@radix-ui/react-select";
import { Button } from "./ui/button";
import { House } from "lucide-react";
import { Checkbox } from "./ui/checkbox";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

const FormAddress = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [ward, setWard] = useState("");
  const cityOptions = [{ label: "Cần Thơ", value: "cantho" }];
  const districtOptions = [{ label: "Quận Ninh Kều", value: "nihkieu" }];
  const wardOptions = [
    { label: "Phường Xuân Khánh", value: "xuankhanh" },
    { label: "Phường Hung Lợi", value: "hungloi" },
  ];
  return (
    <div className="mt-2 lg:bg-yellow-500 lg:py-10  lg:grid lg:grid-cols-6">
      <div className="flex flex-col space-y-4 lg:col-span-4 lg:col-start-2">
        <FormFieldWithCounter
          label="Tên người nhận"
          placeholder="Nhập họ và tên"
          type={"text"}
          value={name}
          maxLength={50}
          onChange={setName}
        />
        <FormFieldWithCounter
          label="Số điện thoại"
          placeholder="+84"
          type={"number"}
          value={name}
          maxLength={null}
          onChange={setName}
        />
        <FormSelect
          label="Tỉnh/Thành phố"
          placeholder="Chọn Tỉnh/Thành phố"
          value={city}
          onChange={setCity}
          options={cityOptions}
        />
        <FormSelect
          label="Quận/Huyện"
          placeholder="Chọn Quận/Huyện"
          value={district}
          onChange={setDistrict}
          options={districtOptions}
        />
        <FormSelect
          label="Phường/Xã/Thị trấn"
          placeholder="Nhập Phường/Xã/Thị trấn"
          value={ward}
          onChange={setWard}
          options={wardOptions}
        />

        <FormFieldWithCounter
          label="Địa chỉ nhận hàng"
          placeholder="Nhập địa chỉ cụ thể"
          type={"text"}
          value={name}
          maxLength={null}
          onChange={setName}
        />
        <AddressTypeSelector />
        <div className="flex flex-wrap items-center gap-1">
          <Checkbox />
          <Label>Đặt làm địa chỉ mặt định</Label>
        </div>
        <div className="mb-2">
          <Button variant={"danger"} className="w-full lg:w-auto">
            Xác nhận
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FormAddress;

interface FormFieldWithCounterProps {
  label: string;
  type: React.HTMLInputTypeAttribute;
  placeholder: string;
  value: string;
  maxLength: number | null;
  onChange: (value: string) => void;
}
function FormFieldWithCounter({
  label,
  type,
  placeholder,
  value,
  maxLength = null,
  onChange,
}: FormFieldWithCounterProps) {
  return (
    <div className="flex flex-col space-y-1 lg:flex-row lg:items-center">
      <div className="flex items-center justify-between lg:w-1/4">
        <Label>{label}</Label>
        {maxLength && (
          <span className="text-xs lg:hidden">
            {value.length}/{maxLength}
          </span>
        )}
      </div>
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        maxLength={typeof maxLength === "number" ? maxLength : undefined}
        onChange={(e) => onChange(e.target.value)}
        className="outline-none focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 lg:flex-1"
      />
    </div>
  );
}

interface Option {
  label: string;
  value: string;
}

interface FormSelectProps {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  options: Option[];
}

function FormSelect({
  label,
  placeholder,
  value,
  onChange,
  options,
}: FormSelectProps) {
  return (
    <div className="flex flex-col space-y-1 lg:flex-row lg:items-center">
      {label && <Label className="text-sm font-medium lg:w-1/4">{label}</Label>}
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="w-full lg:flex-1">
          <SelectValue placeholder={placeholder || "Chọn..."} />
        </SelectTrigger>
        <SelectContent
          position="popper"
          side="bottom"
          align="start"
          sideOffset={4}
          alignOffset={0}
          avoidCollisions={false}
          className="min-w-[var(--radix-select-trigger-width)] bg-white dark:bg-gray-950  dark:border-gray-800 shadow-lg z-50 outline-none focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
        >
          <SelectGroup>
            {options.map((option) => (
              <SelectItem
                key={option.value}
                value={option.value}
                className="hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer text-sx"
              >
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}

function AddressTypeSelector() {
  const [selectedType, setSelectedType] = useState("home");

  return (
    <div className="space-y-2 lg:flex lg:items-center">
      <Label className="lg:w-1/4">Loại địa chỉ</Label>
      <div className="flex gap-4 lg:hidden">
        <Button
          variant="outline"
          onClick={() => setSelectedType("home")}
          className={`border ${
            selectedType === "home"
              ? "border-[#007AFF] text-[#007AFF]"
              : "border-gray-300 text-gray-700"
          }`}
        >
          <House color={selectedType === "home" ? "#007AFF" : "#A0A0A0"} />
          <span className="ml-2">Nhà</span>
        </Button>

        <Button
          variant="outline"
          onClick={() => setSelectedType("office")}
          className={`border ${
            selectedType === "office"
              ? "border-[#007AFF] text-[#007AFF]"
              : "border-gray-300 text-gray-700"
          }`}
        >
          <House color={selectedType === "office" ? "#007AFF" : "#A0A0A0"} />
          <span className="ml-2">Văn phòng</span>
        </Button>
      </div>
      <div className=" gap-4 hidden lg:inline-flex">
        <RadioGroup defaultValue="comfortable" className="flex gap-4">
          <div className="flex items-center gap-3">
            <RadioGroupItem value="comfortable" id="r1" />
            <Label htmlFor="r1">Nhà riêng</Label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="compact" id="r3" />
            <Label htmlFor="r3">Văn phòng</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}
