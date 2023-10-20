const BrandCards = ({ brand }) => {
  const { image, brand_name } = brand;

  return (
    <div>
      <div className="card bg-base-100 shadow-2xl">
        <figure className="p-10">
          <img
          className="h-52"
            src={image}
            alt=""
          />
        </figure>
        <div className="bg-[#253241] text-white text-center py-5">
          <h2 className="font-bold text-2xl text-[#EEA72B]">
            {brand_name}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default BrandCards;
