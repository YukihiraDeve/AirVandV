import Web3 from "web3";
import React, { useState } from 'react';

const ABI = require("../abiEtherscan.json");

const CONTRACT_ADDRESS = process.env.UPGRADEABLE_PROXY_ADDRESS;
const PROVIDER_URL = process.env.ALCHEMY_WEBSOCKET 
const web3 = new Web3(new Web3.providers.WebsocketProvider(PROVIDER_URL));
const contract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS);

const UnlockDoorComponent: React.FC = () => {
    const [doorId, setDoorId] = useState<string>('');
    

    const unlockDoor = async () => {
        if (!doorId) {
            console.log("Veuillez entrer un ID de porte valide.");
            return;
        }

        let canUnlock
        try {
            canUnlock = await (contract.methods.unlockDoor as any)(doorId).call();
        } catch (error) {
            console.error("Erreur lors de l'appel du contrat :", error);
        }



        if (canUnlock) {
            console.log(`Le cadenas pour la porte ${doorId} peut être déverrouillé !`);
            // Ici, vous pouvez ajouter le code pour déverrouiller physiquement le cadenas ou effectuer d'autres actions
        } else {
            console.log(`La porte ${doorId} ne peut pas être déverrouillée.`);
        }
    };

    return (
        <div>
            <input 
                type="text" 
                placeholder="Entrez l'ID de la porte" 
                value={doorId}
                onChange={(e) => setDoorId(e.target.value)}
            />
            <button onClick={unlockDoor}>Déverrouiller</button>
        </div>
    );
}

export default UnlockDoorComponent;
