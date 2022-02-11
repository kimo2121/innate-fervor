import React from "react";
import "./styles.css";
import Tokens from "../../assets/Tokenomics.png";
interface tokenomixType {
  Data: {
    title: string;
    value: string;
  }[];
}
const data: tokenomixType["Data"] = [
  { title: "Name", value: "Innate Fervor " },
  { title: "Ticker", value: "$IFX" },
  { title: "Chain", value: "Ethereum ERC-20" },
  { title: "Rate", value: " 0.15-0.2 USD" },
  { title: "Rate", value: " 0.15-0.2 USD" },
  { title: "Maximum Supply", value: "1,000,000,000 (1b)" },
];
const Tokenomics = () => {
  return (
    <div className="tokenomics">
      <img src={Tokens} alt="" />
      <div className="tokens-details">
        {data.map((item, index) => (
          <div key={index}>
            <p>
              <strong>{item.title}</strong>
            </p>
            <p>{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tokenomics;
