import { JobType } from "@/types/job";
import Image from "next/image";
import Logo from "@/assets/topbar/logo.svg";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

export const Job = ({ job }: { job: JobType }) => {
  return (
    <div className="border-y w-full border-white px-2 py-4 flex relative gap-x-4">
      {job?.image ? (
        <Image src={job?.image} alt={job.company} width={50} height={50} />
      ) : (
        <Image src={Logo} alt="Logo" width={50} height={50} />
      )}
      <div className="flex flex-col gap-y-2">
        <h2 className="text-base text-white font-semibold">{job?.position}</h2>
        <p className="text-xs text-[#FAFAFA]">{job?.company}</p>
        <p className="text-xs text-[#ccc]">
          {job?.location} {" ("} {job?.type} {")"}
        </p>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-10">
        <Link href={job?.website} target="_blank">
          <FaArrowRightLong className="text-white text-3xl" />
        </Link>
      </div>
    </div>
  );
};
