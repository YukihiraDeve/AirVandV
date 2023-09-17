// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract BookingNFT is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIdCounter;

    // Mapping from token ID to reservation details
    mapping(uint256 => string) public reservationDetails;

    constructor() ERC721("BookingNFT", "BNFT") {}

    // Function to book a room and mint a NFT as proof of reservation
    function bookRoom(string memory details, string memory tokenURI) public onlyOwner returns (uint256) {
        uint256 tokenId = _tokenIdCounter.current();

        _mint(msg.sender, tokenId);
        _setTokenURI(tokenId, tokenURI);

        reservationDetails[tokenId] = details;

        _tokenIdCounter.increment();

        return tokenId;
    }

    // Function to get reservation details
    function getReservationDetails(uint256 tokenId) public view returns (string memory) {
        return reservationDetails[tokenId];
    }

    function ownsToken(address user, uint256 tokenId) public view returns (bool) {
        return ownerOf(tokenId) == user;
    }

}

