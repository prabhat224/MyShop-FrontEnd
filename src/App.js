import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/productList/ProductList';
import './App.css';
// import Products from '../src/features/productList/ProductList'
import Navbar from './features/Components/Navbar';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  BrowserRouter,
  Link,
} from "react-router-dom";

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
]);



function App() {
  return (
    <div className="App">
       <RouterProvider router={router} />
     </div>
  );
}

export default App;
