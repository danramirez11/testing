export type ListCardMode = "Light" | "Dark";
export type ListCardStyle = "Glass" | "Outline" | "Flat";

export type ListCardProps = {
  className?: string;
  mode?: ListCardMode;
  style?: ListCardStyle;
  title?: string;
  summary?: string;
  items?: string[];
};
