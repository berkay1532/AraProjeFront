import { FilterType } from "@/types/filter";
import React, { FC } from "react";

interface Props {
  filterState: FilterType;
  setFilterState: React.Dispatch<React.SetStateAction<FilterType>>;
}

export const SectorFilter: FC<Props> = ({ filterState, setFilterState }) => {
  return <div>SectorFilter</div>;
};
