import React from "react";
import "./LeftBar.css";
import "./LeftBarResponsive.css";

import logo from "../../icons/logo.svg";
import Menu from "../../Menu/Menu";

function LeftBar() {
  return (
    <div className='left-bar__wrapper'>
      {/************************ LOGO AND SEARCH **********************************/}
      <div className='search-and-logo__wrapper'>
        <div className='logo'>
          <a href='/'>
            <img src={logo} alt='' />
          </a>
        </div>
        <div className='search-input'>
          <input type='text' placeholder='Search' />
        </div>
      </div>
      {/**********************************************************/}

      {/************************ LEFT BAR MENU **********************************/}
      <Menu />

      {/**********************************************************/}
    </div>
  );
}

export default LeftBar;
