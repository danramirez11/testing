import type { ReactNode } from "react";
import "./Alert.css";

export type AlertStatus = "Default" | "Success" | "Warning" | "Error" | "Info";

export type AlertProps = {
  status?: AlertStatus;
  message: string;
  icon?: ReactNode;
};

const statusClassMap: Record<AlertStatus, string> = {
  Default: "alert--default",
  Success: "alert--success",
  Warning: "alert--warning",
  Error: "alert--error",
  Info: "alert--info",
};

function Alert({ status = "Default", message, icon }: AlertProps) {
  return (
    <div className={`alert ${statusClassMap[status]}`} role="status">
      {icon ? <span className="alert__icon">{icon}</span> : null}
      <span className="alert__message type-paragraph-base-regular">{message}</span>
    </div>
  );
}

export default Alert;
