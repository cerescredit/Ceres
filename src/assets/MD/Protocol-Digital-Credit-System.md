## DID extraction pledge reward signature and verification instructions
- Pack and sign data using the EIP712 standard
- EIP712 DOMAIN_TYPE "EIP712Domain(string name,uint256 chainId,address verifyingContract)"
- EIP712 STRUCT "withdrawRewards(address account,address token,uint256 amount,uint256 rand)"

### Centralized Signature

1. Calculate keccak256 of `DOMAIN_TYPE`, generate 32 bytes `DOMAIN_TYPE_HASH`
2. Pack the parameters `DOMAIN_TYPE_HASH`, `keccak256({name})`, `chainId`, `verifyingContract` according to rlp and perform keccak256 operation to generate `DOMAIN_SEPARATOR`
3. Generate uuid as the `rand` parameter, which must be globally unique
4. Calculate keccak256 of `STRUCT`, generate `STRUCT_HASH` of 32 bytes
5. Pack the parameters `STRUCT_HASH`, `account`, `token`, `amount`, `rand` according to rlp and perform keccak256 operation to generate `STRUCT_PACKED_HASH`
6. Pack the ethereum signature prefix [0x19, 0x01], `DOMAIN_SEPARATOR`, `STRUCT_PACKED_HASH` according to rlp non-alignment, and calculate its keccak256 to generate `DIGEST`
7. Use the ECDSA algorithm to sign `DIGEST` with the agreed privateKey to generate `r`, `s`, `v`

### Contract Verification and Execution
1. Verify that the `rand` value has not been used
2. Set the `rand` value to already used
2. Pack each parameter and calculate `DIGEST` in the same way as centralization
3. Using the ECDSA algorithm, use `r`, `s`, `v`, `DIGEST` to calculate the signer's address
4. Verify that the signature address is the agreed address
5. Transfer `token` of `amount` to `account`


#### refer to
- https://github.com/ethereum/EIPs/blob/master/EIPS/eip-712.md

