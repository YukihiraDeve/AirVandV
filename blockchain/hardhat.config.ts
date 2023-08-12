import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-ethers";
import { env } from "process";

const config: HardhatUserConfig = {
  // defaultNetwork: "sepolia",
  // networks: {
  //   hardhat: {},
  //   sepolia: {
  //     url: env.ETH_SEPOLIA_URL,
  //   },
  // },
  solidity: "0.8.21",
};

export default config;
