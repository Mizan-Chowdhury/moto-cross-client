import { useEffect, useState } from "react";
import MotoShopCards from "./MotoShopCards";

const MotoShop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("./motoShop.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="my-20">
      <h1 className="text-center text-5xl font-bold text-[#EEA72B] mb-20">
        Our Merchandise
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 lg:px-40 gap-10">
        {products.map((product) => (
          <MotoShopCards key={product.id} product={product}></MotoShopCards>
        ))}
      </div>
    </div>
  );
};

export default MotoShop;
