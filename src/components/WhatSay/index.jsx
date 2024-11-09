import logo1 from "../../assets/images/Rectangle.png";
import logo2 from "../../assets/images/Rectangle (1).png";
import logo3 from "../../assets/images/Rectangle (2).png";
const WhatSay = () => {
  return (
    <div className="my-10 md:my-28 max-w-7xl mx-auto w-full p-4 md:p-0">
      <h3 className="text-2xl md:text-4xl font-medium text-green text-center">
        What do they say about us
      </h3>
      <div className="mt-10 flex flex-col md:flex-row gap-6 justify-between ">
        {/* 1 */}
        <div className="w-full h-[359px] bg-testimonial-bg-1 p-10 bg-cover">
          <div className="flex flex-row mt-10 gap-5 items-center">
            <img src={logo1} alt="" />
            <h4 className="text-xl font-black text-green">Jessica Watson</h4>
          </div>
          <p className="text-base text-wrap font-medium mt-8">
            “ Highly recommend this website for quality flowers and plants.
            Great prices, timely delivery and excellent customer service. ”
          </p>
        </div>
        {/* 2 */}
        <div className="w-full h-[359px] bg-testimonial-bg-2 p-10 bg-cover">
          <div className="flex flex-row mt-10 gap-5 items-center">
            <img src={logo2} alt="" />
            <h4 className="text-xl font-black text-green">Kate Szu</h4>
          </div>
          <p className="text-base text-wrap font-medium mt-8">
            &quot;Great service, beautiful flowers, timely delivery. Highly
            recommend.&quot;
          </p>
        </div>
        {/* 3 */}
        <div className="w-full h-[359px] bg-testimonial-bg-3 p-10 bg-cover">
          <div className="flex flex-row mt-10 gap-5 items-center">
            <img src={logo3} alt="" />
            <h4 className="text-xl font-black text-green">Grace</h4>
          </div>
          <p className="text-base text-wrap font-medium mt-8">
            &quot;I am very happy with my purchase from this website, the plants
            were healthy and arrived on time.”
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatSay;
