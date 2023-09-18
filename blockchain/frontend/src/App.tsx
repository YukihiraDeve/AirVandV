import React from 'react';
import logo from './logo.svg';
import './App.css';
import Contract from './ABI.json';
import ethers from 'ethers';
import { useAccount } from 'wagmi';
// import { Web3ReactProvider } from '@alch/alchemy-web3';

import { InjectedConnector } from "@web3-react/injected-connector";
import { create } from 'domain';

function App() {
  /*
   const alchemyKey = process.env.ALCHEMY_WEBSOCKET;
   const web3 = createAlchemyWeb3(alchemyKey);
   const contractAddress = process.env.UPGRADEABLE_PROXY_ADDRESS;

   const { address } = useAccount();

   let provider:any;
   if(address) {
     provider = new ethers.providers.Web3Provider(window.ethereum).getSigner();
   }

   const contract = new web3.eth.Contract(
     Contract.AirVandV.address,
     Contract.AirVandV.abi
   );
*/
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
