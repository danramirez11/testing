export type NavigationMenuMode = "Light" | "Dark";
export type NavigationMenuBreakpoint = "Desktop" | "Tablet" | "Mobile";
export type NavigationMenuStyle = "Glass" | "Outline" | "Flat";

export type NavigationMenuProps = {
  className?: string;
  breakpoint?: NavigationMenuBreakpoint;
  mode?: NavigationMenuMode;
  style?: NavigationMenuStyle;
  logoText?: string;
  items?: string[];
  onLoginClick?: () => void;
  onSignupClick?: () => void;
};
