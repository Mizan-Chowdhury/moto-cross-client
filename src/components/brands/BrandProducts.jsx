import { useLoaderData, useParams } from "react-router-dom";
import ProductCard from "./ProductCard";

const BrandProducts = () => {
  const brand = useParams();
  const products = useLoaderData();

  const brandProduct = products.filter(
    (product) => product.brand === brand.name
  );

  return (
    <div className="py-32 px-3 lg:px-20">







      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {brandProduct.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default BrandProducts;
