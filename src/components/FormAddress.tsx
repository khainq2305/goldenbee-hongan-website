"use client";

import { useForm, Controller } from "react-hook-form";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Select, SelectTrigger, SelectValue,  SelectContent, SelectGroup, SelectItem } from "./ui/select";
// import { SelectContent, SelectGroup, SelectItem } from "@radix-ui/react-select";
import { Button } from "./ui/button";
import { House } from "lucide-react";
import { Checkbox } from "./ui/checkbox";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

type FormData = {
  name: string;
  phone: string;
  city: string;
  district: string;
  ward: string;
  address: string;
  isDefault: boolean;
  addressType: string;
};

const cityOptions = [{ label: "Cần Thơ", value: "cantho" }];
const districtOptions = [{ label: "Quận Ninh Kiều", value: "ninhkieu" }];
const wardOptions = [
  { label: "Phường Xuân Khánh", value: "xuankhanh" },
  { label: "Phường Hưng Lợi", value: "hungloi" },
];

export default function FormAddress() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      name: "",
      phone: "",
      city: "",
      district: "",
      ward: "",
      address: "",
      isDefault: false,
      addressType: "home",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("✅ Form data:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-2 lg:bg-white lg:py-10 lg:grid lg:grid-cols-6"
    >
      <div className="flex flex-col space-y-4 lg:col-span-4 lg:col-start-2">
        {/* Name */}
        <Controller
          name="name"
          control={control}
          rules={{ required: "Tên không được để trống" }}
          render={({ field }) => (
            <FormFieldWithCounter
              label="Tên người nhận"
              placeholder="Nhập họ và tên"
              type="text"
              maxLength={50}
              value={field.value}
              onChange={field.onChange}
              error={errors.name?.message}
            />
          )}
        />

        {/* Phone */}
        <Controller
          name="phone"
          control={control}
          rules={{ required: "Số điện thoại không được để trống" }}
          render={({ field }) => (
            <FormFieldWithCounter
              label="Số điện thoại"
              placeholder="+84"
              type="text"
              value={field.value}
              onChange={field.onChange}
              error={errors.phone?.message}
            />
          )}
        />

        {/* City */}
        <FormSelect
          label="Tỉnh/Thành phố"
          placeholder="Chọn Tỉnh/Thành phố"
          name="city"
          control={control}
          options={cityOptions}
          rules={{ required: "Chọn Tỉnh/Thành phố" }}
          error={errors.city?.message}
        />

        {/* District */}
        <FormSelect
          label="Quận/Huyện"
          placeholder="Chọn Quận/Huyện"
          name="district"
          control={control}
          options={districtOptions}
          rules={{ required: "Chọn Quận/Huyện" }}
          error={errors.district?.message}
        />

        {/* Ward */}
        <FormSelect
          label="Phường/Xã/Thị trấn"
          placeholder="Nhập Phường/Xã/Thị trấn"
          name="ward"
          control={control}
          options={wardOptions}
          rules={{ required: "Chọn Phường/Xã/Thị trấn" }}
          error={errors.ward?.message}
        />

        {/* Address */}
        <Controller
          name="address"
          control={control}
          rules={{ required: "Địa chỉ không được để trống" }}
          render={({ field }) => (
            <FormFieldWithCounter
              label="Địa chỉ nhận hàng"
              placeholder="Nhập địa chỉ cụ thể"
              type="text"
              value={field.value}
              onChange={field.onChange}
              error={errors.address?.message}
            />
          )}
        />

        {/* Address Type */}
        <AddressTypeSelector control={control} />

        {/* Default checkbox */}
        <div className="flex flex-wrap items-center gap-1">
          <Controller
            name="isDefault"
            control={control}
            render={({ field }) => (
              <Checkbox
                checked={field.value}
                onCheckedChange={(val: any) => field.onChange(Boolean(val))}
              />
            )}
          />
          <Label>Đặt làm địa chỉ mặc định</Label>
        </div>

        <div className="mb-2">
          <Button type="submit" variant="danger" className="w-full lg:w-auto">
            Xác nhận
          </Button>
        </div>
      </div>
    </form>
  );
}

interface FormFieldWithCounterProps {
  label: string;
  type: React.HTMLInputTypeAttribute;
  placeholder: string;
  value: string;
  maxLength?: number | null;
  onChange: (value: string) => void;
  error?: string;
}
function FormFieldWithCounter({
  label,
  type,
  placeholder,
  value,
  maxLength = null,
  onChange,
  error,
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
      {error && (
        <span className="text-xs text-red-500 mt-1 lg:ml-4">{error}</span>
      )}
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
  name: keyof FormData;
  control: any;
  options: Option[];
  rules?: any;
  error?: string;
}

function FormSelect({
  label,
  placeholder,
  name,
  control,
  options,
  rules,
  error,
}: FormSelectProps) {
  return (
    <div className="flex flex-col space-y-1 lg:flex-row lg:items-center">
      {label && <Label className="text-sm font-medium lg:w-1/4">{label}</Label>}
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <Select value={field.value} onValueChange={field.onChange}>
            <SelectTrigger className="w-full lg:flex-1">
              <SelectValue placeholder={placeholder || "Chọn..."} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {options.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        )}
      />
      {error && (
        <span className="text-xs text-red-500 mt-1 lg:ml-4">{error}</span>
      )}
    </div>
  );
}

function AddressTypeSelector({ control }: { control: any }) {
  return (
    <div className="space-y-2 lg:flex lg:items-center">
      <Label className="lg:w-1/4">Loại địa chỉ</Label>
      <Controller
        name="addressType"
        control={control}
        render={({ field }) => (
          <>
            {/* Mobile buttons */}
            <div className="flex gap-4 lg:hidden">
              {["home", "office"].map((type) => (
                <Button
                  key={type}
                  variant="outline"
                  onClick={() => field.onChange(type)}
                  className={`border ${
                    field.value === type
                      ? "border-[#007AFF] text-[#007AFF]"
                      : "border-gray-300 text-gray-700"
                  }`}
                >
                  <House color={field.value === type ? "#007AFF" : "#A0A0A0"} />
                  <span className="ml-2">{type === "home" ? "Nhà" : "Văn phòng"}</span>
                </Button>
              ))}
            </div>

            {/* Desktop radio group */}
            <div className="gap-4 hidden lg:inline-flex">
              <RadioGroup
                value={field.value}
                onValueChange={field.onChange}
                className="flex gap-4"
              >
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="home" id="r1" />
                  <Label htmlFor="r1">Nhà riêng</Label>
                </div>
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="office" id="r2" />
                  <Label htmlFor="r2">Văn phòng</Label>
                </div>
              </RadioGroup>
            </div>
          </>
        )}
      />
    </div>
  );
}
