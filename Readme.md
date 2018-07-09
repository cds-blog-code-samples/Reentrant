# A look at Open Zeppelin *ReentrancyGuard*

## Problem
Smart Contract methods can be invoked numerous times within a single
transaction. If these functions transfer ether or value then it can be exploited
and should be audited. See [Dao 53mm Hack
explanation](https://www.youtube.com/watch?v=5JrdR6SRlWE)

## Solution
Utilize a ***singleton lock*** to guard the function execution. It is like an entry
ticket that can be used once in any transaction. After it has been used, no other
`nonReentrant` function is allowed to be executed for the rest of the transaction.

Open Zeppelin's
[ReentrancyGuard](https://github.com/OpenZeppelin/openzeppelin-solidity/blob/master/contracts/ReentrancyGuard.sol)
implements a modifier `nonReentrant` that utilizes a singleton boolean
`reentrancyLock` initialized false at the start of a transaction. When a
function enters a `nonReentrant` function, the modifier checks the state of
`reentranceLock` and allows the transaction to proceed if the lock is
disengaged(false), closing the lock, or reverts the entire transaction if the
lock is engaged(true).

When a contract inherits from `ReentrancyGuard` it gets the boolean state variable
`reentrancyLock`, and a pre-condition modifier to ensure the lock is utilized
once in the course of a transaction.

## Sample code
Open Zeppelin's
[ReentrancyMock](https://github.com/OpenZeppelin/openzeppelin-solidity/blob/master/contracts/mocks/ReentrancyMock.sol)
simulates defending against three types of attacks.


### The time a guarded function is called recursively

```solidity
  function countLocalRecursive(uint256 n)
      public nonReentrant   // use the lock and proceed 1st time, revert on next
                            // invocation of nonReentrant guard check
  {
    if (n > 0) {
      count();

      // make a recursive call, which will trigger
      // the lock check resulting in the transaction
      // being reverted.
      countLocalRecursive(n - 1);
    }
  }
```

### When a guarded function uses `call` to invoke any guarded function

```solidity
  function countThisRecursive(uint256 n)
      public nonReentrant   // use the lock and proceed 1st time, revert on next
                            // invocation of nonReentrant guard check
  {
    if (n > 0) {
      count();

      // Use low level call mechanism to make a recursive call, which will
      // trigger the lock check resulting in the transaction being reverted.
      bool result = address(this).call(abi.encodeWithSignature("countThisRecursive(uint256)", n - 1));

      // It is important to `require` this check of the return value
      // otherwise the transaction will continue
      require(result == true);
    }
  }
```

### When an external contract try to multi-dip your guarded functions

```solidity
  function countAndCall(ReentrancyAttack attacker)
      public nonReentrant   // use the lock and proceed 1st time, revert on next
                            // invocation of nonReentrant guard check
  {
    count();

    // Get a pointer/has to the callback function.
    bytes4 func = bytes4(keccak256("callback()"));

    // Trust attacker to do something with a known address.
    // Of course, the attacker will try to exploit our guarded callback in some
    // nefarious scheme and the transaction will be reverted.
    attacker.callSender(func);
  }
```
