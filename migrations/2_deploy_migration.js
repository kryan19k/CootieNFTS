const Token = artifacts.require("ERC20");
const NFTStaking =
artifacts.require("NFTStaking")
module.exports = async function (deployer) {
  deployer.deploy(Token);  
  deployer.deploy(NFTStaking);
};
