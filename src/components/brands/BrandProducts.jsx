import { useLoaderData, useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import Adsbaneer from "../banner/Adsbaneer";
import ProductError from "./ProductError";

const BrandProducts = () => {
  const brand = useParams();
  const products = useLoaderData();

  if (products.length < 0) {
    return (
      <>
        <Adsbaneer></Adsbaneer>
        <ProductError></ProductError>
      </>
    );
  }

  const brandProduct = products.filter(
    (product) => product.brand === brand.name
  );

  return (
    <div className="mb-32">
      <Adsbaneer></Adsbaneer>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-32 px-3 lg:px-32">
        {brandProduct.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default BrandProducts;
