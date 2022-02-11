import React from "react";
import "./styles.css";

const Header = ({ title }: any) => {
  return (
    <div className="header">
      <h1 className="header">{title}</h1>
    </div>
  );
};

export default Header;
