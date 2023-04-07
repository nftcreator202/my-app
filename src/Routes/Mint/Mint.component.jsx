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
    handleIncrement,
    handleDecrement,
    mintAmount,
    proof
  } = useContext(Web3Context);

  useEffect(() => {
    getSupply();
    getMintingStatus();
  });

  return (
     <div className="mint-bg">
        <div>
         {isConnected && proof? (
         <div>
           <div className="section-14">
           <button className="minus-btn" onClick={handleDecrement}>-</button>
           <span className="mint-amt">{mintAmount}</span>
           <button className="plus-btn" onClick={handleIncrement}>+</button>
            </div>


            <div className="section-15">
           <button className="mint-button" onClick={mint} >Mint</button>
            </div>
            </div>

          ) : ""}

         {isConnected && !proof ? (
             <span className="mint-not-allowed"> You are not in minting list !!! </span>
         ) : ""}

         { !isConnected ?  (
            <div className="section-16">
            <button className="connect-wallet-button" onClick={connectWallet}> Connect Wallet </button>
            </div>
            )  :" "}

    </div>

   </div>

  );
};

export default Mint;