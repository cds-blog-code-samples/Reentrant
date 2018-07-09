# A look at Open Zeppelin *ReentrancyGuard*

## Problem
Smart Contracts functions can be re-entered numerous times within a single
transaction. If these functions transfer ether or value then it is a
vulnerability. See Dao Hack.

## Solution
Utilize a singleton `lock` that guards the function call. It is like an entry
ticket that can be used once in any transaction. After it is used, no other call
that is part of the transaction is allowed to enter functions marked
`nonReentrant`

Open Zeppelin's
[ReentrancyGuard](https://github.com/OpenZeppelin/openzeppelin-solidity/blob/master/contracts/ReentrancyGuard.sol)
implements a modifier `nonReentrant` that utilizes a singleton boolean
`reentrancyLock` initialized false at the start of a transaction. When a
function enters a `nonReentrant` function, the modifier checks the state of
`reentranceLock` and allows the transaction to proceed if the lock is
disengaged(false), closing the lock, or reverts the entire transaction if the
lock is engaged(true).

## Sample code
Open Zeppelin's
[ReentrancyMock](https://github.com/OpenZeppelin/openzeppelin-solidity/blob/master/contracts/mocks/ReentrancyMock.sol)
simulates this vulnerability with three function.

1. `countLocalRecursive`, a nonReentrant function that invokes itself.

```solidity
  function countLocalRecursive(uint256 n) public nonReentrant {
    if (n > 0) {
      count();
      countLocalRecursive(n - 1);
    }
  }
```
2. `countThisRecursive`, a nonReentrant function utilizes the low level call
   mechanism to invoke itself.

```solidity
  function countThisRecursive(uint256 n) public nonReentrant {
    if (n > 0) {
      count();
      bool result = address(this).call(abi.encodeWithSignature("countThisRecursive(uint256)", n - 1));
      require(result == true);
    }
  }
```

3. `countAndCall`, a nonReentrant function invokes another contract which
   invokes the calling function's nonReentrant callback function.

```solidity
  function countAndCall(ReentrancyAttack attacker) public nonReentrant {
    count();
    bytes4 func = bytes4(keccak256("callback()"));
    attacker.callSender(func);
  }
```

## What does this even do? Lets test it


