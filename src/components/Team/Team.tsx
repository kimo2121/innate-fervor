import React from "react";
import "./styles.css";
import puppet1 from "../../assets/puppet1.png";
import puppet2 from "../../assets/puppet2.png";
import Header from "../Header/Header";

interface teamType {
  Data: {
    img: string;
    title: string;
  }[];
}

const data: teamType["Data"] = [
  { img: puppet1, title: "Mandy" },
  { img: puppet2, title: "Stephanie" },
];

const Team = () => {
  return (
    <div className="team">
      <Header title="Team" />
      <div className="member">
        {data.map((item, index) => (
          <div key={index} className="each-member">
            <img src={item.img} alt="" />
            <h2>{item.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
