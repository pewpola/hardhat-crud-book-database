import {
    time,
    loadFixture,
  } from "@nomicfoundation/hardhat-toolbox/network-helpers";
  import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
  import { expect } from "chai";
  import hre from "hardhat";
  
  describe("BookDataBase", function () {
    // We define a fixture to reuse the same setup in every test.
    // We use loadFixture to run this setup once, snapshot that state,
    // and reset Hardhat Network to that snapshot in every test.
    async function deployFixture() {
      // Contracts are deployed using the first signer/account by default
      const [owner, otherAccount] = await hre.ethers.getSigners(); // pega carteiras de teste
  
      const BookDataBase = await hre.ethers.getContractFactory("BookDataBase"); // design-patern para criação de objetos
      const bookDataBase = await BookDataBase.deploy();
  
      return { bookDataBase, owner, otherAccount };
    }
  
    it("Should count = 0", async function () {
      const { bookDataBase, owner, otherAccount } = await loadFixture(deployFixture);
      const count = await bookDataBase.count();
      expect(count).to.equal(0);
    });
  });
  