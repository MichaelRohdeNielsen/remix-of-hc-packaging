import lakridsImg from "@/assets/lakrids-gaveaesker.jpg";

const SustainableSection = () => {
  return (
    <section className="bg-[#2e2e2e]" style={{ paddingTop: "5rem" }}>
      <div style={{ maxWidth: "56rem", margin: "0 auto", textAlign: "center", paddingLeft: "2rem", paddingRight: "2rem", paddingBottom: "3rem" }}>
        <p style={{ fontFamily: "Georgia, serif", fontSize: "1.25rem", color: "rgba(255,255,255,0.7)", marginBottom: "0.25rem" }}>
          Your Trusted Partner in
        </p>
        <h2 style={{ fontFamily: "Arial Black, sans-serif", fontWeight: 900, textTransform: "uppercase", color: "white", lineHeight: 1, marginBottom: "2.5rem", fontSize: "clamp(2.5rem, 7vw, 6rem)" }}>
          Sustainable<br />Packaging
        </h2>
        <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: "0.75rem" }}>
          At HC Packaging, we know what your consumers expect and what every brand wants from their packaging:
        </p>
        <p style={{ fontSize: "0.875rem", color: "white", fontWeight: 600, marginBottom: "1.25rem" }}>
          Sustainability that's real. Quality that holds. Prices that make sense.
        </p>
        <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.7, marginBottom: "0.75rem" }}>
          That's why we use <strong style={{ color: "#7bb3d4" }}>100% recycled paper</strong>, hold key certifications (<strong style={{ color: "#7bb3d4" }}>FSC, BSCI</strong>), and continuously innovate to reduce materials, energy, and waste – without compromising on finish or function.
        </p>
        <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.7, marginBottom: "0.75rem" }}>
          Our in-house paper pulp capabilities push sustainability even further, replacing plastic while increasing structural integrity.
        </p>
        <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>
          FOB or full-service? It's your choice. Flexible terms, full transparency, and impeccable service come standard – but the experience is what truly sets us apart.
        </p>
      </div>

      <img
        src={lakridsImg}
        alt="Lakrids by Bülow premium packaging"
        style={{ width: "100%", display: "block", maxHeight: "60vh", objectFit: "cover" }}
      />
    </section>
  );
};

export default SustainableSection;
