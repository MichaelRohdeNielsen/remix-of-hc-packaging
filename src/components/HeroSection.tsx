import zarkoImg from "@/assets/zarko-cloudcollection-2018-01.jpg";
import logoImg from "@/assets/logo.png";

const HeroSection = () => {
  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row overflow-hidden bg-[#f0eeeb]">
      {/* Left — product photo */}
      <div className="relative w-full md:w-[58%] min-h-[60vh] md:min-h-screen overflow-hidden">
        <img
          src={zarkoImg}
          alt="Cloud Collection premium packaging"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Right — logo + text */}
      <div className="w-full md:w-[42%] flex flex-col items-center justify-center px-10 md:px-16 py-16 bg-[#f0eeeb]">
        {/* HC Packaging logo */}
        <div className="mb-8 text-center">
          <div className="flex flex-col items-center">
            <span className="font-sans font-black text-[#2d2d2d] text-5xl md:text-6xl leading-none tracking-tight">H</span>
            <div className="flex items-baseline gap-0">
              <span className="font-sans font-black text-[#8a8a8a] text-4xl md:text-5xl tracking-tight leading-none">PA</span>
              <span className="font-sans font-black text-[#2d2d2d] text-4xl md:text-5xl tracking-tight leading-none">C</span>
              <span className="font-sans font-black text-[#8a8a8a] text-4xl md:text-5xl tracking-tight leading-none">KAGING</span>
            </div>
          </div>
          <p className="font-body text-[10px] tracking-[0.35em] uppercase text-[#6b6b6b] mt-2">
            Premium Sustainable Packaging
          </p>
        </div>

        <div className="w-16 border-t border-[#2d2d2d] mb-8" />

        <div className="max-w-xs text-center">
          <p className="font-serif text-lg md:text-xl text-[#2d2d2d] leading-relaxed mb-5">
            HC Packaging welcomes you to a world of premium, sustainable packaging.
          </p>
          <p className="font-serif text-lg md:text-xl text-[#2d2d2d] leading-relaxed">
            Crafted for the luxury segment, and built to shape the future of packaging cooperations.
          </p>
        </div>

        <div className="w-16 border-t border-[#2d2d2d] mt-8" />
      </div>
    </section>
  );
};

export default HeroSection;
