import axios from "axios";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllProductsCard from "./AllProductsCard";

const AllProducts = () => {
  const [products, setProducts] = useState();
  const [itemsPerPages, setItemsPerPages] = useState(4);
  const [currenPage, setCurrentPage] = useState(0);
  const { result } = useLoaderData();
  const numberOfPages = Math.ceil(result / itemsPerPages);

  const pages = [...Array(numberOfPages).keys()];

  useEffect(() => {
    axios
      .get(
        `https://moto-cross-server-side.vercel.app/allProducts?page=${currenPage}&size=${itemsPerPages}`
      )
      .then((res) => {
        setProducts(res.data);
      });
  }, [currenPage, itemsPerPages]);

  const handlePaginasion = (e) => {
    const val = parseInt(e.target.value);
    setItemsPerPages(val);
    setCurrentPage(0);
  };

  const handlePrePage = () => {
    if (currenPage > 0) {
      setCurrentPage(currenPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currenPage < pages.length - 1) {
      setCurrentPage(currenPage + 1);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-4 w-11/12 mx-auto gap-10">
        {products?.map((product) => (
          <AllProductsCard
            key={product._id}
            product={product}
          ></AllProductsCard>
        ))}
      </div>
      <p className="text-center">The curren page is : {currenPage}</p>

      <div className="flex justify-center gap-2">
        <button className="btn" onClick={handlePrePage}>
          Previous
        </button>
        {pages.map((page) => (
          <button
            className={`btn ${currenPage === page && "bg-[#EEA72B]"}`}
            key={page}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        ))}
        <button className="btn" onClick={handleNextPage}>
          Next
        </button>
        <select
          defaultValue={itemsPerPages}
          onChange={handlePaginasion}
          name=""
          id=""
        >
          <option value="4">4</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
      </div>
    </div>
  );
};

export default AllProducts;
