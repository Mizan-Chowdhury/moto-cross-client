import { useLoaderData, useParams } from "react-router-dom";
import ProductCard from "./ProductCard";

const BrandProducts = () => {
  const brand = useParams();
  const products = useLoaderData();

  const brandProduct = products.filter((product) => product.brand === brand.name);
  console.log(brandProduct);

  return <div>
    {
        brandProduct.map(product=> <ProductCard key={product._id} product={product}></ProductCard>)
    }
  </div>;
};

export default BrandProducts;
