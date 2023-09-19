import React from 'react';
import logo from './logo.svg';
import './App.css';
import Contract from './ABI.json';
import ethers from 'ethers';
import { useAccount } from 'wagmi';
// import { Web3ReactProvider } from '@alch/alchemy-web3';

import { InjectedConnector } from "@web3-react/injected-connector";
import { create } from 'domain';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import HelloWorld from './components/Helloworld';
import Test from './components/Test'


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
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='HelloWorld' element={<HelloWorld/>}/>
        <Route path='Unlock' element={<Test/>}/>
      </Routes>
    </Router>
  );
}

export default App;
