import React from "react";
import "./RightBar.css";
import "./RightBarResponsive.css";
import Chat from "../../icons/Chat.svg";
import Contacts from "../Contacts";
import TopNfts from "../TopNfts";
import { HiBell } from "react-icons/hi";
import { Link } from "react-router-dom";

function RightBar() {
  return (
    <div className='right-bar__wrapper'>
      <div className='right-navbar__wrapper'>
        <div className='upload'>
          <Link to={"/upload"} className='upload-label'>
            Upload
          </Link>
        </div>

        <div className='right-navbar-icons'>
          <a className='bell-icon' href='/'>
            <HiBell />{" "}
          </a>
          <Link to='/chat' className='chat-icon' href='/'>
            <img src={Chat} alt='chat' />
          </Link>
        </div>

        <div className='right-profile-img'>
          <Link to='/profile-User'>
            <img
              src='https://res.cloudinary.com/dzxxb95vy/image/upload/v1648466490/Ellipse_1_ztlkcf.png'
              alt='asdas'
            />
          </Link>
        </div>
      </div>
      <div className='contacts-topnfts-wrapper'>
        <Contacts />
        <TopNfts />
      </div>
    </div>
  );
}

export default RightBar;
