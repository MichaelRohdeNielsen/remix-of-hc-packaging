import SectionReveal from "./SectionReveal";
import boxImg from "@/assets/578c82f16d05300c70035359ab84936c.jpg";

const ComplianceSection = () => {
  return (
    <section id="compliance" className="bg-[#e8866a]">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh]">
        {/* Left — text */}
        <div className="px-8 md:px-16 py-24 flex items-start">
          <SectionReveal>
            <h2 className="font-serif text-6xl md:text-8xl text-white leading-none mb-2 uppercase">
              We Got You!
            </h2>
            <p className="font-serif text-xl md:text-2xl text-white/80 mb-8">
              Compliance is built into everything we do.
            </p>
            <div className="border-t border-white/30 mb-8" />

            <ul className="space-y-6 mb-12">
              {[
                "Our factories in China and Vietnam operate under our direct oversight, supported by a dedicated, in-house QC team on the ground.",
                "Every site meets BSCI and ISO standards as baseline – but we're proud to say we've passed brand-specific audits from names like Disney and L'Oréal.",
                "We partner with SGS International to ensure every detail — from labeling and CE marks to PIFs and food compliance — is bulletproof and globally recognized.",
                "And when EU regulations shift (as they always do), our teams are already there.",
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <span className="font-body text-white/60 mt-1">•</span>
                  <p className="font-body text-sm text-white/80 leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>

            <blockquote>
              <span className="font-serif text-4xl text-white/60 leading-none block mb-2">"</span>
              <p className="font-serif italic text-base text-white/80 leading-relaxed mb-2">
                We guide our clients through the complexity, offering clarity, confidence, and packaging that meets tomorrow's standards today.
              </p>
              <footer className="font-body text-sm text-white/50 italic">CEO – Lasse Vigh</footer>
            </blockquote>
          </SectionReveal>
        </div>

        {/* Right — image */}
        <div className="relative overflow-hidden min-h-[50vh] md:min-h-full">
          <img src={boxImg} alt="Paper pulp packaging" className="w-full h-full object-cover object-center" />
        </div>
      </div>
    </section>
  );
};

export default ComplianceSection;
