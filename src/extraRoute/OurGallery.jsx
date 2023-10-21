const images = [
  {
    url: "https://i.ibb.co/98v7BJh/375631655-733806792093210-8354745300300176880-n.jpg",
    title: "Shadow Racer",
  },
  {
    url: "https://i.ibb.co/xGh0yyt/313361655-1803877983295866-7283100212749797567-n.jpg",
    title: "Speed Master",
  },
  {
    url: "https://i.ibb.co/GFTshP8/372818396-1763381477452649-6505921298895651822-n.jpg",
    title: "Road Warrior",
  },
  {
    url: "https://i.ibb.co/dKpFh5c/336453718-911298883431158-8139841347805721503-n.jpg",
    title: "Ghost Rider",
  },
];

const OurGallery = () => {
  return (
    <div className="mb-20">
      <h1 className="text-center text-5xl font-bold text-[#EEA72B]">
        Our Riders
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 justify-between lg:px-32 gap-10">
        {images.map((image, index) => (
          <div key={index}>
            <img className="md:h-72 w-full mt-10" src={image.url} alt="" />
            <h1 className="text-center text-xl font-bold">{image.title}</h1>
          </div>
        ))}
      </div>
      ;
    </div>
  );
};

export default OurGallery;
