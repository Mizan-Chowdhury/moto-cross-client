import { useState } from "react";
import CartProduct from "./CartProduct";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyCart = () => {
  const loadedCart = useLoaderData();
  const [carts, setCarts] = useState(loadedCart);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://moto-cross-server-side-m3zxac7gg-mizan-chowdhurys-projects.vercel.app/cart/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            const remaining = carts.filter((cart) => cart._id !== _id);
            setCarts(remaining);
          });
      }
    });
    console.log(_id);
  };

  return (
    <div className="py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center px-4 lg:px-28">
        {carts.map((cart) => (
          <CartProduct
            key={cart._id}
            cart={cart}
            handleDelete={handleDelete}
          ></CartProduct>
        ))}
      </div>
    </div>
  );
};

export default MyCart;
