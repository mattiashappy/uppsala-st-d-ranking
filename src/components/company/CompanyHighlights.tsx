import type { CleaningCompany } from "@/data/companies";
import { CheckCircle } from "lucide-react";

const CompanyHighlights = ({ company }: { company: CleaningCompany }) => {
  return (
    <section className="py-16 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-3">
            Varför Välja {company.name}?
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {company.highlights.map((highlight) => (
            <div
              key={highlight}
              className="bg-card rounded-lg border p-6 flex items-start gap-4 hover:shadow-md transition-shadow"
            >
              <CheckCircle className="text-primary shrink-0 mt-0.5" size={22} />
              <span className="font-semibold text-card-foreground">{highlight}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyHighlights;
