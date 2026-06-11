import SectionReveal from "./SectionReveal";
import collectionGrid from "@/assets/collection-grid-new.jpg";

const PackagingGrid = () => {
  return (
    <section id="packaging" className="w-full bg-background block">
      <SectionReveal>
        <img
          src={collectionGrid}
          alt="We make luxury packaging in every category"
          className="block w-full h-auto"
        />
      </SectionReveal>
    </section>
  );
};

export default PackagingGrid;
