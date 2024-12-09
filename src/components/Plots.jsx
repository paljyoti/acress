import image1 from "../../src/assets/pexels-binyaminmellish-186077.jpg";
import image2 from "../../src/assets/pexels-sevenstormphotography-443378.jpg";
import image3 from "../../src/assets/pexels-pixabay-258160.jpg";
import image4 from "../../src/assets/pexels-pixabay-273209.jpg";
import image5 from "../../src/assets/pexels-binyaminmellish-186077.jpg"; 
import image6 from "../../src/assets/pexels-vika-glitter-392079-1648776.jpg";  

function Plots() {
  const plots = [
    { id: 1, image: image1, title: "Residential", description: "Project" },
    { id: 2, image: image2, title: "Commercial", description: "Project" },
    { id: 3, image: image3, title: "Plots 3", description: "SCO" },
    { id: 4, image: image4, title: "Builder & Independent", description: "FLOOR" },
    { id: 5, image: image5, title: "Plots in", description: "GURUGRAM" },
    { id: 6, image: image6, title: "Luxury", description: "VILLAS" },
  ];

  return (
    <div className="pl-14 pr-14">
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
  );
}

export default Plots;
