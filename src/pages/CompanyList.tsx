import { useState } from "react";
import Layout from "@/components/layout/Layout";
import CompanyList from "@/components/companies/CompanyList";
import { Input } from "@/components/ui/input";
import { companies } from "@/data/mockData";
import { Company } from "@/types";
import { Search } from "lucide-react";

const CompanyListPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredCompanies = companies.filter(company => 
    company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    company.industry.toLowerCase().includes(searchTerm.toLowerCase()) ||
    company.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <section className="bg-muted py-12">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              Companies
            </h1>
            <p className="text-xl text-muted-foreground">
              Discover great places to work
            </p>
          </div>
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search companies by name, industry, or location"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12">
        <div className="container">
          <h2 className="text-2xl font-bold mb-6">
            {filteredCompanies.length > 0 
              ? `${filteredCompanies.length} Companies` 
              : "No Companies Found"}
          </h2>
          <CompanyList companies={filteredCompanies} />
        </div>
      </section>
    </Layout>
  );
};

export default CompanyListPage;