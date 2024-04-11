import { BookDataBase } from '../../typechain-types/BookDataBase';
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";


const BookDataBaseModule = buildModule("BookDataBase", (m) => {
  
  const bookDataBase = m.contract("BookDataBase");

  return { bookDataBase };
});

export default BookDataBaseModule;
