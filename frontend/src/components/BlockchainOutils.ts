import { ethers } from 'ethers';

// Remplacez par l'ABI de votre contrat ERC-721
const contractABI: ethers.ContractInterface = [...] 

// Mettez à jour ces constantes avec vos propres valeurs
const contractAddress = "YOUR_CONTRACT_ADDRESS";
const providerURL = 'YOUR_JSON_RPC_URL';

// Instanciation du fournisseur et du contrat
const provider = new ethers.providers.JsonRpcProvider(providerURL);
const contract = new ethers.Contract(contractAddress, contractABI, provider);

/**
 * Vérifie si un utilisateur possède un NFT spécifique
 * @param userAddress - L'adresse Ethereum de l'utilisateur
 * @param tokenId - L'ID du token à vérifier
 * @returns Un booléen indiquant si l'utilisateur possède le NFT
 */
async function checkIfUserOwnsToken(userAddress: string, tokenId: number): Promise<boolean> {
    try {
        const owner = await contract.ownerOf(tokenId);
        return owner.toLowerCase() === userAddress.toLowerCase();
    } catch (err) {
        console.error("Une erreur s'est produite lors de la vérification de la propriété du token:", err);
        return false;
    }
}

export { checkIfUserOwnsToken };
