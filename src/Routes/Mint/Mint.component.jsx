import React, { useContext } from "react";

import MintCard from "../../Components/MintCard/MintCard.component";

import { Web3Context } from "../../Context/Web3Context";

const Mint = () => {

  const { connectWallet, isConnected, currentAccount } = useContext(Web3Context);

  return (
     <div >
     {isConnected ? (
    <div>
     <div className="connect-wallet-button">
        {currentAccount.slice(0, 6)}...{currentAccount.slice(currentAccount.length - 4)}
     </div>

     </div>
      )
     :  (

        <button className="connect-wallet-button" onClick={connectWallet}> Connect Wallet </button>
        )}
    <div >
        <div><MintCard /></div>
     </div>

     </div>

  );
};

export default Mint;
