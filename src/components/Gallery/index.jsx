import gallery1 from "../../assets/images/pexels-cottonbro-studio-4507715 1.png";
import gallery2 from "../../assets/images/pexels-cottonbro-studio-4507715 2.png";
import gallery3 from "../../assets/images/pexels-cottonbro-studio-4507715 3.png";
import gallery4 from "../../assets/images/pexels-cottonbro-studio-4507715 4.png";
import gallery5 from "../../assets/images/pexels-cottonbro-studio-4507715 5.png";
const Gallery = () => {
  return (
    <div className="max-w-7xl w-full px-3 md:px-0 py-7 md:py-14  mx-auto">
      <h1 className="font-semibold text-green text-2xl md:text-4xl text-center mb-3 md:mb-10 ">
        Our Gallery View
      </h1>
      <div className="grid md:grid-cols-12 md:grid-rows-12 gap-5 md:px-0">
        {/* 1 */}
        <div className="col-span-12 md:col-span-4 md:row-span-12">
          <img src={gallery1} alt="" className="w-full h-full" />
        </div>
        {/* 2 */}
        <div className="col-span-12 row-span-12 md:row-span-6 md:col-span-4">
          <img src={gallery2} alt="" className="w-full" />
        </div>
        {/* 3 */}
        <div className="col-span-12 row-span-12 md:row-span-6 md:col-span-4">
          <img src={gallery3} alt="" className="w-full" />
        </div>
        {/* 4 */}
        <div className="col-span-12 row-span-12 md:row-span-6 md:col-span-4">
          <img src={gallery4} alt="" className="w-full" />
        </div>
        {/* 5 */}
        <div className="col-span-12 row-span-12 md:row-span-6 md:col-span-4">
          <img src={gallery5} alt="" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
