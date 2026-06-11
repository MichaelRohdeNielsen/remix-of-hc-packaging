import SectionReveal from "./SectionReveal";
import makgeolliImg from "@/assets/makgeolli.jpg";
import chanelImg from "@/assets/chanel-paperpulp.jpg";

const PackagingSubsections = () => {
  return (
    <section id="paperpulp" className="bg-[#1a1a1a] py-20 px-8 md:px-16 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start max-w-7xl mx-auto">

        {/* Left column */}
        <SectionReveal>
          <h2
            className="font-sans font-black uppercase leading-none mb-1"
            style={{ fontSize: "clamp(3rem, 7vw, 6rem)", color: "#d4b84a" }}
          >
            PAPER<br />PULP
          </h2>
          <p className="font-serif text-xl md:text-2xl text-white/80 mb-8">
            Sustainable Packaging with Purpose
          </p>

          <div className="space-y-4 mb-10">
            <p className="font-body text-sm text-white/60 leading-relaxed">
              Paper pulp, made from bagasse (a byproduct of sugarcane), is a biodegradable, compostable, and plastic-free material that offers both sustainability and performance. As a natural fiber material, it's ideal for shaping beautiful, durable packaging without harming the planet.
            </p>
            <p className="font-body text-sm text-white/60 leading-relaxed">
              At HC Packaging, we operate two of our own dedicated paper pulp factories, giving us full control over tooling, quality, and lead time — from molded inserts to luxury box interiors.
            </p>
          </div>

          <img
            src={makgeolliImg}
            alt="Bukchon Makgeolli paperpulp packaging"
            className="w-full h-auto object-cover"
          />
        </SectionReveal>

        {/* Right column */}
        <SectionReveal delay={0.15}>
          <img
            src={chanelImg}
            alt="Chanel No5 paper pulp packaging"
            className="w-full h-auto object-cover mb-10"
          />

          <blockquote>
            <span className="font-serif text-6xl text-white/30 leading-none block mb-2">"</span>
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
