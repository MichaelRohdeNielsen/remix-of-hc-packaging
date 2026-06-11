import SectionReveal from "./SectionReveal";
import studioBg from "@/assets/6af60a4fa5c65b872d72a2e51b6f4fa7.jpg";

const TheDetailsSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img src={studioBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/40" />

      <SectionReveal>
        <div className="relative z-10 bg-[#f4b8b0]/90 px-12 py-16 max-w-xl mx-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-zinc-900 mb-2 uppercase tracking-wide">
            The Details
          </h2>
          <p className="font-serif text-2xl md:text-3xl text-zinc-800 mb-8 leading-tight">
            they notice.<br />The memories they cannot shake.
          </p>
          <div className="space-y-4">
            <p className="font-body text-sm text-zinc-700 leading-relaxed">
              A perfume tells a story. A parfumeur dreams aloud.<br />
              We translate those dreams into touch, into form, into the poetry of packaging.
            </p>
            <p className="font-body text-sm text-zinc-700 leading-relaxed">
              Every curve, every weight, every whisper of a pump —<br />
              in perfect harmony with their narrative.
            </p>
            <p className="font-body text-sm text-zinc-700 leading-relaxed">
              No shortcuts. No compromises. Only one fluid, luxurious expression:<br />
              their art made tangible.
            </p>
            <p className="font-body text-sm text-zinc-700 leading-relaxed font-medium">
              One partner. One chain. One signature that turns scent into memory.
            </p>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
};

export default TheDetailsSection;
