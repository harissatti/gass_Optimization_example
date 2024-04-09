require("@nomicfoundation/hardhat-toolbox");
require("hardhat-gas-reporter");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  gasReporter: {
    enabled: (process.env.REPORT_GAS) ? false:true, // to turn on the gass reporter
   // enabled: (process.env.REPORT_GAS) ? true:false, //to turn off the gass reporter
 // outputFile:'gas-report.txt',
 currency: 'EUR',
 L1: "polygon",
 coinmarketcap:"0df4ffa0-9742-4c54-be18-c15cf8dc07ea",
},
};
