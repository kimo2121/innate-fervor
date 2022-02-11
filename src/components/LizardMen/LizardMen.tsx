import React from "react";
import "./styles.css";
import Lizard from "../../assets/Lizard.png";
interface lizardsType {
  Data: {
    img: string;
    title: string;
    desc: string;
  }[];
}
const data: lizardsType["Data"] = [
  { img: Lizard, title: "LIZARD", desc: "Lorem ipsum" },
  { img: Lizard, title: "LIZARD", desc: "Lorem ipsum" },
  { img: Lizard, title: "LIZARD", desc: "Lorem ipsum" },
  { img: Lizard, title: "LIZARD", desc: "Lorem ipsum" },
];

const LizardMen = () => {
  return (
    <div className="lizard-men">
      <h2 className="lizard-header">LIZARD MEN</h2>
      <div className="lizard-container">
        {data.map((item, index) => (
          <div key={index} className="each-lizard">
            <div>
              <img src={item.img} alt="" />
            </div>
            <p>{item.title}</p>
            <span>{item.desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LizardMen;
