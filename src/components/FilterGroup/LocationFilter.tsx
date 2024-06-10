import { FilterType } from "@/types/filter";
import React, { FC } from "react";
import { FilterWrapper } from "./FilterWrapper";
import Select from "react-select";

interface Props {
  filterState: FilterType;
  setFilterState: React.Dispatch<React.SetStateAction<FilterType>>;
}

const customStyles = {
  input: (provided: any) => ({
    ...provided,
    color: "white",
  }),
  control: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: "transparent",
    height: "34px",
    borderRadius: "0.5rem",
    borderColor: state.isFocused
      ? "#fff"
      : state.isHovered
      ? "#fff"
      : "#3F3F46",
    boxShadow: state.isFocused ? "0 0 0 1px #fff" : provided.boxShadow,
    color: "white",
    ":hover": {
      borderColor: "#fff",
    },
  }),
  placeholder: (provided: any) => ({
    ...provided,
    color: "#ccc",
  }),
  menu: (provided: any) => ({
    ...provided,
    backgroundColor: "#212121",
  }),
  singleValue: (provided: any) => ({
    ...provided,
    color: "white",
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: state.isFocused
      ? "#181818"
      : state.isSelected
      ? "#181818"
      : provided.backgroundColor,
    color: state.isFocused
      ? "#fff"
      : state.isSelected
      ? "#fff"
      : provided.color,
    ":active": {
      backgroundColor: state.isFocused ? "#aaa" : provided.backgroundColor,
      color: state.isFocused ? "white" : provided.color,
    },
  }),
};

export const LocationFilter: FC<Props> = ({ filterState, setFilterState }) => {
  const countryOptions = [
    { value: "Türkiye", label: "Türkiye" },
    { value: "Amerika", label: "Amerika" },
    { value: "Almanya", label: "Almanya" },
    { value: "Fransa", label: "Fransa" },
  ];

  const cityOptions = [
    { value: "İstanbul", label: "İstanbul" },
    { value: "Ankara", label: "Ankara" },
    { value: "İzmir", label: "İzmir" },
    { value: "Antalya", label: "Antalya" },
  ];
  return (
    <FilterWrapper title="Ülke / Şehir">
      <div className="flex text-[#ccc] flex-col gap-y-3 w-full">
        <Select
          options={countryOptions}
          value={{ value: filterState.country, label: filterState.country }}
          onChange={(selected) => {
            setFilterState((prev) => ({ ...prev, country: selected?.value }));
          }}
          isSearchable={false}
          styles={customStyles}
        />
        <Select
          options={cityOptions}
          value={{ value: filterState.city, label: filterState.city }}
          onChange={(selected) => {
            setFilterState((prev) => ({ ...prev, city: selected?.value }));
          }}
          isSearchable={false}
          styles={customStyles}
        />
      </div>
    </FilterWrapper>
  );
};
