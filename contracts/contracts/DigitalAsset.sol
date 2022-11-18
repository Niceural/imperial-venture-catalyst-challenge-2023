// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract DigitalAsset is ERC721URIStorage {
    event TokenMinted(address to, uint tokenId, string uri);

    uint public tokenCounter;

    constructor(string memory name_, string memory symbol_) ERC721(name_, symbol_) {
        tokenCounter = 0;
    }

    function mint(address to, string memory uri) external {
        uint id = tokenCounter++;
        _safeMint(to, id);
        _setTokenURI(id, uri);
        emit TokenMinted(to, id, uri);
    }
}
