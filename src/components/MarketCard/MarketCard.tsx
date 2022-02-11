import React from "react";
import "./styles.css";
import nft from "../../assets/nft.png";

const MarketCard = ({ handleOpen }: any) => {
  return (
    <div onClick={handleOpen} className="each-component">
      <span className="main-comp-id">#15789</span>
      <div className="comp-id-name">
        <span className="comp-name">LIZARD</span>
        <small className="comp-small-id">#15789</small>
      </div>
      <img src={nft} alt="" />
      <div className="comp-price">
        <span>0.017</span>
        <small>$38</small>
      </div>
    </div>
  );
};

export default MarketCard;
