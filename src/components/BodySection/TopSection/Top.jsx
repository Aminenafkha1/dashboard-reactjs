import React from "react";
import "./top.scss";


// Imported Images & videos ==========>
import profile from '../../../assets/images/profile.jpeg'
import video from '../../../assets/images/video.mp4'
import hands from '../../../assets/images/hands.png'

// Imported Icons ==========>
import { BiSearchAlt } from "react-icons/bi";
import { TbMessageCircle } from "react-icons/tb";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";


const Top = () => {
  return (
    <div className="topSection">
      <div className="headerSection flex">
        <div className="title">
          <h1>Welcome to Planti.</h1>
          <p>Hello Amine , Welcome back!</p>
        </div>

        <div className="searchBar flex">
          <input type="text" placeholder="Search Here" />
          <BiSearchAlt className='icon'/>
        </div>


        <div className="adminDiv flex">
          <TbMessageCircle className="icon"/>
          <MdOutlineNotificationsNone className="icon" />
          <div className="adminImage">
            <img src={profile} alt="Admin " />
          </div>

        </div>
      </div>

      <div className="cardSection flex">
        <div className="rightCard flex">
          <h1>Create and sell extraordinary products</h1>
          <p> The world's fast growing industry today are natural made products!</p>
          <div className="buttons flex">
            <button className="btn">Explore More</button>
            <button className="btn transparent">Top Sellers</button>

          </div>

          <div className="videoDiv">
            <video src={video}  autoPlay loop muted > </video>
          </div>
        </div>
        <div className="leftCard flex">
            <div className="main flex">
               <div className="textDiv">
                <h1>My Stat</h1>
                <div className="flex">
                  <span>
                    Today <br/> <small>4 Orders</small>
                  </span>
                  <span>
                    This Month <br/> <small>127 Orders</small>
                  </span>
                </div>

                <span className="flex link">
                  Go to my orders <BsArrowRightShort className="icon"/>

                </span>

             
                  
               </div>

               <div className="imgDiv">
                <img src={hands} alt="Name" />
               </div>
               

            </div>
        </div>
         

      </div>
    </div>
  );
};

export default Top;
