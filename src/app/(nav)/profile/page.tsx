"use client";
import Experience from "@/components/profile/Experience";
import PersonalDetails from "@/components/profile/PersonalDetails";
import Sidebar from "@/components/profile/Sidebar";
import React,{useState} from "react";


const Profile = () => {
    const [selected,setSelected] = useState<"experience" | "profile">("profile")
  return (
    <div className="w-full h-[calc(100vh_-_132px)] overflow-hidden grid grid-cols-3 ">
        <div className="col-span-1 flex justify-center items-start">
   <Sidebar setSelected={setSelected}/>
   </div>
   <div className="col-span-2 flex justify-center items-start">
   <div className='w-[90%] h-[90%] rounded-xl bg-[#1C1C1C] text-white'>{selected === "experience" ? <Experience/> : <PersonalDetails/>}</div>
   </div>
    </div>
  );
};

export default Profile;
