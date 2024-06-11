"use client";
import { FilterType } from "@/types/filter";
import React, { useState } from "react";
import { LocationFilter } from "./LocationFilter";
import { WorkTypeFilter } from "./WorkTypeFilter";
import { DateFilter } from "./DateFilter";
import { SectorFilter } from "./SectorFilter";

const FilterGroup = () => {
  const [filterState, setFilterState] = useState<FilterType>({
    city: "",
    country: "",
    workType: "remote",
    date: "today",
    sector: "other",
  });

  console.log(filterState);
  return (
    <div className="col-start-1 col-end-4 w-full p-6 flex flex-col gap-y-2.5">
      <LocationFilter
        filterState={filterState}
        setFilterState={setFilterState}
      />
      <WorkTypeFilter
        filterState={filterState}
        setFilterState={setFilterState}
      />
      <DateFilter filterState={filterState} setFilterState={setFilterState} />
      <SectorFilter filterState={filterState} setFilterState={setFilterState} />
    </div>
  );
};

export default FilterGroup;
