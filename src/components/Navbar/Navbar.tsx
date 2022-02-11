import React, { useEffect, useRef, useState } from "react";
import "./navbar.css";
import { Link } from "react-scroll";
import { HiMenu } from "react-icons/hi";
import BasicModal from "../Modal/Modal";
const Navbar: React.FC = () => {
  const [menu, setMenu] = useState(false);
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const content: any = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
  }

  return (
    <div className="navbar">
      <div className="web-nav">
        <div className="nav-links">
          <Link activeClass="active" smooth={true} duration={800} to="Home">
            Home
          </Link>
          <Link activeClass="active" smooth={true} duration={800} to="About">
            About us
          </Link>
          <Link activeClass="active" smooth={true} duration={800} to="Mint">
            Farming
          </Link>
          <Link activeClass="active" smooth={true} duration={800} to="RoadMap">
            Staking
          </Link>
          <Link activeClass="active" smooth={true} duration={800} to="Team">
            Marketplace
          </Link>
          <Link activeClass="active" smooth={true} duration={800} to="FAQ">
            Minting
          </Link>
        </div>
        <BasicModal navbar={true} />
      </div>
      <div className="slide-menu">
        <div className="slide-outter">
          <button onClick={toggleAccordion} className="menu-slide-btn">
            <HiMenu
              className={menu ? "slide-menu-icon active" : "slide-menu-icon"}
            />
          </button>
          <BasicModal navbar={true} />
        </div>
        <div
          ref={content}
          style={{ maxHeight: `${setHeight}` }}
          className="accordion__content"
        >
          <Link
            activeClass="active"
            onClick={toggleAccordion}
            smooth={true}
            duration={800}
            to="Home"
          >
            Home
          </Link>
          <Link
            activeClass="active"
            onClick={toggleAccordion}
            smooth={true}
            duration={800}
            to="About"
          >
            About us
          </Link>
          <Link
            activeClass="active"
            onClick={toggleAccordion}
            smooth={true}
            duration={800}
            to="Mint"
          >
            Farming
          </Link>
          <Link
            activeClass="active"
            onClick={toggleAccordion}
            smooth={true}
            duration={800}
            to="RoadMap"
          >
            Staking
          </Link>
          <Link
            activeClass="active"
            onClick={toggleAccordion}
            smooth={true}
            duration={800}
            to="Team"
          >
            Marketplace
          </Link>
          <Link
            activeClass="active"
            onClick={toggleAccordion}
            smooth={true}
            duration={800}
            to="FAQ"
          >
            Minting
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
