import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../components/Home";
import MyProduct from "../components/AddProduct";
import Login from "../components/Login";
import BrandProducts from "../components/brands/BrandProducts";
import ProductDetails from "../components/brands/ProductDetails";
import MyCart from "../components/myCarts/MyCart";
import UpdateForm from "../components/myCarts/updateProduct/UpdateForm";

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
                element: <MyCart></MyCart>,
                loader: ()=>  fetch('http://localhost:5000/cart')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/update/:id',
                element: <UpdateForm></UpdateForm>
            }
        ]
    }
])

export default myRouter;