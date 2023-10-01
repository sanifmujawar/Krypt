require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/Zjqj0Kz9CwDR8DJ1hEv8_2NGxzWFbcqN',
      accounts: ['ea6b7f88247696be0f2c676fd5988bb9ba0e890aba3ef30bc4fe61f2c8349daf'],
    },
  },
};