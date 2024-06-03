import React from "react";

import { MdErrorOutline } from "react-icons/md";

export const InputError = ({ error }: { error: string }) => {
  return (
    <div className="flex gap-x-1 items-center">
      <MdErrorOutline className="text-red-500" />
      <span className="text-[12px] text-red-500 font-[600]">{error}</span>
    </div>
  );
};
