import React from "react";
import item1 from "../assets/Explore/exploreLeft.png";
import arrow from "../assets/Explore/Arrow.png";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";

const Explore = () => {
  return (
    <div className="wrapper">
      <div className="exploreSection">
        <div className="exploreLeftChild">
          <img src={item1} alt="" />
          <div className="exploreBtnSection">
            <div className="exploreBtn">
              <CiCircleChevLeft />
              <CiCircleChevRight />
            </div>
            <h1>01</h1>
          </div>
        </div>
        <div className="exploreRightChild">
          <p style={{ color: "#eb6d27" }}> EXPLORE NOW </p>
          <p style={{ fontSize: "42px", fontWeight: "bold" }}>
            Latest Women <br />
            Clothing
          </p>
          <p style={{ fontSize: "19px", width: "400px" }}>
            Are u ready to rock this season with our new collection specially
            for you to shine in this holiday season..
          </p>
          <div className="exploreMoreitem">
            <img
              src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <img
              src="https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <img
              src="https://plus.unsplash.com/premium_photo-1675186049366-64a655f8f537?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="exploreCloth">
            <div className="exploreCircle"></div>
            <p style={{ marginLeft: "-50px" }}>Explore Clothes</p>
            <img src={arrow} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
