import React from "react";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>jello</h1>
      </div>
      <div className="cart">
        <FaCartShopping color="#EB6D27" />
        Cart
      </div>
    </nav>
  );
};

export default Navbar;
