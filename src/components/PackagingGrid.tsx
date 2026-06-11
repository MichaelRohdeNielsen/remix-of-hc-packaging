import SectionReveal from "./SectionReveal";
import imgFragrances from "@/assets/zarkoperfume-cloud-3.jpg";
import imgConfectionary from "@/assets/LAKRIDS_GAVEÆSKER_2.jpg";
import imgPaperpulp from "@/assets/tom dixon.png";
import imgBeauty from "@/assets/Body_brush_RECHARGE_03_w._box_1400x1400-p.png";

const categories = [
  { label: "Fragrances", img: imgFragrances },
  { label: "Confectionary", img: imgConfectionary },
  { label: "Paper Pulp", img: imgPaperpulp },
  { label: "Beauty & Wellness", img: imgBeauty },
];

const PackagingGrid = () => {
  return (
    <section id="packaging" className="bg-background py-24 px-8 md:px-16 lg:px-24">
      <SectionReveal>
        <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
          What we do
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
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors duration-300" />
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
