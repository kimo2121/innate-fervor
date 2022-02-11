import React from "react";
import LifCard from "../LifCard/LifCard";
import "./styles.css";

const Lifthrasir = () => {
  return (
    <div className="lifthrasir">
      <div className="lifthrasir-top">
        <h2 className="lif-header">LIF</h2>
        <div className="lifthrasir-container">
          <LifCard girlImg={true} name="Lif1" desc="Lorem ipsum" />
          <LifCard girlImg={true} name="Lif2" desc="Lorem ipsum" />
          <LifCard girlImg={true} name="Lif3" desc="Lorem ipsum" />
          <LifCard girlImg={true} name="Lif4" desc="Lorem ipsum" />
        </div>
      </div>
      <div className="lifthrasir-bottom">
        <h2 className="lif-header">LIFTHRASIR</h2>
        <div className="lifthrasir-container">
          <LifCard girlImg={false} name="LIFTHRASIR1" desc="Lorem ipsum" />
          <LifCard girlImg={false} name="LIFTHRASIR2" desc="Lorem ipsum" />
          <LifCard girlImg={false} name="LIFTHRASIR3" desc="Lorem ipsum" />
          <LifCard girlImg={false} name="LIFTHRASIR4" desc="Lorem ipsum" />
        </div>
      </div>
    </div>
  );
};

export default Lifthrasir;
