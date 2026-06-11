import UnboxMenu from "@/components/UnboxMenu";
import HeroSection from "@/components/HeroSection";
import PackagingGrid from "@/components/PackagingGrid";
import PackagingSubsections from "@/components/PackagingSubsections";
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
      <PackagingSubsections />
      <PaperpulpSection />
      <ComplianceSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default Index;
