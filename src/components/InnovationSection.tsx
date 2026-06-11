import SectionReveal from "./SectionReveal";
import bgImg from "@/assets/hero-packaging.jpg";

const InnovationSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <img src={bgImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/65" />

      <div className="relative z-10 px-8 md:px-16 lg:px-24 py-32 max-w-5xl">
        <SectionReveal>
          <p className="font-body text-xs tracking-[0.3em] uppercase text-white/50 mb-6">Our setup</p>
          <h2 className="font-serif text-5xl md:text-7xl text-white leading-tight mb-10">
            Where Innovation<br />Meets Precision
          </h2>
          <p className="font-body text-base text-white/70 leading-relaxed mb-6 max-w-2xl">
            With European HQ in Copenhagen and five state-of-the-art production facilities across Shanghai and Ho Chi Minh City, our global setup is built for performance and sustainability. Three factories focus on premium paper-based packaging, while two specialize in cutting-edge paper pulp manufacturing — delivering plastic-free, compostable solutions at scale.
          </p>
          <p className="font-body text-base text-white/70 leading-relaxed mb-6 max-w-2xl">
            What sets us apart is the structure: you get the clarity, pace, and shared mindset of a European team, combined with the efficiency, scalability, and direct pricing of our own factories in Asia.
          </p>
          <p className="font-body text-base text-white/70 leading-relaxed mb-6 max-w-2xl">
            No middlemen. No ambiguity. Just full control, from sketch to shelf.
          </p>
          <p className="font-body text-sm text-white/50 leading-relaxed max-w-2xl">
            We're not just packaging suppliers. We're supply chain optimizers, brand builders, and growth partners — with a proven track record of transforming packaging systems for some of the world's most respected lifestyle and luxury brands.
          </p>
          <p className="font-body text-xs tracking-[0.2em] uppercase text-white/40 mt-8">
            Certified · Sustainable · Reliable
          </p>
        </SectionReveal>
      </div>
    </section>
  );
};

export default InnovationSection;
