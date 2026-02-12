export type TestimonialMode = "Light" | "Dark";
export type TestimonialStyle = "Glass" | "Outline" | "Flat";

export type TestimonialProps = {
  className?: string;
  mode?: TestimonialMode;
  style?: TestimonialStyle;
  showGlow?: boolean;
  title?: string;
  subtitle?: string;
  body?: string;
  author?: string;
};
