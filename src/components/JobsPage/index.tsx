import { AllJobsType } from "@/types/job";
import React from "react";
import { JobGroup } from "./JobGroup";

const JobsPage = () => {
  const dummyJobs: AllJobsType[] = [
    {
      title: "Sizin için seçilen iş ilanları",
      jobs: [
        {
          id: "1",
          image: "/img/logo.svg",
          company: "Google",
          position: "Frontend Developer",
          location: "İstanbul",
          type: "Hybrid",
        },
        {
          id: "1",
          image: "/img/logo.svg",
          company: "Google",
          position: "Frontend Developer",
          location: "İstanbul",
          type: "Hybrid",
        },
      ],
    },
    {
      title: "En Çok Başvurulan İş İlanları",
      jobs: [
        {
          id: "1",
          image: "/img/logo.svg",
          company: "Google",
          position: "Frontend Developer",
          location: "İstanbul",
          type: "Hybrid",
        },
        {
          id: "1",
          image: "/img/logo.svg",
          company: "Google",
          position: "Frontend Developer",
          location: "İstanbul",
          type: "Hybrid",
        },
      ],
    },
    {
      title: "Siz için daha fazla iş ilanı",
      jobs: [
        {
          id: "1",
          image: "/img/logo.svg",
          company: "Google",
          position: "Frontend Developer",
          location: "İstanbul",
          type: "Hybrid",
        },
        {
          id: "1",
          image: "/img/logo.svg",
          company: "Google",
          position: "Frontend Developer",
          location: "İstanbul",
          type: "Hybrid",
        },
      ],
    },
  ];

  return (
    <div className="flex overflow-auto col-start-4 col-end-13 w-full flex-col gap-y-16 px-8 py-6">
      {dummyJobs.map((jobGroup, i) => (
        <JobGroup key={i} title={jobGroup.title} jobs={jobGroup.jobs} />
      ))}
    </div>
  );
};

export default JobsPage;
