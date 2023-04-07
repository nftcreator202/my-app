import React, { useState, useEffect } from "react";
import { ethers, BigNumber } from "ethers";
import { MerkleProof, VerifyWallet } from "./MerkleProof";
import contractConfig from '../config/contract-config.json';

import contractABI from '../config/abi.json';

export const Web3Context = React.createContext();

const {contractAddress} = contractConfig;

// Initialize the smart contract
const initContract = () => {
  if (window.ethereum) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, contractABI, signer);
    return contract;
  }
};

// all web3 functionality in 1 component
export const Web3Provider = ({ children }) => {

  // init variables
  const [currentAccount, setCurrentAccount] = useState([]);
  const [mintAmount, setMintAmount] = useState(1);
  const isConnected = Boolean(currentAccount[0]);
  const [saleState, setSaleState] = useState(2);
  const [proof, setProof] = useState(false);

  useEffect(() => {
     MerkleProof();
  });

  // Multiple getter functions
  const [totalSupply, setTotalSupply] = useState(0);

  const isValid = (address) => {
    const valid = VerifyWallet(address);

    setProof(valid);
    console.log(valid);

    return proof;
  };

  const getSupply = async () => {
    const contract = initContract();

    let response = (await contract.totalSupply()).toNumber();

    setTotalSupply(response.toString());
  };

  const getMintingStatus = async () => {
     const contract = initContract();

     setSaleState(1);
    };

  // function to connect user wallet
  const connectWallet = async () => {
    try {
      if (window.ethereum) {

        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log("Window eth", accounts[0]);
        isValid(accounts[0]);
        initContract();
        setCurrentAccount(accounts[0]);
      }

      let chainId = await window.ethereum.request({
        method: "eth_chainId",
      });
      const ethereumChainId = "0x1";
      if (chainId !== ethereumChainId) {
        // "Collection is only available on Ethereum mainnet, Please switch to mainnet"
        return;
      }
    } catch (error) {
      console.log(error);
      throw new Error("No ethereum object.", error);
    }
  };

  const publicCheckout = async () => {
    const contract = initContract();
    console.log("Contract initialized");
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    console.log("Account", accounts[0]);
    const balanceResponse = await provider.getBalance(accounts[0]);
    let formattedBalance = ethers.utils.formatEther(balanceResponse);
    let balance = formattedBalance * 1;

    let totalCost = mintAmount * 0.016;
    let x = totalCost.toFixed(4);
    let value = x.toString();

    if (balance >= totalCost) {
      const response = await contract.publicMint(BigNumber.from(mintAmount), {
        value: ethers.utils.parseEther(value, "ether"),
      });

      try {
        await response.wait();
      } catch (error) {
        console.log(error);
      }
      console.log("Response: ", response);
    } else {
    }
  };

  const publicMint = async () => {
    if (isConnected) {
      const ethereumChainId = "0x1";
      let chainId = await window.ethereum.request({
        method: "eth_chainId",
      });
      if (chainId !== ethereumChainId) {
        // Collection is in test mode on Goerli testnet(switch dapp to mainnet)
        return;
      }
      try {
        publicCheckout();
      } catch (error) {
        console.log(error);
        throw new Error("Error: ", error);
      }
    } else {
    }
  };

  const whitelistCheckout = async () => {
    const contract = initContract();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const proof = MerkleProof(accounts[0]);
    let totalCost = mintAmount * 0.016;
    let x = totalCost.toFixed(3);
    let value = x.toString();

    const response = await contract.wlMint(
      proof,
      BigNumber.from(mintAmount),
      {
        value: ethers.utils.parseEther(value, "ether"),
      }
    );

    try {
      await response.wait();
    } catch (error) {
        console.log(error);
    }
    console.log("Response: ", response);
  };

  const ccCheckout = async () => {
    const contract = initContract();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const proof = MerkleProof(accounts[0]);
    let totalCost = mintAmount * 0.0125;
    let x = totalCost.toFixed(3);
    let value = x.toString();

    const response = await contract.ccMint(
      proof,
      BigNumber.from(mintAmount),
      {
        value: ethers.utils.parseEther(value, "ether"),
      }
    );

    try {
      await response.wait();
    } catch (error) {
        console.log(error);
    }
    console.log("Response: ", response);
  };

  const whitelistMint = async () => {
    if (isConnected) {
      const ethereumChainId = "0x1";
      let chainId = await window.ethereum.request({
        method: "eth_chainId",
      });
      if (chainId !== ethereumChainId) {
        // "Collection can only be minted on Ethereum mainnet"
        return;
      }

      try {
        whitelistCheckout();
      } catch (error) {
           console.log(error);
      }
    } else {
       console.log("Connect to mint");
    }
  };

    const ccMint = async () => {
      if (isConnected) {
        const ethereumChainId = "0x1";
        let chainId = await window.ethereum.request({
          method: "eth_chainId",
        });
        if (chainId !== ethereumChainId) {
          // "Collection can only be minted on Ethereum mainnet"
          return;
        }

        try {
          ccCheckout();
        } catch (error) {
             console.log(error);
        }
      } else {
         console.log("Connect to mint");
      }
    };

  const mint = async () => {

     if (saleState === 0) return;

     if (saleState === 1) {
        ccMint();
     }

     if( saleState === 2) {
       whitelistMint();
     }

     if (saleState === 3) {
        publicMint();
     }
  }
  const checkWalletConnection = async () => {
    try {
      if (isConnected) return console.log("Connected on load up");
    } catch (error) {
      console.log(error);
      throw new Error("No ethereum object:", error);
    }
  };

  const handleDecrement = () => {
      if (mintAmount <= 1) return;
      setMintAmount(mintAmount - 1);
  };

  const handleIncrement = () => {
    if (mintAmount >= 1) return;
    setMintAmount(mintAmount + 1);
  };

  return (
    <Web3Context.Provider
      value={{
        mint,
        currentAccount,
        setCurrentAccount,
        connectWallet,
        mintAmount,
        setMintAmount,
        isConnected,
        whitelistMint,
        checkWalletConnection,
        setTotalSupply,
        totalSupply,
        getSupply,
        saleState,
        getMintingStatus,
        publicMint,
        isValid,
        proof,
        handleDecrement,
        handleIncrement,
      }}
    >
      {children}
    </Web3Context.Provider>
  );
};
