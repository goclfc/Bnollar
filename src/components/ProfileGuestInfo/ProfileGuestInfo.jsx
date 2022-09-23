import React, { useState } from "react";
import styles from "./ProfileGuestInfo.module.css";
import Nft1 from "../../assets/Nft1.svg";
import Vector from "../../assets/Vector.svg";
import ShowPosts from "../ShowPictureAndNft/ShowPosts";
import ShowNFT from "../ShowPictureAndNft/ShowNFT";

const ProfileGuestInfo = () => {
  const [showPosts, setShowPosts] = useState(true);

  return (
    <div className={styles.ProfileContainer}>
      <h1 className={styles.name}>Michael</h1>
      <p className={styles.username}>@mmicheal24</p>
      <p className={styles.description}>
        Capturing the story of your life, one chapter at a time.
      </p>
      <div className={styles.btnContainer}>
        <button className={styles.followBtn}>Follow</button>
        <button className={styles.messageBtn}>Message</button>
      </div>

      <div className={styles.posted}>
        <div className={styles.buttonCont}>
          <button onClick={() => setShowPosts(true)}>
            <img className='nft-icon' src={Vector} alt='' />
            <span className={styles.span1}>POST</span>
          </button>
          <div className={showPosts ? styles.active : styles.inactive}></div>
        </div>
        <div className={styles.buttonCont}>
          <button onClick={() => setShowPosts(false)}>
            <img className='nft-icon' src={Nft1} alt='' />
            <span className={styles.span1}>NFT</span>
          </button>
          <div className={!showPosts ? styles.active : styles.inactive}></div>
        </div>
      </div>

      {showPosts ? <ShowPosts /> : <ShowNFT />}
    </div>
  );
};

export default ProfileGuestInfo;
