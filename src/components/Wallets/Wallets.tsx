import React from "react";
import "./styles.css";
import trustWallet from "../../assets/trustWallet.png";
import { ReactComponent as Metamask } from "../../assets/metamask.svg";
import binance from "../../assets/binance.png";
import walletConnect from "../../assets/walletConnect.png";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Wallets = ({ handleClose }: any) => {
  return (
    <div className="connect-wallets">
      <AiOutlineCloseCircle className="close-modal" onClick={handleClose} />
      <div className="each-wallet">
        <p>MetaMask</p>
        <Metamask />
      </div>
      <div className="each-wallet">
        <p>Binance Chain Wallet</p>
        <img src={binance} alt="" />
      </div>
      <div className="each-wallet">
        <p>WalletConnect</p>
        <img src={walletConnect} alt="" />
      </div>
      <div className="each-wallet">
        <p>Trust Wallet</p>
        <img src={trustWallet} alt="" />
      </div>
    </div>
  );
};

export default Wallets;
