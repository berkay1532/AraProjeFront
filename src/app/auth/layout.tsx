import React from "react";
import Image from "next/image";

import Logo from "@/assets/auth/logo.svg";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-screen bg-third flex items-center justify-center">
      <div className="h-screen lg:block hidden bg-auth-pattern bg-cover bg-no-repeat xl:w-1/2 w-2/5">
        <div className="flex w-full justify-end px-6">
          <Image alt="logo" src={Logo} />
        </div>
      </div>
      <div className="w-full xl:w-1/2 lg:w-3/5 h-screen flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
