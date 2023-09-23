// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/token/ERC721/extensions/ERC721EnumerableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/utils/CountersUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract AirVandV is Initializable, ERC721EnumerableUpgradeable, OwnableUpgradeable {
    using CountersUpgradeable for CountersUpgradeable.Counter;
    CountersUpgradeable.Counter private _tokenIdCounter;

    // Mapping from token ID to door ID
    mapping(uint256 => string) private _doorIds;

    // Initialise le nom et le symbole du token et définit le propriétaire du contrat
    function initialize() initializer public {
        __ERC721_init("AirVandV", "VNV");
        __Ownable_init();
    }

    // Crée un nouveau token et l'attribue à l'adresse du destinataire (seule le propriétaire du contrat peut appeler cette fonction)
    function mint(address to, string memory doorId) public {
        _tokenIdCounter.increment();
        uint256 newTokenId = _tokenIdCounter.current();
        _safeMint(to, newTokenId);
        _doorIds[newTokenId] = doorId;
    }

    // Renvoie l'identifiant de la porte associé à un ID de token spécifique
    function getDoorId(uint256 tokenId) public view returns (string memory) {
        return _doorIds[tokenId];
    }

    // Vérifie si l'adresse qui appelle la fonction est autorisé à déverrouiller une porte spécifique
    function unlockDoor(string memory doorId) public view returns (bool) {
        uint256 tokenId = getTokenIdForDoor(doorId);
        return _isApprovedOrOwner(_msgSender(), tokenId);
    }

    // Renvoie l'ID de token associé à un identifiant de porte spécifique
    function getTokenIdForDoor(string memory doorId) public view returns (uint256) {
        for (uint256 i = 1; i <= _tokenIdCounter.current(); i++) {
            if (keccak256(bytes(_doorIds[i])) == keccak256(bytes(doorId))) {
                return i;
            }
        }
        revert("Door ID does not exist");
    }

    // Renvoie un tableau contenant tous les identifiants de porte associés à une adresse spécifique
    function getDoorIdsForOwner(address owner) public view returns (string[] memory) {
        uint256 tokenCount = balanceOf(owner);
        string[] memory doorIds = new string[](tokenCount);
        for (uint256 i = 0; i < tokenCount; i++) {
            doorIds[i] = _doorIds[tokenOfOwnerByIndex(owner, i)];
        }
        return doorIds;
    }
}
