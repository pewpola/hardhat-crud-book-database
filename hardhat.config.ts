import dotenv from "dotenv";
dotenv.config();

import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "solidity-docgen";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    local: {
      url: "http://127.0.0.1:8545/",
      chainId: 31337,
      accounts: {
        mnemonic: "test test test test test test test test test test test junk"
      }
    },
    sepolia: {
      url: process.env.INFURA_URL,
      chainId: 11155111,
      accounts: {
        mnemonic: process.env.SECRET
      }
    },
    fantom: {
      url: "https://rpc.ankr.com/fantom_testnet",
      chainId: 4002,
      accounts: {
        mnemonic: process.env.SECRET
      }
    }
  },
  etherscan: {
    apiKey: process.env.API_KEY
  }
};

export default config;
