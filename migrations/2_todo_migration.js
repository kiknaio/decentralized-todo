const Todo = artifacts.require("Todo");

module.exports = function(deployer) {
  // deployment steps
  deployer.deploy(Todo);
};