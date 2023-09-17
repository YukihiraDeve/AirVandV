import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-ethers";
import "@openzeppelin/hardhat-upgrades";
import dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
  networks: {
    hardhat: {},
    sepolia: {
      url: `https://sepolia.infura.io/v3/82b9c544ce6242b6be59d38b4a122e73`,
      accounts: {
        mnemonic: "autumn cotton orbit deal will high south civil film police thought predict"
      },
      chainId: 11155111,
    }
  },
  solidity: "0.8.21",
};

export default config;
