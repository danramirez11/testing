import { classNames } from "../../utils/classNames";
import type { NotificationProps, NotificationStyle } from "./types";
import "./Notification.css";

function styleClass(style: NotificationStyle, mode: "Light" | "Dark") {
  if (style === "Glass") {
    return mode === "Dark" ? "ds-card--glass-dark" : "ds-card--glass-light";
  }

  if (style === "Outline") {
    return "ds-card--outline";
  }

  return "ds-card--flat";
}

export default function Notification({
  className,
  mode = "Light",
  style = "Glass",
  activities = [
    { id: "1", title: "Hola Spine", text: "prepared a report", time: "2m ago" },
    { id: "2", title: "Eva Solain", text: "invited you to a chat", time: "5m ago" },
    { id: "3", title: "Pierre Ford", text: "invited you to a meeting", time: "15m ago" },
    { id: "4", title: "Steve Ater", text: "invited you to a chat", time: "1d ago" },
  ],
  unreadCount = 2,
}: NotificationProps) {
  return (
    <div className={classNames("notification", "ds-card", styleClass(style, mode), className)}>
      <div className="notification__header">
        <span>Notifications</span>
        <div className="notification__actions">
          <button className="notification__icon" type="button" aria-label="Home" />
          <button className="notification__icon" type="button" aria-label="Settings" />
          <span className="notification__avatar" />
        </div>
      </div>
      <div className="ds-divider" />
      <div className="notification__list">
        {activities.map((activity) => (
          <div key={activity.id} className="notification__item">
            <span className="notification__avatar" />
            <div className="notification__text">
              <strong>{activity.title}</strong>
              <span>{activity.text}</span>
              <em>{activity.time}</em>
            </div>
          </div>
        ))}
      </div>
      <div className="ds-divider" />
      <div className="notification__footer">
        <span>{unreadCount} unread</span>
        <button className="notification__cta" type="button">
          Mark all as read
        </button>
      </div>
    </div>
  );
}
