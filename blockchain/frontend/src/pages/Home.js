import React, { useCallback } from 'react';
import { ethers } from 'ethers';
import abi from '../abiEtherscan.json';
import dotenv from "dotenv";

const Home = () => {
    const mintToken = useCallback(async () => {
        try {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();

            const contractAddress = process.env.UPGRADEABLE_PROXY_ADDRESS
            const contract = new ethers.Contract(contractAddress, abi, signer);

            const recipientAddress = "u adresse";
            const doorId = "doorId12355";
            
            const transaction = await contract.mint(recipientAddress, doorId);

            console.log('Transaction Hash:', transaction.hash);
        } catch (error) {
            console.error('Error:', error);
        }
    }, []);


    const Unlock = useCallback(async ()=>{
        try{
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();

            const contractAddress = process.env.UPGRADEABLE_PROXY_ADDRESS
            const contract = new ethers.Contract(contractAddress, abi, signer);

            const recipientAddress = "u adress"
            const doorId = await contract.getDoorIdsForOwner(recipientAddress);
            console.log(doorId)

            const result = await contract.unlockDoor(doorId);
            console.log('Door status', result);
            

        } catch(e){
            console.error("Error", e)
        }



    })


    return (
        <div>
            <h1>Hello World</h1>
            <button onClick={mintToken}>Minter Token</button>
            <button onClick={Unlock}> Unlock</button>
        </div>
    );
};

export default Home;
