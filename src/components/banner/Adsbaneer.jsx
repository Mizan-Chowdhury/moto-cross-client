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
            className=""
              style={{
                ...divStyle,
                backgroundImage: `url(${image.url})`,
              }}
            >
              <span className="md:p-20 p-5 bg-black bg-opacity-40" style={spanStyle}>
                <h1 className="text-5xl text mb-5 font-bold text-[#EEA72B]">{image.caption}</h1>
                <p className="text-xl font-semibold md:w-2/3 text-[#d8d8d8]">{image.description}</p>
              </span>
            </div>
          </div>
          
        ))}
      </Slide>
    </div>
  );
};

export default Adsbaneer;
