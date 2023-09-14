import { ethers, network, upgrades } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contract AirVandV with the account:", deployer.address);
  
  const ownerbBalance = await network.provider.send("eth_getBalance", [deployer.address, "latest"]);
  console.log("Account balance:", ethers.formatEther(ownerbBalance));

  // Deploy
  const AirVandV = await ethers.getContractFactory("AirVandV", deployer);
  console.log("Deploying AirVandV...");
  const airVandV = await AirVandV.deploy();
  // have to wait until the transaction is mined
  //await airVandV.deployed();
  console.log("AirVandV deployed to:", airVandV.getAddress());


  // Deploy the contract using the OpenZeppelin upgrades plugin to ensure it's upgradeable
  console.log("Deploying AirVandV with upgrades...");
  const airVandVUpgradable = await upgrades.deployProxy(AirVandV, []);
  console.log("AirVandV deployed to:", airVandVUpgradable.address);

  // const AirVandV = await ethers.getContractFactory("AirVandV");
  // console.log("Deploying AirVandV...", AirVandV);

  // const airVandV = await AirVandV.deploy();
  // console.log("AirVandV deployed to:", airVandV.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
