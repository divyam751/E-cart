import React from "react";
import { FaSearch } from "react-icons/fa";
import text from "../assets/HeroPage/text.png";
import { CiCircleChevRight } from "react-icons/ci";
import modelimg from "../assets/HeroPage/img.svg";

const Hero = () => {
  return (
    <div className="wrapper">
      <div className="heroSection">
        <div className="heroSearch">
          <FaSearch className="search-icon" size={20} />
          <input
            type="text"
            className="search"
            placeholder="Search your favorite clothing"
          />
        </div>
        <div className="heroBackground"></div>

        <div className="heroContent">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div className="heroTextSection">
              <img src={text} alt="" />
            </div>
            <button id="ShopNow">
              SHOP NOW <CiCircleChevRight color="white" size={40} />
            </button>
          </div>
          <div className="heroImg">
            <img src={modelimg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
