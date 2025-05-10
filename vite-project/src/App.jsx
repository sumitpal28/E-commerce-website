import { useState } from 'react'
import './App.css'
import Products from './components/E commerce'
import Navbar from './components/navbar'
import Home from './components/Home'
import Cart from './components/Cart'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const [cart, setcart] = useState([]);

  const Addtocart = (item) => {
    setcart((prevCart) => [...prevCart, item]);
  };

  const Removeitem = (indexToRemove) => {
    setcart(prevCart => prevCart.filter((_, index) => index !== indexToRemove));
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
          <Products setcart={setcart} Addtocart={Addtocart} />
        </>
      )
    },
    {
      path: "/cart",
      element: (
        <>
          <Navbar />
          <Cart cart={cart} Removeitem={Removeitem} />
        </>
      )
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
