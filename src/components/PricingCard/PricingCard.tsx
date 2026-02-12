import { classNames } from "../../utils/classNames";
import type { PricingCardProps, PricingCardStyle } from "./types";
import "./PricingCard.css";

function styleClass(style: PricingCardStyle, mode: "Light" | "Dark") {
  if (style === "Glass") {
    return mode === "Dark" ? "ds-card--glass-dark" : "ds-card--glass-light";
  }

  if (style === "Outline") {
    return "ds-card--outline";
  }

  return "ds-card--flat";
}

export default function PricingCard({
  className,
  mode = "Light",
  style = "Glass",
  showGlow = true,
  title = "All-Access",
  price = "$99",
  subtitle = "One-time",
  features = ["All 300+ components", "2,000+ Figma variants", "2,116 unique icons"],
  buttonText = "Buy now",
}: PricingCardProps) {
  return (
    <div className={classNames("pricing-card", "ds-card", styleClass(style, mode), className)}>
      {showGlow && <div className="pricing-card__glow" aria-hidden="true" />}
      <div className="pricing-card__header">
        <span className="pricing-card__title">{title}</span>
        <div className="pricing-card__price">{price}</div>
        <span className="pricing-card__subtitle">{subtitle}</span>
      </div>
      <div className="ds-divider" />
      <ul className="pricing-card__features">
        {features.map((feature) => (
          <li key={feature}>
            <span className="pricing-card__check" />
            {feature}
          </li>
        ))}
      </ul>
      <div className="ds-divider" />
      <button className="pricing-card__button" type="button">
        {buttonText}
      </button>
    </div>
  );
}
