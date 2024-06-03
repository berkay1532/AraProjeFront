import React, { FC } from "react";

interface ButtonProps {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  children: React.ReactNode;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
  variant?: "primary";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  cx?: string;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    startIcon,
    type,
    endIcon,
    children,
    onClick,
    size,
    variant,
    disabled,
    cx,
  } = props;
  const sizeClass =
    size === "sm"
      ? "px-4 py-2 text-sm"
      : size === "md"
      ? "px-6 py-3 text-base"
      : "px-8 py-4 text-lg";
  const variantClass = variant === "primary" ? "bg-primary text-black" : "";

  return (
    <button
      type={type ?? "button"}
      onClick={onClick}
      disabled={disabled}
      className={`${sizeClass} ${cx} w-full flex items-center justify-center gap-x-1 rounded-xl ${variantClass}`}
    >
      {startIcon}
      {children}
      {endIcon}
    </button>
  );
};
