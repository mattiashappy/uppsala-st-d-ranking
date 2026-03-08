const Footer = () => {
  return (
    <footer className="bg-card border-t py-12">
      <div className="container max-w-4xl mx-auto px-4 text-center">
        <h3 className="text-lg font-display font-bold text-card-foreground mb-2">
          Städfirma Uppsala
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          Din guide till de bästa städföretagen i Uppsala. Vi hjälper dig hitta rätt städhjälp.
        </p>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} stadfirmauppsala.se — Alla rättigheter förbehållna
        </p>
      </div>
    </footer>
  );
};

export default Footer;
