import heroImage from "@/assets/hero-uppsala.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Uppsala stad"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in-up">
          Bästa Städfirmorna i Uppsala
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto font-sans" style={{ animationDelay: "0.2s", opacity: 0, animation: "fade-in-up 0.6s ease-out 0.2s forwards" }}>
          Vi har jämfört och rankat de bästa städföretagen i Uppsala så att du enkelt kan hitta rätt städhjälp. Få en kostnadsfri offert idag!
        </p>
        <a
          href="#ranking"
          className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity"
          style={{ animationDelay: "0.4s", opacity: 0, animation: "fade-in-up 0.6s ease-out 0.4s forwards" }}
        >
          Se rankingen →
        </a>
      </div>
    </section>
  );
};

export default Hero;
