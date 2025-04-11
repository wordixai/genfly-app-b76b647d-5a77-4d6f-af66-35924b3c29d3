import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { jobs } from "@/data/mockData";
import { Job } from "@/types";
import { formatDistanceToNow } from "date-fns";
import { ArrowLeft, Building, MapPin, Clock, DollarSign } from "lucide-react";

const JobDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const foundJob = jobs.find(j => j.id === id) || null;
      setJob(foundJob);
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

  if (!job) {
    return (
      <Layout>
        <div className="container py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Job Not Found</h1>
          <p className="mb-6">The job you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link to="/">Back to Jobs</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container py-12">
        <Button variant="outline" asChild className="mb-6">
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Jobs
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-card rounded-lg border p-6 mb-6">
              <div className="flex items-start gap-4 mb-6">
                <div className="h-16 w-16 rounded-md overflow-hidden flex-shrink-0">
                  <img 
                    src={job.logo} 
                    alt={`${job.company} logo`} 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">{job.title}</h1>
                  <Link to={`/companies/${job.companyId}`} className="text-primary hover:underline">
                    {job.company}
                  </Link>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <Badge variant="secondary">{job.type}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="mr-1 h-4 w-4" />
                      {job.location}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="mr-1 h-4 w-4" />
                      {formatDistanceToNow(new Date(job.postedAt), { addSuffix: true })}
                    </div>
                    {job.salary && (
                      <div className="flex items-center text-sm text-muted-foreground">
                        <DollarSign className="mr-1 h-4 w-4" />
                        {job.salary}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <Separator className="my-6" />

              <div>
                <h2 className="text-xl font-semibold mb-4">Job Description</h2>
                <p className="whitespace-pre-line mb-6">{job.description}</p>

                <h2 className="text-xl font-semibold mb-4">Requirements</h2>
                <ul className="list-disc pl-5 space-y-2">
                  {job.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-card rounded-lg border p-6 sticky top-24">
              <h2 className="text-xl font-semibold mb-4">Apply for this job</h2>
              <p className="text-sm text-muted-foreground mb-6">
                Submit your application now and we'll get back to you soon.
              </p>
              <Button className="w-full mb-4">Apply Now</Button>
              <Button variant="outline" className="w-full">Save Job</Button>

              <Separator className="my-6" />

              <h3 className="font-semibold mb-3">Company Information</h3>
              <div className="flex items-center gap-2 mb-2">
                <Building className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{job.company}</span>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{job.location}</span>
              </div>
              <Button variant="outline" asChild className="w-full">
                <Link to={`/companies/${job.companyId}`}>
                  View Company Profile
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default JobDetail;