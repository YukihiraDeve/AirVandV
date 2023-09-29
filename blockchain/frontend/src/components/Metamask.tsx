import React, { useState } from "react";

const Metamask: React.FC = () => {
  const [account, setAccount] = useState<string | null>(null);

  const connectWallet = async () => {
    try {
      if (window.ethereum) {
        const accounts: string[] = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(accounts[0]);
        localStorage.setItem("userAddress", accounts[0]);
      } else {
        alert("Metamask n'est pas installé");
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      {account ? (
        <p>Wallet connected : {account}</p>
      ) : (
        <button className="btn" onClick={connectWallet}>
          Connect wallet
        </button>
      )}
    </div>
  );
};

export default Metamask;
