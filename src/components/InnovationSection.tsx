import SectionReveal from "./SectionReveal";
import zarkoGreenImg from "@/assets/zarko-cloudcollection-02.jpg";

const InnovationSection = () => {
  return (
    <section className="w-full flex flex-col md:flex-row min-h-screen overflow-hidden bg-white">
      {/* Left — text */}
      <div className="w-full md:w-[58%] px-10 md:px-16 lg:px-20 py-20 flex flex-col justify-center">
        <SectionReveal>
          <h2
            className="font-sans font-black uppercase leading-none mb-6"
            style={{ fontSize: "clamp(2.8rem, 6vw, 5.5rem)", color: "#3d6332" }}
          >
            Where Innovation<br />Meets Precision
          </h2>
          <p className="font-serif text-xl md:text-2xl text-zinc-700 mb-6">
            Certified, sustainable, and reliable
          </p>
          <div className="w-full border-t border-zinc-300 mb-8" />

          <div className="space-y-5 max-w-2xl">
            <p className="font-body text-sm text-zinc-600 leading-relaxed">
              With European HQ in Copenhagen and five state-of-the-art production facilities across Shanghai and Ho Chi Minh City (US market), our global setup is built for performance and sustainability. Three factories focus on premium paper-based packaging, while two specialize in cutting-edge paper pulp manufacturing – delivering plastic-free, compostable solutions at scale, tailored to the next generation of conscious consumers.
            </p>
            <p className="font-body text-sm text-zinc-600 leading-relaxed">
              <strong className="text-zinc-800">What sets us apart is the structure:</strong><br />
              You get the clarity, pace, and shared mindset of a European team, combined with the efficiency, scalability, and direct pricing of our own factories in Asia.<br />
              <strong className="text-zinc-800">No middlemen. No ambiguity. Just full control, from sketch to shelf.</strong>
            </p>
            <p className="font-body text-sm text-zinc-600 leading-relaxed">
              Our Europe-based team understands your brand, your processes, and your standards. We offer hands-on project management, transparent communication, and a long-term partnership mindset. Meanwhile, our production teams execute with speed and precision – with pricing that reflects true direct-from-source value.
            </p>
            <p className="font-body text-sm text-zinc-600 leading-relaxed">
              <strong className="text-zinc-800">We're not just packaging suppliers.</strong> We're supply chain optimizers, brand builders, and growth partners — with a proven track record of transforming packaging systems for some of the world's most respected lifestyle and luxury brands.
            </p>
          </div>
        </SectionReveal>
      </div>

      {/* Right — image */}
      <div className="w-full md:w-[42%] min-h-[50vh] md:min-h-screen overflow-hidden">
        <img
          src={zarkoGreenImg}
          alt="Zarkoperfume Cloud Collection packaging"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </section>
  );
};

export default InnovationSection;
