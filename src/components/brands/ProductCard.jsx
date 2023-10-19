import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { _id, name, photo, type, brand, price, rating, description } = product;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure className="md:h-60">
          <img className="h-full w-full" src={photo} alt="" />
        </figure>
        <div className="p-5">
          <h2 className="card-title">
            {name}
          </h2>
          <p className="my-3 text-sm">
            {description.length > 100 ? description.slice(0, 100) : description}
            ...
          </p>
          <div className="flex justify-between">
            <div className="">
                <p><span className="font-semibold">Brand</span> : {brand}</p>
                <p><span className="font-semibold">Type</span> : {type}</p>
            </div>
            <div className="border-l-2 pl-5">
            <p><span className="font-semibold">Price</span> : ${price}</p>
            <p><span className="font-semibold">Rating</span> : {rating}</p>
            </div>
          </div>
          <div className="flex items-center justify-between mt-5 text-lg font-semibold">
            <Link to={`/details/${_id}`} className="text-[#EEA72B]">Detail</Link>
            <Link to={`/update/${_id}`} className="bg-[#EEA72B] px-2 rounded-lg">Update</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
