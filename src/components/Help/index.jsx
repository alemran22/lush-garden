import indoorImg from "../../assets/images/Indoor_Plant.png";
import outdoorImg from "../../assets/images/Outdoor_Plant.png";
const Help = () => {
  return (
    <div className="max-w-7xl w-full mx-auto p-24 ">
      {/* text section */}
      <div className="flex flex-row justify-between gap-12 ">
        <div className="w-[45%]">
          <h2 className="text-4xl text-green">
            We Help To Choose The Most Suitable Plants For You
          </h2>
        </div>
        <div className="w-[55%]">
          <p className="text-base font-medium">
            Our selection includes a wide variety of flowers, from classic roses
            to exotic orchids, as well as a variety of lush indoor and outdoor
            plants and also offer unique floral arrangements that are perfect
            for any occasion, whether you&apos;re looking to brighten up your
            home or send a thoughtful gift.
          </p>
        </div>
      </div>
      {/* card section */}
      <div className="flex flex-row justify-between gap-10 mt-20">
        <div className="w-full flex flex-col p-7 ">
          <img src={indoorImg} alt="" className="h-[95px] w-[61px]" />
          <p className="text-xl font-black my-5">Indoor Plants</p>
          <p className="text-base font-semibold">
            Bring the beauty of nature to your outdoor spaces with our wide
            selection of outdoor plants
          </p>
        </div>
        <div className="w-full flex flex-col p-7 bg-green rounded-xl">
          <img src={outdoorImg} alt="" className="h-[95px] w-[61px]" />
          <p className="text-xl font-black my-5">Outdoor Plants</p>
          <p className="text-base font-semibold text-wrap">
            Bring a touch of greenery to your living spaces with our collection
            of indoor plants, perfect for purifying the air and adding a natural
            touch to your home.
          </p>
        </div>
        <div className="w-full flex flex-col p-7 ">
          <img src={indoorImg} alt="" className="h-[95px] w-[61px]" />
          <p className="text-xl font-black my-5">Plant Pots</p>
          <p className="text-base font-semibold">
            Add a touch of style to your indoor or outdoor spaces with our
            collection of pots plants, available in a variety of sizes and
            designs to fit any decor
          </p>
        </div>
      </div>
    </div>
  );
};

export default Help;
