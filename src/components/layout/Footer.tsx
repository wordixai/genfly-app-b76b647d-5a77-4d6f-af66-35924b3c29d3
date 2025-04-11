import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">JobBoard</h3>
            <p className="text-sm text-muted-foreground">
              Find your dream job or the perfect candidate.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">For Job Seekers</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
                  Browse Jobs
                </Link>
              </li>
              <li>
                <Link to="/companies" className="text-sm text-muted-foreground hover:text-foreground">
                  Companies
                </Link>
              </li>
              <li>
                <Link to="/saved-jobs" className="text-sm text-muted-foreground hover:text-foreground">
                  Saved Jobs
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">For Employers</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/post-job" className="text-sm text-muted-foreground hover:text-foreground">
                  Post a Job
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-sm text-muted-foreground hover:text-foreground">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-sm text-muted-foreground hover:text-foreground">
                  Resources
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} JobBoard. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;