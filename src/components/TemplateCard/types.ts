export type TemplateCardMode = "Light" | "Dark";
export type TemplateCardStyle = "Glass" | "Outline" | "Flat";

export type TemplateCardProps = {
  className?: string;
  mode?: TemplateCardMode;
  style?: TemplateCardStyle;
  showGlow?: boolean;
  imageSrc?: string;
  title?: string;
  description?: string;
  tag?: string;
  buttonText?: string;
};
