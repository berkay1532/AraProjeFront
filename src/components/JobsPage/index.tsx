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
          image:
            "https://media.licdn.com/dms/image/D4E0BAQGPY2HLuBff3g/company-logo_200_200/0/1664805354174/15gifts_logo?e=2147483647&v=beta&t=ZbIK9MKPGFsNjTKQznNFXo4XqrcwNGmHFSAxjhE6hfM",
          company: "15gifts",
          website: "https://15gifts.com/careers/",
          position: "Senior Data Engineer",
          location: "Brighton, UK",
          type: "Hybrid",
        },
        {
          id: "2",
          image:
            "https://media.licdn.com/dms/image/D4E0BAQGPY2HLuBff3g/company-logo_200_200/0/1664805354174/15gifts_logo?e=2147483647&v=beta&t=ZbIK9MKPGFsNjTKQznNFXo4XqrcwNGmHFSAxjhE6hfM",
          company: "15gifts",
          website: "https://15gifts.com/careers/",
          position: "Machine Learning Engineer",
          location: "Brighton, UK",
          type: "Hybrid",
        },
        {
          id: "3",
          image: "https://www.essltd.ie/wp-content/uploads/2019/04/logo.png",
          company: "Engineering Support & Services",
          website: "https://www.essltd.ie/work-with-us/",
          position: "Utilities Technician",
          location: "Tullamore, County Offaly, Ireland",
          type: "Physical",
        },
        {
          id: "4",
          image: "https://www.essltd.ie/wp-content/uploads/2019/04/logo.png",
          company: "Engineering Support & Services",
          website: "https://www.essltd.ie/work-with-us/",
          position: "Utility Engineer",
          location: "Ballymacarbry, County Waterford, Ireland",
          type: "Physical",
        },
      ],
    },
    {
      title: "En Çok Başvurulan İş İlanları",
      jobs: [
        {
          id: "1",
          image: "https://www.essltd.ie/wp-content/uploads/2019/04/logo.png",
          company: "Engineering Support & Services",
          website: "https://www.essltd.ie/work-with-us/",
          position: "Utilities Technician",
          location: "Tullamore, County Offaly, Ireland",
          type: "Physical",
        },
        {
          id: "2",
          image: "https://www.essltd.ie/wp-content/uploads/2019/04/logo.png",
          company: "Engineering Support & Services",
          website: "https://www.essltd.ie/work-with-us/",
          position: "Utility Engineer",
          location: "Ballymacarbry, County Waterford, Ireland",
          type: "Physical",
        },
      ],
    },
    {
      title: "Siz için daha fazla iş ilanı",
      jobs: [
        {
          id: "1",
          image: "https://www.1stclassprotection.co.uk/static/img/logo.svg",
          website: "https://www.1stclassprotection.co.uk/jobs/",
          company: "1stclassprotection",
          position: "Security Officer",
          location: "Various locations in London",
          type: "Physical",
        },
        {
          id: "2",
          image:
            "https://www.icanbea.org.uk/media/shapes/square/small/3000/3334/company-logo-1-stop-healthcare.jpg",
          website: "https://www.1stophealthcare.co.uk/jobs/",
          company: "1stophealthcare",
          position: "Chef",
          location: "Colchester, UK",
          type: "Physical",
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
