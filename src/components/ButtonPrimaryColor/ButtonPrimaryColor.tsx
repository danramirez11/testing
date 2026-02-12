import { classNames } from "../../utils/classNames";
import type { ButtonPrimaryColorProps, ButtonPrimaryColorState } from "./types";
import "./ButtonPrimaryColor.css";

function ChevronIcon({ color, size }: { color: string; size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9 6l6 6-6 6" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function stateClass(state: ButtonPrimaryColorState) {
  if (state === "Hover") {
    return "button-primary-color--hover";
  }

  if (state === "Inactive") {
    return "button-primary-color--inactive";
  }

  return "button-primary-color--normal";
}

export default function ButtonPrimaryColor({
  className,
  icon = null,
  showLeftIcon = false,
  showRightIcon = true,
  state = "Normal",
  text = "Primary color",
}: ButtonPrimaryColorProps) {
  return (
    <button
      className={classNames("ds-button", "button-primary-color", stateClass(state), className)}
      type="button"
    >
      {showLeftIcon && (icon || <ChevronIcon color="#ffffff" size={16} />)}
      <span className="button-primary-color__label">{text}</span>
      {showRightIcon && (icon || <ChevronIcon color="#ffffff" size={16} />)}
    </button>
  );
}
