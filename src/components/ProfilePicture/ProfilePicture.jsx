import React from "react";
import styles from "./ProfilePicture.module.css";

import Avatar from "../../assets/Ellipse 1.svg";

const ProfilePicture = () => {
  return (
    <div className={styles.container}>
      <div className={styles.ProfilePic}>
        <img src={Avatar} alt="" />
      </div>
    </div>
  );
};

export default ProfilePicture;
