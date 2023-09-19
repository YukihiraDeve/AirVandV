const alchemyKey = process.env.ALCHEMY_WEBSOCKET //env file
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey); 

const contractABI = require("../abiEtherscan.json");
const contractAddress = process.env.UPGRADEABLE_PROXY_ADDRESS // Je crois que c'est ce truc la qui est faux, je viens de m'en rendre compte a 18h39

var doorId = null

export const helloWorldContract = new web3.eth.Contract(
    contractABI,
    contractAddress
  );


export const loadCurrentMessage = async () => { 
    const message = await helloWorldContract.methods.unlockDoor().call(); 
    return message;
};


export const connectWallet = async () => {

};

const getCurrentWalletConnected = async () => { 

};


export const updateMessage = async (message) => {

};