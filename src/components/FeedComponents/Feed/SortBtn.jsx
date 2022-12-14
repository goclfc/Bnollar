import React, { useState, useEffect } from "react";
import { act } from "react-dom/test-utils";

const SortBtn = ({ parent, setActiveState, activeState }) => {
  const [active, setActive] = useState(parent === activeState);
  const [hoverBorder, setHoverBorder] = useState(false);
  const changeActive = () => {
    setActiveState(parent);
    setHoverBorder(!hoverBorder);
  };
  useEffect(() => {
    if (parent === activeState) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [activeState, active]);
  return (
    <>
      {active ? (
        <button id={"activeSort"} onClick={() => setActive(!active)}>
          {parent}
        </button>
      ) : (
        <button
          id={hoverBorder && "activeSort"}
          onMouseOver={() => setHoverBorder(true)}
          onMouseLeave={() => setHoverBorder(false)}
          onClick={() => changeActive()}
        >
          {parent}
        </button>
      )}
    </>
  );
};

export default SortBtn;
