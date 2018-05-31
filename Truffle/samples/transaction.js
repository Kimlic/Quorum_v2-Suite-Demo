var SimpleStorage = artifacts.require("SimpleStorage");

module.exports = function (done) {
  console.log("Getting deployed version of SimpleStorage...")
  SimpleStorage.deployed().then(instance => {
    console.log("Setting value to 65...");
    return instance.set(65);
  }).then(function (result) {
    console.log("Transaction:", result);
    console.log("Finished!");
    done();
  }).catch(function (e) {
    console.log(e);
    done();
  });
};
