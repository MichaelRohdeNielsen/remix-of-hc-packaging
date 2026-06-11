import SectionReveal from "./SectionReveal";
import makgeolliImg from "@/assets/makgeolli.jpg";
import chanelImg from "@/assets/il_fullxfull.5588173888_aw2c copy.jpg";

const PackagingSubsections = () => {
  return (
    <section id="paperpulp" className="bg-zinc-900 py-24 px-8 md:px-16 lg:px-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

        {/* Left column */}
        <SectionReveal>
          <p className="font-body text-xs tracking-[0.3em] uppercase text-white/40 mb-4">Materials</p>
          <h2 className="font-serif text-6xl md:text-8xl leading-none mb-2" style={{ color: '#f5d860' }}>
            PAPER<br />PULP
          </h2>
          <p className="font-serif italic text-xl text-white/80 mb-10">
            Sustainable Packaging with Purpose
          </p>
          <div className="space-y-4 mb-12">
            <p className="font-body text-sm text-white/60 leading-relaxed">
              Paper pulp, made from bagasse (a byproduct of sugarcane), is a biodegradable, compostable, and plastic-free material that offers both sustainability and performance.
            </p>
            <p className="font-body text-sm text-white/60 leading-relaxed">
              As a natural fiber material, it's ideal for shaping beautiful, durable packaging without harming the planet.
            </p>
            <p className="font-body text-sm text-white/60 leading-relaxed">
              At HC Packaging, we operate two of our own dedicated paper pulp factories, giving us full control over tooling, quality, and lead time — from molded inserts to luxury box interiors.
            </p>
          </div>
          <img src={makgeolliImg} alt="Bukchon Makgeolli paperpulp packaging" className="w-full h-auto object-cover" />
        </SectionReveal>

        {/* Right column */}
        <SectionReveal delay={0.15}>
          <img src={chanelImg} alt="Paper pulp fragrance packaging" className="w-full h-auto object-cover mb-12" />
          <blockquote className="border-l-0">
            <span className="font-serif text-5xl text-white leading-none block mb-2">"</span>
            <p className="font-serif italic text-lg md:text-xl text-white/80 leading-relaxed mb-4">
              Thanks to our vertically integrated setup, we're able to offer market-leading prices, without compromising on design, speed, or sustainability.
            </p>
            <footer className="font-body text-sm text-white/40 italic">CEO – Lasse Vigh</footer>
          </blockquote>
        </SectionReveal>

      </div>
    </section>
  );
};

export default PackagingSubsections;
