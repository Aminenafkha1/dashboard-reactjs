import React from "react";
import "./listing.scss";

// Imported Images ==========>
import img from "../../../assets/images/plant.png";
import profile from "../../../assets/images/profile.jpeg";

// Imported Icons ==========>
import { AiFillHeart } from "react-icons/ai";
import { BsArrowRightShort } from "react-icons/bs";

const Listing = () => {
  return (
    <div className="listingSection">
      <div className="heading flex">
        <h1>My Listings</h1>
        <button className="btn flex">
          See All <BsArrowRightShort className="icon" />
        </button>
      </div>
      <div className="secContainer flex">
        <div className="signleItem">
          <AiFillHeart className="icon" />
          <img src={img} alt="Item" />
          <h3>Annual Vince</h3>
        </div>
        <div className="signleItem">
          <AiFillHeart className="icon" />
          <img src={img} alt="Item" />
          <h3>Annual Vince</h3>
        </div>
        <div className="signleItem">
          <AiFillHeart className="icon" />
          <img src={img} alt="Item" />
          <h3>Annual Vince</h3>
        </div>
        <div className="signleItem">
          <AiFillHeart className="icon" />
          <img src={img} alt="Item" />
          <h3>Annual Vince</h3>
        </div>
      </div>

      <div className="sellers flex">
        <div className="topSellers">

          <div className="heading flex">
            <h1>Top Sellers</h1>
            <button className="btn flex">
              See All <BsArrowRightShort className="icon" />
            </button>
          </div>


          <div className="card flex">
            <div className="users">
              <img src={profile} alt="User" />
              <img src={profile} alt="User" />
              <img src={profile} alt="User" />

            </div>

            <div className="cardText">
              <span>
                14.500 Plant Sold <br/>
                <small>
                  21 Sellers <span className="date">7 Days</span>
                </small>
              </span>

            </div>
          </div>
        </div>


        <div className="featuredSellers">
          
          <div className="heading flex">
            <h1>Top Sellers</h1>
            <button className="btn flex">
              See All <BsArrowRightShort className="icon" />
            </button>
          </div>


          <div className="card flex">
            <div className="users">
              <img src={profile} alt="User" />
              <img src={profile} alt="User" />
              <img src={profile} alt="User" />
              <img src={profile} alt="User" />

            </div>

            <div className="cardText">
              <span>
                28.556 Plant Sold <br/>
                <small>
                  26 Sellers <span className="date">31 Days</span>
                </small>
              </span>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listing;
