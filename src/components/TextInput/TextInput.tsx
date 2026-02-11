import type React from "react";
import "./TextInput.css";

export type TextInputProps = {
  placeholder?: string;
  value?: string;
  className?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

export default function TextInput({
  placeholder = "Name",
  value,
  className,
  onChange,
}: TextInputProps) {
  return (
    <label className={`ds-text-input ${className || ""}`.trim()}>
      <input
        className="ds-text-input__field"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </label>
  );
}
