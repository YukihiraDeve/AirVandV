import React, { useCallback } from 'react';
import { ethers } from 'ethers';
import abi from '../../abiEtherscan.json'



const contractAddress = process.env.UPGRADEABLE_PROXY_ADDRESS
const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const contract = new ethers.Contract(contractAddress, abi, signer);


const mintToken = async () => {
    var account = localStorage.getItem('userAdress')
    try {
        console.log(account)
        if (!account) throw new Error("l'utilisateur n'est pas connecter")
        const doorId = "doorId12355";
        const transaction = await contract.mint(account, doorId);

        console.log('Transaction : ',transaction.hash)
        } catch (error) {
            console.error('Error', error);
    }
}

const UnlockToken = async () => {
    var account = localStorage.getItem('userAdress')
    try{
        console.log(account)
        if (!account) throw new Error("l'utilisateur n'est pas connecter")
        const doorIds = await contract.getDoorIdsForOwner(account);
        for (const doorId of doorIds){
            if(typeof doorId === 'string'){
                const result = await contract.unlockDoor(doorId);
                console.log('Door status', result);
            } else {
                console.log("Door fermer")
            }
        }
        } catch(e) {
        console.error("Error", e)
        }
}

export { mintToken, UnlockToken, provider };






