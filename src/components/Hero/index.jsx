import Navbar from "./Navbar";
import Banner from "./Banner";

const Hero = () => {
  return (
    <div className="bg-hero-bg bg-cover pt-10 w-full max-w-7xl h-[680px] mx-auto ">
      <Navbar />
      <Banner />
    </div>
  );
};

export default Hero;
