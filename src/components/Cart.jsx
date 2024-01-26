import React, { useState } from "react";
import item1 from "../assets/Cart/item1.png";

const Cart = () => {
  const [count, setCount] = useState(1);
  const handleAddCount = () => {
    setCount((pre) => pre + 1);
  };
  const handleSubCount = () => {
    setCount((pre) => pre - 1);
  };
  let cart = [
    {
      id: 1,
      img: item1,
      name: "SKETCHERS",
      category: "SNEAKERS",
      price: 1500,
    },
    {
      id: 2,
      img: item1,
      name: "SKETCHERS",
      category: "SNEAKERS",
      price: 1500,
    },
  ];

  return (
    <div className="wrapper">
      <div className="cartContainer">
        <p style={{ color: "#eb6d27" }}>SELECTED ITEMS</p>
        <p style={{ fontSize: "31px", fontWeight: "bold" }}>CART ITEMS</p>

        <div className="cartItemRow">
          {cart.map((item) => {
            return (
              <div className="cartItemContainer" key={item.id}>
                <div className="cartItem">
                  <div className="cartItemImg">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="cartItemDetails">
                    <p style={{ fontSize: "18px" }}> {item.name} </p>
                    <p style={{ fontSize: "12px" }}> {item.category} </p>
                    <p style={{ fontSize: "16px", color: "#eb6d27" }}>
                      {" "}
                      ₹{item.price}{" "}
                    </p>
                  </div>
                  <div className="cartCounter">
                    <button onClick={handleAddCount}>+</button>
                    {count}
                    <button onClick={handleSubCount}>-</button>
                  </div>
                </div>
                <button id="removeItem">X</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cart;
