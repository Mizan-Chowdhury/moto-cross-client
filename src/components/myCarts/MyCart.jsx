import { useContext, useEffect, useState } from "react";
import CartProduct from "./CartProduct";
import Swal from "sweetalert2";
import { AuthContext } from "../../routersAndRoot/AuthProvider";
import ProductError from "../brands/ProductError";

const MyCart = () => {
  const [carts, setCarts] = useState([]);
  const { user, loader } = useContext(AuthContext);

  const currentUser = user?.email;
  console.log(currentUser);
  console.log(carts.length);

  useEffect(() => {
    fetch(
      `https://moto-cross-server-side-p5j6q7cm5-mizan-chowdhurys-projects.vercel.app/cart/${currentUser}`
    )
      .then((res) => res.json())
      .then((data) => setCarts(data));
  }, [currentUser]);

  if (carts.length === 0) {
    return <ProductError></ProductError>;
  }

  // if (loader) {
  //    (
  //       <div className="flex justify-center items-center h-screen">
  //         <span className="loading loading-spinner loading-lg"></span>
  //       </div>
  //     );
  // }

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
          `https://moto-cross-server-side-p5j6q7cm5-mizan-chowdhurys-projects.vercel.app/cart/${_id}`,
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
