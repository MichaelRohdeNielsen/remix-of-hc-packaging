import SectionReveal from "./SectionReveal";
import heroImg from "@/assets/hero-main-new.png";

const AboutSection = () => {
  return (
    <section id="about">
      {/* Dark branded image */}
      <img src={heroImg} alt="HC Packaging — Premium Sustainable Packaging" className="w-full h-auto block" />

      {/* White text section */}
      <div className="bg-white py-24 px-8 md:px-16 lg:px-24">
        <SectionReveal>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-10">About us…</h2>
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-6">
              HC Packaging Europe is the official European office of HC Packaging Asia and has been a proud part of the group since 2018. Located at Toldboden in the heart of Copenhagen, we serve as the strategic link between world-class Asian manufacturing and the demands of premium European brands.
            </p>
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-6">
              As part of the Hammers Group – a company widely recognized for its prominent role within the European lifestyle and fashion landscape – we bring deep market understanding, creative capability, and a strong commercial mindset to every collaboration. Our dedicated team of 16 specialists includes in-house product developers and graphic designers, allowing us to move fast, think creatively, and deliver tailored packaging solutions that meet the highest aesthetic and sustainability standards.
            </p>
            <p className="font-body text-base text-muted-foreground leading-relaxed">
              From first concept to final delivery, HC Packaging Europe ensures clarity, agility, and precision – all backed by the scale and efficiency of our own production facilities in China and Vietnam.
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};

export default AboutSection;
