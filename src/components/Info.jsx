import React from "react";
import Profile from "../pictures/Ellipse 1.png";
import "./Info.css";

function Info() {
  return (
    <div className="info">
      <img className="info_img" src={Profile} oalt="" />
      <div className="info_tags">
        <p className="name_tag">Micael</p>
        <p className="username_tag">@michael123</p>
      </div>
      <div className="info_profile">
        <a href="#">View Profile</a>
      </div>
    </div>
  );
}

export default Info;
