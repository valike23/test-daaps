import React, { useState } from "react";
import { getWeb3Provider } from "../utils/getWeb3Provider";
import { utils } from "web3";

const TransferEther = () => {
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [txHash, setTxHash] = useState("");

  const handleTransfer = async () => {
    try {
      const web3Provider = await getWeb3Provider();
      const accounts = await web3Provider.eth.getAccounts();
      const value = utils.toWei(amount, "ether");

      const tx = {
        from: accounts[0],
        to: recipient,
        value,
      };

      const result = await web3Provider.eth.sendTransaction(tx);
      setTxHash(result.transactionHash);
    } catch (error) {
      console.error("Error transferring Ether:", error.message);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Recipient Address"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
      />
      <input
        type="number"
        step="0.01"
        placeholder="Amount (in Ether)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleTransfer}>Transfer</button>

      {txHash && <p>Transaction Hash: {txHash}</p>}
    </div>
  );
};

export default TransferEther;
