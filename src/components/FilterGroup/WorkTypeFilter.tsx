import { FilterType } from "@/types/filter";
import React, { FC } from "react";
import { FilterWrapper } from "./FilterWrapper";
import { SquareCheckbox } from "./SquareCheckbox";

interface Props {
  filterState: FilterType;
  setFilterState: React.Dispatch<React.SetStateAction<FilterType>>;
}

export const WorkTypeFilter: FC<Props> = ({ filterState, setFilterState }) => {
  return (
    <FilterWrapper title="Çalışma Tercihi">
      <>
        <SquareCheckbox
          text="İş Yerinde"
          checked={filterState.workType === "office"}
          setChecked={(checked) =>
            setFilterState({
              ...filterState,
              workType: checked ? "office" : undefined,
            })
          }
        />
        <SquareCheckbox
          text="Uzaktan"
          checked={filterState.workType === "remote"}
          setChecked={(checked) =>
            setFilterState({
              ...filterState,
              workType: checked ? "remote" : undefined,
            })
          }
        />
        <SquareCheckbox
          text="Hibrit"
          checked={filterState.workType === "hybrid"}
          setChecked={(checked) =>
            setFilterState({
              ...filterState,
              workType: checked ? "hybrid" : undefined,
            })
          }
        />
      </>
    </FilterWrapper>
  );
};
