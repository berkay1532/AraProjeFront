import FilterGroup from "@/components/FilterGroup";
import JobsPage from "@/components/JobsPage";
import React from "react";

const Home = () => {
  return (
    <div className="w-full h-[calc(100vh_-_132px)] overflow-hidden grid grid-cols-12">
      <FilterGroup />
      <JobsPage />
    </div>
  );
};

export default Home;
