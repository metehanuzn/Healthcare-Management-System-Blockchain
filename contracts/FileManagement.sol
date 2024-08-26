// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract FileManagement {
    struct Dosya {
        uint dosyaId;
        address hastaAdresi;
        string dosyaHash;
        string dosyaAciklama;
        bool erisimYetkisi;
    }

    mapping(uint => Dosya) public dosyalar;
    uint public sonDosyaId = 0;

    event DosyaEklendi(uint dosyaId, address hastaAdresi, string dosyaHash, string dosyaAciklama, bool erisimYetkisi);

    function dosyaEkle(address _hastaAdresi, string memory _dosyaHash, string memory _dosyaAciklama) public {
        sonDosyaId++;
        dosyalar[sonDosyaId] = Dosya(sonDosyaId, _hastaAdresi, _dosyaHash, _dosyaAciklama, true);
        emit DosyaEklendi(sonDosyaId, _hastaAdresi, _dosyaHash, _dosyaAciklama, true);
    }

    function dosyaErisimYetkisiGuncelle(uint _dosyaId, bool _erisimYetkisi) public {
        require(msg.sender == dosyalar[_dosyaId].hastaAdresi, "Yetki hatasi");
        dosyalar[_dosyaId].erisimYetkisi = _erisimYetkisi;
    }
}