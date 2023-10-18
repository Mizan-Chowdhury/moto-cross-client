import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../components/Home";
import MyProduct from "../components/AddProduct";
import MyCart from "../components/MyCart";
import Login from "../components/Login";
import BrandProducts from "../components/brands/BrandProducts";
import ProductDetails from "../components/brands/ProductDetails";

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
                path: '/details/:id',
                element: <ProductDetails></ProductDetails>,
                loader: ({params})=> fetch(`http://localhost:5000/product/${params.id}`)
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