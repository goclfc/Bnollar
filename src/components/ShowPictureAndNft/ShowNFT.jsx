import React from "react";
import styles from "./styles.module.css";
import NFT from "../../assets/NFT/Rectangle 6600 (3).svg";

const ShowNFT = () => {
  return (
    <div className={styles.imgContainer}>
      <img src={NFT} alt="" />
      <img src={NFT} alt="" />
      <img src={NFT} alt="" />
      <img src={NFT} alt="" />
      <img src={NFT} alt="" />
      <img src={NFT} alt="" />
      <img src={NFT} alt="" />
      <img src={NFT} alt="" />
      <img src={NFT} alt="" />
    </div>
  );
};

export default ShowNFT;
