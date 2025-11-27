const TrustLogos = () => {
  const partners = [
    "Banks & Financial",
    "Telecom",
    "Government",
    "Contact Centers",
    "eKYC Providers",
  ];

  return (
    <section className="py-12 bg-muted/50 border-y border-border">
      <div className="container mx-auto px-6">
        <p className="text-center text-muted-foreground text-sm mb-8">
          Trusted by leading organizations in MENA region
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="px-6 py-3 bg-background rounded-lg border border-border text-muted-foreground font-medium text-sm hover:border-voguard-teal hover:text-voguard-teal transition-colors"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustLogos;
