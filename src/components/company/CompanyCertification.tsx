import type { CleaningCompany } from "@/data/companies";
import verifiedBadge from "@/assets/verified-badge.png";
import { Shield, Award, CheckCircle } from "lucide-react";

const CompanyCertification = ({ company }: { company: CleaningCompany }) => {
  return (
    <section className="bg-card border-b">
      <div className="container max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img src={verifiedBadge} alt="Verifierad" className="w-24 h-24 object-contain" />

          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-bold font-display text-card-foreground mb-2">
              Verifierad av StädFirma Uppsala
            </h2>
            <p className="text-muted-foreground max-w-xl">
              {company.name} har granskats och verifierats av vårt team. Företaget uppfyller våra krav gällande kvalitet, pålitlighet och kundnöjdhet.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <Shield className="text-primary" size={28} />
              <span className="text-xs font-semibold text-card-foreground">Försäkrad</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Award className="text-accent" size={28} />
              <span className="text-xs font-semibold text-card-foreground">Certifierad</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <CheckCircle className="text-primary" size={28} />
              <span className="text-xs font-semibold text-card-foreground">Verifierad</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyCertification;
