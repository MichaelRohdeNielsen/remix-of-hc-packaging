import SectionReveal from "./SectionReveal";
import img1 from "@/assets/makgeolli.jpg";
import img2 from "@/assets/Zarko parfume.jpeg";
import img3 from "@/assets/Body_brush_RECHARGE_03_w._box_1400x1400-p.png";
import img4 from "@/assets/detail closing copy.png";
import img5 from "@/assets/zarkoperfume-cloud-3.jpg";
import img6 from "@/assets/il_fullxfull.5588173888_aw2c copy.jpg";
import img7 from "@/assets/LAKRIDS_GAVEÆSKER_2.jpg";

// Grid: 4 cols × 2 rows = 8 cells, cell index 2 (0-based) is the text cell
const gridItems = [
  { type: "image", src: img1, alt: "Bukchon Makgeolli packaging" },
  { type: "image", src: img2, alt: "Zarkoperfume packaging" },
  { type: "text" },
  { type: "image", src: img3, alt: "Karmameju luxury packaging" },
  { type: "image", src: img4, alt: "Premium box detail" },
  { type: "image", src: img5, alt: "Zarkoperfume Cloud Collection" },
  { type: "image", src: img6, alt: "Chanel paper pulp packaging" },
  { type: "image", src: img7, alt: "Lakrids by Bülow packaging" },
];

const PackagingGrid = () => {
  return (
    <section id="packaging">
      <SectionReveal>
        <div className="grid grid-cols-2 md:grid-cols-4" style={{ gridAutoRows: "1fr" }}>
          {gridItems.map((item, i) =>
            item.type === "text" ? (
              <div
                key={i}
                className="bg-white flex flex-col items-center justify-center px-8 py-12 min-h-[280px] md:min-h-0"
              >
                <p className="font-serif text-xl md:text-2xl text-zinc-500 leading-tight mb-2 text-center">
                  We make luxury packaging in
                </p>
                <h2
                  className="font-sans font-black uppercase text-center leading-none"
                  style={{ fontSize: "clamp(2rem, 4.5vw, 3.8rem)", color: "#7b9ec7" }}
                >
                  EVERY<br />CATEGORY!
                </h2>
              </div>
            ) : (
              <div key={i} className="overflow-hidden aspect-square">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            )
          )}
        </div>
      </SectionReveal>
    </section>
  );
};

export default PackagingGrid;
