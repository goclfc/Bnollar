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
        <Link to='/'>
          {" "}
          <img src={Home} alt='' />{" "}
        </Link>
        <Link to='/explore'>
          {" "}
          <img src={Explore} alt='' />{" "}
        </Link>
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
        <Link to='/chat'>
          {" "}
          <img src={Chat} alt='' />
        </Link>
      </div>
      <div className='resp-profile-img'>
        <Link to={"/profile-User"}>
          <img
            src='https://res.cloudinary.com/dzxxb95vy/image/upload/v1648466490/Ellipse_1_ztlkcf.png'
            alt='img'
          />
        </Link>
      </div>
    </div>
  );
}

export default RespNavbar;
