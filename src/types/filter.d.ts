export interface FilterType {
  country?: string;
  city?: string;
  workType?: "office" | "hybrid" | "remote";
  date?:
    | "today"
    | "last-three-hour"
    | "last-three-day"
    | "last-week"
    | "last-month";
  sector?:
    | "electricity"
    | "water"
    | "gas"
    | "petroleum"
    | "telecommunication"
    | "construction"
    | "other";
}
