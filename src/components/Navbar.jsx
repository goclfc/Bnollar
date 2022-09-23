import React from "react";
import Vector from "../pictures/Vector.png";
import Profile from "../pictures/Ellipse 1.png";
import PhoneIcon from "../pictures/Stroke 1.png";
import Video from "../pictures/Video.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar_left'>
        <Link to={"/"}>
          <img src={Vector} alt='' />
        </Link>
        <img className='navbar_pfrofile' src={Profile} alt='' />
        <div className='username_activeStatus'>
          <p>Michael</p> <p>Active Now</p>
        </div>
      </div>
      <div className='navbar_right'>
        <img className='phone_icon' src={PhoneIcon} alt='' />
        <img src={Video} alt='' />
      </div>
    </div>
  );
}

export default Navbar;
