import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Adsbaneer = () => {
  const slideImages = [
    {
      url: "https://i.ibb.co/jG2fDTD/dirt-bike-1868996.jpg",
      caption: "DIRT BIKE EVENT OFF ROAD",
      description:
        "Join us every month for our famous motocross bike races.We hold races the third Friday of the month",
    },
    {
      url: "https://i.ibb.co/BCznNHM/motocross-4369374.jpg",
      caption: "NEW TO MOTOCROSS RIDER CLASS",
      description:
        "We offer new rider classes every week. These courses are for all types of riders from newbies to professional racers.",
    },
    {
      url: "https://i.ibb.co/gwBJTMv/motocross-8080377.jpg",
      caption: "MOTOCROSS RUNS FROM",
      description: "1ST JANUARY 2017 - 20TH JULY 2017",
    },
  ];

  const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: 'black',
    height: "100vh",
  };

  const spanStyle = {
    color: "white",
  };

  return (
    <div>
      <Slide>
        {slideImages.map((image, index) => (
          <div key={index}>
            <div
              style={{
                ...divStyle,
                backgroundImage: `url(${image.url})`,
              }}
            >
              <span className="px-5" style={spanStyle}>
                <h1 className="text-5xl text mb-5 font-bold text-[#EEA72B]">{image.caption}</h1>
                <p className="text-xl font-semibold w-1/2 text-white">{image.description}</p>
              </span>
            </div>
            <button>JOIN TODAY</button>
          </div>
          
        ))}
      </Slide>
    </div>
  );
};

export default Adsbaneer;
