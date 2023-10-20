const ProductError = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-3">
      <h1 className="text-6xl font-bold">Oops!</h1>
      <p className="text-xl">We are sorry, but there are currently no available products to display on this page. Please add a product</p>
    </div>
  );
};

export default ProductError;
