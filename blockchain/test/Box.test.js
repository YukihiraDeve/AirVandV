// Load dependencies
const { expect } = require('chai');

// Start test block
describe('AirVandV', function () {
  before(async function () {
    this.AirVandV = await ethers.getContractFactory('AirVandV'); // <-- Changement ici
  });

  beforeEach(async function () {
    this.airVandV = await this.AirVandV.deploy(); // <-- Changement ici
    await this.airVandV.deployed(); // <-- Changement ici
  });

  // NOTE: Le contrat AirVandV n'a pas de méthodes "store" ou "retrieve" selon le code que vous avez fourni.
  // Vous devez adapter vos tests pour tester les fonctionnalités réelles de votre contrat.
});
