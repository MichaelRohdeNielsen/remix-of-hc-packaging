import SectionReveal from "./SectionReveal";
import img1 from "@/assets/zarko-cloudcollection-2018-01.jpg";
import img2 from "@/assets/Zarko parfume.jpeg";

const AboutSection = () => {
  return (
    <section id="about" className="bg-background py-32 px-8 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
        <SectionReveal>
          <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">About Us</p>
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

        <SectionReveal delay={0.15}>
          <div className="flex flex-col gap-4">
            <img src={img1} alt="HC Packaging — premium fragrance packaging" className="w-full h-auto object-cover" />
            <img src={img2} alt="HC Packaging — Zarkoperfume Cloud Collection" className="w-full h-auto object-cover" />
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};

export default AboutSection;
