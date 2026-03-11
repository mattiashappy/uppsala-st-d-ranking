import { useParams, Link } from "react-router-dom";
import { companies } from "@/data/companies";
import Footer from "@/components/Footer";
import CompanyHero from "@/components/company/CompanyHero";
import CompanyServices from "@/components/company/CompanyServices";
import CompanyAbout from "@/components/company/CompanyAbout";
import CompanyHighlights from "@/components/company/CompanyHighlights";
import CompanyCTA from "@/components/company/CompanyCTA";
import CompanyCertification from "@/components/company/CompanyCertification";
import { ArrowLeft } from "lucide-react";

const CompanyPage = () => {
  const { id } = useParams<{ id: string }>();
  const company = companies.find((c) => c.id === id);

  if (!company) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold font-display text-foreground mb-4">Företaget hittades inte</h1>
          <Link to="/" className="text-primary hover:underline">← Tillbaka till startsidan</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <div className="bg-foreground text-primary-foreground">
        <div className="container max-w-6xl mx-auto px-4 py-2 flex items-center justify-between text-sm">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <ArrowLeft size={14} />
            Tillbaka till toplistan
          </Link>
          <span className="hidden sm:block text-primary-foreground/70">
            Verifierat av StädFirma Uppsala
          </span>
        </div>
      </div>

      <CompanyHero company={company} />
      <CompanyCertification company={company} />
      <CompanyServices company={company} />
      <CompanyAbout company={company} />
      <CompanyHighlights company={company} />
      <CompanyCTA company={company} />
      <Footer />
    </div>
  );
};

export default CompanyPage;
