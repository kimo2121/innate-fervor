import React from "react";
import "./styles.css";
import discord from "../../assets/discord.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import telegram from "../../assets/telegram.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="top-left">
          <h2>Innate Fervor</h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          <div>
            <img src={discord} alt="" />
            <img src={twitter} alt="" />
            <img src={instagram} alt="" />
            <img src={facebook} alt="" />
            <img src={telegram} alt="" />
          </div>
        </div>
        <div className="top-middle">
          <p>
            <strong>Quicklinks</strong>
          </p>
          <a href="/">About</a>
          <a href="/">Marketplace</a>
          <a href="/">Roadmap</a>
        </div>
        <div className="top-right">
          <p>
            Subscribe our newsletter to receive the exclusive offers every week.
          </p>
          <input type="text" placeholder="Email address" />
        </div>
      </div>
      <div className="footer-btm">
        <p>Copyright©2021.All right reserved</p>
        <p>Terms and conditions</p>
      </div>
    </div>
  );
};

export default Footer;
