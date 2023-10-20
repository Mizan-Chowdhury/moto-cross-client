const OurAim = () => {
  return (
    <div className="md:flex items-center gap-20 lg:px-32 py-20">
      <div className="flex-1" data-aos="zoom-in">
        <img
          className="float-right"
          src="https://i.ibb.co/xCb9rBr/action-1854040.jpg"
          alt=""
        />
      </div>
      <div className="flex-1 px-4" data-aos="zoom-in">
        <h1 className="text-4xl md:text-5xl font-bold">
          Our aim is to provide <br /> great racing!
        </h1>
        <p className="my-5">
          We and the rest of the team love to ride off road, to most of us it is
          more than just a hobby and has become a passion. We appreciate that
          there are many different types, ages and levels of riders and try to
          make all of our events as accessible and enjoyable for the novice as
          they are for the expert level rider.
        </p>
        <button className="btn bg-[#EEA72B]">visit us</button>
      </div>
    </div>
  );
};

export default OurAim;
