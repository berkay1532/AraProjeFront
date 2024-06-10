import React, { FC, HTMLProps } from "react";

import { InputError } from "./InputError";

interface Props {
  classNames?: {
    label?: string;
    textarea?: string;
    placeholderWrapper?: string;
    placeholder?: string;
  };
  placeholder?: string;
  insidePlaceholder?: string;
  value: string;
  handleChange: (e: React.ChangeEvent<any>) => void;
  name: string;
  errorText?: string | null;
  maxLength?: number;
}

export const TextareaField: FC<Props & HTMLProps<HTMLTextAreaElement>> = ({
  name,
  value,
  handleChange,
  classNames,
  placeholder,
  insidePlaceholder,
  errorText,
  maxLength,
  ...props
}) => {
  return (
    <label
      className={`flex relative flex-col items-start justify-center ${classNames?.label}`}
    >
      <div
        className={`flex pr-4 flex-col gap-4 self-stretch items-start ${classNames?.placeholderWrapper}`}
      >
        <span
          className={`text-dark-primary-100 font-normal text-sm leading-5 tracking-[1.12px] mb-3 ${classNames?.placeholder}`}
        >
          {placeholder}
        </span>
      </div>

      <textarea
        name={name}
        value={value}
        onChange={handleChange}
        className={`${classNames?.textarea}  outline-none px-4 py-3 bg-[#18181B] rounded-2xl text-base focus:border-white hover:border-white font-normal leading-5 border-[1px] w-full border-solid border-[#6C6C6C] text-white`}
        placeholder={insidePlaceholder ? insidePlaceholder : placeholder}
        {...props}
      />
      {maxLength && maxLength > 0 && <div className="text-xs text-end flex justify-end items-end w-full">{maxLength + " characters"}</div>}
      {errorText && <InputError error={errorText} />}
    </label>
  );
};
