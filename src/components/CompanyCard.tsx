import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp, ExternalLink, Phone, CheckCircle } from "lucide-react";
import type { CleaningCompany } from "@/data/companies";
import StarRating from "./StarRating";
import RankBadge from "./RankBadge";

const CompanyCard = ({ company }: { company: CleaningCompany }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="bg-card rounded-lg border shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      <div className="p-6">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <RankBadge rank={company.rank} />
          
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-bold font-display text-card-foreground">
              {company.name}
            </h3>
            <div className="flex items-center gap-3 mt-1">
              <StarRating rating={company.rating} />
              <span className="text-sm text-muted-foreground">
                ({company.reviewCount} omdömen)
              </span>
            </div>
          </div>

          <a
            href={company.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-semibold hover:opacity-90 transition-opacity text-sm whitespace-nowrap"
          >
            Kostnadsfri offert
            <ExternalLink size={14} />
          </a>
        </div>

        <p className="mt-4 text-muted-foreground leading-relaxed">
          {company.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
          {company.services.map((service) => (
            <span
              key={service}
              className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-medium"
            >
              {service}
            </span>
          ))}
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1 mt-4 text-sm font-medium text-primary hover:underline"
        >
          {expanded ? "Visa mindre" : "Läs mer om företaget"}
          {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
      </div>

      {expanded && (
        <div className="border-t bg-secondary/30 px-6 py-5 space-y-4">
          <p className="text-card-foreground leading-relaxed">
            {company.longDescription}
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {company.highlights.map((highlight) => (
              <div key={highlight} className="flex items-center gap-1.5 text-sm text-card-foreground">
                <CheckCircle size={14} className="text-primary shrink-0" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href={company.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity text-sm"
            >
              Besök hemsida
              <ExternalLink size={14} />
            </a>
            <a
              href={`tel:${company.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 border border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary/5 transition-colors text-sm"
            >
              <Phone size={14} />
              {company.phone}
            </a>
          </div>
        </div>
      )}
    </article>
  );
};

export default CompanyCard;
