import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Job } from "@/types";
import { formatDistanceToNow } from "date-fns";

interface JobCardProps {
  job: Job;
}

const JobCard = ({ job }: JobCardProps) => {
  return (
    <Link to={`/jobs/${job.id}`}>
      <Card className="h-full hover:shadow-md transition-shadow">
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            <div className="h-12 w-12 rounded-md overflow-hidden flex-shrink-0">
              <img 
                src={job.logo} 
                alt={`${job.company} logo`} 
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-semibold text-lg">{job.title}</h3>
              <p className="text-muted-foreground">{job.company}</p>
              <div className="flex items-center gap-2 mt-2">
                <Badge variant="secondary">{job.type}</Badge>
                <span className="text-sm text-muted-foreground">{job.location}</span>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between border-t pt-4">
          {job.salary && (
            <span className="text-sm font-medium">{job.salary}</span>
          )}
          <span className="text-xs text-muted-foreground">
            {formatDistanceToNow(new Date(job.postedAt), { addSuffix: true })}
          </span>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default JobCard;