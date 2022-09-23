import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/RGB 2.svg";
import Notification from "../../assets/Notification.svg";
import Chat from "../../assets/Chat.svg";
import Avatar from "../../assets/Ellipse 2.svg";

const Header = (props) => {
  return (
    <nav className={`${styles.navbar} ${props.className}`}>
      <div className={styles.LogoContainer}>
        <Link to={"/home"}>
          <img src={Logo} alt='' />
        </Link>
        <input type='text' placeholder='Search...' />
      </div>
      <div className={styles.btnContainer}>
        <Link to={"/upload"} className={styles.UploadBtn}>
          Upload
        </Link>
        <img
          style={{ fill: "#566370" }}
          className={styles.icons}
          src={Notification}
          alt='Notification Icon'
        />
        <Link to={"/chat"} className={styles.iconBtn}>
          <img className={styles.icons} src={Chat} alt='Chat Icon' />
        </Link>
        <button className={styles.iconBtn}>
          <img src={Avatar} alt='avatar' className={styles.avatar} />
        </button>
      </div>
    </nav>
  );
};

export default Header;
