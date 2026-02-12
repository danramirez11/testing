export type NotificationMode = "Light" | "Dark";
export type NotificationStyle = "Glass" | "Outline" | "Flat";

export type NotificationActivity = {
  id: string;
  title: string;
  text: string;
  time: string;
};

export type NotificationProps = {
  className?: string;
  mode?: NotificationMode;
  style?: NotificationStyle;
  activities?: NotificationActivity[];
  unreadCount?: number;
};
