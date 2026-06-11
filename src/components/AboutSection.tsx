import SectionReveal from "./SectionReveal";
import aboutImg from "@/assets/nielshammers_06231_httpss.mj.runWvLgPHS_S0I_httpss.mj.run7Jxoa3_14d0f92d-851d-4663-afb0-42946fffc9be.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="bg-background">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
        <div className="flex items-center px-8 md:px-16 lg:px-24 py-32 order-2 md:order-1">
          <SectionReveal>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
              About Us
            </p>
            <h2 className="font-serif text-4xl md:text-6xl text-foreground mb-8 leading-tight">
              Built for the<br />luxury segment
            </h2>
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-6 max-w-md">
              HC Packaging is a Copenhagen-based packaging company specialising in premium, sustainable solutions for the luxury market. We work with some of the most ambitious brands globally.
            </p>
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-6 max-w-md">
              Through our vertically integrated setup — including two dedicated paper pulp factories — we offer market-leading prices without compromising on design, speed, or sustainability.
            </p>
            <p className="font-body text-base text-muted-foreground leading-relaxed max-w-md">
              Every detail matters. From the first sketch to the final unboxing.
            </p>
          </SectionReveal>
        </div>

        <div className="relative overflow-hidden order-1 md:order-2 min-h-[60vh] md:min-h-full">
          <img
            src={aboutImg}
            alt="HC Packaging"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
