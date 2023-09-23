const { ethers, upgrades } = require("hardhat");
const fs = require("fs");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log(
    "Deploy wallet balance:",
    ethers.utils.formatEther(await deployer.getBalance())
  );
  console.log("Deployer wallet public key:", deployer.address);

  const Contract = await ethers.getContractFactory("AirVandV");
  const proxyContract = await upgrades.deployProxy(Contract);
  await proxyContract.deployed();

  console.log(`OpenZeppelin Proxy deployed to ${proxyContract.address}\n\n`);

  // ABI
  // const path = '../../frontend/src/ABI.json';
  // const abi = JSON.stringify(Contract.interface.format("json"), null, 2);
  // fs.writeFileSync(path, abi);

  //console.log("ABI enregistrée dans", path);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
