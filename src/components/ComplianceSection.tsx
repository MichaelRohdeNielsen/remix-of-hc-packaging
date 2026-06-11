import SectionReveal from "./SectionReveal";
import complianceImg from "@/assets/compliance-section-new.jpg";

const ComplianceSection = () => {
  return (
    <section id="compliance" className="bg-background">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[70vh]">
        <div className="relative overflow-hidden">
          <img
            src={complianceImg}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex items-center px-12 md:px-16 lg:px-24 py-24 bg-foreground">
          <SectionReveal>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
              Compliance
            </p>
            <h2 className="font-serif text-4xl md:text-6xl text-background mb-8 leading-tight">
              We got you
            </h2>
            <p className="font-body text-base text-background/70 leading-relaxed max-w-md mb-6">
              Compliance is built into everything we do. From EU packaging regulations to FSC certification and food-safe materials — we handle the documentation so you don't have to.
            </p>
            <p className="font-body text-base text-background/70 leading-relaxed max-w-md">
              Our team stays ahead of regulatory changes, ensuring your packaging is always market-ready across Europe and beyond.
            </p>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
};

export default ComplianceSection;
