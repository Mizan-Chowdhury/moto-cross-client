import axios from "axios";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllProductsCard from "./AllProductsCard";

const AllProducts = () => {
  const [products, setProducts] = useState();
  const [itemsPerPages, setItemsPerPages] = useState(5);
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
    <div className="py-32">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products?.map((product) => (
          <AllProductsCard
            key={product._id}
            product={product}
          ></AllProductsCard>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-2 mt-20">
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
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
      </div>
    </div>
  );
};

export default AllProducts;
