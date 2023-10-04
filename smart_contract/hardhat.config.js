// https://eth-sepolia.g.alchemy.com/v2/5fbZlubcPa-kcjkqtAylFbLKoAALJG-9




require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url : "https://eth-sepolia.g.alchemy.com/v2/5fbZlubcPa-kcjkqtAylFbLKoAALJG-9",
      accounts: [ "11d4bbfb8f65269888f51f565736b5d274a2e4789093f42de83304cbf5deff2b" ]
    }
  }
};



