import Web3 from "web3";
import { web3Modal } from "./web3Modal";

export async function getWeb3Provider() {
  const provider = await web3Modal.connect();
  return new Web3(provider);
}
