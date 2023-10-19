const CartProduct = ({ cart,handleDelete }) => {
  const {_id, name, brand, photo, type, price, description, rating } = cart;

   

  return (
    <div>
      <div className="card bg-base-100 shadow-xl p-3">
        <figure className="md:h-60">
          <img className="h-full w-full" src={photo} alt="" />
        </figure>
        <div className="px-4">
          <h2 className="card-title mb-5">{name}</h2>
          <div className="flex justify-between">
            <div>
              <p>
                <span className="font-semibold">Brand</span> : {brand}
              </p>
              <p>
                <span className="font-semibold">Type</span> : {type}
              </p>
            </div>
            <div className="border-l-2 pl-5">
              <p>
                <span className="font-semibold">Price</span> : ${price}
              </p>
              <p>
                <span className="font-semibold">Rating</span> : {rating}
              </p>
            </div>
          </div>
        </div>
        <div>
          <button onClick={()=> handleDelete(_id)} className="btn w-full bg-[#EEA72B] font-bold mt-5">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
