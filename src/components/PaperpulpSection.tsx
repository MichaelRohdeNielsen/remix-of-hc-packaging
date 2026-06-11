import SectionReveal from "./SectionReveal";
import modelBg from "@/assets/nielshammers_06231_httpss.mj.runWvLgPHS_S0I_httpss.mj.run7Jxoa3_14d0f92d-851d-4663-afb0-42946fffc9be.jpg";

// Logos
import zarkoperfumeLogo from "@/assets/logos/zarkoperfume.webp";
import chocLoveLogo from "@/assets/choc-love-logo.webp";
import satisfyerLogo from "@/assets/satisfyer.png";
import swarovskiLogo from "@/assets/Swarovski_Logo.svg";
import lorealLogo from "@/assets/L'Oréal_logo.svg.png";
import lakridsLogo from "@/assets/logos/lakrids-by-bulow.webp";
import lvmhLogo from "@/assets/LVMH-Logo.png";
import rojaLogo from "@/assets/roja perfume.png";
import geskeLogo from "@/assets/GESKE_LOGO.jpg";
import pandoraLogo from "@/assets/Pandora-Logo.png";
import madsLogo from "@/assets/mads-noergaard.png";

const row1 = [
  { name: "Zarkoperfume", logo: zarkoperfumeLogo },
  { name: "Chocolate and Love", logo: chocLoveLogo },
  { name: "Satisfyer", logo: satisfyerLogo },
  { name: "Swarovski", logo: swarovskiLogo },
  { name: "L'Oréal", logo: lorealLogo },
];

const row2 = [
  { name: "Lakrids by Bülow", logo: lakridsLogo },
  { name: "LVMH", logo: lvmhLogo },
  { name: "Roja London", logo: rojaLogo },
  { name: "GESKE", logo: geskeLogo },
  { name: "Pandora", logo: pandoraLogo },
  { name: "Mads Nørgaard", logo: madsLogo },
];

const LogoItem = ({ name, logo }: { name: string; logo: string }) => (
  <div className="flex items-center justify-center px-4 py-2">
    <img
      src={logo}
      alt={name}
      className="max-h-10 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
      style={{ filter: "grayscale(100%)" }}
    />
  </div>
);

const PaperpulpSection = () => {
  return (
    <section id="trends">
      {/* Hero text over model image */}
      <div className="relative overflow-hidden">
        <img src={modelBg} alt="" className="w-full h-[60vh] object-cover object-top" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-8">
          <div>
            <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight">
              We know trends<br />and hypes…
            </h2>
            <p className="font-body text-base text-white/70 max-w-2xl mx-auto leading-relaxed">
              By working hand-in-hand with some of the world's most forward-thinking brands, HC Packaging sits at the forefront of sustainable innovation. We don't just follow industry trends — we help set them.
            </p>
          </div>
        </div>
      </div>

      {/* Logo grid on white */}
      <SectionReveal>
        <div className="bg-white py-16 px-8 md:px-16 lg:px-24">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-3 md:grid-cols-5 gap-8 mb-8 items-center justify-items-center">
              {row1.map((brand) => (
                <LogoItem key={brand.name} {...brand} />
              ))}
            </div>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center">
              {row2.map((brand) => (
                <LogoItem key={brand.name} {...brand} />
              ))}
            </div>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
};

export default PaperpulpSection;
