var SimpleStorage = artifacts.require("SimpleStorage");

module.exports = function(deployer) {
  // Pass 42 to the contract as the first constructor parameter
  // deployer.deploy(SimpleStorage, 42, {privateFor: ["29pCFIksg4T6Wyy4HwRMirY89Il5+X9bAc+juqY5Ol4="]})
  deployer.deploy(SimpleStorage, 30, {})
};
