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

  it("Should add book", async function () {
    const { bookDataBase, owner, otherAccount } = await loadFixture(deployFixture);
    await bookDataBase.addBook({ title: "New Book", year: 2023 });
    const count = await bookDataBase.count();
    expect(count).to.equal(1);
  });

  it("Should edit book", async function () {
    const { bookDataBase, owner, otherAccount } = await loadFixture(deployFixture);
    await bookDataBase.addBook({ title: "New Book", year: 2023 });
    await bookDataBase.editBook(1, { title: "New Book 2", year: 2023 });

    const book = await bookDataBase.books(1);
    expect(book.title).to.equal("New Book 2");
  });

  it("Should remove book", async function () {
    const { bookDataBase, owner, otherAccount } = await loadFixture(deployFixture);
    await bookDataBase.addBook({ title: "New Book", year: 2023 });
    await bookDataBase.removeBook(1);

    const count = await bookDataBase.count();
    expect(count).to.equal(0);
  });

});