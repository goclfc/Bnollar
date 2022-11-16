import React from "react";
import { Link } from "react-router-dom";
import "./Settings.css";
import Container from "../../components/HomeComponents/HomeContainer/Container";
import Header from "../../components/Header/Header";
import Menu from "../../components/HomeComponents/Menu/Menu";
import Notification from "../../assets/Notification.svg";
import Privacy from "../../assets/Privacy.svg";
import Key from "../../assets/Key.svg";
import Ads from "../../assets/Ads.svg";
import Account from "../../assets/Account.svg";
import Help from "../../assets/Help.svg";
import About from "../../assets/About.svg";
import Privacy2 from "../../assets/Privacy2.svg";
import LeftArrow from "../../assets/LeftArrow.svg";
function Settings() {
  return (
    <Container className='settings-cont'>
      <div className='.settings-header-cont'>
        <Header className='settings-header' />
      </div>

      <div className='settings-content-wrapper'>
        <Menu className='settings-menu' />
        <div className='settings'>
          <div className='settings-title-resp'>
            <Link to={"/home"}>
              <img src={LeftArrow} alt='arrow' />
            </Link>
            <h1>Settings</h1>
          </div>

          <div className='setting'>
            <div className='setting-icon'>
              <img src={Notification} alt='setting' />
            </div>
            <div className='setting-title'>
              <h1>Notification</h1>
            </div>
          </div>

          <div className='setting'>
            <div className='setting-icon'>
              <img src={Privacy} alt='setting' />
            </div>
            <div className='setting-title'>
              <h1>Privacy</h1>
            </div>
          </div>

          <div className='setting'>
            <div className='setting-icon'>
              <img src={Key} alt='setting' />
            </div>
            <div className='setting-title'>
              <h1>Security</h1>
            </div>
          </div>

          <div className='setting'>
            <div className='setting-icon'>
              <img src={Ads} alt='setting' />
            </div>
            <div className='setting-title'>
              <h1>Ads</h1>
            </div>
          </div>

          <div className='setting'>
            <div className='setting-icon'>
              <img src={Account} alt='setting' />
            </div>
            <div className='setting-title'>
              <h1>Account</h1>
            </div>
          </div>

          <div className='setting'>
            <div className='setting-icon'>
              <img src={Help} alt='setting' />
            </div>
            <div className='setting-title'>
              <h1>Help</h1>
            </div>
          </div>

          <div className='setting'>
            <div className='setting-icon'>
              <img src={About} alt='setting' />
            </div>
            <div className='setting-title'>
              <h1>About</h1>
            </div>
          </div>
        </div>

        <div className='settings-right-wrapper'>
          <div className='right-cont'>
            <div className='settings-right-icon'>
              <img src={Privacy2} alt='' />
            </div>
            <div className='settings-right-title'>
              <h1>Privacy</h1>
              <p>
                Choose the notifications you’d like to see — and those you
                don’t.
              </p>
            </div>
          </div>

          <div className='right-cont'>
            <div className='settings-right-icon'>
              <img src={Privacy2} alt='' />
            </div>
            <div className='settings-right-title'>
              <h1>Preferances</h1>
              <p>Select your preferences by notification type.</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Settings;
