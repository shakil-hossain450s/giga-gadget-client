import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddProduct from "../Pages/AddProduct";
import AllProducts from "../Pages/AllProducts";
import ProductDetails from "../components/ProductDetails";
import UpdateProduct from "../components/UpdateProduct";
import PrivateRoute from "./PrivateRoute";

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
        element: <PrivateRoute>
          <AllProducts></AllProducts>
        </PrivateRoute>
      },
      {
        path: "addProduct",
        loader: () => fetch("http://localhost:3000/brands"),
        element: <PrivateRoute>
          <AddProduct></AddProduct>
        </PrivateRoute>
      },
      {
        path: "/updateProduct/:id",
        loader: ({ params }) => fetch(`http://localhost:3000/product/${params.id}`),
        element: <PrivateRoute>
          <UpdateProduct></UpdateProduct>
        </PrivateRoute>
      },
      {
        path: "productDetails/:id",
        loader: ({ params }) => fetch(`http://localhost:3000/product/${params.id}`),
        element: <PrivateRoute>
          <ProductDetails></ProductDetails>
        </PrivateRoute>
      },
      {
        path: "login",
        Component: Login
      },
      {
        path: "register",
        Component: Register
      },
    ]
  }
]);

export default router;