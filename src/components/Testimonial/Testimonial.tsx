import { classNames } from "../../utils/classNames";
import type { TestimonialProps, TestimonialStyle } from "./types";
import "./Testimonial.css";

function styleClass(style: TestimonialStyle, mode: "Light" | "Dark") {
  if (style === "Glass") {
    return mode === "Dark" ? "ds-card--glass-dark" : "ds-card--glass-light";
  }

  if (style === "Outline") {
    return "ds-card--outline";
  }

  return "ds-card--flat";
}

export default function Testimonial({
  className,
  mode = "Light",
  style = "Glass",
  showGlow = true,
  title = "Mobbin",
  subtitle = "Mobile & web design references",
  body = "Built with the latest Figma and Framer features, the meticulously crafted, fully customizable components will turbocharge your design workflow, ensuring seamless consistency and efficiency in all your projects.",
  author = "Jiho Lim, Creator of Mobbin",
}: TestimonialProps) {
  return (
    <div className={classNames("testimonial", "ds-card", styleClass(style, mode), className)}>
      {showGlow && <div className="testimonial__glow" aria-hidden="true" />}
      <div className="testimonial__toggle">
        <button className="testimonial__toggle-button" type="button" aria-label="Dark mode">
          <span className="testimonial__moon" />
        </button>
        <button className="testimonial__toggle-button" type="button" aria-label="Light mode">
          <span className="testimonial__sun" />
        </button>
      </div>
      <div className="testimonial__content">
        <h3 className="testimonial__title">{title}</h3>
        <p className="testimonial__subtitle">{subtitle}</p>
        <div className="ds-divider" />
        <p className="testimonial__body">{body}</p>
        <div className="ds-divider" />
        <div className="testimonial__author">
          <span className="testimonial__avatar">J</span>
          <span>{author}</span>
        </div>
      </div>
    </div>
  );
}
