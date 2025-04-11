import CompanyCard from "./CompanyCard";
import { Company } from "@/types";

interface CompanyListProps {
  companies: Company[];
}

const CompanyList = ({ companies }: CompanyListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {companies.map((company) => (
        <CompanyCard key={company.id} company={company} />
      ))}
    </div>
  );
};

export default CompanyList;