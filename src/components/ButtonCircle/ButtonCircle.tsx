import { classNames } from "../../utils/classNames";
import type { ButtonCircleProps, ButtonCircleSize } from "./types";
import "./ButtonCircle.css";

const sizeClass: Record<ButtonCircleSize, string> = {
  Small: "ds-circle-button--sm",
  Medium: "ds-circle-button--md",
  Large: "ds-circle-button--lg",
  "Extra Large": "ds-circle-button--xl",
};

function MoonIcon({ color, size }: { color: string; size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M15.5 4.5a7 7 0 1 0 4 12.5A8 8 0 1 1 15.5 4.5z"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ButtonCircle({
  className,
  icon = null,
  mode = "Light",
  size = "Small",
  state = "Normal",
  style = "Glass",
}: ButtonCircleProps) {
  const isDark = mode === "Dark";
  const iconColor = isDark ? "#ffffff" : "#000000";
  const sizeValue = size === "Extra Large" ? 24 : 16;

  return (
    <button
      className={classNames(
        "ds-circle-button",
        sizeClass[size],
        "button-circle",
        {
          "button-circle--dark": isDark,
          "button-circle--hover": state === "Hover",
          "button-circle--selected": state === "Selected",
          "button-circle--flat": style === "Flat",
          "button-circle--outline": style === "Outline",
        },
        className
      )}
      type="button"
    >
      {icon || <MoonIcon color={iconColor} size={sizeValue} />}
    </button>
  );
}
