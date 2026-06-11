import SectionReveal from "./SectionReveal";
import img1 from "@/assets/makgeolli.jpg";
import img2 from "@/assets/6af7aea8f2761779a851a1778ac28369.jpg";
import img3 from "@/assets/Body_brush_RECHARGE_03_w._box_1400x1400-p.png";
import img4 from "@/assets/zarko-cloudcollection-02.jpg";
import img5 from "@/assets/zarkoperfume-cloud-3.jpg";
import img6 from "@/assets/41ed64907a064e25d184f88681bd67be.jpg";
import img7 from "@/assets/lakrids-gaveaesker.jpg";

// 4-col × 2-row grid, cell index 2 is the text cell
const gridItems = [
  { type: "image", src: img1, alt: "Bukchon Makgeolli packaging" },
  { type: "image", src: img2, alt: "Aery Happy Space candle" },
  { type: "text" },
  { type: "image", src: img3, alt: "Karmameju luxury packaging" },
  { type: "image", src: img4, alt: "Cloud Collection packaging" },
  { type: "image", src: img5, alt: "Zarkoperfume Cloud Collection" },
  { type: "image", src: img6, alt: "Premium tea packaging" },
  { type: "image", src: img7, alt: "Lakrids by Bülow packaging" },
];

const PackagingGrid = () => {
  return (
    <section id="packaging">
      <SectionReveal>
        <div className="grid grid-cols-2 md:grid-cols-4" style={{ gridAutoRows: "280px" }}>
          {gridItems.map((item, i) =>
            item.type === "text" ? (
              <div
                key={i}
                className="bg-white flex flex-col items-center justify-center px-6 py-8"
              >
                <p className="font-serif text-base md:text-lg text-zinc-500 leading-tight mb-2 text-center">
                  We make luxury packaging in
                </p>
                <h2
                  className="font-sans font-black uppercase text-center leading-none"
                  style={{ fontSize: "clamp(1.8rem, 4vw, 3.5rem)", color: "#7b9ec7" }}
                >
                  EVERY<br />CATEGORY!
                </h2>
              </div>
            ) : (
              <div key={i} className="overflow-hidden">
                <img
                  src={(item as { src: string }).src}
                  alt={(item as { alt: string }).alt}
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
