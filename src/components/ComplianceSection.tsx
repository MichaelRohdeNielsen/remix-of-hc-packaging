import SectionReveal from "./SectionReveal";
import boxImg from "@/assets/578c82f16d05300c70035359ab84936c.jpg";

const ComplianceSection = () => {
  return (
    <section id="compliance" className="bg-[#e8866a]">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh]">
        {/* Left — text */}
        <div className="px-10 md:px-16 py-20 flex items-start">
          <SectionReveal>
            <div className="flex items-center gap-4 mb-2">
              <h2
                className="font-sans font-black uppercase text-white leading-none"
                style={{ fontSize: "clamp(3rem, 7vw, 6.5rem)" }}
              >
                We Got You!
              </h2>
              <span className="text-4xl">📋</span>
            </div>
            <p className="font-serif text-xl md:text-2xl text-white/90 mb-6">
              Compliance is built into everything we do.
            </p>
            <div className="border-t border-white/30 mb-8 w-full max-w-md" />

            <ul className="space-y-5 mb-12 max-w-md">
              {[
                "Our factories in China and Vietnam operate under our direct oversight, supported by a dedicated, in-house QC team on the ground.",
                "Every site meets BSCI and ISO standards as baseline – but we're proud to say we've passed brand-specific audits from names like Disney and L'Oréal.",
                "We partner with SGS International to ensure every detail — from labeling and CE marks to PIFs and food compliance — is bulletproof and globally recognized.",
                "And when EU regulations shift (as they always do), our teams are already there.",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="font-body text-white/60 mt-0.5 text-lg">•</span>
                  <p className="font-body text-sm text-white/90 leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>

            <blockquote>
              <span className="font-serif text-5xl text-white/50 leading-none block mb-1">"</span>
              <p className="font-serif italic text-base text-white/90 leading-relaxed mb-2 max-w-md">
                We guide our clients through the complexity, offering clarity, confidence, and packaging that's meets tomorrow's standards today.
              </p>
              <footer className="font-body text-sm text-white/60 italic">CEO – Lasse Vigh</footer>
            </blockquote>
          </SectionReveal>
        </div>

        {/* Right — image */}
        <div className="relative overflow-hidden min-h-[50vh] md:min-h-full">
          <img
            src={boxImg}
            alt="Premium compliance packaging"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
};

export default ComplianceSection;
