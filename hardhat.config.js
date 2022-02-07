/* hardhat.config.js */

const config = require("./next.config.js");

require("@nomiclabs/hardhat-waffle")
const privateKey = config.env.marketplacePrivateKey

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
//  mumbai: {
//    url: "https://rpc-mumbai.matic.today",
//    accounts: [privateKey]
//  }
  },
  solidity: {
    version: "0.8.11",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}