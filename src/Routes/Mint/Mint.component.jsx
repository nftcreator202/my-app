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
     <div >
         <div className="toolbar" role="banner">
           <span className="title_fallen"> <a href="/">Fallen Realms</a></span>
           <div className="spacer">
             <a className="project_toolbar" href="/project">Project</a>
             <a className="artist_toolbar" href="/artist">Artist</a>
             <a class="mint_toolbar" href="/mint">Mint</a>
           </div>
           <a aria-label="Fallen Realms" target="_blank" rel="noopener" href="https://twitter.com/FallenRealmsNFT" title="Twitter">
             <svg id="twitter-logo" height="24" data-name="Logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
               <rect width="400" height="400" fill="none"/>
               <path d="M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23" fill="#1D9BEF"/>
             </svg>
           </a>
     </div>


     <div>
        <img className="mint-bg" src="/back_img.png" alt="" />

        <div className="details">
             <span className="details-item"> Minted Supply: &nbsp;&nbsp;    {totalSupply} / 555 </span>
             <span className="details-price"> Price: &nbsp;&nbsp;    0.02E </span>
             {isConnected && proof ? (
                <span className="details-item-2"> You are whitelisted !!! </span>
             ) : ""}
             {isConnected && !proof ? (
                 <span className="details-item-3"> You are not whitelisted !!! </span>
             ) : ""}
         {isConnected && proof? (
            <button className="mint-button" onClick={mint} disabled> Mint Now</button>

          ) : ""}

         { !isConnected ?  (
            <button className="connect-wallet-button" onClick={connectWallet}> Connect Wallet </button>
            )  :" "}
 </div>
     </div>

     </div>

  );
};

export default Mint;