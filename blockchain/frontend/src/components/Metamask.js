import React, {useState} from 'react';

const Metamask = () => {
    const [account, setAccount] = useState(null)
    const connectWallet = async() => {

    
    try {
        if(window.ethereum){
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            setAccount(accounts[0]);
            localStorage.setItem('userAdress', accounts)
        } else {
            alert("Metamask n'est pas installé")
        }
    } catch(e){
        console.error(e)
    }
}
    return (
        <div>
        <h1>Bonjour !</h1>
        {account ? (
          <p>Connecté avec : {account}</p>
        ) : (
          <button onClick={connectWallet}>Se connecter avec MetaMask</button>
        )}
      </div>
    );
};

export default Metamask;