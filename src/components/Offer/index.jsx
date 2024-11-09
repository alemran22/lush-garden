import Card from "./Card";
import cardData from "./Card/cardData";
const Offer = () => {
  return (
    <div className="max-w-7xl w-full mx-auto px-5 md:px-24">
      <h2 className="text-2xl md:text-4xl font-semibold text-green mb-9 text-center">
        What We Offer To You
      </h2>
      {/* card container */}
      <div className="grid grid-cols-12 gap-4">
        {cardData.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Offer;
