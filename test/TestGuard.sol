// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "truffle/Assert.sol";
// import "truffle/DeployedAddresses.sol";

import "../contracts/ReentrancyMock.sol";
import "../contracts/ReentrancyAttack.sol";


contract TestGuard {

    ReentrancyMock private target;

    function beforeEach() public {
        target = new ReentrancyMock();
        // call counter twice to set value to 2
        target.callback();
        target.callback();
    }

    function testTargetIsInitialized() public {
        Assert.equal(target.counter(), 2, "counter should be 2");
    }

    function testLocalVulnerable() public {
        // try to invoke localRecursion that is reentrant.
        // solhint-disable-next-line
        (bool result,) = address(target).call(abi.encodeWithSignature("countLocalRecursiveVulnerable(uint256)", 3));

        // it does not detect reentrancy
        Assert.isTrue(result, "Does not have a guard");

        // and the counter got fragged
        Assert.equal(target.counter(), 5, "counter got tickled to 5");
    }

    function testLocalGuarded() public {
        // try to invoke localRecursion that is reentrant.
        // solhint-disable-next-line
        (bool result,) = address(target).call(abi.encodeWithSignature("countLocalRecursive(uint256)", 3));

        // it should detect reentrancy and revert
        Assert.isFalse(result, "Guard should prevent reentry");

        // and the counter is not changed
        Assert.equal(target.counter(), 2, "counter should remain 2");
    }

    function testLocalCallVulnerable() public {
        // invoke this.call(hash) that is reentrant.
        // solhint-disable-next-line
        (bool result,) = address(target).call(abi.encodeWithSignature("countThisRecursiveVulnerable(uint256)", 3));

        // it does not detect reentrancy
        Assert.isTrue(result, "Does not have a guard");

        // and the counter got fragged
        Assert.equal(target.counter(), 5, "counter got tickled to 5");
    }

    function testLocalCallGuarded() public {
        // invoke this.call(hash) that is reentrant.
        // solhint-disable-next-line
        (bool result,) = address(target).call(abi.encodeWithSignature("countThisRecursive(uint256)", 5));

        // it is guarded and will prevent reentry
        Assert.isFalse(result, "Guard should prevent reentry");

        // and the counter got fragged
        Assert.equal(target.counter(), 2, "counter got tickled to 2");
    }

    function testBadContractExploit() public {
        ReentrancyAttack evilContract = new ReentrancyAttack();

        // try to invoke this.call(hash) that is reentrant.
        // solhint-disable-next-line
        (bool result,) = address(target).call(abi.encodeWithSignature("countAndCall(address)", evilContract));

        // it should detect reentrancy and revert
        Assert.isFalse(result, "Guard should prevent reentry");

        // and the counter is not changed
        Assert.equal(target.counter(), 2, "counter should remain 2");
    }

    function testAnotherFunctionVulnerable() public {
        // try to invoke localRecursion that is reentrant.
        // solhint-disable-next-line
        (bool result,) = address(target).call(abi.encodeWithSignature("countWithHelperVulnerable(uint256)", 10));

        // it does not detect reentrancy
        Assert.isTrue(result, "Does not have a guard");

        // and the counter is not changed
        Assert.equal(target.counter(), 23, "counter should remain 23");
    }

    function testAnotherFunctionGuarded() public {
        // try to invoke localRecursion that is reentrant.
        (bool result,) = address(target).call(abi.encodeWithSignature("countWithHelper(uint256)", 3));

        // it should detect reentrancy and revert
        Assert.isFalse(result, "Guard should prevent reentry");

        // and the counter is not changed
        Assert.equal(target.counter(), 2, "counter should remain 2");
    }

}
