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
      url: `https://sepolia.infura.io/v3/b3738b08c0794ae38c1e084cd65bb9fa`,
      accounts: {
        mnemonic: "1b76076db17a49e89a32bab3c7043c99"
      },
      chainId: 1337,
      gas: "auto",
      gasPrice: "auto",
      gasMultiplier: 1,
    }
  },
  solidity: "0.8.21",
};

export default config;
