import React from "react";
import "./activity.scss";


// Imported Images ==========>
import profile from "../../../assets/images/profile.jpeg";

// Imported Icons ==========>
import { BsArrowRightShort } from "react-icons/bs";
const Activity = () => {
  return (
    <div className="activitySection">
      <div className="heading flex">
        <h1>My Listings</h1>
        <button className="btn flex">
          See All <BsArrowRightShort className="icon" />
        </button>
      </div>
      <div className="activityContainer ">
           <div className="activityItem flex">
            <div className="activityProfile flex">
              <img src={profile} alt="item" />

              <div className="activityText">

              <h3>Ola Martha</h3>
              <p> <small>Ordered a new plant</small></p>

              </div>



            </div>
            <p><small>2 min ago</small></p>


           </div>

           <div className="activityItem flex">
            <div className="activityProfile flex">
              <img src={profile} alt="item" />

              <div className="activityText">

              <h3>Ola Martha</h3>
              <p> Ordered a new plant</p>

              </div>



            </div>
            <p>2 min ago</p>


           </div>


           <div className="activityItem flex">
            <div className="activityProfile flex">
              <img src={profile} alt="item" />

              <div className="activityText">

              <h3>Ola Martha</h3>
              <p> <small>Ordered a new plant</small></p>

              </div>



            </div>
            <p><small>2 min ago</small></p>


           </div>
      </div>
    </div>
  );
};

export default Activity;
