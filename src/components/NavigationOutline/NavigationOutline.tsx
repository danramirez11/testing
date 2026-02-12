import { classNames } from "../../utils/classNames";
import type { NavigationOutlineProps, NavigationOutlineSize } from "./types";
import "./NavigationOutline.css";

type ArrowProps = {
  direction: "left" | "right";
  color: string;
  size: number;
};

const sizeWidths: Record<NavigationOutlineSize, number> = {
  Small: 81,
  Medium: 81,
  Large: 97,
  "Extra Large": 113,
};

const sizeHeights: Record<NavigationOutlineSize, number> = {
  Small: 24,
  Medium: 28,
  Large: 32,
  "Extra Large": 44,
};

const iconSizes: Record<NavigationOutlineSize, number> = {
  Small: 16,
  Medium: 16,
  Large: 16,
  "Extra Large": 24,
};

function ArrowIcon({ direction, color, size }: ArrowProps) {
  const strokeWidth = 2;
  const half = size / 2;
  const offset = size * 0.25;
  const start = direction === "left" ? half + offset : half - offset;
  const end = direction === "left" ? half - offset : half + offset;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
      <path
        d={`M ${start} ${offset} L ${end} ${half} L ${start} ${size - offset}`}
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}

export default function NavigationOutline({ className, mode = "Light", size = "Small" }: NavigationOutlineProps) {
  const borderColor = mode === "Dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)";
  const iconColor = mode === "Dark" ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.6)";

  return (
    <div
      className={classNames("nav-outline", className)}
      style={{
        width: sizeWidths[size],
        height: sizeHeights[size],
        borderColor,
      }}
    >
      <button className="nav-outline__button" aria-label="Previous">
        <ArrowIcon direction="left" color={iconColor} size={iconSizes[size]} />
      </button>
      <div className="nav-outline__divider" style={{ backgroundColor: borderColor }} />
      <button className="nav-outline__button" aria-label="Next">
        <ArrowIcon direction="right" color={iconColor} size={iconSizes[size]} />
      </button>
    </div>
  );
}
