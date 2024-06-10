export interface FilterType {
  country?: string;
  city?: string;
  workType?: "office" | "hybrid" | "remote";
  date?:
    | "all"
    | "today"
    | "last-three-hour"
    | "last-three-day"
    | "last-week"
    | "last-month";
  sector?:
    | "none"
    | "electricity"
    | "water"
    | "gas"
    | "petroleum"
    | "telecommunication"
    | "construction"
    | "other";
}
