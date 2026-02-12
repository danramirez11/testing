import { classNames } from "../../utils/classNames";
import type { BankCardProps } from "./types";
import "./BankCard.css";

export default function BankCard({
  className,
  type = "Card 1",
  cardNumber = "**** **** **** 2859",
  name = "Marisa Lu",
  validThru = "06/24",
  label = "CREDIT CARD",
  showChip = true,
  showLogo = true,
  showNotch = true,
  showNumber = true,
  showValid = true,
}: BankCardProps) {
  const isDark = type === "Card 1" || type === "Card 3";

  return (
    <div className={classNames("bank-card", `bank-card--${type.replace(" ", "").toLowerCase()}` as string, className)}>
      <div className="bank-card__pattern" aria-hidden="true" />
      {showChip && <div className="bank-card__chip" />}
      {showLogo && <div className="bank-card__logo">VISA</div>}
      {showNotch && <div className="bank-card__label">{label}</div>}
      {showNumber && <div className="bank-card__number">{cardNumber}</div>}
      {showValid && (
        <div className={classNames("bank-card__valid", { "bank-card__valid--dark": isDark })}>
          Valid thru {validThru}
        </div>
      )}
      {(type === "Card 3" || type === "Card 4") && <div className="bank-card__name">{name}</div>}
    </div>
  );
}
