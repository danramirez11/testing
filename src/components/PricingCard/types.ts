export type PricingCardMode = "Light" | "Dark";
export type PricingCardStyle = "Glass" | "Outline" | "Flat";

export type PricingCardProps = {
  className?: string;
  mode?: PricingCardMode;
  style?: PricingCardStyle;
  showGlow?: boolean;
  title?: string;
  price?: string;
  subtitle?: string;
  features?: string[];
  buttonText?: string;
};
