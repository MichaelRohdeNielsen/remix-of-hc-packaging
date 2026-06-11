import SectionReveal from "./SectionReveal";
import complianceImg from "@/assets/compliance-section-new.jpg";

const ComplianceSection = () => {
  return (
    <section id="compliance" className="w-full bg-background block">
      <SectionReveal>
        <img
          src={complianceImg}
          alt="We Got You — Compliance is built into everything we do"
          className="block w-full h-auto"
        />
      </SectionReveal>
    </section>
  );
};

export default ComplianceSection;
