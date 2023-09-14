const { ethers, upgrades } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  // const balance = await deployer.getBalance();
  // console.log("Deploy wallet balance:", ethers.utils.formatEther(balance));
  console.log("Deployer wallet public key:", deployer.address);

  const Contract = await ethers.getContractFactory("AirVandV");
  const proxyContract = await upgrades.deployProxy(Contract);
  await proxyContract.waitForDeployment();

  console.log(`OpenZeppelin Proxy deployed to ${proxyContract.address}\n\n`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
