import SectionReveal from "./SectionReveal";

// Existing logos
import filippoLogo from "@/assets/logos/filippo-sorcinelli.png";
import lakridsLogo from "@/assets/logos/lakrids-by-bulow.webp";
import summerbirdLogo from "@/assets/logos/summerbird.png";
import goodieboxLogo from "@/assets/logos/goodiebox.png";
import tromborgLogo from "@/assets/logos/tromborg.png";
import zarkoperfumeLogo from "@/assets/logos/zarkoperfume.webp";
import satisfyerLogo from "@/assets/logos/satisfyer.png";

// New logos
import lorealLogo from "@/assets/L'Oréal_logo.svg.png";
import lvmhLogo from "@/assets/LVMH-Logo.png";
import pandoraLogo from "@/assets/Pandora-Logo.png";
import madsLogo from "@/assets/mads-noergaard.png";
import geskeLogo from "@/assets/GESKE_LOGO.jpg";
import chocLoveLogo from "@/assets/choc-love-logo.webp";

const brands = [
  { name: "L'Oréal", logo: lorealLogo },
  { name: "LVMH", logo: lvmhLogo },
  { name: "Pandora", logo: pandoraLogo },
  { name: "Zarkoperfume", logo: zarkoperfumeLogo },
  { name: "Lakrids by Bülow", logo: lakridsLogo },
  { name: "Filippo Sorcinelli", logo: filippoLogo },
  { name: "Mads Nørgaard", logo: madsLogo },
  { name: "Tromborg", logo: tromborgLogo },
  { name: "Summerbird", logo: summerbirdLogo },
  { name: "Goodiebox", logo: goodieboxLogo },
  { name: "GESKE", logo: geskeLogo },
  { name: "Chocolate and Love", logo: chocLoveLogo },
  { name: "Satisfyer", logo: satisfyerLogo },
];

const PaperpulpSection = () => {
  return (
    <section id="trends" className="bg-foreground text-primary-foreground py-32 px-8 md:px-16 lg:px-24">
      <SectionReveal>
        <div className="max-w-5xl mx-auto text-center">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6">Our Partners</p>
          <h2 className="font-serif-display text-4xl md:text-6xl lg:text-7xl mb-6 text-background">
            Trusted by the best
          </h2>
          <p className="font-body text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-20">
            We collaborate with some of the most visionary brands globally — delivering packaging that matches their ambition.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-12 gap-y-10 items-center justify-items-center">
            {brands.map((brand) => (
              <div key={brand.name} className="flex items-center justify-center w-full px-4 h-20">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-h-12 w-auto object-contain brightness-0 invert opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </SectionReveal>
    </section>
  );
};

export default PaperpulpSection;
