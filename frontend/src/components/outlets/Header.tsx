import { useState, useEffect } from 'react'
import detectEthereumProvider from '@metamask/detect-provider'

import './Header.css';

let injectedProvider = false


const Header = () => {

    

    const [hasProvider, setHasProvider] = useState<boolean | null>(null)
    const initialState = { accounts: [] }               
    const [wallet, setWallet] = useState(initialState) 

    useEffect(() => {
      const getProvider = async () => {
        const provider = await detectEthereumProvider({ silent: true })
        console.log(provider)
        setHasProvider(Boolean(provider)) // transform provider to true or false
      }
  
      getProvider()
    }, [])

    const updateWallet = async (accounts:any) => {     
        setWallet({ accounts })                          
    }                                                 

    const handleConnect = async () => {                
        let accounts = await window.ethereum.request({   
        method: "eth_requestAccounts",                 
        })                                             
        updateWallet(accounts)                       
    }   

    return (
        <div className="header">
        <div className="header-logo">
            <div className="logo"></div>
            <h1 className="title">AirVandV</h1>
        </div>
        <button className="button" onClick={handleConnect}>
                {wallet.accounts.length === 0 
                    ? <span className="button-text">Connect Wallet</span> 
                    : <span className="button-text">{wallet.accounts[0]}</span>}
            </button>
    </div>

    
    );
};

export default Header;