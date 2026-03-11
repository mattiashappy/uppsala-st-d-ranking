import type { CleaningCompany } from "@/data/companies";
import StarRating from "@/components/StarRating";
import heroImage from "@/assets/company-hero.jpg";
import { ExternalLink, Phone } from "lucide-react";

const CompanyHero = ({ company }: { company: CleaningCompany }) => {
  return (
    <section className="relative min-h-[50vh] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt={company.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-foreground/20" />
      </div>

      <div className="relative z-10 container max-w-6xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="inline-block bg-primary/90 text-primary-foreground px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              #{company.rank} i Uppsala
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-primary-foreground mb-3">
              {company.name}
            </h1>
            <div className="flex items-center gap-3 mb-2">
              <StarRating rating={company.rating} />
              <span className="text-primary-foreground/80 text-sm">
                {company.rating}/5 — {company.reviewCount} omdömen
              </span>
            </div>
            <p className="text-primary-foreground/70 text-lg max-w-xl">
              {company.description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={company.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity text-sm"
            >
              Begär offert
              <ExternalLink size={14} />
            </a>
            <a
              href={`tel:${company.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary-foreground/20 transition-colors text-sm"
            >
              <Phone size={14} />
              {company.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyHero;
