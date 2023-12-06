import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../components/Home";
import MyProduct from "../components/AddProduct";
import Login from "../components/Login";
import BrandProducts from "../components/brands/BrandProducts";
import ProductDetails from "../components/brands/ProductDetails";
import MyCart from "../components/myCarts/MyCart";
import Register from "../components/Register";
import PrivateRouter from "./PrivateRouter";
import Error from "../components/Error";
import UpdateForm from "../components/updateProduct/UpdateForm";
import AllProducts from "../components/allProducts/AllProducts";

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/product",
        element: (
          <PrivateRouter>
            <MyProduct></MyProduct>
          </PrivateRouter>
        ),
      },
      {
        path: "/allProducts",
        element: (
          <PrivateRouter>
            <AllProducts></AllProducts>
          </PrivateRouter>
        ),
        loader: () => fetch("https://moto-cross-server-side.vercel.app/count"),
      },
      {
        path: "/brand/:name",
        element: <BrandProducts></BrandProducts>,
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRouter>
            <ProductDetails></ProductDetails>
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(
            `https://moto-cross-server-side.vercel.app/product/${params.id}`
          ),
      },
      {
        path: "/cart",
        element: (
          <PrivateRouter>
            <MyCart></MyCart>
          </PrivateRouter>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRouter>
            <UpdateForm></UpdateForm>
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(
            `https://moto-cross-server-side.vercel.app/product/${params.id}`
          ),
      },
    ],
  },
]);

export default myRouter;
