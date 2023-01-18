import React, { useContext, useState } from "react";

import { Web3Context } from "../../Context/Web3Context";

const WalletChecker = () => {

  const [checkStarted, setCheckStarted] = useState(false);
  const { proof, isValid } = useContext(Web3Context);


  function checkWallet(event) {
    console.log(event.target.value);
    var wallet = event.target.value;
    if (wallet.length < 1) {
      setCheckStarted(false);
    }
    if ( wallet.length > 15) {
       isValid(wallet);
       setCheckStarted(true);
    }
  }

  return (
     <div>

    <div className="wallet-checker-text">WALLET CHECKER</div>
    <input
        type="text"
        className="wallet-checker-input"
        onChange = { checkWallet }
    />
     <div >
        { checkStarted ?
        ( <div>
            { proof ?
                <div className="wallet-whitelisted">Congrats! You are keylisted </div> :
                <div className="wallet-unlisted">Not Whitelisted</div> }
        </div>
        ) : <div></div> }
     </div>


     </div>

  );
};

export default WalletChecker;
