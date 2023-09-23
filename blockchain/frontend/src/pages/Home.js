import React, { useCallback } from 'react';
import { ethers } from 'ethers';
import { mintToken, UnlockToken } from '../components/utils/blockchain';
import Metamask from '../components/Metamask';


const Home = () => {
  const handleMint = useCallback(async () => {
    await mintToken();
    }, []);

  const handleUnlock = useCallback(async () => {
        await UnlockToken();
    }, []);


    return (
        
        <div>
            <h1>Hello World</h1>
            <button onClick={handleMint}>Minter Token</button>
            <button onClick={handleUnlock}>Unlock Token</button>
            <Metamask/>
        </div>
    );
};

export default Home;
