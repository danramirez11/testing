import type { ChangeEventHandler, ReactNode } from "react";
import "./Input.css";

export type InputType = "Text" | "Text Area";
export type InputState =
  | "Default"
  | "Active"
  | "Disabled"
  | "Error"
  | "Filled"
  | "Info"
  | "Success"
  | "Warning";

export type InputProps = {
  type?: InputType;
  condensed?: boolean;
  helpText?: string;
  required?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  state?: InputState;
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  disabled?: boolean;
  name?: string;
};

const stateClassMap: Record<InputState, string> = {
  Default: "input--default",
  Active: "input--active",
  Disabled: "input--disabled",
  Error: "input--error",
  Filled: "input--filled",
  Info: "input--info",
  Success: "input--success",
  Warning: "input--warning",
};

function Input({
  type = "Text",
  condensed = false,
  helpText,
  required = false,
  iconLeft,
  iconRight,
  state = "Default",
  label,
  placeholder,
  value,
  onChange,
  disabled = false,
  name,
}: InputProps) {
  const isTextArea = type === "Text Area";

  return (
    <label className={`input ${stateClassMap[state]}`} data-state={state}>
      {label ? (
        <span className="input__label type-paragraph-small-regular">
          {label}
          {required ? <span className="input__required"> *</span> : null}
        </span>
      ) : null}
      <span className={`input__control ${condensed ? "input__control--condensed" : ""}`}>
        {iconLeft ? <span className="input__icon">{iconLeft}</span> : null}
        {isTextArea ? (
          <textarea
            className="input__field type-paragraph-base-regular"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            disabled={disabled}
            name={name}
            rows={4}
          />
        ) : (
          <input
            className="input__field type-paragraph-base-regular"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            disabled={disabled}
            name={name}
          />
        )}
        {iconRight ? <span className="input__icon">{iconRight}</span> : null}
      </span>
      {helpText ? (
        <span className="input__help type-paragraph-xsmall-regular">{helpText}</span>
      ) : null}
    </label>
  );
}

export default Input;
