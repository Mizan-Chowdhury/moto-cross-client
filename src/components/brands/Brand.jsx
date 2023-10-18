import { useEffect, useState } from "react";
import BrandCards from "./BrandCards";
import { Link } from "react-router-dom";

const Brand = () => {
    const [brands, setBrands] = useState([]);

    useEffect(()=>{
        fetch('./brand.json')
        .then(res=> res.json())
        .then(data=> {
            setBrands(data);
        })
    },[])
    

    return (
       <div className="lg:m-32 px-3 my-20">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {
                brands.map(brand=> <Link to={`/brand/${brand.brand_name}`}  key={brand.id} ><BrandCards brand={brand}></BrandCards></Link>)
            }
        </div>
       </div>
    );
};

export default Brand;