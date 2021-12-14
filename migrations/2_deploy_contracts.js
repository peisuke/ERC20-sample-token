var TenichiToken = artifacts.require("./TenichiToken.sol");
var CurryToken = artifacts.require("./CurryToken.sol");

module.exports = function(deployer) {
  deployer.deploy(TenichiToken, 1000);
  deployer.deploy(CurryToken, 10000);
};
