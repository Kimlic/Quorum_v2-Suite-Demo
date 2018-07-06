pragma solidity 0.4.24;


contract SimpleStoragePrivate {
  
    uint public storedData;

    constructor(uint initVal) public {
        storedData = initVal;
    }

    function setPrivately(uint x) public {
        storedData = x;
    }

    function setEmptyPrivately() public {
        storedData = 111;
    }

    function getPrivately() public view returns (uint retVal) {
        return storedData;
    }
}
