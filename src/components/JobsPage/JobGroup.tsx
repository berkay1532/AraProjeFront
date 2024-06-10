import { JobType } from "@/types/job";
import React, { FC } from "react";
import { Job } from "./Job";

interface JobGroupProps {
  title: string;
  jobs: JobType[];
}

export const JobGroup: FC<JobGroupProps> = ({ title, jobs }) => {
  if (!jobs.length) return null;

  return (
    <div className="flex flex-col gap-y-4 w-full">
      <h2 className="text-base text-white font-semibold">{title}</h2>
      {jobs.map((job) => (
        <Job key={job.id} job={job} />
      ))}
    </div>
  );
};
