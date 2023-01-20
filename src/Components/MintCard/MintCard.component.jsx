import React, { useContext, useEffect } from "react";

import { Web3Context } from "../../Context/Web3Context";

const MintCard = () => {
  const {
    isConnected,
    handleIncrement,
    handleDecrement,
    mintAmount,
    totalSupply,
    getSupply,
    getMintingStatus,
    mint,
  } = useContext(Web3Context);

  useEffect(() => {
    getSupply();
    getMintingStatus();
  });

  return (
    <div>

        <p className="supply"> {totalSupply} / 3333 MINTED</p>

        <div>
        {
        isConnected ?
            (
              <div>
              <span ><button className="minus-btn" onClick={handleDecrement}>-</button> </span>
              <span className="mint-amt">{mintAmount}</span>
              <span ><button className="plus-btn" onClick={handleIncrement}>+</button></span> </div>
            )
         : ""
         }
         </div>

        <div>
        {
        isConnected ?
            ( <button className="mint-btn" onClick={mint}> Mint Now</button> )
          : ""
        }
        </div>
    </div>
  );
};

export default MintCard;
