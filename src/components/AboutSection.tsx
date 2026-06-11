import SectionReveal from "./SectionReveal";
import aboutHero from "@/assets/about-hero.png";

const AboutSection = () => {
  return (
    <section id="about" className="w-full bg-background block">
      <SectionReveal>
        <img
          src={aboutHero}
          alt="HC Packaging - Premium Sustainable Packaging"
          className="block w-full h-auto"
        />
      </SectionReveal>
    </section>
  );
};

export default AboutSection;
