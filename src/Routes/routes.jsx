import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddProduct from "../Pages/AddProduct";
import AllProducts from "../Pages/AllProducts";
import ProductDetails from "../components/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: () => fetch("http://localhost:3000/products"),
        Component: Home
      },
      {
        path: "allProducts",
        loader: () => fetch("http://localhost:3000/products"),
        Component: AllProducts
      },
      {
        path: "addProduct",
        loader: () => fetch("http://localhost:3000/brands"),
        Component: AddProduct
      },
      {
        path: "login",
        Component: Login
      },
      {
        path: "register",
        Component: Register
      },
      {
        path: "productDetails/:id",
        loader: ({ params }) => fetch(`http://localhost:3000/product/${params.id}`),
        Component: ProductDetails
      }
    ]
  }
]);

export default router;