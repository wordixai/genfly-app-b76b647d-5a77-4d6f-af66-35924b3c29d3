import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="text-xl font-bold">
            JobBoard
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link to="/" className="text-sm font-medium hover:underline">
              Jobs
            </Link>
            <Link to="/companies" className="text-sm font-medium hover:underline">
              Companies
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline" asChild>
            <Link to="/post-job">Post a Job</Link>
          </Button>
          <Button asChild>
            <Link to="/login">Sign In</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;