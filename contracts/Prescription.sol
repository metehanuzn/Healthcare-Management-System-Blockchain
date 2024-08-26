// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Prescription {
    struct Recete {
        uint receteId;
        address doktorAdresi;
        address hastaAdresi;
        string ilacAdi;
        string dozaj;
        string sure;
        bool gecerli;
    }

    mapping(uint => Recete) public receteler;
    uint public sonReceteId = 0;

    event ReceteVerildi(uint receteId, address doktorAdresi, address hastaAdresi, string ilacAdi, string dozaj, string sure, bool gecerli);

    function receteVer(address _hastaAdresi, string memory _ilacAdi, string memory _dozaj, string memory _sure) public {
        sonReceteId++;
        receteler[sonReceteId] = Recete(sonReceteId, msg.sender, _hastaAdresi, _ilacAdi, _dozaj, _sure, true);
        emit ReceteVerildi(sonReceteId, msg.sender, _hastaAdresi, _ilacAdi, _dozaj, _sure, true);
    }

    function receteGecerlilikDurumuGuncelle(uint _receteId, bool _gecerlilikDurumu) public {
        require(msg.sender == receteler[_receteId].doktorAdresi, "Yetki hatasi");
        receteler[_receteId].gecerli = _gecerlilikDurumu;
    }
}