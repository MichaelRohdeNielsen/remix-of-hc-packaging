import studioBg from "@/assets/details-section.png";

const TheDetailsSection = () => {
  return (
    <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
      <img src={studioBg} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
      <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.3)" }} />

      <div style={{
        position: "relative", zIndex: 10,
        background: "#f4b8b0",
        padding: "3.5rem 3rem",
        maxWidth: "32rem",
        margin: "0 2rem",
        textAlign: "center",
        boxShadow: "0 25px 50px rgba(0,0,0,0.3)"
      }}>
        <h2 style={{ fontFamily: "Arial Black, sans-serif", fontWeight: 900, textTransform: "uppercase", color: "#1c1c1c", fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1, marginBottom: "0.25rem" }}>
          The Details
        </h2>
        <p style={{ fontFamily: "Georgia, serif", fontSize: "1.3rem", color: "#333", marginBottom: "2rem", lineHeight: 1.3 }}>
          they notice.<br />The memories they cannot shake.
        </p>
        <p style={{ fontSize: "0.875rem", color: "#555", lineHeight: 1.8, marginBottom: "1.25rem" }}>
          A perfume tells a story. A parfumeur dreams aloud.<br />
          We translate those dreams into touch, into form, into the poetry of packaging.<br />
          Every curve, every weight, every whisper of a pump –<br />
          in perfect harmony with their narrative.
        </p>
        <p style={{ fontSize: "0.875rem", color: "#555", lineHeight: 1.8 }}>
          No shortcuts. No compromises. Only one fluid, luxurious expression:<br />
          their art made tangible.<br />
          One partner. One chain. One signature that turns scent into memory.
        </p>
      </div>
    </section>
  );
};

export default TheDetailsSection;
