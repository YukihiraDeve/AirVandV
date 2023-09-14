const { expect } = require("chai");

describe('AirVandV', function() {
  let owner, addr1, addr2, AirVandV, airVandV;

  before(async function() {
      [owner, addr1, addr2] = await ethers.getSigners();

      AirVandV = await ethers.getContractFactory("AirVandV");
      airVandV = await AirVandV.deploy();

      // Appeler la fonction initialize avec le propriétaire
      await airVandV.connect(owner).initialize();
  });

  it('Doit permettre au propriétaire de mint un nouveau token', async function() {
      await expect(airVandV.connect(owner).mint(owner.address, "Door1")).to.not.be.reverted;
  });

  it("Ne doit pas permettre à d'autres utilisateurs de mint un nouveau token", async function() {
      await expect(airVandV.connect(addr1).mint(addr1.address, "Door2")).to.be.revertedWith("Ownable: caller is not the owner");
  });

    it("Doit permettre au propriétaire du token de déverrouiller la porte", async function() {
        await airVandV.mint(addr1.address, "door123");
        expect(await airVandV.connect(addr1).unlockDoor("door123")).to.equal(true);
    });

    it("Ne doit pas permettre à d'autres utilisateurs de déverrouiller la porte", async function() {
      const canUnlock = await airVandV.connect(addr1).unlockDoor("Door1");
      expect(canUnlock).to.be.false;
      
    });
});
