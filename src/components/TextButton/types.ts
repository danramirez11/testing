export type TextButtonMode = "Light" | "Dark";
export type TextButtonSize = "Small" | "Medium" | "Large" | "Extra Large";

export type TextButtonProps = {
  className?: string;
  icon?: React.ReactNode | null;
  mode?: TextButtonMode;
  size?: TextButtonSize;
  showLeftIcon?: boolean;
  showRightIcon?: boolean;
  text?: string;
};
