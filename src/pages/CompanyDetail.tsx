import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import JobList from "@/components/jobs/JobList";
import { companies, jobs } from "@/data/mockData";
import { Company, Job } from "@/types";
import { ArrowLeft, Globe, MapPin, Users, Calendar } from "lucide-react";

const CompanyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [company, setCompany] = useState<Company | null>(null);
  const [companyJobs, setCompanyJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const foundCompany = companies.find(c => c.id === id) || null;
      const foundJobs = jobs.filter(job => job.companyId === id);
      
      setCompany(foundCompany);
      setCompanyJobs(foundJobs);
      setLoading(false);
    }, 300);
  }, [id]);

  if (loading) {
    return (
      <Layout>
        <div className="container py-12">
          <div className="animate-pulse">
            <div className="h-8 bg-muted rounded w-1/3 mb-4"></div>
            <div className="h-4 bg-muted rounded w-1/4 mb-8"></div>
            <div className="h-64 bg-muted rounded mb-8"></div>
          </div>
        </div>
      </Layout>
    );
  }

  if (!company) {
    return (
      <Layout>
        <div className="container py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Company Not Found</h1>
          <p className="mb-6">The company you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link to="/companies">Back to Companies</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container py-12">
        <Button variant="outline" asChild className="mb-6">
          <Link to="/companies">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Companies
          </Link>
        </Button>

        <div className="bg-card rounded-lg border p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
            <div className="h-24 w-24 rounded-md overflow-hidden flex-shrink-0">
              <img 
                src={company.logo} 
                alt={`${company.name} logo`} 
                className="h-full w-full object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold">{company.name}</h1>
              <p className="text-lg text-muted-foreground mb-4">{company.industry}</p>
              
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <div className="flex items-center text-sm">
                  <Globe className="mr-2 h-4 w-4 text-muted-foreground" />
                  <a 
                    href={company.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Website
                  </a>
                </div>
                <div className="flex items-center text-sm">
                  <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                  {company.location}
                </div>
                <div className="flex items-center text-sm">
                  <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                  {company.size}
                </div>
                <div className="flex items-center text-sm">
                  <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                  Founded {company.founded}
                </div>
              </div>
            </div>
          </div>

          <Separator className="my-6" />

          <div>
            <h2 className="text-xl font-semibold mb-4">About {company.name}</h2>
            <p className="whitespace-pre-line">{company.description}</p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">
            {companyJobs.length > 0 
              ? `Open Positions at ${company.name}` 
              : `No Open Positions at ${company.name}`}
          </h2>
          
          {companyJobs.length > 0 ? (
            <JobList jobs={companyJobs} />
          ) : (
            <div className="text-center py-12 bg-muted rounded-lg">
              <p className="text-muted-foreground mb-4">
                There are currently no open positions at this company.
              </p>
              <Button asChild>
                <Link to="/">Browse All Jobs</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default CompanyDetail;