import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../routersAndRoot/AuthProvider";

const ProductDetails = () => {
  const { user } = useContext(AuthContext);
  const { name, brand, photo, type, price, description, rating } =
    useLoaderData();

  console.log(user.email);
  const currentUser = user?.email;

  const cartProduct = {
    currentUser,
    name,
    brand,
    photo,
    type,
    price,
    description,
    rating,
  };
  // https://moto-cross-server-side-p5j6q7cm5-mizan-chowdhurys-projects.vercel.app

  const handleAddProduct = (product) => {
    fetch(
      "https://moto-cross-server-side-p5j6q7cm5-mizan-chowdhurys-projects.vercel.app/cart",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(product),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data) {
          Swal.fire("Good job!", "You added the product!", "success");
        }
      });

    console.log(product);
  };

  return (
    <div className=" md:grid grid-cols-3 items-center py-20 px-5 lg:px-28">
      <div className="col-span-2">
        <figure>
          <img className="md:w-2/3 mx-auto" src={photo} alt="" />
          <h2 className="text-center text-3xl font-bold mt-5">{name}</h2>
        </figure>
      </div>

      <div className="col-span-1 mt-20 md:mt-10">
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-3">Bike description</h2>
          <p className="text-md font-medium text-[#706F6F]">{description}</p>
        </div>
        <div className="mt-8">
          <h1 className="text-2xl font-semibold mb-3">Bike Informations</h1>
          <div className="border-2 p-3 space-y-2 rounded-lg border-[#EEA72B]">
            <div className="flex justify-between">
              <p>Brand :</p>
              <p className="font-semibold">{brand}</p>
            </div>
            <div className="flex justify-between">
              <p>Type :</p>
              <p className="font-semibold">{type}</p>
            </div>
            <div className="flex justify-between">
              <p>Rating :</p>
              <p className="font-semibold">{rating}</p>
            </div>
            <div className="flex justify-between">
              <p>Price :</p>
              <p className="font-semibold">{price}</p>
            </div>
          </div>
        </div>
        <button
          onClick={() => handleAddProduct(cartProduct)}
          className="btn bg-[#EEA72B] w-full"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
