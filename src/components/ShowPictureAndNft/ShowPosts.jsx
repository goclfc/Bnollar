import React from "react";
import Picture from "../../assets/Posts/Rectangle 6601.svg";
import styles from "./styles.module.css";
const ShowPosts = () => {
  return (
    <div className={styles.imgContainer}>
      <img src={Picture} alt="" />
      <img src={Picture} alt="" />
      <img src={Picture} alt="" />
      <img src={Picture} alt="" />
      <img src={Picture} alt="" />
      <img src={Picture} alt="" />
      <img src={Picture} alt="" />
      <img src={Picture} alt="" />
      <img src={Picture} alt="" />
    </div>
  );
};

export default ShowPosts;
