import {
    time,
    loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import hre from "hardhat";
  
describe("BookDataBase", function () {
  async function deployFixture() {
    const [owner, otherAccount] = await hre.ethers.getSigners();
  
    const BookDataBase = await hre.ethers.getContractFactory("BookDataBase");
    const bookDataBase = await BookDataBase.deploy();
  
    return { bookDataBase, owner, otherAccount };
  }
  
  it("Should count = 0", async function () {
    const { bookDataBase, owner, otherAccount } = await loadFixture(deployFixture);
    const count = await bookDataBase.count();
    expect(count).to.equal(0);
  });
});
  