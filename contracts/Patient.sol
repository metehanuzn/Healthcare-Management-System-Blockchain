// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Patient {
    struct Hasta {
        uint id;
        string ad;
        string soyad;
        uint dogumTarihi;
        string bolum;
        address adres;
        bool aktif;
    }

    mapping(address => Hasta) public hastalar;
    address[] public hastaAdresleri;

    event HastaEklendi(uint id, string ad, string soyad, uint dogumTarihi, string bolum, address adres);
    event HastaGuncellendi(uint id, string ad, string soyad, uint dogumTarihi, string bolum, address adres);
    event HastaDurumuGuncellendi(address adres, bool aktiflikDurumu);

    function hastaEkle(string memory _ad, string memory _soyad, uint _dogumTarihi, string memory _bolum) public {
        require(hastalar[msg.sender].id == 0, "Hasta zaten mevcut");
        uint id = hastaAdresleri.length + 1;
        hastalar[msg.sender] = Hasta(id, _ad, _soyad, _dogumTarihi, _bolum, msg.sender, true);
        hastaAdresleri.push(msg.sender);
        emit HastaEklendi(id, _ad, _soyad, _dogumTarihi, _bolum, msg.sender);
    }

    function hastaGuncelle(string memory _ad, string memory _soyad, uint _dogumTarihi, string memory _bolum) public {
        require(hastalar[msg.sender].id != 0, "Hasta bulunamadi");
        hastalar[msg.sender].ad = _ad;
        hastalar[msg.sender].soyad = _soyad;
        hastalar[msg.sender].dogumTarihi = _dogumTarihi;
        hastalar[msg.sender].bolum = _bolum;
        emit HastaGuncellendi(hastalar[msg.sender].id, _ad, _soyad, _dogumTarihi, _bolum, msg.sender);
    }

    function hastaDurumunuGuncelle(bool _aktiflikDurumu) public {
        require(hastalar[msg.sender].id != 0, "Hasta bulunamadi");
        hastalar[msg.sender].aktif = _aktiflikDurumu;
        emit HastaDurumuGuncellendi(msg.sender, _aktiflikDurumu);
    }
}