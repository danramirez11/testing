import { classNames } from "../../utils/classNames";
import type { ListCardProps, ListCardStyle } from "./types";
import "./ListCard.css";

function styleClass(style: ListCardStyle, mode: "Light" | "Dark") {
  if (style === "Glass") {
    return mode === "Dark" ? "ds-card--glass-dark" : "ds-card--glass-light";
  }

  if (style === "Outline") {
    return "ds-card--outline";
  }

  return "ds-card--flat";
}

export default function ListCard({
  className,
  mode = "Light",
  style = "Glass",
  title = "Reminders",
  summary = "Today: Update icons for design system",
  items = ["Update icons", "Pricing sections", "Card components", "App template", "Patterns"],
}: ListCardProps) {
  return (
    <div className={classNames("list-card", "ds-card", styleClass(style, mode), className)}>
      <div className="list-card__left">
        <div className="list-card__logo">8</div>
        <h3 className="list-card__title">{title}</h3>
        <div className="ds-divider" />
        <p className="list-card__summary">{summary}</p>
        <div className="list-card__progress">
          <span className="list-card__progress-bar" />
        </div>
      </div>
      <div className="list-card__right">
        {items.map((item, index) => (
          <div key={item} className="list-card__row">
            <span className="list-card__number">{index + 1}</span>
            <span className="list-card__text">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
