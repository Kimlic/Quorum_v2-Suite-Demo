const Migrations = artifacts.require("./Migrations.sol")

module.exports = function (deployer, network, addresses) {
  web3.eth.sendTransaction({
    from: web3.eth.coinbase, 
    to: web3.eth.coinbase, 
    value:0x0
  })
  deployer.deploy(Migrations, {})
}
