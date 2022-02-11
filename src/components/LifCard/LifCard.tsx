import React from "react";
import "./styles.css";
import girl from "../../assets/girl.png";
import boy from "../../assets/boy.png";

interface LifTypes {
  name: string;
  desc: string;
  girlImg: boolean;
}
const LifCard: React.FC<LifTypes> = ({ name, desc, girlImg }) => {
  return (
    <div>
      <div className="each-lif-card">
        <img src={girlImg ? girl : !girlImg ? boy : undefined} alt="" />
      </div>
      <div className="name-desc">
        <p className="lif-name">{name}</p>
        <p className="lif-desc">{desc}</p>
      </div>
    </div>
  );
};

export default LifCard;
