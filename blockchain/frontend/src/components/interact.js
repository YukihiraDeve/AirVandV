const alchemyKey = process.env.ALCHEMY_WEBSOCKET
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey); 

const contractABI = require("../ABI.json");
const contractAddress =  process.env.UPGRADEABLE_PROXY_ADDRESS;


export const helloWorldContract = new web3.eth.Contract(
    contractABI,
    contractAddress
  );

export const loadCurrentMessage = async () => { 
    const message = await helloWorldContract.methods.message().call(); 
    return message;
};


export const connectWallet = async () => {

};

const getCurrentWalletConnected = async () => { 

};


export const updateMessage = async (message) => {

};