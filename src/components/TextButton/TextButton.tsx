import { classNames } from "../../utils/classNames";
import type { TextButtonProps, TextButtonSize } from "./types";
import "./TextButton.css";

const sizeClass: Record<TextButtonSize, string> = {
  Small: "ds-button--sm",
  Medium: "ds-button--md",
  Large: "ds-button--lg",
  "Extra Large": "ds-button--xl",
};

function FileMultipleIcon({ color, size }: { color: string; size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4" y="6" width="12" height="14" rx="2" fill="none" stroke={color} strokeWidth="2" />
      <rect x="8" y="4" width="12" height="14" rx="2" fill="none" stroke={color} strokeWidth="2" />
      <path d="M12 10h6" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M12 14h6" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function TextButton({
  className,
  icon = null,
  mode = "Light",
  size = "Small",
  showLeftIcon = false,
  showRightIcon = true,
  text = "Components",
}: TextButtonProps) {
  const iconColor = mode === "Dark" ? "#ffffff" : "#000000";
  const iconSize = size === "Extra Large" ? 24 : 16;

  return (
    <button
      className={classNames("ds-button", "text-button", sizeClass[size], className, {
        "text-button--dark": mode === "Dark",
      })}
      type="button"
    >
      {showLeftIcon && (icon || <FileMultipleIcon color={iconColor} size={iconSize} />)}
      <span className="text-button__label">{text}</span>
      {showRightIcon && (icon || <FileMultipleIcon color={iconColor} size={iconSize} />)}
    </button>
  );
}
