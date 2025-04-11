import { useState } from "react";
import JobCard from "./JobCard";
import { Job } from "@/types";

interface JobListProps {
  jobs: Job[];
}

const JobList = ({ jobs }: JobListProps) => {
  const [visibleJobs, setVisibleJobs] = useState(6);

  const loadMore = () => {
    setVisibleJobs((prev) => prev + 6);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.slice(0, visibleJobs).map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
      
      {visibleJobs < jobs.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={loadMore}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
          >
            Load More Jobs
          </button>
        </div>
      )}
    </div>
  );
};

export default JobList;