// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";

contract TenichiToken is ERC20 {
  constructor (uint256 initialSupply) ERC20("Tenich", "T1") {
    _mint(msg.sender, initialSupply * 10 ** uint(decimals()));
  }
}
