import image from "../../src/assets/pexels-pixabay-280229.jpg";
import image1 from "../../src/assets/pexels-pixabay-259588.jpg";
import image2 from "../../src/assets/pexels-pixabay-280222.jpg";
import image3 from "../../src/assets/pexels-binyaminmellish-1396132.jpg";



const Cards1 = () => {
    const cards = [
      {
        id: 1,
        image: image,
        title: "Tarc Ishva",
        para: "Gurugram, Haryana",
        description: "Sector 63A, Southern Peripheral Road",
        last: "Residential Flats",
        rating: "₹6.45 Cr - 8.45 Cr",
      },
      {
        id: 2,
        image: image1,
        title: "Whiteland Westin Residences",
        para: "Gurugram, Haryana",
        description: "Sector 103, Dwarka Expressway",
        last: "Residential Flats",
        rating: "₹5.94 Cr - 12.15 Cr",
      },
      {
        id: 3,
        image: image2,
        title: " Emaar Amaris - Digi Homes 2",
        para: "Gurugram, Haryana",
        description: "Sector 62, Golf Course Extn Road ",
        last: "Residential Flats",
        rating: "₹4.24 - 6.1 Cr",
      },
      {
        id: 4,
        image: image3,
        title: "Trump Towers 2",
        para: "Gurugram, Haryana",
        description: "Sector 69, Southern Peripheral Road",
        last: "Residential Flats",
        rating: "₹7.5 - 10 Cr",
      },
    ];
  
    return (
      <div className="bg-pink-200 pb-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl pt-8 pb-4 font-semibold text-gray-800">
            Upcoming Projects in Gurugram
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
                  <h3 className="text-sm sm:text-md font-bold text-red-500">
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
                  <hr/>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-red-500 font-bold">
                     {card.rating}
                    </span>
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
  
  export default Cards1;
  