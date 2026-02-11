import type React from "react";

export type AccentButtonState = "default" | "hover" | "clicked";

export type AccentButtonProps = {
  label?: string;
  state?: AccentButtonState;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
