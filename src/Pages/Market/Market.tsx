import React from "react";
import "./styles.css";
import Popup from "../../components/Popup/Popup";
import panel from "../../assets/panel.png";
import { ReactComponent as Magnifier } from "../../assets/magnifier.svg";
import MarketCard from "../../components/MarketCard/MarketCard";
import SideFilter from "../../components/SideFilter/SideFilter";
import BasicModal from "../../components/Modal/Modal";

interface traitsTypes {
  Data: {
    price: string;
    id: string;
    img: string;
    name: string;
  }[];
}

const Market = () => {
  const NextArrow = (onClick: any) => {
    return (
      <div className="arrow next" onClick={onClick}>
        {/* <img src={RightArrow} alt="" className="right-direction" /> */}
      </div>
    );
  };

  const PrevArrow = (onClick: any) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        {/* <img src={LeftArrow} alt="" className="left-direction" /> */}
      </div>
    );
  };

  return (
    <div className="market">
      <SideFilter />
      <div className="right-slider">
        <div className="frame-container">
          <BasicModal navbar={false} />
          <BasicModal navbar={false} />
          <BasicModal navbar={false} />
          <BasicModal navbar={false} />
          <BasicModal navbar={false} />
          <BasicModal navbar={false} />
          <BasicModal navbar={false} />
          <BasicModal navbar={false} />
        </div>
      </div>
      {/* <Popup /> */}
      {/* <div></div>
      <div className="market-place"></div> */}
    </div>
  );
};

export default Market;
