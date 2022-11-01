export interface TableStat {
  name: string;
  value: any;
  color?: string;
  percentage?: number;
}

export type DateFormat = "daytime" | "day" | "time" | "apiDate" | "apiDateTime";

export interface Action {
  onClick?: () => void;
  submit?: boolean;
  label: string;
  href?: string;
  icon?: any;
  isShown?: boolean;
}
