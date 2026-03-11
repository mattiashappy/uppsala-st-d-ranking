import type { CleaningCompany } from "@/data/companies";
import { Sparkles, Home, Truck, Building2 } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  "Hemstädning": <Home size={32} className="text-primary" />,
  "Storstädning": <Sparkles size={32} className="text-primary" />,
  "Flyttstädning": <Truck size={32} className="text-primary" />,
  "Kontorsstädning": <Building2 size={32} className="text-primary" />,
  "Företagsstädning": <Building2 size={32} className="text-primary" />,
};

const CompanyServices = ({ company }: { company: CleaningCompany }) => {
  return (
    <section className="py-16 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-3">
            Våra Tjänster
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-lg mx-auto">
            {company.name} erbjuder ett brett utbud av professionella städtjänster i Uppsala.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {company.services.map((service) => (
            <div
              key={service}
              className="bg-card rounded-lg border p-8 text-center hover:shadow-lg transition-shadow group"
            >
              <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform">
                {iconMap[service] || <Sparkles size={32} className="text-primary" />}
              </div>
              <h3 className="font-bold font-display text-card-foreground text-lg mb-2">{service}</h3>
              <p className="text-sm text-muted-foreground">
                Professionell {service.toLowerCase()} utförd av erfarna och pålitliga städare.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyServices;
