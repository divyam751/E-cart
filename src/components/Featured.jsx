import React from "react";
import productImg from "../assets/Offers/productImg.png";

const Featured = () => {
  let products = [
    {
      id: 1,
      img: productImg,
      name: "Co Ord Sets",
      offer: "Get 50% on Winter sets",
      price: 1000,
    },
    {
      id: 1,
      img: productImg,
      name: "Co Ord Sets",
      offer: "Get 50% on Winter sets",
      price: 1000,
    },
    {
      id: 1,
      img: productImg,
      name: "Co Ord Sets",
      offer: "Get 50% on Winter sets",
      price: 1000,
    },
    {
      id: 1,
      img: productImg,
      name: "Co Ord Sets",
      offer: "Get 50% on Winter sets",
      price: 1000,
    },
  ];
  return (
    <div className="wrapper">
      <div className="offerSection">
        <div className="categoryBox">
          <div className="Category_leftChild">
            <p>BEST OFFERS</p>
            <p>Featured</p>
          </div>
          <div className="category">
            <button className="categoryBtn">Women</button>
            <button className="categoryBtn">Men</button>
            <button className="categoryBtn">Electronics</button>
          </div>
        </div>
        <div className="CateoryProducts">
          {products.map((item) => {
            return (
              <div key={item.id} className="product">
                <img src={item.img} alt="" className="productImg" />
                <p style={{ fontWeight: "bolder" }}>{item.name}</p>
                <p>{item.offer}</p>
                <div className="pricebox">
                  <p id="productPrice">₹ {item.price}</p>
                  <button id="addToCartBtn">Add To Cart</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Featured;
