import SectionReveal from "./SectionReveal";
import aboutHero from "@/assets/about-hero.png";

const AboutSection = () => {
  return (
    <section id="about" className="bg-background py-32 px-8 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
        <SectionReveal>
          <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
            About Us
          </p>
          <h2 className="font-serif text-4xl md:text-6xl text-foreground mb-8 leading-tight">
            Built for the luxury segment
          </h2>
          <p className="font-body text-base text-muted-foreground leading-relaxed mb-6">
            HC Packaging is a Copenhagen-based packaging company specialising in premium, sustainable solutions for the luxury market. We work with some of the most ambitious brands in Scandinavia and beyond.
          </p>
          <p className="font-body text-base text-muted-foreground leading-relaxed mb-6">
            Through our vertically integrated setup — including two dedicated paper pulp factories — we offer market-leading prices without compromising on design, speed, or sustainability.
          </p>
          <p className="font-body text-base text-muted-foreground leading-relaxed">
            Every detail matters. From the first sketch to the final unboxing.
          </p>
        </SectionReveal>

        <SectionReveal delay={0.15}>
          <div className="relative overflow-hidden aspect-[4/5]">
            <img
              src={aboutHero}
              alt="HC Packaging"
              className="w-full h-full object-cover"
            />
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};

export default AboutSection;
