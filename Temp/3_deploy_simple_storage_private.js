var SimpleStoragePrivate = artifacts.require("SimpleStoragePrivate");

module.exports = function(deployer) {
  // Pass 42 to the contract as the first constructor parameter
  // Private contract between Node#1 and Node#2. 
  // PrivateFor contains Node#2 (KIM2) address, should be migrated via Node#1 (KIM1)
  // Check the value from all 3 nodes, the 3-rd node should not see contract's state.
  // deployer.deploy(SimpleStoragePrivate, 42, { privateFor: ["Y/5GwkHOAujznxkoHDjZeKz+4SdYBoc82nJK0T+TrB8="]})
  deployer.deploy(SimpleStoragePrivate, 42, { privateFor: ["Z1YdpwMhpun9xfl0+RVJeCSmIsGUNYhFTF+TlwFk7BA="]})
};
