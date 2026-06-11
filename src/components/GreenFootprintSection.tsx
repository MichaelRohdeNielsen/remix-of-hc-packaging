import SectionReveal from "./SectionReveal";
import tomDixonImg from "@/assets/tom dixon.png";

const GreenFootprintSection = () => {
  return (
    <section className="relative overflow-hidden min-h-[70vh]">
      {/* Diagonal background: green left, white right */}
      <div className="absolute inset-0 flex">
        <div className="w-full h-full absolute inset-0 bg-white" />
        <div
          className="absolute inset-0"
          style={{
            background: "#b5c99a",
            clipPath: "polygon(0 0, 72% 0, 55% 100%, 0 100%)",
          }}
        />
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 min-h-[70vh]">
        {/* Left — text on green */}
        <div className="px-10 md:px-16 lg:px-20 py-16 flex flex-col justify-center">
          <SectionReveal>
            <h2
              className="font-sans font-black uppercase leading-none mb-3"
              style={{ fontSize: "clamp(2.2rem, 5vw, 4.5rem)", color: "#2d3a1e" }}
            >
              Our Green<br />Footprint
            </h2>
            <p className="font-serif text-xl text-zinc-700 mb-10">Built Into Every Step</p>

            <div className="space-y-8">
              <div className="flex gap-4 items-start">
                <span className="text-2xl mt-1">💧</span>
                <div>
                  <p className="font-body text-xs tracking-[0.2em] uppercase text-zinc-800 font-bold mb-1">
                    Harvesting Rainwater
                  </p>
                  <p className="font-body text-sm text-zinc-700 leading-relaxed">
                    Our Vietnam facility uses a custom-built rainwater filtration system to supply clean water directly to the production line.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="text-2xl mt-1">☀️</span>
                <div>
                  <p className="font-body text-xs tracking-[0.2em] uppercase text-zinc-800 font-bold mb-1">
                    70% Solar-Powered
                  </p>
                  <p className="font-body text-sm text-zinc-700 leading-relaxed">
                    With 70% of our electricity coming from solar panels, we're drastically reducing our carbon footprint.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="text-2xl mt-1">♻️</span>
                <div>
                  <p className="font-body text-xs tracking-[0.2em] uppercase text-zinc-800 font-bold mb-1">
                    Thoughtfully Chosen Materials
                  </p>
                  <p className="font-body text-sm text-zinc-700 leading-relaxed">
                    We use only soy-based inks for printing and 100% recycled greyboard in our packaging – sustainable by design.
                  </p>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>

        {/* Right — image on white */}
        <div className="flex items-center justify-center p-12 md:p-16">
          <SectionReveal delay={0.15}>
            <img
              src={tomDixonImg}
              alt="Eco Polo by Tom Dixon — Lacoste paper pulp packaging"
              className="w-full max-w-sm h-auto object-contain"
            />
          </SectionReveal>
        </div>
      </div>
    </section>
  );
};

export default GreenFootprintSection;
