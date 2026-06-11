import SectionReveal from "./SectionReveal";
import adventHero from "@/assets/advent-hero.png";
import paperpulpBg from "@/assets/paperpulp-bg.png";
import greenFootprint from "@/assets/green-footprint.png";
import complianceImg from "@/assets/compliance-section.png";
import detailsImg from "@/assets/details-section.png";
import trendsImg from "@/assets/trends-section.png";

const PackagingSubsections = () => {
  return (
    <>
      {/* Fragrances / Paper Pulp */}
      <section id="paperpulp" className="relative">
        <SectionReveal>
          <div className="relative w-full md:min-h-[80vh] flex items-start">
            {/* Background image */}
            <img
              src={paperpulpBg}
              alt=""
              className="absolute inset-0 w-full h-full object-cover" />
            
            {/* Text overlay */}
            <div className="relative z-10 w-full px-8 md:px-16 lg:px-24 pt-16 md:pt-24 pb-16 flex flex-col lg:flex-row justify-between gap-12">
              {/* Left column */}
              <div className="max-w-lg">
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-1 leading-tight uppercase" style={{ color: '#f5d860', fontFamily: "'Oswald', sans-serif" }}>
                  PAPER PULP
                </h2>
                <p className="font-serif text-xl md:text-2xl mb-0 text-white/90">
                  Sustainable Packaging with Purpose
                </p>
                
                <div className="mt-12">
                  <p className="font-body text-sm md:text-base text-white mb-6 leading-relaxed max-w-md">
                    Paper pulp, made from bagasse (a byproduct of sugarcane), is a biodegradable, compostable, and plastic-free material that offers both sustainability and performance.
                  </p>
                  <p className="font-body text-sm md:text-base text-white mb-6 leading-relaxed max-w-md">
                    As a natural fiber material, it's ideal for shaping beautiful, durable packaging without harming the planet.
                  </p>
                  <p className="font-body text-sm md:text-base text-white leading-relaxed max-w-md">
                    At HC Packaging, we operate two of our own dedicated paper pulp factories, giving us full control over tooling, quality, and lead time — from molded inserts to luxury box interiors.
                  </p>
                </div>
              </div>

              {/* Right column - quote */}
              <div className="max-w-md lg:self-end lg:text-right lg:mt-32">
                <span className="text-6xl font-serif text-white leading-none">,</span>
                <p className="font-serif italic text-base leading-relaxed text-primary md:text-xl">
                  Thanks to our vertically integrated setup, we're able to offer market-leading prices, without compromising on design, speed, or sustainability.
                </p>
                <p className="font-body text-sm mt-4 italic text-primary">
                  CEO – Lasse Vigh
                </p>
              </div>
            </div>
          </div>
        </SectionReveal>
      </section>

      {/* Jewelry / Green Footprint */}
      <section id="jewelry" className="w-full bg-background block">
        <SectionReveal>
          <img src={greenFootprint} alt="Our Green Footprint — Built into every step" className="block w-full h-auto" />
        </SectionReveal>
      </section>

      {/* Confectionary / The Details */}
      <section id="confectionary" className="w-full bg-background block">
        <SectionReveal>
          <img src={detailsImg} alt="The Details they notice. The memories they cannot shake." className="block w-full h-auto" />
        </SectionReveal>
      </section>

      {/* Advent Calendars */}
      <section id="advent" className="relative bg-stone w-full block">
        <SectionReveal>
          <img src={adventHero} alt="Premium advent calendar packaging" className="block w-full h-auto" />
        </SectionReveal>
      </section>
    </>);

};

export default PackagingSubsections;