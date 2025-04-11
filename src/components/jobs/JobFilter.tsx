import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Search, MapPin, Briefcase } from "lucide-react";
import { JobType, LocationType } from "@/types";

interface JobFilterProps {
  onFilter: (filters: {
    search: string;
    location: string;
    type: string;
  }) => void;
}

const jobTypes: JobType[] = ["Full-time", "Part-time", "Contract", "Remote", "Internship"];
const locationTypes: LocationType[] = ["Remote", "On-site", "Hybrid"];

const JobFilter = ({ onFilter }: JobFilterProps) => {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilter({ search, location, type });
  };

  const handleReset = () => {
    setSearch("");
    setLocation("");
    setType("");
    onFilter({ search: "", location: "", type: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-card p-6 rounded-lg shadow-sm border">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Job title or keyword"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>
        
        <div className="relative">
          <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Select value={location} onValueChange={setLocation}>
            <SelectTrigger className="pl-9">
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent>
              {locationTypes.map((locType) => (
                <SelectItem key={locType} value={locType}>
                  {locType}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="relative">
          <Briefcase className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Select value={type} onValueChange={setType}>
            <SelectTrigger className="pl-9">
              <SelectValue placeholder="Job Type" />
            </SelectTrigger>
            <SelectContent>
              {jobTypes.map((jobType) => (
                <SelectItem key={jobType} value={jobType}>
                  {jobType}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="flex justify-between mt-4">
        <Button type="button" variant="outline" onClick={handleReset}>
          Reset
        </Button>
        <Button type="submit">
          Search Jobs
        </Button>
      </div>
    </form>
  );
};

export default JobFilter;