import heroImg from "@/assets/hero-main.png";

const HeroSection = () => {
  return (
    <section className="bg-background w-full block">
      <img
        src={heroImg}
        alt="HC Packaging — Premium Sustainable Packaging"
        className="block w-full h-auto md:h-screen md:object-cover"
      />
    </section>
  );
};

export default HeroSection;
