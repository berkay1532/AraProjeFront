import { FilterType } from "@/types/filter";
import React, { FC } from "react";
import { FilterWrapper } from "./FilterWrapper";
import { SquareCheckbox } from "./SquareCheckbox";

interface Props {
  filterState: FilterType;
  setFilterState: React.Dispatch<React.SetStateAction<FilterType>>;
}

export const DateFilter: FC<Props> = ({ filterState, setFilterState }) => {
  return (
    <FilterWrapper title="Tarih">
      <>
        <SquareCheckbox
          text="Bugünün ilanları"
          checked={filterState.date === "today"}
          setChecked={(checked) =>
            setFilterState({
              ...filterState,
              date: checked ? "today" : undefined,
            })
          }
        />
        <SquareCheckbox
          text="Son 3 saat"
          checked={filterState.date === "last-three-hour"}
          setChecked={(checked) =>
            setFilterState({
              ...filterState,
              date: checked ? "last-three-hour" : undefined,
            })
          }
        />
        <SquareCheckbox
          text="Son 3 gün"
          checked={filterState.date === "last-three-day"}
          setChecked={(checked) =>
            setFilterState({
              ...filterState,
              date: checked ? "last-three-day" : undefined,
            })
          }
        />
        <SquareCheckbox
          text="Son hafta"
          checked={filterState.date === "last-week"}
          setChecked={(checked) =>
            setFilterState({
              ...filterState,
              date: checked ? "last-week" : undefined,
            })
          }
        />
        <SquareCheckbox
          text="Son ay"
          checked={filterState.date === "last-month"}
          setChecked={(checked) =>
            setFilterState({
              ...filterState,
              date: checked ? "last-month" : undefined,
            })
          }
        />
      </>
    </FilterWrapper>
  );
};
