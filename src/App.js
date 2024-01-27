import React from 'react';
import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Cart from './features/Cart/Cart';
import Checkout from './Pages/Checkout';
import ProductDetailPage from './Pages/ProductDetailPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Home/>
    ),
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/signup",
    element: <Signup/>
  },
  {
    path: "/cart",
    element: <Cart/>
  },
  {
    path: "/checkout",
    element: <Checkout/>
  },
  {
    path: "/productdetails",
    element: <ProductDetailPage/>
  },
]);



function App() {
  return (
    <div className="App">
       <RouterProvider router={router} />
     </div>
  );
}

export default App;
