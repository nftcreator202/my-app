import React, { useContext, useEffect } from "react";

import "./Mint.css";

import { Web3Context } from "../../Context/Web3Context";

const Mint = () => {

  const {
    isConnected,
    totalSupply,
    getSupply,
    getMintingStatus,
    mint,
    connectWallet,
    currentAccount,
    proof
  } = useContext(Web3Context);

  useEffect(() => {
    getSupply();
    getMintingStatus();
  });

  return (
     <div className="mint-bg">
        <img className="mint-bg" src="/rr_mint_bg.gif" alt="" />

        <div className="details">
             {isConnected && proof ? (
                <span className="details-item-2"> You can mint !!! </span>
             ) : ""}
             {isConnected && !proof ? (
                 <span className="details-item-3"> You are not in minting list !!! </span>
             ) : ""}

         {isConnected && proof? (
            <button className="mint-button" onClick={mint} >Mint Now</button>

          ) : ""}

         { !isConnected ?  (
            <button className="connect-wallet-button" onClick={connectWallet}> Connect Wallet </button>
            )  :" "}
 </div>
     </div>

  );
};

export default Mint;