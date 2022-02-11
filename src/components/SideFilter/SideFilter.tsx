import React, { useState } from "react";
import "./styles.css";
import { ReactComponent as Magnifier } from "../../assets/magnifier.svg";
import { AiOutlineMenuUnfold, AiOutlineCloseCircle } from "react-icons/ai";

const SideFilter = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div className="side-filter">
      <div className="side-filter-web">
        <div className="input-search">
          <Magnifier />
          <input type="text" />
        </div>
        <div className="lif">LIF</div>
        <div className="lifthar">LIFTHARASIR</div>
        <div className="liz-m">LIZARD MAN</div>
        <div className="choices">
          <h2>CLASS</h2>
          <div className="choose">
            <p>COMMON</p>
            <p>RARE</p>
            <p>IF</p>
            <p>EPIC</p>
          </div>
        </div>
        <div className="mining-power"></div>
      </div>
      <div className={menu ? "side-filter-mob active" : "side-filter-mob"}>
        <AiOutlineMenuUnfold
          onClick={() => setMenu(true)}
          className="side-menu"
        />
        <AiOutlineCloseCircle
          className="close-icon"
          onClick={() => setMenu(false)}
        />
        <div className="input-search">
          <Magnifier />
          <input type="text" />
        </div>
        <div className="lif">LIF</div>
        <div className="lifthar">LIFTHARASIR</div>
        <div className="liz-m">LIZARD MAN</div>
        <div className="choices">
          <h2>CLASS</h2>
          <div className="choose">
            <p>COMMON</p>
            <p>RARE</p>
            <p>IF</p>
            <p>EPIC</p>
          </div>
        </div>
        <div className="mining-power"></div>
      </div>
    </div>
  );
};

export default SideFilter;
