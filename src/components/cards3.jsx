import image1 from "../../src/assets/pexels-vika-glitter-392079-1648776.jpg";
import image2 from "../../src/assets/pexels-jessica-bryant-592135-1370704.jpg";
import image3 from "../../src/assets/pexels-curtis-adams-1694007-3935333.jpg";
import image4 from "../../src/assets/pexels-alex-staudinger-829197-1732414.jpg";

const Cards3 = () => {
  const cards = [
    {
      id: 1,
      image: image1,
      title: "Elan Imperial",
      para: "Gurugram, Haryana",
      description: "Sector 82, Dwarka Expressway",
      last: "Commercial Property",
      rating: "₹1.43 Cr - 1.85 Cr",
    },
    {
      id: 2,
      image: image2,
      title: "Omaxe State Dwarka",
      para: "Gurugram, Haryana",
      description: "Sector 19B, Dwarka Delhi",
      last: "Commercial Property",
      rating: "₹25 L- 50 Cr",
    },
    {
      id: 3,
      image: image3,
      title: "M3M Jewel",
      para: "Gurugram, Haryana",
      description: "Sector 25, MG Road Gurugram",
      last: "Commercial Property",
      rating: "₹2.5 Cr - 4.55 Cr",
    },
    {
      id: 4,
      image: image4,
      title: "MVN Mall",
      para: "Gurugram, Haryana",
      description: "Sector 37D, Dwarka Expressway Gurugram",
      last: "Commercial Property",
      rating: "₹54 L- 5 Cr",
    },
  ];

  return (
    <div className="bg-blue-950 pb-14">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl pt-8 pb-4 font-semibold text-white">
          Commercial Projects in Delhi NCR
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              {card.image && (
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <h3 className="text-sm sm:text-sm font-bold text-red-500">
                  {card.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3">
                  {card.para}
                </p>
                <hr />
                <p className="text-sm sm:text-sm text-gray-600">
                  {card.description}
                </p>
                <p className="text-sm sm:text-base font-semibold mb-2">
                  {card.last}
                </p>
                <hr />
                <div className="flex items-center justify-between mt-4">
                  <span className="text-red-500 font-bold">{card.rating}</span>
                  <button className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 transition">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards3;
