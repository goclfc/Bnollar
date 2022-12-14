import React, { useState,useEffect } from "react";
import SwipeProfiles from "../Swipe_Profiles/SwipeProfiles";
import "./Feed.css";
import SortBtn from "./SortBtn";
import { Link, useNavigate } from "react-router-dom";
const Feed = () => {
  
  const [activeState, setActiveState] = useState("New");
  return (
    <div className="feed">
      <SwipeProfiles />
      <div className="sort_btns_wrapper">
      <Link to="/home">
        <SortBtn
          className="sort-btn"
          setActiveState={setActiveState}
          activeState={activeState}
          parent="New"
        />
        </Link>
        <SortBtn
          className="sort-btn"
          setActiveState={setActiveState}
          activeState={activeState}
          parent="Popular"
        />
       <Link to="/home/favourite">
        <SortBtn
          className="sort-btn"
          setActiveState={setActiveState}
          activeState={activeState}
          parent="Favourite"
          linkTo="./favourite"
          
          />
          </Link>
      </div>
    </div>
  );
};

export default Feed;
