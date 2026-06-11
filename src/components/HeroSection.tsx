import heroBg from "@/assets/hero-packaging.jpg";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/25" />
      <div className="relative z-10 text-center px-8">
        <p className="font-body text-xs tracking-[0.4em] uppercase text-white/70 mb-6">
          Premium Sustainable Packaging
        </p>
        <h1 className="font-serif text-8xl md:text-[10rem] text-white tracking-tight leading-none">
          HC<br />Packaging
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
