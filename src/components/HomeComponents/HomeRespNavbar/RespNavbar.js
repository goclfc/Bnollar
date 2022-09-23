import React from "react";
import "./RespNavbar.css";
import logo from "../icons/logo.svg";
import { Link } from "react-router-dom";
import Home from "../icons/Home.svg";
import Explore from "../icons/Explore.svg";
import Settings from "../icons/Settings.svg";
import Logout from "../icons/Logout.svg";
import { HiBell } from "react-icons/hi";
import Chat from "../icons/Chat.svg";

function RespNavbar() {
  return (
    <div className='resp-navbar'>
      <div className='home-resp-logo'>
        <img src={logo} alt='' />
      </div>

      <div className='resp-menu'>
        <a href='/'>
          {" "}
          <img src={Home} alt='' />{" "}
        </a>
        <a href='/'>
          {" "}
          <img src={Explore} alt='' />{" "}
        </a>
        <Link to={"/settings"}>
          <a href='/'>
            {" "}
            <img src={Settings} alt='' />{" "}
          </a>
        </Link>
        <Link to={"/login"}>
          {" "}
          <a href='/'>
            {" "}
            <img src={Logout} alt='' />{" "}
          </a>
        </Link>
      </div>

      <div className='resp-upload'>
        <Link to={"/upload"}>+</Link>
      </div>

      <div className='resp-bell-chat'>
        <a href='/'>
          {" "}
          <HiBell />{" "}
        </a>
        <a href='/'>
          {" "}
          <img src={Chat} alt='' />
        </a>
        <div className='resp-profile-img'>
          <Link to={"/profile-User"}>
            {" "}
            <img
              src='https://res.cloudinary.com/dzxxb95vy/image/upload/v1648466490/Ellipse_1_ztlkcf.png'
              alt='img'
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RespNavbar;
