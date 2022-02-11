import React from "react";
import "./styles.css";
import Hình from "../../assets/Hình.png";
import Header from "../Header/Header";

interface featuresType {
  Data: {
    img: string;
    title: string;
    details: string;
  }[];
}

const data: featuresType["Data"] = [
  {
    img: Hình,
    title: "Lorem Ipsum",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. . ",
  },
  {
    img: Hình,
    title: "Lorem Ipsum",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. . ",
  },
  {
    img: Hình,
    title: "Lorem Ipsum",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. . ",
  },
  {
    img: Hình,
    title: "Lorem Ipsum",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. . ",
  },
  {
    img: Hình,
    title: "Lorem Ipsum",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. . ",
  },
  {
    img: Hình,
    title: "Lorem Ipsum",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. . ",
  },
];
const Features = () => {
  return (
    <div className="features">
      <Header title="Features" />
      <div className="features-container">
        {data.map((item, index) => (
          <div key={index} className="each-feature">
            <img src={item.img} alt="" />
            <h2>{item.title}</h2>
            <span>{item.details}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
