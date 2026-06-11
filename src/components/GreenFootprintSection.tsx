import SectionReveal from "./SectionReveal";
import tomDixonImg from "@/assets/tom dixon.png";

const GreenFootprintSection = () => {
  return (
    <section className="overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh]">
        {/* Left — green */}
        <div className="bg-[#a8bc8a] px-8 md:px-16 py-24 flex items-center">
          <SectionReveal>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-black/50 mb-6">Sustainability</p>
            <h2 className="font-serif text-5xl md:text-6xl text-zinc-800 leading-tight mb-4">
              Our Green<br />Footprint
            </h2>
            <p className="font-body text-base text-zinc-700 mb-12">Built Into Every Step</p>

            <div className="space-y-8">
              <div>
                <p className="font-body text-xs tracking-[0.2em] uppercase text-zinc-700 font-semibold mb-2">Harvesting Rainwater</p>
                <p className="font-body text-sm text-zinc-600 leading-relaxed">
                  Our Vietnam facility uses a custom-built rainwater filtration system to supply clean water directly to the production line.
                </p>
              </div>
              <div>
                <p className="font-body text-xs tracking-[0.2em] uppercase text-zinc-700 font-semibold mb-2">70% Solar-Powered</p>
                <p className="font-body text-sm text-zinc-600 leading-relaxed">
                  With 70% of our electricity coming from solar panels, we're drastically reducing our carbon footprint.
                </p>
              </div>
              <div>
                <p className="font-body text-xs tracking-[0.2em] uppercase text-zinc-700 font-semibold mb-2">Thoughtfully Chosen Materials</p>
                <p className="font-body text-sm text-zinc-600 leading-relaxed">
                  We use only soy-based inks for printing and 100% recycled greyboard in our packaging — sustainable by design.
                </p>
              </div>
            </div>
          </SectionReveal>
        </div>

        {/* Right — white with image */}
        <div className="bg-white flex items-center justify-center p-16">
          <SectionReveal delay={0.15}>
            <img src={tomDixonImg} alt="Eco Polo by Tom Dixon — Lacoste paper pulp packaging" className="w-full h-auto max-h-[60vh] object-contain" />
          </SectionReveal>
        </div>
      </div>
    </section>
  );
};

export default GreenFootprintSection;
