import type { CleaningCompany } from "@/data/companies";
import { ExternalLink, Phone } from "lucide-react";

const CompanyCTA = ({ company }: { company: CleaningCompany }) => {
  return (
    <section className="bg-primary py-16">
      <div className="container max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-display text-primary-foreground mb-4">
          Redo att boka {company.name}?
        </h2>
        <p className="text-primary-foreground/80 mb-8 text-lg">
          Kontakta {company.name} idag för en kostnadsfri offert. Professionell städning i Uppsala.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={company.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-card text-card-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Begär kostnadsfri offert
            <ExternalLink size={16} />
          </a>
          <a
            href={`tel:${company.phone.replace(/\s/g, "")}`}
            className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-foreground/10 transition-colors"
          >
            <Phone size={16} />
            Ring {company.phone}
          </a>
        </div>
      </div>
    </section>
  );
};

export default CompanyCTA;
