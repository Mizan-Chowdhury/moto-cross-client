import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../components/Home";
import MyProduct from "../components/AddProduct";
import MyCart from "../components/MyCart";
import Login from "../components/Login";
import BrandProducts from "../components/brands/BrandProducts";

const myRouter = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/product',
                element: <MyProduct></MyProduct>
            },
            {
                path: '/brand/:name',
                element: <BrandProducts></BrandProducts>,
                loader: ()=> fetch(`http://localhost:5000/product`)
            },
            {
                path: '/cart',
                element: <MyCart></MyCart>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
])

export default myRouter;