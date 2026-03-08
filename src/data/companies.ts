export interface CleaningCompany {
  id: string;
  rank: number;
  name: string;
  rating: number;
  reviewCount: number;
  description: string;
  longDescription: string;
  services: string[];
  website: string;
  phone: string;
  highlights: string[];
}

export const companies: CleaningCompany[] = [
  {
    id: "hemfrid",
    rank: 1,
    name: "Hemfrid",
    rating: 4.8,
    reviewCount: 342,
    description: "Sveriges ledande hemserviceföretag med lång erfarenhet och hög kundnöjdhet i Uppsala.",
    longDescription: "Hemfrid är Sveriges största och mest erfarna hemserviceföretag. Med över 25 års erfarenhet erbjuder de professionell hemstädning, storstädning, flyttstädning och fönsterputs. Deras städare är anställda med kollektivavtal och alla tjänster omfattas av RUT-avdrag. I Uppsala har de ett dedikerat team som känner till området väl.",
    services: ["Hemstädning", "Storstädning", "Flyttstädning", "Fönsterputs"],
    website: "https://www.hemfrid.se",
    phone: "08-123 456",
    highlights: ["25+ års erfarenhet", "Kollektivavtal", "RUT-avdrag", "Nöjd kund-garanti"],
  },
  {
    id: "stockholms-stadservice",
    rank: 2,
    name: "Städarna Uppsala",
    rating: 4.7,
    reviewCount: 218,
    description: "Lokalt förankrade i Uppsala med fokus på kvalitet och personlig service.",
    longDescription: "Städarna Uppsala är ett lokalt företag som har byggt sitt rykte på pålitlighet och noggrannhet. De erbjuder allt från regelbunden hemstädning till företagsstädning. Deras team består av erfarna och utbildade städare som alltid levererar ett resultat i toppklass.",
    services: ["Hemstädning", "Kontorsstädning", "Flyttstädning", "Trappstädning"],
    website: "https://www.stadarna.se",
    phone: "018-234 567",
    highlights: ["Lokalt företag", "Personlig service", "Flexibla tider", "Miljövänliga produkter"],
  },
  {
    id: "rent-hem",
    rank: 3,
    name: "Rent Hem",
    rating: 4.6,
    reviewCount: 187,
    description: "Prisvärd och pålitlig städtjänst med snabb bokning och bra kundrecensioner.",
    longDescription: "Rent Hem kombinerar kvalitet med konkurrenskraftiga priser. De har snabbt blivit ett populärt val bland Uppsalabor tack vare sin enkla bokningsprocess och konsekventa kvalitet. Alla deras städare genomgår utbildning och bakgrundskontroll.",
    services: ["Hemstädning", "Storstädning", "Flyttstädning", "Fönsterputs"],
    website: "https://www.renthem.se",
    phone: "018-345 678",
    highlights: ["Bra priser", "Enkel bokning", "Utbildad personal", "Kundgaranti"],
  },
  {
    id: "prima-stad",
    rank: 4,
    name: "Prima Städ",
    rating: 4.5,
    reviewCount: 156,
    description: "Erfaret städföretag med brett utbud av tjänster för både hem och företag.",
    longDescription: "Prima Städ har över 15 års erfarenhet i Uppsala-området. De erbjuder skräddarsydda städlösningar för privatpersoner och företag. Med ett stort team kan de hantera allt från enstaka städuppdrag till löpande avtal.",
    services: ["Hemstädning", "Företagsstädning", "Byggstädning", "Golvvård"],
    website: "https://www.primastad.se",
    phone: "018-456 789",
    highlights: ["15+ års erfarenhet", "Skräddarsydda lösningar", "Företag & privat", "Golvvårdsexperter"],
  },
  {
    id: "clean-home",
    rank: 5,
    name: "Clean Home Uppsala",
    rating: 4.4,
    reviewCount: 134,
    description: "Modern städtjänst med fokus på miljövänlig städning och digital bokning.",
    longDescription: "Clean Home Uppsala är ett modernt städföretag som satsar på hållbarhet. De använder uteslutande miljövänliga och ekologiska rengöringsmedel. Deras digitala plattform gör det enkelt att boka, ändra och hantera sina städtjänster.",
    services: ["Hemstädning", "Ekostädning", "Flyttstädning", "Djuprengöring"],
    website: "https://www.cleanhome.se",
    phone: "018-567 890",
    highlights: ["100% ekologiskt", "Digital bokning", "Hållbart fokus", "Flexibla abonnemang"],
  },
];
