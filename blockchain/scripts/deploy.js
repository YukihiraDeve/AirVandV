const { ethers, upgrades } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  // const balance = await deployer.getBalance();
  // console.log("Deploy wallet balance:", ethers.utils.formatEther(balance));
  console.log("Deployer wallet public key:", deployer.address);

  const Contract = await ethers.getContractFactory("AirVandV");
  console.log("test1")

  //const proxyContract = await upgrades.deployProxy(Contract);
  const token = await ethers.deployContract("AirVandV")
  console.log("test2")
  console.log("Token address:", await token.getAddress());

  /*await proxyContract.waitForDeployment();
  console.log("test3")
  console.log(`OpenZeppelin Proxy deployed to ${proxyContract.address}\n\n`);
/*/
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
