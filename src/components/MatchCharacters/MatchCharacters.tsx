import React from "react";
import "./styles.css";

import Angel from "../../assets/Angel.png";
import Devil from "../../assets/Devil.png";

const MatchCarachters = () => {
  return (
    <div className="match-charcters">
      <div className="chars">
        <img src={Devil} alt="" />
        <img src={Angel} alt="" />
      </div>
      <div className="match-btn">MATCH NOW</div>
    </div>
  );
};

export default MatchCarachters;
