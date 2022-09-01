# Ceres development document
## instructions
    import 'IRlinkRelation.sol'
## functions

### **addRelation**
- Add reference relationship
- Require `_child` must be tx sender
- RRequire that '_child' cannot be equal to '_parent' or the parent of '_parent'
#### Parameters
- `_child|address` - Child address
- `_parent|address` - Parent address
#### Returns
- `uint256` - rlt reward amount
<h1></h1>

### **isParent**
- Query child and parent is associated
#### Parameters
- `child|address` - Child address
- `parent|address` - Parent Address
#### Returns
- `bool` - Whether or not associated
<h1></h1>

### **parentOf**
- Query the parent of the specified address
#### Parameters
- `account|address` - Address to query
#### Returns
- `address` - Parent address
<h1></h1>

### **distribute**
- Distribute tokens
- Require `incentiveAmount` + `parentAmount` + `grandpaAmount` Less than `amount`
#### Parameters
- `token|address` - The address of token to be distributed
- `to|address` - The main receiving address of this distribution
- `amount|uint256` - Distribution quantity
- `incentiveAmount|uint256` - amount of incentive reward, `to' can get this award, which can be passed to 0
- `parentAmount|uint256` - amount of parent reward, which can be passed to 0
- `grandpaAmount|uint256` - amount of grandpa reward, which can be passed as 0
#### Returns
- `distributedAmount|uint256` - Total number of token' typed out in this distribution
<h1></h1>

### **bindReward**
- Query the number of rewards you can get when adding an invitation relationship
#### Parameters
- none
#### Returns
- `uint256` - Number of awards available
<h1></h1>

### **remainingRewards**
- Query the remaining quantity of prize pool for adding invitation relationship
#### Parameters
- none
#### Returns
- `uint256` - Remaining quantity of prize pool
<h1></h1>

### **mintedRewards**
- Query the total number of rewards dug up by adding invitation relationship
#### Parameters
- none
#### Returns
- `uint256` - Total rewards dug up cumulatively
<h1></h1>

<!-- ## Contract addresses
### Ethereum mainnet
| Contract name | Contract address |
| -------------- | ---------------- |
| Ceres Token | 0x2a520797D0864DCA9DB40f55869673355b13AF33 |
| Ceres Relation | 0xe3ae76Ad8Fd977ac540e1A67652fbA3E9b95f362 |

### Ethereum rinkeby
| Contract name | Contract address |
| -------------- | ---------------- |
| Test Ceres Token | 0x1979A18C6e736c7a9335514B503d875a7Fd22997 |
| Ceres Relation | 0xA0028DF4decD523573B9cA520EB1539B92C81bdd |

### BSC mainnet
| Contract name | Contract address |
| -------------- | ---------------- |
| Ceres Token | 0xBEF49A121aABC49Bfc53Bf60f80DF9d14fE32983 |
| Ceres Relation | 0x2fbb59aE194c9552d3bC4Aa168E9Ab684f579Fe6 |

### BSC testnet
| Contract name | Contract address |
| -------------- | ---------------- |
| Test Ceres Token | 0x90Df661930f72b1c22545A29064C8b6189E6E82D |
| Ceres Relation | 0x988258ead056CbF2d600F60F75dEa54441944f94 |

### HECO mainnet
| Contract name | Contract address |
| -------------- | ---------------- |
| Ceres Token | 0x31f3C732be59Fc4d7D884516F48e0E448669cCfa |
| Ceres Relation | 0x9D382B29B3e8736493dE318424667F2Cf0B4252F |

### HECO testnet
| Contract name | Contract address |
| -------------- | ---------------- |
| Test Ceres Token | 0x60E0aa878E0d4D63F98F3188c232443694114ca7 |
| Ceres Relation | 0x5CE6f9143Fb6E07a0c9fDCCE255b32Ad1f8FB617 |

### HSC mainnet
| Contract name | Contract address |
| -------------- | ---------------- |
| Ceres Token | 0x2a520797D0864DCA9DB40f55869673355b13AF33 |
| Ceres Relation | 0xd859DadF8f36b18195419215561498D6641Ae6a9 |
 -->

## Ref：IRlinkRelaton.sol
    // SPDX-License-Identifier: MIT

    pragma solidity ^0.8.0;

    interface IRlinkRelation {
        /**
        * @dev add address relation
        * @param _child: address of the child
        * @param _parent: address of the parent
        * @return reward rlt amount for add relation
        */
        function addRelation(address _child, address _parent) external returns(uint256);

        /**
        * @dev query child and parent is associated
        * @param child: address of the child
        * @param parent: address of the parent
        * @return child and parent is associated
        */
        function isParent(address child,address parent) external view returns(bool);

        /**
        * @dev query parent of address
        * @param account: address of the child
        * @return parent address
        */
        function parentOf(address account) external view returns(address);

        /**
        * @dev distribute token
        * you must approve bigger than 'amount' allowance of token for Ceres relation contract before call
        * require (incentiveAmount + parentAmount + grandpaAmount) <= amount
        * @param token: token address to be distributed
        * @param to: to address
        * @param amount: total amount of distribute
        * @param incentiveAmount: amount of incentive reward
        * @param parentAmount: amount of parent reward
        * @param grandpaAmount: amount of grandpa reward
        * @return distributedAmount : distributed token amount
        */
        function distribute(
            address token,
            address to,
            uint256 amount,
            uint256 incentiveAmount,
            uint256 parentAmount,
            uint256 grandpaAmount
        ) external returns(uint256 distributedAmount);

        /**
        * @dev query call add relation rewards amount 
        * @return add relation rewards amount 
        */
        function bindReward() external view returns(uint256);

        /**
        * @dev query remaining rewards amount
        * @return remaining rewards amount
        */
        function remainingRewards() external view returns(uint256);

        /**
        * @dev query total minted rewards amount
        * @return total minted rewards amount
        */
        function mintedRewards() external view returns(uint256);
        
        //an event thats emitted when new relation added
        event AddedRelation(address child,address parent);

        //an event thats emitted when token distributed
        event Distributed(address sender,address token, address to,uint256 toAmount,address parent, uint256 parantAmount,address grandpa, uint256 grandpaAmount);
    }