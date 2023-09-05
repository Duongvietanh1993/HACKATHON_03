import React, { useEffect, useState } from "react";
import Cart from "./Cart";

export default function Nav() {
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || []});
  
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{ fontSize: 30 }}>
            Sticky top
          </a>
          <a href="" style={{ fontSize: 30 }}>
            <i className="fa-solid fa-cart-shopping"></i><sup style={{color:"red"}}>{cart.length}</sup>
          </a>
        </div>
      </nav>

      {
        <div>
          <Cart />
        </div>
      }
    </div>
  );
}
