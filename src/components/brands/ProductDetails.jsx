import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const { name, brand, photo, type, price, description } = useLoaderData();
  return (
    <div className="px-28 flex items-center justify-center h-screen">
      <div className="flex items-center justify-between">
        <figure className="flex-1">
          <img className="h-96 mx-auto" src={photo} alt="Album" />
          <h2 className="text-center text-2xl font-bold">{name}</h2>
        </figure>
        <div className="flex-1">
          <p className="text-lg font-medium">{description}</p>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
