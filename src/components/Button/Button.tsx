import type { MouseEventHandler, ReactNode } from "react";
import "./Button.css";

export type ButtonStyle = "Filled" | "Ghost" | "Borderless" | "Round";
export type ButtonColor = "Primary" | "Secondary" | "Neutral";
export type ButtonIcon = "None" | "Center";
export type ButtonSize = "Large" | "Medium" | "Small";
export type ButtonState = "Default" | "Hover" | "Active" | "Disabled";

export type ButtonProps = {
  style?: ButtonStyle;
  color?: ButtonColor;
  icon?: ButtonIcon;
  size?: ButtonSize;
  fixedWidth?: boolean;
  state?: ButtonState;
  disabled?: boolean;
  iconNode?: ReactNode;
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
};

const styleClassMap: Record<ButtonStyle, string> = {
  Filled: "button--filled",
  Ghost: "button--ghost",
  Borderless: "button--borderless",
  Round: "button--round",
};

const colorClassMap: Record<ButtonColor, string> = {
  Primary: "button--primary",
  Secondary: "button--secondary",
  Neutral: "button--neutral",
};

const sizeClassMap: Record<ButtonSize, string> = {
  Large: "button--size-large type-action-button-large",
  Medium: "button--size-medium type-action-button-medium",
  Small: "button--size-small type-action-button-small",
};

function Button({
  style = "Filled",
  color = "Primary",
  icon = "None",
  size = "Medium",
  fixedWidth = false,
  state = "Default",
  disabled = false,
  iconNode,
  children,
  onClick,
  type = "button",
}: ButtonProps) {
  const isIconOnly = icon === "Center";

  return (
    <button
      type={type}
      className={`button ${styleClassMap[style]} ${colorClassMap[color]} ${sizeClassMap[size]} ${
        isIconOnly ? "button--icon-only" : ""
      } ${fixedWidth ? "button--fixed" : ""}`}
      data-state={state}
      disabled={disabled}
      onClick={onClick}
    >
      {isIconOnly ? (
        <span className="button__icon">{iconNode}</span>
      ) : (
        <>
          {iconNode ? <span className="button__icon">{iconNode}</span> : null}
          <span className="button__label">{children}</span>
        </>
      )}
    </button>
  );
}

export default Button;
