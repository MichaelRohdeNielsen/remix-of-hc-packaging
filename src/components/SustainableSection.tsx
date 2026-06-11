import SectionReveal from "./SectionReveal";
import lakridsImg from "@/assets/lakrids-gaveaesker.jpg";

const SustainableSection = () => {
  return (
    <section className="bg-[#2e2e2e] pt-24 pb-0 px-8 md:px-16 overflow-hidden">
      <SectionReveal>
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="font-serif text-xl md:text-2xl text-white/70 mb-1">
            Your Trusted Partner in
          </p>
          <h2
            className="font-sans font-black uppercase text-white leading-none mb-10"
            style={{ fontSize: "clamp(2.5rem, 7vw, 6.5rem)" }}
          >
            Sustainable<br />Packaging
          </h2>

          <p className="font-body text-sm text-white/60 leading-relaxed mb-3 max-w-3xl mx-auto">
            At HC Packaging, we know what your consumers expect and what every brand wants from their packaging:
          </p>
          <p className="font-body text-sm text-white font-semibold mb-5">
            Sustainability that's real. Quality that holds. Prices that make sense.
          </p>
          <p className="font-body text-sm text-white/50 leading-relaxed max-w-3xl mx-auto mb-3">
            That's why we use <strong style={{ color: "#7bb3d4" }}>100% recycled paper</strong>, hold key certifications (<strong style={{ color: "#7bb3d4" }}>FSC, BSCI</strong>), and continuously innovate to reduce materials, energy, and waste – without compromising on finish or function. We serve global clients, including leading lifestyle and luxury brands with the same dedication, discretion, and reliability you'd expect from an EU-based production – often exceeding expectations.
          </p>
          <p className="font-body text-sm text-white/50 leading-relaxed max-w-3xl mx-auto mb-3">
            Our in-house paper pulp capabilities push sustainability even further, replacing plastic while increasing structural integrity.
          </p>
          <p className="font-body text-sm text-white/50 leading-relaxed max-w-3xl mx-auto">
            FOB or full-service? It's your choice. Flexible terms, full transparency, and impeccable service come standard – but the experience is what truly sets us apart.
          </p>
        </div>

        <img
          src={lakridsImg}
          alt="Lakrids by Bülow premium packaging"
          className="w-full max-h-[60vh] object-cover object-center block"
        />
      </SectionReveal>
    </section>
  );
};

export default SustainableSection;
