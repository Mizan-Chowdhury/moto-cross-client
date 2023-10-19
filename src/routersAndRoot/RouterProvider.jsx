import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../components/Home";
import MyProduct from "../components/AddProduct";
import Login from "../components/Login";
import BrandProducts from "../components/brands/BrandProducts";
import ProductDetails from "../components/brands/ProductDetails";
import MyCart from "../components/myCarts/MyCart";
import UpdateForm from "../components/myCarts/updateProduct/UpdateForm";
import Register from "../components/Register";
import PrivateRouter from "./PrivateRouter";
import Error from "../components/Error";

const myRouter = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/product',
                element: <PrivateRouter><MyProduct></MyProduct></PrivateRouter>
            },
            {
                path: '/brand/:name',
                element: <BrandProducts></BrandProducts>,
                loader: ()=> fetch(`http://localhost:5000/product`)
            },
            {
                path: '/details/:id',
                element: <PrivateRouter><ProductDetails></ProductDetails></PrivateRouter>,
                loader: ({params})=> fetch(`http://localhost:5000/product/${params.id}`)
            },
            {
                path: '/cart',
                element: <PrivateRouter><MyCart></MyCart></PrivateRouter>,
                loader: ()=>  fetch('http://localhost:5000/cart')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/update/:id',
                element: <PrivateRouter><UpdateForm></UpdateForm></PrivateRouter>
            }
        ]
    }
])

export default myRouter;