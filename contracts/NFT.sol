// SPDX-License-Identifier: MIT OR Apache-2.0
pragma solidity ^0.8.11;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

import "hardhat/console.sol";

contract NFT is ERC721URIStorage{
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    address contractAddress ;

    constructor(address marketplaceAddress) ERC721("Metaverse Tokens","METT"){
        contractAddress = marketplaceAddress;
    }

    function createToken(string memory tokenURI) public returns (uint) {
        _tokenIds.increment();
        uint newItemId = _tokenIds.current();

        // _mint(address to, uint256 tokenId)
        // Internal function to mint a new token. Reverts if the given token ID already exists.
        _mint(msg.sender,newItemId);
        
        // _setTokenURI(uint256 tokenId, string _tokenURI)
        // Internal function to set the token URI for a given token. Reverts if the token ID does not exist.
        _setTokenURI(newItemId,tokenURI);
        
        // setApprovalForAll(address to, bool approved)
        // Sets or unsets the approval of a given operator An operator is allowed to transfer all tokens of the sender on their behalf.
        setApprovalForAll(contractAddress,true);
        return newItemId;
    }
}


