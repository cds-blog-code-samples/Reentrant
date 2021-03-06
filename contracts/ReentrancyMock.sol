// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "./ReentrancyGuard.sol";
import "./ReentrancyAttack.sol";


contract ReentrancyMock is ReentrancyGuard {

    uint256 public counter;

    constructor() {
        counter = 0;
    }

    function callback()
        external nonReentrant
    {
        count();
    }

    function countLocalRecursive(uint256 n)
        public nonReentrant
    {
        if (n > 0) {
            count();
            countLocalRecursive(n - 1);
        }
    }

    // is not guarded
    function countLocalRecursiveVulnerable(uint256 n)
        public
    {
        if (n > 0) {
            count();
            countLocalRecursiveVulnerable(n - 1);
        }
    }

    function countThisRecursive(uint256 n)
        public nonReentrant
    {
        if (n > 0) {
            count();
            // solium-disable-next-line security/no-low-level-calls
            (bool result,) = address(this).call(abi.encodeWithSignature("countThisRecursive(uint256)", n - 1));
            require(result == true);
        }
    }

    // is not guarded
    function countThisRecursiveVulnerable(uint256 n)
        public
    {
        if (n > 0) {
            count();
            // solium-disable-next-line security/no-low-level-calls
            (bool result,) = address(this).call(abi.encodeWithSignature("countThisRecursiveVulnerable(uint256)", n - 1));
            require(result == true);
        }
    }

    function countAndCall(ReentrancyAttack attacker)
        public nonReentrant
    {
        count();
        // bytes4 func = bytes4(keccak256("callback()"));
        // attacker.callSender(func);
        // bytes4 func = bytes4(keccak256("callback()"));
        attacker.callSender();
    }

    function countWithHelperVulnerable(uint256 n)
        public
    {
        if (n > 0) {
            count();
            countLocalRecursiveVulnerable(n * 2);
        }
    }

    function countWithHelper(uint256 n)
        public nonReentrant
    {
        if (n > 0) {
            count();
            countLocalRecursive(n * 2);
        }
    }

    function count()
        private
    {
        counter += 1;
    }
}
