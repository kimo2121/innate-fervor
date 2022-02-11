import React, { useEffect, useState, useRef } from "react";
import CustomizedAccordions from "../../components/FAQ/FAQ";
import Features from "../../components/Features/Features";
import Footer from "../../components/Footer/Footer";
import LizardMen from "../../components/LizardMen/LizardMen";
import Navbar from "../../components/Navbar/Navbar";
import Roadmap from "../../components/Roadmap/Roadmap";
import Team from "../../components/Team/Team";
import Tokenomics from "../../components/Tokenomics/Tokenomics";
import Welcome from "../../components/Welcome/Welcome";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import red1 from "../../assets/red1.png";
import red2 from "../../assets/red2.png";
import wings from "../../assets/wings.png";
import red3 from "../../assets/red3.png";

import pink1 from "../../assets/pink1.png";
import pink2 from "../../assets/pink2.png";
import pink3 from "../../assets/pink3.png";
import pink4 from "../../assets/pink4.png";
import pink5 from "../../assets/pink5.png";
import pink6 from "../../assets/pink6.png";
import MatchCarachters from "../../components/MatchCharacters/MatchCharacters";
import MobRoadmap from "../../components/MobRoadmap/MobRoadmap";
import Lifthrasir from "../../components/Lifthrasir/Lifthrasir";
import ComingSoon from "../../components/ComingSoon/ComingSoon";

const Home = () => {
  const [first, setfirst] = useState(0);

  useEffect(() => {
    const interval = setInterval(function () {
      setfirst(first + 0);
    }, 30);
    return () => {
      clearInterval(interval);
    };
  });

  useEffect(() => {
    if (first == 1000) {
      setfirst(0);
    }
  });

  console.log(first);

  let navigate = useNavigate();
  const goMarket = () => {
    navigate("/market");
  };

  return (
    <div className="home">
      <div className="banner">
        <Navbar />
        <Welcome />
        <div className="pink-red">
          <img
            className="feather pink1"
            style={{ top: `${first}px` }}
            src={pink1}
            alt=""
          />
          <img
            className="feather red1"
            style={{ top: `${first}px` }}
            src={red1}
            alt=""
          />
        </div>
        <div onClick={goMarket} className="comm-match">
          <div className="community">
            <img src={wings} alt="" />
            <div className="comm-btn">COMMUNITY</div>
          </div>
          <img
            className="feather pink2"
            style={{ top: `${first}px` }}
            src={pink2}
            alt=""
          />
          <img
            className="feather pink3"
            style={{ top: `${first}px` }}
            src={pink3}
            alt=""
          />
          <MatchCarachters />
        </div>
        <div className="intro">
          <p>
            <img
              className="feather red2"
              style={{ top: `${first}px` }}
              src={red2}
              alt=""
            />
            <img
              className="feather pink4"
              style={{ top: `${first}px` }}
              src={pink4}
              alt=""
            />
            Once upon a time, Líf and Lífthrasir ignored the order by the all
            mighty Odin. They met in an unspoken space and fell in love deeply
            in the first sight. However, they had to go back to the nine realms…
            <img
              className="feather red3"
              style={{ top: `${first}px` }}
              src={red3}
              alt=""
            />
          </p>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <p>
            <img
              className="feather pink5"
              style={{ top: `${first}px` }}
              src={pink5}
              alt=""
            />
            <img
              className="feather pink6"
              style={{ top: `${first}px` }}
              src={pink6}
              alt=""
            />
            When they were kissing goodbye, they came up with an idea… Maybe
            it’s time to escape for love and fight for freedom… The later
            generation called the unspoken space, “The Tenth Realm”.
            <img
              className="feather red4"
              style={{ top: `${first}px` }}
              src={red1}
              alt=""
            />
          </p>
        </div>
        {/* <div className="feathers-div"> */}
        {/* </div> */}
      </div>
      <iframe src="/default.asp" width="99.5%" height="1024"></iframe>
      <ComingSoon />
      <div className="common-bk">
        <div className="common-what-if">
          <h1>What is IF?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            exercitationem rem rerum aperiam, aspernatur nihil beatae animi
            voluptatum officia soluta maiores excepturi ab cumque eaque
            voluptate in laborum quam laudantium?
          </p>
        </div>
      </div>
      <div className="common-bk">
        <Lifthrasir />
      </div>
      <div className="common-bk">
        <LizardMen />
      </div>
      <div className="common-bk">
        <Features />
      </div>
      <div className="common-bk">
        <Tokenomics />
      </div>
      <div className="common-bk">
        <div className="common-what-if">
          <h1>METAVERSE</h1>
          <span>coming soon</span>
        </div>
      </div>
      <div className="common-bk">
        <Roadmap />
        <MobRoadmap />
      </div>
      <div className="common-bk">
        <Team />
      </div>
      <div className="common-bk">
        <CustomizedAccordions />
      </div>
      {/* <div className="common-bk"></div> */}

      <Footer />
    </div>
  );
};

export default Home;
