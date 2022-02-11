import React from "react";
import "./styles.css";
import nft from "../../assets/nft.png";
import back from "../../assets/back.png";
import PZE from "../PZE/PZE";

const Popup = () => {
  return (
    <div className="pop-up">
      <div className="left-part">
        <p>
          {" "}
          <img src={back} alt="" /> Back To Marketplace
        </p>
        <img src={nft} alt="" />
      </div>
      <div className="right-part">
        <div className="first">
          <div>
            <p>Earth’s Hero</p>
            <h2>lizard man</h2>
          </div>
          <div className="sub-first">
            <div className="sub-sub-first">
              <div>
                <p>Costume</p>
                <span>Common</span>
              </div>
              <div>
                <p>skin</p>
                <span>Normal</span>
              </div>
              <div>
                <p>outfit</p>
                <span>Normal</span>
              </div>
            </div>
          </div>
        </div>
        <div className="second">
          <p>Owner: 0x83...7ccs2c</p>
          <p>#81491834959</p>
        </div>
        <PZE />
      </div>
    </div>
  );
};

export default Popup;
