const { ethers, upgrades } = require("hardhat");

async function main() {
  const upgradeableProxyAddress = process.env.UPGRADEABLE_PROXY_ADDRESS;
  if (!upgradeableProxyAddress) {
    console.error(
      "Missing address for OpenZeppelin upgradeable proxy after initial deploy in .env."
    );
    return;
  }

  const [deployer] = await ethers.getSigners();
  console.log(
    "Deploy wallet balance:",
    ethers.utils.formatEther(await deployer.getBalance())
  );

  console.log("Deployer wallet public key:", deployer.address);

  const Contract = await ethers.getContractFactory("AirVandV");
  const proxyContract = await upgrades.upgradeProxy(
    upgradeableProxyAddress,
    Contract
  );

  console.log(
    `New contract deployed. OpenZeppelin Proxy remains at ${proxyContract.address}\n\n`
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
