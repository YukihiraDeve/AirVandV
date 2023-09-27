import { ethers } from "ethers";
import abi from "../../abiEtherscan.json";

const contractAddress = "0x68d48f29B7726670c672daA94982220C1e3aa3c3";
const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const contract = new ethers.Contract(contractAddress, abi, signer);

const mintToken = async (): Promise<void> => {
  var account = localStorage.getItem("userAddress");
  try {
    console.log(account);
    if (!account) throw new Error("User's wallet is not connected");

    const doorId = "test123";
    const transaction = await contract.mint(account, doorId);
    console.log("Transaction : ", transaction.hash);
  } catch (error) {
    console.error("Error", error);
  }
};


const UnlockToken = async (): Promise<boolean> => {
  const account: string | null = localStorage.getItem("userAddress");
  let isUnlocked: boolean = false;

  try {
    console.log(account);
    if (!account) throw new Error("User's wallet is not connected");

    const doorIds: string[] = await contract.getDoorIdsForOwner(account);
    console.log("DoorIds", doorIds);

    for (const doorId of doorIds) {
      if (typeof doorId === "string") {
        const result: boolean = await contract.unlockDoor(doorId);
        console.log("Door status", result);
        
        if (result) {
          isUnlocked = true;
        }
      } else {
        console.log("Door closed");
      }
    }
    if (!isUnlocked) {
      console.log("No door");
    }
  } catch (e) {
    console.error("Error", e);
  }

  return isUnlocked;
};

export { mintToken, UnlockToken, provider };
