import Hero from "@/components/Hero";
import CompanyCard from "@/components/CompanyCard";
import Footer from "@/components/Footer";
import { companies } from "@/data/companies";
import { Shield, Clock, ThumbsUp } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />

      {/* Trust badges */}
      <section className="bg-card border-b">
        <div className="container max-w-4xl mx-auto px-4 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <Shield className="text-primary" size={28} />
              <span className="font-semibold text-card-foreground text-sm">Verifierade företag</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Clock className="text-primary" size={28} />
              <span className="font-semibold text-card-foreground text-sm">Uppdaterat mars 2026</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <ThumbsUp className="text-primary" size={28} />
              <span className="font-semibold text-card-foreground text-sm">Baserat på kundrecensioner</span>
            </div>
          </div>
        </div>
      </section>

      {/* Ranking */}
      <section id="ranking" className="container max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground text-center mb-3">
          Topp 5 Städfirmor i Uppsala
        </h2>
        <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">
          Rankingen baseras på kundrecensioner, tjänsteutbud, pris och pålitlighet.
        </p>

        <div className="space-y-4">
          {companies.map((company) => (
            <CompanyCard key={company.id} company={company} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="container max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-display text-primary-foreground mb-4">
            Behöver du hjälp med städningen?
          </h2>
          <p className="text-primary-foreground/80 mb-8">
            Jämför de bästa städfirmorna ovan och begär en kostnadsfri offert direkt. Enkelt, snabbt och utan förpliktelser.
          </p>
          <a
            href="#ranking"
            className="inline-block bg-card text-card-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Se alla städfirmor
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
