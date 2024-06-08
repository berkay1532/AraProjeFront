import React from "react";
import Image from "next/image";

import GoogleSvg from "@/assets/common/google.svg";

export const GoogleButton = () => {
  return (
    <button className="h-10 px-2.5 bg-third rounded-xl py-2 flex items-center w-fit gap-x-2">
      <Image className="w-5 h-5" src={GoogleSvg} alt="google" />
      <span className="text-sm font-semibold text-white">Google</span>
    </button>
  );
};
