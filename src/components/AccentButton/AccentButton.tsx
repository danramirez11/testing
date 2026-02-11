import "./AccentButton.css";
import type { AccentButtonProps } from "./types";

export default function AccentButton({
  label = "Button",
  state = "default",
  className,
  onClick,
}: AccentButtonProps) {
  const classes = [
    "ds-accent-button",
    state === "hover" ? "is-hovered" : "",
    state === "clicked" ? "is-clicked" : "",
    className || "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={classes} onClick={onClick} type="button">
      {label}
    </button>
  );
}
