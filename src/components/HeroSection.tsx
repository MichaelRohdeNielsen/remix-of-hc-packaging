import heroBg from "@/assets/nielshammers_06231_httpss.mj.runWvLgPHS_S0I_httpss.mj.run7Jxoa3_14d0f92d-851d-4663-afb0-42946fffc9be.jpg";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen flex items-end overflow-hidden">
      <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover object-top" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="relative z-10 px-8 md:px-16 lg:px-24 pb-20">
        <p className="font-body text-xs tracking-[0.4em] uppercase text-white/60 mb-4">
          Premium Sustainable Packaging
        </p>
        <h1 className="font-serif text-7xl md:text-9xl text-white tracking-tight leading-none">
          HC Packaging
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
