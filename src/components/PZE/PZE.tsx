import React, { useState } from "react";
import "./styles.css";

const PZE = () => {
  const [state, setState] = useState("pze");
  return (
    <div className="pze">
      <div className="tabs">
        <p
          onClick={() => {
            setState("pze");
          }}
          className={state === "pze" ? "tab active" : "tab"}
        >
          PZE Info
        </p>
        <p
          onClick={() => {
            setState("stats");
          }}
          className={state === "stats" ? "tab active" : "tab"}
        >
          Stats
        </p>
        <p
          onClick={() => {
            setState("fury");
          }}
          className={state === "fury" ? "tab active" : "tab"}
        >
          Fury
        </p>
        <p
          onClick={() => {
            setState("passive");
          }}
          className={state === "passive" ? "tab active" : "tab"}
        >
          Passive
        </p>
      </div>
      <div className="container">
        {state === "pze" ? (
          <div className="tab1">
            <div className="sub1-tab1">
              <h3>Basic Battle Rewards: </h3>
              <div>
                <span className="subtitle">Win: </span>
                <span className="subvalue">+6</span>
                <span className="subtitle">Draw: </span>
                <span className="subvalue">+2</span>
                <span className="subtitle">Lose: </span>
                <span className="subvalue">+1</span>
              </div>
            </div>
            <div className="sub2-tab1">
              <h3>Win Bonus</h3>
              <h3>3.25</h3>
            </div>
            <div className="sub3-tab1">
              <h3>gTHC Battles </h3>
              <h3>10/225</h3>
            </div>
            <div className="sub4-tab1">
              <h3>Daily gTHC Battles </h3>
              <h3>8</h3>
            </div>
          </div>
        ) : state === "stats" ? (
          <div className="tab2"></div>
        ) : state === "fury" ? (
          <div className="tab3"></div>
        ) : state === "passive" ? (
          <div className="tab4"></div>
        ) : undefined}
      </div>
      <div className="price">
        <h2>0.1 WBNB</h2>
        <p>46.33 USD</p>
      </div>
      <div className="buy">BUY NOW</div>
    </div>
  );
};

export default PZE;
