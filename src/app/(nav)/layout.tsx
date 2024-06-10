import Topbar from "@/components/TopBar";
import React from "react";

const NavLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-[#181818] flex flex-col gap-y-3 min-h-screen p-6 ">
      <Topbar />
      {children}
    </div>
  );
};

export default NavLayout;
