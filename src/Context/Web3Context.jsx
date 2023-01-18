import React, { useState, useEffect } from "react";
import { ethers, BigNumber } from "ethers";
import { MerkleProof, VerifyWallet } from "./MerkleProof";
import { ToastContainer, toast } from "react-toastify";

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
  const [saleState, setSaleState] = useState(0);
  const [wl, setWl] = useState(true);
  const [proof, setProof] = useState(false);
  const toastId = React.useRef(null);

  useEffect(() => {
    // MerkleProof();
  });

  // Multiple getter functions
  const [totalSupply, setTotalSupply] = useState(0);

  const checkWlMints = async () => {
    const contract = initContract();
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const valid = VerifyWallet(accounts[0]);

    const response = await contract.totalWlMint(accounts[0]);

    // console.log(response);
    let parsedWl = parseInt(response.toString());

    if (parsedWl < 10 && valid) {
      setWl(true);
      console.log(valid);
    } else {
      setWl(false);
      console.log(valid);
    }
  };

  const isValid = (address) => {
    const valid = VerifyWallet(address);

    setProof(valid);
    // console.log(valid);

    return proof;
  };

  const getSupply = async () => {
    const contract = initContract();

    let response = (await contract.totalSupply()).toNumber();

    setTotalSupply(response.toString());
  };

  const getMintingStatus = async () => {
      //const contract = initContract();

     // let response = (await contract.getMintingStatus()).toNumber();

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
         //checkWlMints();
      }

      let chainId = await window.ethereum.request({
        method: "eth_chainId",
      });
      console.log("Connected to chainId", chainId);
      console.log("Current account", currentAccount)
      const ethereumChainId = "0x1";
      if (chainId !== ethereumChainId) {
        // "Collection is only available on Ethereum mainnet, Please switch to mainnet"
        toast.warning(
          "Collection is only available on Ethereum Mainnet, Please switch to Mainnet",
          {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          }
        );
        return;
      }
    } catch (error) {
      toast.warning("No ethereum object, please install metamask on pc", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
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

    let totalCost = mintAmount * 0.012;
    let x = totalCost.toFixed(4);
    let value = x.toString();

    if (balance >= totalCost) {
      const response = await contract.mint(BigNumber.from(mintAmount), {
        value: ethers.utils.parseEther(value, "ether"),
      });

      toastId.current = toast.loading("Mint in Progress");

      try {
        await response.wait();
        toast.dismiss(toastId.current);
        toast.success(
          mintAmount <= 1
            ? `Mint successful, ${mintAmount} Peperino has entered the blockchain`
            : `Mint successful, ${mintAmount} Peperinos have entered the blockchain`,
          {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            delay: 1000,
          }
        );
      } catch (error) {
        toast.dismiss(toastId.current);
        toast.error("Error during Mint", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          delay: 1000,
        });
        console.log(error);
      }
      console.log("Response: ", response);
    } else {
      toast.error("Not enough peperino coins you brokie", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const publicMint = async () => {
    console.log("Am i here");
    if (isConnected) {
      // const goerliChainId = "0x5";
      console.log("In public mint connected");
      const ethereumChainId = "0x1";
      let chainId = await window.ethereum.request({
        method: "eth_chainId",
      });
      if (chainId !== ethereumChainId) {
        toast.error(
          "Collection can only be minted on Ethereum Mainnet, please switch to Mainnet",
          {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          }
        );
        // Collection is in test mode on Goerli testnet(switch dapp to mainnet)
        return;
      }
      try {
        publicCheckout();
      } catch (error) {
        toast.error("Minting error check Metamask in console", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        console.log(error);
        throw new Error("Error: ", error);
      }
    } else {
      toast.info("Please connect wallet to mint", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const whitelistCheckout = async () => {
    const contract = initContract();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const proof = MerkleProof(accounts[0]);
    let totalCost = mintAmount * 0.01;
    let x = totalCost.toFixed(3);
    let value = x.toString();

    const response = await contract.whitelistMint(
      BigNumber.from(mintAmount),
      proof,
      {
        value: ethers.utils.parseEther(value, "ether"),
      }
    );

    toastId.current = toast.loading("Mint in Progress");

    try {
      await response.wait();
      toast.dismiss(toastId.current);
      toast.success(
        mintAmount <= 1
        ? `Mint successful, ${mintAmount} Chest has been minted.`
        : `Mint successful, ${mintAmount} Chests have been minted.`,
          {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            delay: 1000,
          }
      );
    } catch (error) {
        toast.dismiss(toastId.current);
        toast.error("Error during Mint", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              delay: 1000,
            });
            console.log(error);
        }
    console.log("Response: ", response);
  };

  const whitelistMint = async () => {
    console.log("I am in whitelist mint");
    if (isConnected) {
      const ethereumChainId = "0x1";
      let chainId = await window.ethereum.request({
        method: "eth_chainId",
      });
      if (chainId !== ethereumChainId) {
        toast.error(
          "Collection can only be minted on Ethereum Mainnet, please switch to Mainnet",
          {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          }
        );
        // "Collection can only be minted on Ethereum mainnet"
        return;
      }

      try {
        whitelistCheckout();
      } catch (error) {
        toast.error("Minting error check Metamask", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } else {
      toast.info("Please connect wallet to mint", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const mint = async () => {

     if (saleState === 0) return;

     if (saleState === 1) {
        whitelistMint();
     }

     if (saleState === 2) {
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
    if (mintAmount >= 2) return;
    setMintAmount(mintAmount + 1);
  };

  const handleIncrementWl = () => {
    if (mintAmount >= 2) return;
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
        handleDecrement,
        handleIncrement,
        handleIncrementWl,
        setTotalSupply,
        totalSupply,
        getSupply,
        saleState,
        getMintingStatus,
        publicMint,
        isValid,
        proof,
        checkWlMints,
        wl,
      }}
    >
      {children}
      <ToastContainer
        position="top-center"
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Web3Context.Provider>
  );
};
