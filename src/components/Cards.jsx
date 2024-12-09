import image1 from "../../src/assets/pexels-olly-932328.jpg";
import image2 from "../../src/assets/pexels-minan1398-941195.jpg";
import image3 from "../../src/assets/pexels-lkloeppel-466685.jpg";
import image4 from "../../src/assets/pexels-binyaminmellish-1500459.jpg";
import image5 from "../../src/assets/pexels-binyaminmellish-186077.jpg";
import image6 from "../../src/assets/pexels-sevenstormphotography-443378.jpg";
import image7 from "../../src/assets/pexels-pixabay-258160.jpg";
import image8 from "../../src/assets/pexels-pixabay-273209.jpg";


const Cards = () => {
  const cards = [
    {
      id: 1,
      image: image1,
      title: "4S The Aurrum",
      para: "Gurugram, Haryana",
      description: "Sector 59, Golf Course Extn Road ",
      last: "Residential Flats",
      rating: "₹3.28 - 5.92 Cr",
    },
    {
      id: 2,
      image: image2,
      title: " Trinity Infratech 88B",
      para: "Gurugram, Haryana",
      description: "Sector 88B, Dwarka Expressway",
      last: "Residential Flats",
      rating: " ₹4.86 - 6.68 Cr",
    },
    {
      id: 3,
      image: image3,
      title: "Godrej Miraya",
      para: "Gurugram, Haryana",
      description: "Sector 43, Golf Course Road",
      last: "Residential Flats",
      rating: " ₹9.49 - 14.64 Cr",
    },
    {
      id: 4,
      image: image4,
      title: "Trevoc Royal Residences",
      para: "Gurugram, Haryana",
      description: "Sector 56, Golf Course Road",
      last: "Residential Flats",
      rating: "₹6.21 - 7.94 Cr",
    },
    {
      id: 5,
      image: image5,
      title: " Emaar Amaris - Digi Homes 2",
      para: "Gurugram, Haryana",
      description: "Sector 62, Golf Course Extn Road ",
      last: "Residential Flats",
      rating: "₹4.24 - 6.1 Cr",
    },
    {
      id: 6,
      image: image6,
      title: "Krisumi Waterside Residences",
      para: "Gurugram, Haryana",
      description: "Sector 36A, Dwarka Expressway",
      last: "Residential Flats",
      rating: "₹2.2 - 14.5 Cr",
    },
    {
      id: 7,
      image: image7,
      title: " Signature Global Twin Tower DXP",
      para: "Gurugram, Haryana",
      description: "Sector 84, Dwarka Expressway",
      last: "Residential Flats",
      rating: " ₹5.57 - 7.95 Cr",
    },

    {
      id: 8,
      image: image8,
      title: "Conscient ParQ",
      para: "Gurugram, Haryana",
      description: "Sector 80, Northern Peripheral Road",
      last: "Residential Flats",
      rating: "₹2.82 - 4.13 Cr",
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl pt-8 pl-4 font-semibold text-gray-800">
        Trending Properties in Gurugram
      </h1>
      <div className="py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              {card.image && (
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-48 sm:h-56 object-cover"
                />
              )}
              <div className="p-4">
                <h3 className="text-md font-bold text-red-500">
                  {card.title}
                </h3>
                <p className="text-gray-600 mb-3">{card.para}</p>
                <hr />
                <p className="text-gray-600">{card.description}</p>
                <p className="font-semibold mb-2">{card.last}</p>
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

export default Cards;
