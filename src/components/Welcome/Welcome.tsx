import React from "react";
import "./styles.css";
import welcome from "../../assets/welcome.png";
const Welcome = () => {
  return (
    <div className="welcome">
      <img src={welcome} alt="" />
    </div>
  );
};

export default Welcome;
