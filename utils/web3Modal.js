import { useEffect, useState } from "react";
import Web3Modal from "web3modal";

let web3Modal;

export const getWeb3Modal = () => {
  if (!web3Modal) {
    const providerOptions = {
      // Add supported wallet providers here (e.g., MetaMask, WalletConnect, etc.)
    };

    web3Modal = new Web3Modal({
      cacheProvider: true,
      providerOptions,
    });
  }

  return web3Modal;
};

export default function useWeb3Modal() {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    getWeb3Modal();
    setIsInitialized(true);
  }, []);

  return isInitialized ? web3Modal : null;
}
