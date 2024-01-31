import React from "react";
import { useEffect } from "react";
import "./App.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./features/Cart/Cart";
import Checkout from "./Pages/Checkout";
import ProductDetailPage from "./Pages/ProductDetailPage";
import { getAllProducts } from "./features/productList/ProductAPI";
import { useDispatch, useSelector } from "react-redux";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/productdetails",
    element: <ProductDetailPage />,
  },
]);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {    
    dispatch(getAllProducts());
  }, [dispatch]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
