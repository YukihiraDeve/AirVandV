import React from "react";
import { useEffect, useState } from "react";
import {
  helloWorldContract,
  connectWallet,
  updateMessage,
  loadCurrentMessage,
  getCurrentWalletConnected,
} from "./interact.js";

import alchemylogo from "../assets/logo.svg";


function HelloWorld(){

const [walletAddress, setWallet] = useState("");
const [status, setStatus] = useState("");
const [message, setMessage] = useState("No connection to the network.");
const [newMessage, setNewMessage] = useState("");


useEffect(() => {
    async function fetchMessage() {
      const message = await loadCurrentMessage();
      setMessage(message);
    }
    fetchMessage();
  }, []);

function addSmartContractListener() { //TODO: implement

}

function addWalletListener() { //TODO: implement

}

const connectWalletPressed = async () => { //TODO: implement

};

const onUpdatePressed = async () => { //TODO: implement

};

return (
    <div id="container">
      <img id="logo" src={alchemylogo}></img>
      <button id="walletButton" onClick={connectWalletPressed}>
        {walletAddress.length > 0 ? (
          "Connected: " +
          String(walletAddress).substring(0, 6) +
          "..." +
          String(walletAddress).substring(38)
        ) : (
          <span>Connect Wallet</span>
        )}
      </button>

      <h2 style={{ paddingTop: "50px" }}>Current Message:</h2>
      <p>{message}</p>

      <h2 style={{ paddingTop: "18px" }}>New Message:</h2>

      <div>
        <input
          type="text"
          placeholder="Update the message in your smart contract."
          onChange={(e) => setNewMessage(e.target.value)}
          value={newMessage}
        />
        <p id="status">{status}</p>

        <button id="publishButton" onClick={onUpdatePressed}>
          Update
        </button>
      </div>
    </div>
  );
}
  export default HelloWorld;