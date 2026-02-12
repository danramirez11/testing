export type ButtonPrimaryMode = "Light" | "Dark";
export type ButtonPrimarySize = "Small" | "Medium" | "Large" | "Extra Large";
export type ButtonPrimaryStyle = "Glass" | "Outline" | "Flat";

export type ButtonPrimaryProps = {
  className?: string;
  icon?: React.ReactNode | null;
  mode?: ButtonPrimaryMode;
  size?: ButtonPrimarySize;
  style?: ButtonPrimaryStyle;
  showLeftIcon?: boolean;
  showRightIcon?: boolean;
  text?: string;
};
