import React from "react";
import "./Menu.css";
import { Link } from "react-router-dom";
import Home from "../icons/Home.svg";
import Explore from "../icons/Explore.svg";
import Settings from "../icons/Settings.svg";
import Logout from "../icons/Logout.svg";

function Menu(props) {
  return (
    <>
      <ul className={`left-bar-menu__wrapper ${props.className}`}>
        <li>
          <Link to={"/home"}>
            {" "}
            <a href='/'>
              <img src={Home} alt='img' />
              <span className='resp'>Home</span>{" "}
            </a>{" "}
          </Link>
        </li>
        <li>
          <Link to={"/explore"}>
            <a href='/'>
              <img src={Explore} alt='explore' />{" "}
              <span className='resp'>Explore</span>
            </a>
          </Link>{" "}
        </li>
        <li>
          <Link to={"/settings"}>
            {" "}
            <a href='/'>
              <img src={Settings} alt='settings' />{" "}
              <span className='resp'>Settings</span>
            </a>
          </Link>
        </li>
        <hr className="hr-bar" />
        <li>
          <Link className='log-out-btn-link' to={"/login"}>
            {" "}
            <button className='log-out-btn'>
              {" "}
              <img src={Logout} alt='logout' />{" "}
              <span className='resp'>Log out</span>{" "}
            </button>{" "}
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Menu;
