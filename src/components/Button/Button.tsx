import "./Button.css";
import type { ButtonProps } from "./types";

const ArrowIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4 10H16"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 6L16 10L12 14"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PlusIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10 4V16"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 10H16"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LinkIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M7.5 12.5L5.5 14.5C4.4 15.6 4.4 17.4 5.5 18.5C6.6 19.6 8.4 19.6 9.5 18.5L12 16"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.5 7.5L14.5 5.5C15.6 4.4 17.4 4.4 18.5 5.5C19.6 6.6 19.6 8.4 18.5 9.5L16 12"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.5 11.5L11.5 8.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const defaultIcons = {
  trailing: <ArrowIcon />,
  leading: <PlusIcon />,
  solo: <LinkIcon />,
};

export default function Button({
  label = "Button",
  size = "s",
  style = "ghost",
  state = "enabled",
  leadingIcon = false,
  trailingIcon = false,
  leadingIconNode,
  trailingIconNode,
  className,
  onClick,
}: ButtonProps) {
  const isHovered = state === "hovered";
  const showSoloIcon = size === "s-solo";
  const showLeading = leadingIcon && !showSoloIcon;
  const showTrailing = trailingIcon && !showSoloIcon;

  const classes = [
    "ds-button",
    `ds-button--${style}`,
    `ds-button--size-${size.replace("-", "-")}`,
    isHovered ? "is-hovered" : "",
    className || "",
  ]
    .filter(Boolean)
    .join(" ");

  const leadingNode = leadingIconNode || defaultIcons.leading;
  const trailingNode = trailingIconNode || defaultIcons.trailing;

  return (
    <button className={classes} onClick={onClick} type="button">
      {showSoloIcon && <span className="ds-button__icon">{defaultIcons.solo}</span>}
      {showLeading && <span className="ds-button__icon">{leadingNode}</span>}
      {!showSoloIcon && <span>{label}</span>}
      {showTrailing && <span className="ds-button__icon">{trailingNode}</span>}
    </button>
  );
}
