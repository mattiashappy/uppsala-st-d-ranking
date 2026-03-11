import type { CleaningCompany } from "@/data/companies";
import heroImage from "@/assets/hero-uppsala.jpg";

const CompanyAbout = ({ company }: { company: CleaningCompany }) => {
  return (
    <section className="py-16 bg-card">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-card-foreground mb-3">
              Om {company.name}
            </h2>
            <div className="w-16 h-1 bg-primary rounded-full mb-6" />
            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
              {company.longDescription}
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-secondary rounded-lg p-4 text-center">
                <span className="text-3xl font-bold font-display text-primary">{company.rating}</span>
                <p className="text-sm text-muted-foreground mt-1">Snittbetyg</p>
              </div>
              <div className="bg-secondary rounded-lg p-4 text-center">
                <span className="text-3xl font-bold font-display text-primary">{company.reviewCount}+</span>
                <p className="text-sm text-muted-foreground mt-1">Omdömen</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src={heroImage}
              alt={`Om ${company.name}`}
              className="rounded-lg shadow-lg w-full h-80 object-cover"
            />
            <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-bold font-display text-lg shadow-lg">
              #{company.rank} i Uppsala
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyAbout;
