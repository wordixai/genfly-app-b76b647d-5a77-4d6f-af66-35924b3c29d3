import { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import JobFilter from "@/components/jobs/JobFilter";
import JobList from "@/components/jobs/JobList";
import { jobs } from "@/data/mockData";
import { Job } from "@/types";

const Index = () => {
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(jobs);

  const handleFilter = (filters: { search: string; location: string; type: string }) => {
    const filtered = jobs.filter((job) => {
      const matchesSearch = !filters.search || 
        job.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        job.company.toLowerCase().includes(filters.search.toLowerCase()) ||
        job.description.toLowerCase().includes(filters.search.toLowerCase());
      
      const matchesLocation = !filters.location || 
        job.location.includes(filters.location);
      
      const matchesType = !filters.type || 
        job.type === filters.type;
      
      return matchesSearch && matchesLocation && matchesType;
    });
    
    setFilteredJobs(filtered);
  };

  return (
    <Layout>
      <section className="bg-muted py-12">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              Find Your Dream Job Today
            </h1>
            <p className="text-xl text-muted-foreground">
              Browse thousands of job listings from top companies
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <JobFilter onFilter={handleFilter} />
          </div>
        </div>
      </section>
      
      <section className="py-12">
        <div className="container">
          <h2 className="text-2xl font-bold mb-6">
            {filteredJobs.length > 0 
              ? `${filteredJobs.length} Jobs Available` 
              : "No Jobs Found"}
          </h2>
          <JobList jobs={filteredJobs} />
        </div>
      </section>
    </Layout>
  );
};

export default Index;