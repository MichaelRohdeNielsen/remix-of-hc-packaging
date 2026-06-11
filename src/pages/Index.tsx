import UnboxMenu from "@/components/UnboxMenu";
import HeroSection from "@/components/HeroSection";
import PackagingGrid from "@/components/PackagingGrid";
import SustainableSection from "@/components/SustainableSection";
import PackagingSubsections from "@/components/PackagingSubsections";
import GreenFootprintSection from "@/components/GreenFootprintSection";
import TheDetailsSection from "@/components/TheDetailsSection";
import PaperpulpSection from "@/components/PaperpulpSection";
import ComplianceSection from "@/components/ComplianceSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="bg-background text-foreground">
      <UnboxMenu />
      <HeroSection />
      <PackagingGrid />
      <SustainableSection />
      <PackagingSubsections />
      <GreenFootprintSection />
      <TheDetailsSection />
      <PaperpulpSection />
      <ComplianceSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default Index;
