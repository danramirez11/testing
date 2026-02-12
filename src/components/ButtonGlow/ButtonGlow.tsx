import { classNames } from "../../utils/classNames";
import type { ButtonGlowProps, ButtonGlowSize, ButtonGlowStyle } from "./types";
import "./ButtonGlow.css";

const sizeClass: Record<ButtonGlowSize, string> = {
  Small: "ds-button--sm",
  Medium: "ds-button--md",
  Large: "ds-button--lg",
  "Extra Large": "ds-button--xl",
};

function styleClass(style: ButtonGlowStyle, mode: "Light" | "Dark") {
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

export default function ButtonGlow({
  className,
  icon = null,
  mode = "Light",
  size = "Small",
  style = "Glass",
  showGlow = true,
  showLeftIcon = false,
  showRightIcon = true,
  text = "Glow",
}: ButtonGlowProps) {
  const iconColor = mode === "Dark" ? "#ffffff" : "#000000";
  const iconSize = size === "Extra Large" ? 24 : 16;

  return (
    <div className={classNames("button-glow", className)}>
      <button className={classNames("ds-button", sizeClass[size], styleClass(style, mode))} type="button">
        {showLeftIcon && (icon || <ChevronIcon color={iconColor} size={iconSize} />)}
        <span className="button-glow__label">{text}</span>
        {showRightIcon && (icon || <ChevronIcon color={iconColor} size={iconSize} />)}
      </button>
      {showGlow && <span className="button-glow__halo" aria-hidden="true" />}
    </div>
  );
}
