import leftImage from "../../assets/images/pexels-cottonbro-studio-4507715 1.png";
import quality1 from "../../assets/images/Time-Cosuming.png";
import quality2 from "../../assets/images/Temperature.png";
import quality3 from "../../assets/images/Grow_Sprout.png";
import quality4 from "../../assets/images/Pruning.png";

const QualityProduct = () => {
  return (
    <div className="md:max-w-7xl mx-auto px-3 md:px-0 my-5 md:my-32 flex flex-col md:flex-row">
      <div className="md:w-6/12 mb-5 ">
        <img src={leftImage} alt="" className="h-full w-full " />
      </div>
      <div className="md:w-6/12">
        <div className="flex flex-row items-center justify-center">
          {/* cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:ml-3 ">
            {/* card1 */}
            <div className="p-10 bg-[#cfcfcf] rounded-lg shadow-md flex flex-col items-center md:items-start gap-5">
              <div className="">
                <img src={quality1} alt="" className="pr-4 pt4 pb-4" />
              </div>
              <h1 className="text-xl font-black text-green">Quality Product</h1>
              <p className="text-center md:text-start text-[#121212]">
                Our flowers are of the highest quality, carefully selected and
                sourced from reputable
              </p>
            </div>
            {/* 2 */}
            <div className="p-10 bg-[#f8f8f8] rounded-lg shadow-md flex flex-col items-center md:items-start gap-5">
              <div className="">
                <img src={quality2} alt="" className="pr-4 pt4 pb-4" />
              </div>
              <h1 className="text-xl font-black text-green">Quality Product</h1>
              <p className="text-center md:text-start text-[#121212]">
                Our flowers are of the highest quality, carefully selected and
                sourced from reputable
              </p>
            </div>
            {/* 3 */}
            <div className="p-10 bg-white rounded-lg shadow-md flex flex-col items-center md:items-start gap-5">
              <div className="">
                <img src={quality3} alt="" className="pr-4 pt4 pb-4" />
              </div>
              <h1 className="text-xl font-black text-green">Quality Product</h1>
              <p className="text-center md:text-start text-[#121212]">
                Our flowers are of the highest quality, carefully selected and
                sourced from reputable
              </p>
            </div>
            {/* 4 */}
            <div className="p-10 bg-[#cfcfcf] rounded-lg shadow-md flex flex-col items-center md:items-start gap-5">
              <div className="">
                <img src={quality4} alt="" className="pr-4 pt4 pb-4" />
              </div>
              <h1 className="text-xl font-black text-green">Quality Product</h1>
              <p className="text-center md:text-start text-[#121212]">
                Our flowers are of the highest quality, carefully selected and
                sourced from reputable
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default QualityProduct;
