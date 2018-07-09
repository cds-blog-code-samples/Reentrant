pragma solidity ^0.4.24;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";

import "../contracts/ReentrancyMock.sol";
import "../contracts/ReentrancyAttack.sol";


contract TestGuard {
    ReentrancyMock target;

    function beforeEach() public {
        target = new ReentrancyMock();
        // call counter twice to set value to 2
        target.callback();
        target.callback();
    }

    function testTargetIsInitialized() public {
        Assert.equal(target.counter(), 2, "counter should be 2");
    }

    function testLocalExploit() public {
        // try to invoke localRecursion that is reentrant.
        bool result = address(target).call(abi.encodeWithSignature("countLocalRecursive(uint256)", 10));

        // it should detect reentrancy and revert
        Assert.isFalse(result, "Guard should prevent reentry");

        // and the counter is not changed
        Assert.equal(target.counter(), 2, "counter should remain 2");
    }

    function testLocalCallExploit() public {
        // try to invoke this.call(hash) that is reentrant.
        bool result = address(target).call(abi.encodeWithSignature("countThisRecursive(uint256)", 10));

        // it should detect reentrancy and revert
        Assert.isFalse(result, "Guard should prevent reentry");

        // and the counter is not changed
        Assert.equal(target.counter(), 2, "counter should remain 2");
    }

    function testBadContractExploit() public {
        ReentrancyAttack evilContract = new ReentrancyAttack();

        // try to invoke this.call(hash) that is reentrant.
        bool result = address(target).call(abi.encodeWithSignature("countAndCall(address)", evilContract));

        // it should detect reentrancy and revert
        Assert.isFalse(result, "Guard should prevent reentry");

        // and the counter is not changed
        Assert.equal(target.counter(), 2, "counter should remain 2");
    }
}
