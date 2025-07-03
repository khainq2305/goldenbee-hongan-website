import { Input } from "./input";
import { Label } from "./label";

interface FormFieldWithCounterProps {
  label: string;
  type: React.HTMLInputTypeAttribute;
  placeholder: string;
  value: string;
  maxLength: number | null;
  onChange: (value: string) => void;
}
export default function FormFieldWithCounter({
  label,
  type,
  placeholder,
  value,
  maxLength = null,
  onChange,
}: FormFieldWithCounterProps) {
  return (
    <>
      <div className="flex items-center justify-between lg:w-1/4">
        <Label className="shrink-0">{label}</Label>
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
    </>
  );
}
