const BrandCards = ({ brand }) => {
  const { image, brand_name } = brand;

  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img
          className="h-52"
            src={image}
            alt=""
          />
        </figure>
        <div className="bg-[#253241] text-white text-center py-8">
          <h2 className="text-bold">
            {brand_name}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default BrandCards;
