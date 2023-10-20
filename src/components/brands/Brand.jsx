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
       <div className="lg:p-32 px-3 py-20 bg-[#F2F2F2]">
        <h1 className="text-center text-5xl font-bold text-[#EEA72B] mb-5">Our Trusted Brands</h1>
        <p className="text-center text-lg font-semibold mb-20">Explore top bike brands known for style, performance, and innovation on out platform</p>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {
                brands.map(brand=> <Link to={`/brand/${brand.brand_name}`}  key={brand.id} ><BrandCards brand={brand}></BrandCards></Link>)
            }
        </div>
       </div>
    );
};

export default Brand;