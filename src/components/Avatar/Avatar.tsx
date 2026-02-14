import type { ReactNode } from "react";
import "./Avatar.css";

export type AvatarSize = "24px" | "32px" | "40px" | "48px";
export type AvatarType =
  | "Image"
  | "Image + Notification"
  | "Avatar + Caret"
  | "Avatar + Name";

export type AvatarProps = {
  size?: AvatarSize;
  type?: AvatarType;
  imageUrl?: string;
  name?: string;
  showNotification?: boolean;
  caretIcon?: ReactNode;
};

const sizeClassMap: Record<AvatarSize, string> = {
  "24px": "avatar--size-24",
  "32px": "avatar--size-32",
  "40px": "avatar--size-40",
  "48px": "avatar--size-48",
};

function Avatar({
  size = "40px",
  type = "Image",
  imageUrl,
  name,
  showNotification,
  caretIcon,
}: AvatarProps) {
  const sizeClass = sizeClassMap[size];
  const hasNotification = type === "Image + Notification" || showNotification;
  const showName = type === "Avatar + Name";
  const showCaret = type === "Avatar + Caret";

  return (
    <div className={`avatar ${sizeClass}`}>
      <div className="avatar__image-wrapper">
        {imageUrl ? (
          <img className="avatar__image" src={imageUrl} alt={name ?? "Avatar"} />
        ) : (
          <div className="avatar__placeholder" />
        )}
        {hasNotification ? <span className="avatar__notification" /> : null}
      </div>
      {showName ? (
        <span className="avatar__name type-paragraph-small-regular">{name}</span>
      ) : null}
      {showCaret ? <span className="avatar__caret">{caretIcon}</span> : null}
    </div>
  );
}

export default Avatar;
