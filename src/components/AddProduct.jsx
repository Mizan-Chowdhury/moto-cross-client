import Swal from "sweetalert2";

const MyProduct = () => {
  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const photo = form.photo.value;
    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;

    const newProduct = {
      photo,
      name,
      brand,
      type,
      price,
      description,
      rating,
    };
    console.log(newProduct);
    fetch("https://moto-cross-server-side.vercel.app/product", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data) {
          Swal.fire("Good job!", "You added the product!", "success");
          form.reset();
        }
      });
  };

  return (
    <div className="bg-[#F4F3F0] px-5 py-32 lg:px-32">
      <h1 className="text-center text-2xl md:text-4xl font-bold">
        Add New Product
      </h1>
      <form onSubmit={handleForm}>
        <div className="form-control w-full">
          <label className="label">
            <span className="font-semibold">Photo url</span>
          </label>
          <input
            required
            type="text"
            name="photo"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        <div className="md:flex gap-10">
          <div className="form-control w-full">
            <label className="label">
              <span className="font-semibold">Product name</span>
            </label>
            <input
              required
              type="text"
              name="name"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="font-semibold">Brand name</span>
            </label>
            <select className="select select-bordered w-full" name="brand">
              <option selected>Yamaha</option>
              <option>Suzuki</option>
              <option>TVS Apache</option>
              <option>Bajaj</option>
              <option>Honda</option>
              <option>KTM</option>
            </select>
          </div>
        </div>
        <div className="md:flex gap-10">
          <div className="form-control w-full">
            <label className="label">
              <span className="font-semibold">Product type</span>
            </label>
            <select className="select select-bordered w-full" name="type">
              <option selected>Sport bike</option>
              <option>Naked bike</option>
              <option>Touring bike</option>
              <option>Cross</option>
              <option>Chopper</option>
              <option>Scooter</option>
            </select>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="font-semibold">Price</span>
            </label>
            <input
              required
              type="text"
              name="price"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="md:flex gap-10">
          <div className="form-control w-full">
            <label className="label">
              <span className="font-semibold">Short description</span>
            </label>
            <input
              required
              type="text"
              name="description"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="font-semibold">Rating</span>
            </label>
            <input
              required
              type="text"
              name="rating"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div>
          <input
            className="bg-[#EEA72B] w-full mt-10 py-2 btn"
            type="submit"
            value="Add"
          />
        </div>
      </form>
    </div>
  );
};

export default MyProduct;
