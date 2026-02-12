export type ButtonGlowMode = "Light" | "Dark";
export type ButtonGlowSize = "Small" | "Medium" | "Large" | "Extra Large";
export type ButtonGlowStyle = "Glass" | "Outline" | "Flat";

export type ButtonGlowProps = {
  className?: string;
  icon?: React.ReactNode | null;
  mode?: ButtonGlowMode;
  size?: ButtonGlowSize;
  style?: ButtonGlowStyle;
  showGlow?: boolean;
  showLeftIcon?: boolean;
  showRightIcon?: boolean;
  text?: string;
};
