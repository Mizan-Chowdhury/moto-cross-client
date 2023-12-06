import { useLoaderData, useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import Adsbaneer from "../banner/Adsbaneer";
import ProductError from "./ProductError";
import axios from "axios";
import { useEffect, useState } from "react";

const BrandProducts = () => {
  const brand = useParams();
  const [products, setProducts] = useState();

  useEffect(() => {
    axios
      .get(
        `https://moto-cross-server-side.vercel.app/products?brand=${brand.name}`,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      });
  }, [brand.name]);

  if (products?.length === 0) {
    return (
      <>
        <Adsbaneer></Adsbaneer>
        <ProductError></ProductError>
      </>
    );
  }

  return (
    <div className="mb-32">
      <Adsbaneer></Adsbaneer>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-32 px-3">
        {products?.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default BrandProducts;
