import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import hre from "hardhat";

describe("Lock", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployFixture() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await hre.ethers.getSigners(); // pega carteiras de teste

    const HelloWorld = await hre.ethers.getContractFactory("HelloWorld"); // design-patern para criação de objetos
    const helloWorld = await HelloWorld.deploy();

    return { helloWorld, owner, otherAccount };
  }

  it("Should Hello World", async function () {
    const { helloWorld, owner, otherAccount } = await loadFixture(deployFixture);
    const message = await helloWorld.message();
    expect(message).to.equal("Hello World");
  });
});
