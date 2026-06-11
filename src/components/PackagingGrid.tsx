import SectionReveal from "./SectionReveal";
import catFragrances from "@/assets/cat-fragrances.jpg";
import catJewelry from "@/assets/cat-jewelry.jpg";
import catConfectionary from "@/assets/cat-confectionary.jpg";
import catAdvent from "@/assets/cat-advent.jpg";

const categories = [
  { label: "Fragrances", img: catFragrances },
  { label: "Jewelry", img: catJewelry },
  { label: "Confectionary", img: catConfectionary },
  { label: "Advent Calendars", img: catAdvent },
];

const PackagingGrid = () => {
  return (
    <section id="packaging" className="bg-background py-24 px-8 md:px-16 lg:px-24">
      <SectionReveal>
        <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
          Our Categories
        </p>
        <h2 className="font-serif text-5xl md:text-7xl text-foreground mb-16">
          Packaging
        </h2>
      </SectionReveal>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((cat, i) => (
          <SectionReveal key={cat.label} delay={i * 0.1}>
            <div className="relative overflow-hidden group aspect-[3/4]">
              <img
                src={cat.img}
                alt={cat.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
              <p className="absolute bottom-6 left-6 font-serif text-xl text-white">
                {cat.label}
              </p>
            </div>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
};

export default PackagingGrid;
