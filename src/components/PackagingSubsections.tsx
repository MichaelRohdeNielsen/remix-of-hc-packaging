import SectionReveal from "./SectionReveal";
import paperpulpImg from "@/assets/paper pulp.jpeg";
import makgeolliImg from "@/assets/makgeolli.jpg";

const PackagingSubsections = () => {
  return (
    <>
      {/* Paperpulp */}
      <section id="paperpulp" className="relative min-h-screen flex items-center overflow-hidden">
        <img
          src={paperpulpImg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 w-full px-8 md:px-16 lg:px-24 py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <SectionReveal>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-white/60 mb-4">
              Materials
            </p>
            <h2 className="font-serif text-5xl md:text-7xl text-white mb-6 leading-tight">
              Paper Pulp
            </h2>
            <p className="font-body text-lg text-white/80 mb-8 font-light">
              Sustainable Packaging with Purpose
            </p>
            <div className="space-y-4">
              <p className="font-body text-sm text-white/70 leading-relaxed max-w-md">
                Paper pulp, made from bagasse (a byproduct of sugarcane), is a biodegradable, compostable, and plastic-free material that offers both sustainability and performance.
              </p>
              <p className="font-body text-sm text-white/70 leading-relaxed max-w-md">
                As a natural fiber material, it's ideal for shaping beautiful, durable packaging without harming the planet.
              </p>
              <p className="font-body text-sm text-white/70 leading-relaxed max-w-md">
                At HC Packaging, we operate two of our own dedicated paper pulp factories, giving us full control over tooling, quality, and lead time.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.15}>
            <div className="lg:self-end lg:text-right">
              <p className="font-serif italic text-xl md:text-2xl text-white/90 leading-relaxed max-w-md lg:ml-auto mb-6">
                "Thanks to our vertically integrated setup, we're able to offer market-leading prices, without compromising on design, speed, or sustainability."
              </p>
              <p className="font-body text-sm text-white/50 italic">
                Lasse Vigh — CEO
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Second paperpulp visual */}
      <section className="w-full bg-background block">
        <SectionReveal>
          <img src={makgeolliImg} alt="Paper pulp packaging — Bukchon Makgeolli" className="block w-full h-auto md:max-h-[80vh] object-cover" />
        </SectionReveal>
      </section>
    </>
  );
};

export default PackagingSubsections;
