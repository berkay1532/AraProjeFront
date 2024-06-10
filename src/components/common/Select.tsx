import React, { FC, SelectHTMLAttributes } from "react";
import { InputError } from "./InputError";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  classNames?: {
    wrapper?: string;
    select?: string;
    label?: string;
  };
  options: { value: string; label: string }[];
  placeholder?: string;
  value: string;
  name: string;
  handleChange: (e: React.ChangeEvent<any>) => void;
  handleBlur?: (e: React.FocusEvent<any>) => void;
  errorText?: string;
  touched?: boolean;
}

export const SelectInput: FC<SelectProps> = (props) => {
  const {
    classNames,
    handleChange,
    options,
    placeholder,
    errorText,
    handleBlur,
    touched,
    value,
    name,
  } = props;

  return (
    <label className={`flex flex-col gap-y-2.5 relative ${classNames?.wrapper}`}>
      <h3 className={`text-sm font-normal text-white ${classNames?.label}`}>
        {placeholder}
      </h3>
      <select
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        className={`${classNames?.select} ${
          touched && errorText ? "!border-red-500" : "border-zinc-400"
        } outline-none px-4 py-3 bg-transparent rounded-2xl text-base focus:border-white hover:border-white font-normal leading-5 border-[1px] w-full border-solid text-white disabled:opacity-20`}
      >
        <option value="" disabled>{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {errorText && touched && <InputError error={errorText} />}
    </label>
  );
};
