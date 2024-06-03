import React, { FC, InputHTMLAttributes } from "react";

import { InputError } from "./InputError";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  classNames?: {
    wrapper?: string;
    input?: string;
    label?: string;
  };
  endIcon?: React.ReactNode;
  placeholder?: string;
  insidePlaceholder?: string;
  value: string;
  name: string;
  handleChange: (e: React.ChangeEvent<any>) => void;
  handleBlur?: (e: React.FocusEvent<any>) => void;
  errorText?: string;
  touched?: boolean;
}

export const Input: FC<InputProps> = (props) => {
  const {
    classNames,
    endIcon,
    handleChange,
    type,
    placeholder,
    insidePlaceholder,
    errorText,
    handleBlur,
    touched,
  } = props;

  return (
    <label
      className={`flex flex-col gap-y-2.5 relative ${classNames?.wrapper}`}
    >
      <h3 className={`text-sm font-normal text-white ${classNames?.label}`}>
        {placeholder}
      </h3>
      {endIcon}
      <input
        type={type}
        onChange={handleChange}
        onBlur={handleBlur}
        className={`${classNames?.input}  ${endIcon && "!pr-[28px]"} ${
          touched && errorText ? "!border-red-500" : "border-zinc-400"
        } outline-none px-4 py-3 bg-transparent rounded-2xl text-base focus:border-white hover:border-white font-normal leading-5 border-[1px] w-full border-solid text-white disabled:opacity-20`}
        {...props}
        placeholder={insidePlaceholder ? insidePlaceholder : placeholder}
      />
      {errorText && touched && <InputError error={errorText} />}
    </label>
  );
};
