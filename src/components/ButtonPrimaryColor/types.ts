export type ButtonPrimaryColorState = "Normal" | "Hover" | "Inactive";

export type ButtonPrimaryColorProps = {
  className?: string;
  icon?: React.ReactNode | null;
  showLeftIcon?: boolean;
  showRightIcon?: boolean;
  state?: ButtonPrimaryColorState;
  text?: string;
};
