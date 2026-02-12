export type BankCardType = "Card 1" | "Card 2" | "Card 3" | "Card 4";

export type BankCardProps = {
  className?: string;
  type?: BankCardType;
  cardNumber?: string;
  name?: string;
  validThru?: string;
  label?: string;
  showChip?: boolean;
  showLogo?: boolean;
  showNotch?: boolean;
  showNumber?: boolean;
  showValid?: boolean;
};
