import React, { useState } from "react";
import useWeb3Modal from "@/utils/web3Modal";

const ConnectWallet = () => {
  const [connectedAddress, setConnectedAddress] = useState(null);
  const web3Modal = useWeb3Modal(); // Get the initialized Web3Modal instance

  const connectWallet = async () => {
    try {
      if (!web3Modal) {
        throw new Error("Web3Modal is not initialized. Please wait a moment and try again.");
      }

      const provider = await web3Modal.connect();
      setConnectedAddress(provider.selectedAddress);
    } catch (error) {
      console.error("Error connecting wallet:", error.message);
    }
  };

  return (
    <div>
      {connectedAddress ? (
        <p>Connected Address: {connectedAddress}</p>
      ) : (
        <button onClick={connectWallet}>Connect Wallet</button>
      )}
    </div>
  );
};

export default ConnectWallet;
