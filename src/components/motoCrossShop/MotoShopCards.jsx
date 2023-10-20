const MotoShopCards = ({product}) => {
    const {product_name,image, price } = product
    return (
        <div className="p-5 shadow-2xl">
            <div>
                <img className="h-64 mx-auto" src={image} alt="" />
            </div>
            <div className="space-y-2 mt-3">
                <h1 className="font-bold text-xl">{product_name}</h1>
                <p className="text-[#EEA72B] font-bold text-lg">${price}</p>
                <button className="btn hover:bg-[#EEA72B] w-full bg-[#1F1F1F] text-white py-2 font-semibold">ADD TO CART</button>
            </div>
        </div>
    );
};

export default MotoShopCards;