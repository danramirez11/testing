import type React from "react";

export type ButtonSize = "s" | "l" | "s-solo";
export type ButtonStyle = "ghost" | "public-bordered" | "ghost-rounded";
export type ButtonState = "enabled" | "hovered";

export type ButtonProps = {
  label?: string;
  size?: ButtonSize;
  style?: ButtonStyle;
  state?: ButtonState;
  leadingIcon?: boolean;
  trailingIcon?: boolean;
  leadingIconNode?: React.ReactNode;
  trailingIconNode?: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
