import UnboxMenu from "@/components/UnboxMenu";
import HeroSection from "@/components/HeroSection";
import InnovationSection from "@/components/InnovationSection";
import PackagingGrid from "@/components/PackagingGrid";
import PackagingSubsections from "@/components/PackagingSubsections";
import SustainableSection from "@/components/SustainableSection";
import GreenFootprintSection from "@/components/GreenFootprintSection";
import ComplianceSection from "@/components/ComplianceSection";
import TheDetailsSection from "@/components/TheDetailsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="bg-background text-foreground">
      <UnboxMenu />
      <HeroSection />
      <InnovationSection />
      <PackagingGrid />
      <PackagingSubsections />
      <SustainableSection />
      <GreenFootprintSection />
      <ComplianceSection />
      <TheDetailsSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default Index;
