export type ButtonCircleMode = "Light" | "Dark";
export type ButtonCircleSize = "Small" | "Medium" | "Large" | "Extra Large";
export type ButtonCircleState = "Normal" | "Selected" | "Hover";
export type ButtonCircleStyle = "Glass" | "Outline" | "Flat";

export type ButtonCircleProps = {
  className?: string;
  icon?: React.ReactNode | null;
  mode?: ButtonCircleMode;
  size?: ButtonCircleSize;
  state?: ButtonCircleState;
  style?: ButtonCircleStyle;
};
