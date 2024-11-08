import { FaRegHeart } from "react-icons/fa";
import { GoHeartFill } from "react-icons/go";

const Card = ({ image, title, netPrice, price }) => {
  return (
    <div className="col-span-3 flex flex-col justify-center gap-5 shadow-md drop-shadow-md p-3 ">
      {/* img */}
      <div className="  relative ">
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover rounded-t-md"
        />
        <div className="absolute top-2 right-2 bg-white p-2 rounded-full group">
          <GoHeartFill className="h-6 w-6 hidden group-hover:block text-black" />
          <FaRegHeart className="h-6 w-6 group-hover:hidden text-black" />
        </div>
      </div>
      {/* bottom */}
      <div className="flex flex-row justify-between items-center">
        <div className="">
          <h3 className="font-black text-lg text-[#285A43]">{title}</h3>
          <div className="text-gray-500 flex flex-row gap-2 justify-start items-center">
            <p className="line-through">(${price})</p>
            <span className="text-[#285A43] text-xl font-bold">
              ${netPrice}
            </span>
          </div>
        </div>
        {/* button */}
        <div className="text-center">
          <button className="hover:bg-green text-black hover:text-white rounded-md px-6 py-2 text-xs font-black border border-green">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
