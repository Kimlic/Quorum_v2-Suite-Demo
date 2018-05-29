const Migrations = artifacts.require("./Migrations.sol")
const TruffleConfig = require('../truffle')
const Web3 = require('web3')

module.exports = function (deployer, network, addresses) {
  const config = TruffleConfig.networks[network]
  const provider = new Web3.providers.HttpProvider('http://' + config.host + ':' + config.port)

  const web3 = new Web3(provider)
  web3.eth.getCoinbase((err, coinbase) => { 
    console.log('>> Unlocking account ' + coinbase)
    web3.eth.personal.unlockAccount(coinbase, "", 36000)

    console.log('>> Deploying migration')
    deployer.deploy(Migrations)
  })
}
