import { FilterType } from "@/types/filter";
import React, { FC } from "react";
import { FilterWrapper } from "./FilterWrapper";
import { SquareCheckbox } from "./SquareCheckbox";

interface Props {
  filterState: FilterType;
  setFilterState: React.Dispatch<React.SetStateAction<FilterType>>;
}

export const SectorFilter: FC<Props> = ({ filterState, setFilterState }) => {
  return (
    <FilterWrapper title="Sektör">
      <>
        <SquareCheckbox
          text="Diğer"
          checked={filterState.sector === "other"}
          setChecked={(checked) =>
            setFilterState({
              ...filterState,
              sector: checked ? "other" : undefined,
            })
          }
        />
        <SquareCheckbox
          text="İnşaat"
          checked={filterState.sector === "construction"}
          setChecked={(checked) =>
            setFilterState({
              ...filterState,
              sector: checked ? "construction" : undefined,
            })
          }
        />
        <SquareCheckbox
          text="Elektrik"
          checked={filterState.sector === "electricity"}
          setChecked={(checked) =>
            setFilterState({
              ...filterState,
              sector: checked ? "electricity" : undefined,
            })
          }
        />
        <SquareCheckbox
          text="Su"
          checked={filterState.sector === "water"}
          setChecked={(checked) =>
            setFilterState({
              ...filterState,
              sector: checked ? "water" : undefined,
            })
          }
        />
        <SquareCheckbox
          text="Gaz"
          checked={filterState.sector === "gas"}
          setChecked={(checked) =>
            setFilterState({
              ...filterState,
              sector: checked ? "gas" : undefined,
            })
          }
        />
        <SquareCheckbox
          text="Petrol"
          checked={filterState.sector === "petroleum"}
          setChecked={(checked) =>
            setFilterState({
              ...filterState,
              sector: checked ? "petroleum" : undefined,
            })
          }
        />
        <SquareCheckbox
          text="Telekomünikasyon"
          checked={filterState.sector === "telecommunication"}
          setChecked={(checked) =>
            setFilterState({
              ...filterState,
              sector: checked ? "telecommunication" : undefined,
            })
          }
        />
      </>
    </FilterWrapper>
  );
};
