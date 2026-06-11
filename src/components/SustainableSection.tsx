import SectionReveal from "./SectionReveal";
import lakridsImg from "@/assets/76daa82dd30a73bf4f7473bdae00229a.jpg";

const SustainableSection = () => {
  return (
    <section className="bg-zinc-900 py-24 px-8 md:px-16 lg:px-24">
      <SectionReveal>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="font-body text-sm text-white/40 tracking-[0.3em] uppercase mb-4">Our promise</p>
          <p className="font-serif text-2xl md:text-3xl text-white/70 mb-2">Your Trusted Partner in</p>
          <h2 className="font-serif text-5xl md:text-7xl text-white leading-tight mb-10">
            Sustainable Packaging
          </h2>
          <p className="font-body text-base text-white/60 leading-relaxed mb-4 max-w-3xl mx-auto">
            At HC Packaging, we know what your consumers expect and what every brand wants from their packaging:
          </p>
          <p className="font-body text-base text-white font-medium mb-6">
            Sustainability that's real. Quality that holds. Prices that make sense.
          </p>
          <p className="font-body text-sm text-white/50 leading-relaxed max-w-3xl mx-auto mb-4">
            That's why we use 100% recycled paper, hold key certifications (FSC, BSCI), and continuously innovate to reduce materials, energy, and waste — without compromising on finish or function.
          </p>
          <p className="font-body text-sm text-white/50 leading-relaxed max-w-3xl mx-auto">
            FOB or full-service? It's your choice. Flexible terms, full transparency, and impeccable service come standard — but the experience is what truly sets us apart.
          </p>
        </div>
        <img src={lakridsImg} alt="Premium packaging for Lakrids by Bülow" className="w-full h-auto max-h-[70vh] object-cover object-center" />
      </SectionReveal>
    </section>
  );
};

export default SustainableSection;
