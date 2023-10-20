const BrandCards = ({ brand }) => {
  const { image, brand_name } = brand;

  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={image}
            alt=""
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-[#EEA72B] text-3xl" >{brand_name}</h2>
        </div>
      </div>
    </div>
  );
};

export default BrandCards;
