export interface Job {
  id: string;
  title: string;
  company: string;
  companyId: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Remote" | "Internship";
  salary?: string;
  description: string;
  requirements: string[];
  postedAt: string;
  logo: string;
}

export interface Company {
  id: string;
  name: string;
  description: string;
  website: string;
  location: string;
  size: string;
  industry: string;
  logo: string;
  founded: number;
  jobs?: Job[];
}

export type JobType = "Full-time" | "Part-time" | "Contract" | "Remote" | "Internship";
export type LocationType = "Remote" | "On-site" | "Hybrid";