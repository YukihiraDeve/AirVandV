async function main () {
    // Retrieve accounts from the local node
    const accounts = await ethers.provider.listAccounts();
    console.log(accounts);
    // Set up an ethers contract, representing our deployed Box instance
    const address = '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512';
    const Box = await ethers.getContractFactory('Box');
    const box = await Box.attach(address);

    // Send a transaction to store() a new value in the Box
    await box.store(23);

    // Call the retrieve() function of the deployed Box contract
    const value = await box.retrieve();
    console.log('Box value is', value.toString());
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });