pragma solidity 0.4.24;


contract SimpleStorage {
  
    uint public storedData;

    constructor(uint initVal) public {
        storedData = initVal;
    }

    function set(uint x) public {
        storedData = x;
    }

    function setEmpty() public {
        storedData = 111;
    }

    function get() public view returns (uint retVal) {
        return storedData;
    }
}
