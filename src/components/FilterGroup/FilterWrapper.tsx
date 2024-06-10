import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

export const FilterWrapper = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setOpen(!open);
  };
  return (
    <div className="flex flex-col w-full">
      <div
        onClick={handleOpen}
        className="w-full p-2 flex justify-between items-center"
      >
        <h3 className="text-sm font-semibold text-[#ccc]">{title}</h3>
        {!open ? (
          <FaAngleUp className="text-base text-[#fff]" />
        ) : (
          <FaAngleDown className="text-base text-[#fff]" />
        )}
      </div>
      {open && children}
    </div>
  );
};
