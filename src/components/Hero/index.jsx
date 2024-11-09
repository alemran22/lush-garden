import Navbar from "./Navbar";
import Banner from "./Banner";

const Hero = () => {
  return (
    <div className="bg-hero-bg bg-cover md:pt-10 w-full max-w-7xl md:h-[680px] mx-auto pb-20 md:pb-0">
      <Navbar />
      <Banner />
    </div>
  );
};

export default Hero;
