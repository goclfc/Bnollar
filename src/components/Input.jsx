import React from "react";
import "./Input.css";
import Send from "../pictures/Send.png";
import Vector1 from "../pictures/Vector1.png";

function Input() {
  return (
    <div className="input">
      <input placeholder="Aa" className="textbox" type="text" />

      <div className="input_btns">
        <img className="btn_vector1" src={Vector1} alt="" srcset="" />
        <img className="send_btn" src={Send} alt="" />
      </div>
    </div>
  );
}

export default Input;
