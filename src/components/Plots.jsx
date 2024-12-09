import image1 from "../../src/assets/pexels-binyaminmellish-186077.jpg";
import image2 from "../../src/assets/pexels-sevenstormphotography-443378.jpg";
import image3 from "../../src/assets/pexels-pixabay-258160.jpg";
import image4 from "../../src/assets/pexels-pixabay-273209.jpg";
import image5 from "../../src/assets/pexels-binyaminmellish-186077.jpg"; 
import image6 from "../../src/assets/pexels-vika-glitter-392079-1648776.jpg";  


import image7 from "../../src/assets/pexels-pixabay-280229.jpg";
import image8 from "../../src/assets/pexels-expect-best-79873-323780.jpg";
import image9 from "../../src/assets/pexels-pixabay-162539.jpg";
import image10 from "../../src/assets/pexels-pixabay-302769.jpg";




function Plots() {
  const plots = [
    { id: 1, image: image1, title: "Residential", description: "Project" },
    { id: 2, image: image2, title: "Commercial", description: "Project" },
    { id: 3, image: image3, title: "Plots 3", description: "SCO" },
    { id: 4, image: image4, title: "Builder & Independent", description: "FLOOR" },
    { id: 5, image: image5, title: "Plots in", description: "GURUGRAM" },
    { id: 6, image: image6, title: "Luxury", description: "VILLAS" },
  ];


  const cards = [
    {
      title: "Signature",
      description: "Sidhrawali Plots",
      image: image7,
    },
    {
      title: "BPTP",
      description: "Limited",
      image: image8,
    },
    {
      title: "ORRIS",
      description: "Group",
      image: image9,
    },
    {
      title: "JMS",
      description: "Group",
      image: image10,
    },
  ];



  return (
    <div>
    <div className="pl-14 pr-14 pb-6">
      <h1 className="text-3xl font-bold text-left pt-5 mb-6">Dream Property In The Heart of Gurugram</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {plots.map((plot) => (
          <div
            key={plot.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
          >
            <div className="relative group">
              <img
                src={plot.image}
                alt={plot.title}
                className="w-full h-48 object-cover group-hover:scale-110 transition-all duration-300"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-center p-4">
                <div>
                  <h2 className="text-xl ">{plot.title}</h2>
                  <p className="text-2xl font-bold">{plot.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="container mx-auto p-4">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl pt-8 pl-4 pb-5 font-bold text-gray-800">
        Budget Plots in Gurugram
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={card.image}
              alt={card.title}
              className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center  transition-opacity duration-300">
              <h2 className="text-white text-lg">{card.title}</h2>
              <p className="text-white text-2xl font-bold mt-2 text-center">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>

    </div>
  );
}

export default Plots;
