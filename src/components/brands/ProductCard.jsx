const ProductCard = ({product}) => {
    const {name, photo, type, brand} = product;
    return (
        <div>
            <p>{brand}{name}</p>
            <img src={photo} alt="" />
        </div>
    );
};

export default ProductCard;