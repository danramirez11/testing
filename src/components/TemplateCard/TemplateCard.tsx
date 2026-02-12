import { classNames } from "../../utils/classNames";
import type { TemplateCardProps, TemplateCardStyle } from "./types";
import NavigationOutline from "../NavigationOutline";
import "./TemplateCard.css";

function styleClass(style: TemplateCardStyle, mode: "Light" | "Dark") {
  if (style === "Glass") {
    return mode === "Dark" ? "ds-card--glass-dark" : "ds-card--glass-light";
  }

  if (style === "Outline") {
    return "ds-card--outline";
  }

  return "ds-card--flat";
}

export default function TemplateCard({
  className,
  mode = "Light",
  style = "Glass",
  showGlow = true,
  imageSrc,
  title = "UI Templates",
  description = "Introducing a collection of fully designed and functional components, tailored to enhance your Figma and Framer projects.",
  tag = "New update",
  buttonText = "Browse templates",
}: TemplateCardProps) {
  return (
    <div className={classNames("template-card", "ds-card", styleClass(style, mode), className)}>
      {showGlow && <div className="template-card__glow" aria-hidden="true" />}
      <div className="template-card__image">
        {imageSrc ? <img src={imageSrc} alt="Template preview" /> : <div className="template-card__image-placeholder" />}
      </div>
      <div className="template-card__meta">
        <span className="template-card__tag">{tag}</span>
        <NavigationOutline size="Small" mode={mode} />
      </div>
      <div className="ds-divider" />
      <h3 className="template-card__title">{title}</h3>
      <p className="template-card__description">{description}</p>
      <div className="ds-divider" />
      <button className="template-card__button" type="button">
        {buttonText}
      </button>
    </div>
  );
}
