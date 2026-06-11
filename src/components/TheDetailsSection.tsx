import SectionReveal from "./SectionReveal";
import studioBg from "@/assets/6af60a4fa5c65b872d72a2e51b6f4fa7.jpg";

const TheDetailsSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img src={studioBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/30" />

      <SectionReveal>
        <div className="relative z-10 bg-[#f4b8b0] px-12 py-14 max-w-lg mx-8 text-center shadow-2xl">
          <h2
            className="font-sans font-black uppercase text-zinc-900 mb-1 leading-none"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            The Details
          </h2>
          <p className="font-serif text-xl md:text-2xl text-zinc-800 mb-8 leading-tight">
            they notice.<br />The memories they cannot shake.
          </p>

          <div className="space-y-5 text-center">
            <p className="font-body text-sm text-zinc-700 leading-relaxed">
              A perfume tells a story. A parfumeur dreams aloud.<br />
              We translate those dreams into touch, into form, into the poetry of packaging.<br />
              Every curve, every weight, every whisper of a pump –<br />
              in perfect harmony with their narrative.
            </p>
            <p className="font-body text-sm text-zinc-700 leading-relaxed">
              No shortcuts. No compromises. Only one fluid, luxurious expression:<br />
              their art made tangible.<br />
              One partner. One chain. One signature that turns scent into memory.
            </p>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
};

export default TheDetailsSection;
