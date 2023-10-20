const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(https://i.ibb.co/wgNx4CN/enduro-2361875.jpg)",
      }}
    >
      <div className="hero-overlay bg-black bg-opacity-60"></div>
      <div className="text-[#d8d8d8]">
        <div className="max-w-2xl px-4">
          <p className="mb-5 text-3xl font-bold">Revving into the Dirt:</p>
          <h1 className="mb-5 text-5xl font-bold">
            <span className="text-[#EEA72B]">The World of Motocross</span>{" "}
          </h1>
          <p className="mb-5 ">
            Experience the thrill and adrenaline-fueled world of motocross with
            our auto page, learn about the latest models, techniques, and riders
            pushing the limits on the toughest terrains.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
