import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import hre from "hardhat";

describe("HelloWorld", function () {
  async function deployFixture() {
    const [owner, otherAccount] = await hre.ethers.getSigners(); // pega carteiras de teste

    const HelloWorld = await hre.ethers.getContractFactory("HelloWorld"); // design-patern para criação de objetos
    const helloWorld = await HelloWorld.deploy();

    return { helloWorld, owner, otherAccount };
  }

  it("Should get Hello World", async function () {
    const { helloWorld, owner, otherAccount } = await loadFixture(deployFixture);
    const message = await helloWorld.message();
    expect(message).to.equal("Hello, World!");
  });

  it("Should set Hello World", async function () {
    const { helloWorld, owner, otherAccount } = await loadFixture(deployFixture);
    await helloWorld.setMessage("New Message");
    expect(await helloWorld.message()).to.equal("New Message");
  });
});
