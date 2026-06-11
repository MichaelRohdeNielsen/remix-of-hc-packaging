import SectionReveal from "./SectionReveal";
import filippoLogo from "@/assets/logos/filippo-sorcinelli.png";
import lakridsLogo from "@/assets/logos/lakrids-by-bulow.webp";
import summerbirdLogo from "@/assets/logos/summerbird.png";
import gentsLogo from "@/assets/logos/gents.svg";
import goodieboxLogo from "@/assets/logos/goodiebox.png";
import kaffekLogo from "@/assets/logos/kaffek.svg";
import tromborgLogo from "@/assets/logos/tromborg.png";
import madeByMamaLogo from "@/assets/logos/made-by-mama.png";
import maisonNikouiLogo from "@/assets/logos/maison-nikoui.avif";
import sonVeninLogo from "@/assets/logos/son-venin-big.png";
import zarkoperfumeLogo from "@/assets/logos/zarkoperfume.webp";
import satisfyerLogo from "@/assets/logos/satisfyer.png";

const smallBrands: string[] = [];

const brands = [
  { name: "Filippo Sorcinelli", logo: filippoLogo },
  { name: "LAKRIDS by BÜLOW", logo: lakridsLogo },
  { name: "Summerbird", logo: summerbirdLogo },
  { name: "GENTS", logo: gentsLogo },
  { name: "Goodiebox", logo: goodieboxLogo },
  { name: "KaffeK", logo: kaffekLogo },
  { name: "Tromborg", logo: tromborgLogo },
  { name: "Made By Mama", logo: madeByMamaLogo },
  { name: "Maison Nikoui", logo: maisonNikouiLogo },
  { name: "Son Venin", logo: sonVeninLogo },
  { name: "Zarkoperfume", logo: zarkoperfumeLogo },
  { name: "Satisfyer", logo: satisfyerLogo },
];

const PaperpulpSection = () => {
  return (
    <section id="trends" className="bg-foreground text-primary-foreground py-32 px-8 md:px-16 lg:px-24">
      <SectionReveal>
        <div className="max-w-5xl mx-auto text-center">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6">Our Partners</p>
          <h2 className="font-serif-display text-4xl md:text-6xl lg:text-7xl mb-6">We know trends and hypes</h2>
          <p className="font-body text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-20">
            We collaborate with some of the most visionary brands in Scandinavia and beyond — delivering packaging that
            matches their ambition.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-12 gap-y-10 items-center justify-items-center">
            {brands.map((brand) => {
              const isSmall = smallBrands.includes(brand.name);
              return (
                <div key={brand.name} className="flex items-center justify-center w-full px-4 h-24">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className={`w-auto object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300 ${
                      isSmall ? "h-150" : "h-106"
                    }`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </SectionReveal>
    </section>
  );
};

export default PaperpulpSection;
