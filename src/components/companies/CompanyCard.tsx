import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Company } from "@/types";

interface CompanyCardProps {
  company: Company;
}

const CompanyCard = ({ company }: CompanyCardProps) => {
  return (
    <Link to={`/companies/${company.id}`}>
      <Card className="h-full hover:shadow-md transition-shadow">
        <CardContent className="pt-6">
          <div className="flex flex-col items-center text-center">
            <div className="h-16 w-16 rounded-md overflow-hidden mb-4">
              <img 
                src={company.logo} 
                alt={`${company.name} logo`} 
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="font-semibold text-lg">{company.name}</h3>
            <p className="text-sm text-muted-foreground mt-1">{company.industry}</p>
            <p className="text-sm text-muted-foreground">{company.location}</p>
            <p className="text-sm mt-3 line-clamp-2">
              {company.description}
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CompanyCard;