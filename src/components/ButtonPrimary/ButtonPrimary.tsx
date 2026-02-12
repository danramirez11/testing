import { classNames } from "../../utils/classNames";
import type { ButtonPrimaryProps, ButtonPrimarySize, ButtonPrimaryStyle } from "./types";
import "./ButtonPrimary.css";

const sizeClass: Record<ButtonPrimarySize, string> = {
  Small: "ds-button--sm",
  Medium: "ds-button--md",
  Large: "ds-button--lg",
  "Extra Large": "ds-button--xl",
};

function styleClass(style: ButtonPrimaryStyle, mode: "Light" | "Dark") {
  if (style === "Glass") {
    return mode === "Dark" ? "ds-button--glass-dark" : "ds-button--glass-light";
  }

  if (style === "Outline") {
    return "ds-button--outline";
  }

  return "ds-button--flat";
}

function ChevronIcon({ color, size }: { color: string; size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9 6l6 6-6 6" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ButtonPrimary({
  className,
  icon = null,
  mode = "Light",
  size = "Small",
  style = "Glass",
  showLeftIcon = false,
  showRightIcon = true,
  text = "Primary",
}: ButtonPrimaryProps) {
  const iconColor = mode === "Dark" ? "#ffffff" : "#000000";
  const iconSize = size === "Extra Large" ? 24 : 16;

  return (
    <button
      className={classNames(
        "ds-button",
        "button-primary",
        sizeClass[size],
        styleClass(style, mode),
        className
      )}
      type="button"
    >
      {showLeftIcon && (icon || <ChevronIcon color={iconColor} size={iconSize} />)}
      <span className="button-primary__label">{text}</span>
      {showRightIcon && (icon || <ChevronIcon color={iconColor} size={iconSize} />)}
    </button>
  );
}
