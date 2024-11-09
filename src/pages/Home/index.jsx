import EmailForm from "../../components/EmailForm";
import Footer from "../../components/Footer";
import Gallery from "../../components/Gallery";
import Help from "../../components/Help";
import Hero from "../../components/Hero";
import InterestingBlog from "../../components/InterestingBlog";
import Offer from "../../components/Offer";
import QualityProduct from "../../components/QualityProduct";
import WhatSay from "../../components/WhatSay";

const Home = () => {
  return (
    <div>
      <Hero />
      <Help />
      <Offer />
      <QualityProduct />
      <Gallery />
      <WhatSay />
      <EmailForm />
      <InterestingBlog />
      <Footer />
    </div>
  );
};

export default Home;
