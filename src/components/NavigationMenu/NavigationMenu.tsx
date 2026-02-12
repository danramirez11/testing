import { classNames } from "../../utils/classNames";
import type { NavigationMenuProps, NavigationMenuStyle } from "./types";
import "./NavigationMenu.css";

const widthByBreakpoint = {
  Desktop: 780,
  Tablet: 640,
  Mobile: 335,
} as const;

function styleClass(style: NavigationMenuStyle, mode: "Light" | "Dark") {
  if (style === "Glass") {
    return mode === "Dark" ? "nav-menu--glass-dark" : "nav-menu--glass-light";
  }

  if (style === "Outline") {
    return "nav-menu--outline";
  }

  return "nav-menu--flat";
}

export default function NavigationMenu({
  className,
  breakpoint = "Desktop",
  mode = "Light",
  style = "Glass",
  logoText = "Company",
  items = ["Product", "Pricing", "Changelog"],
  onLoginClick,
  onSignupClick,
}: NavigationMenuProps) {
  const isMobile = breakpoint === "Mobile";
  const isDark = mode === "Dark";

  return (
    <nav
      className={classNames("nav-menu", styleClass(style, mode), className, {
        "nav-menu--dark": isDark,
      })}
      style={{ width: widthByBreakpoint[breakpoint] }}
    >
      <div className="nav-menu__left">
        <div className="nav-menu__logo">
          <div className={classNames("nav-menu__mark", { "nav-menu__mark--dark": isDark })}>
            <span className="nav-menu__mark-dot" />
            <span className="nav-menu__mark-dot" />
            <span className="nav-menu__mark-dot" />
            <span className="nav-menu__mark-dot" />
          </div>
          <span className="nav-menu__logo-text">{logoText}</span>
        </div>
        {!isMobile && (
          <div className="nav-menu__items">
            {items.map((item) => (
              <button key={item} className="nav-menu__item">
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="nav-menu__right">
        {isMobile ? (
          <button className="nav-menu__icon-button" aria-label="Open menu">
            <span className="nav-menu__icon-lines" />
          </button>
        ) : (
          <>
            <button className="nav-menu__item" onClick={onLoginClick}>
              Log in
            </button>
            <button className="nav-menu__cta" onClick={onSignupClick}>
              Sign up
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
