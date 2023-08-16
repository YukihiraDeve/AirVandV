const { ethers, upgrades } = require("hardhat");

async function main() {
  const AirVandV = await ethers.getContractFactory("AirVandV");
  console.log("Deploying AirVandV...");
  
  // Deploy the contract using the OpenZeppelin upgrades plugin to ensure it's upgradeable
  const airVandV = await upgrades.deployProxy(AirVandV, [], { initializer: 'initialize' });
  await airVandV.deployed();
  console.log("AirVandV deployed to:", airVandV.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
