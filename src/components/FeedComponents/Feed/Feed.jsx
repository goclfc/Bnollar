import React, { useState,useEffect } from "react";
import SwipeProfiles from "../Swipe_Profiles/SwipeProfiles";
import "./Feed.css";
import SortBtn from "./SortBtn";
const Feed = () => {
  
  const [activeState, setActiveState] = useState("New");
  return (
    <div className="feed">
      <SwipeProfiles />
      <div className="sort_btns_wrapper">
        <SortBtn
          className="sort-btn"
          setActiveState={setActiveState}
          activeState={activeState}
          parent="New"
        />
        <SortBtn
          className="sort-btn"
          setActiveState={setActiveState}
          activeState={activeState}
          parent="Popular"
        />
        <SortBtn
          className="sort-btn"
          setActiveState={setActiveState}
          activeState={activeState}
          parent="Favourite"
        />
      </div>
    </div>
  );
};

export default Feed;
