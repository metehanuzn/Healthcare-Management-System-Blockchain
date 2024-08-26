// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Doctor {
    struct Doktor {
        uint256 id;
        string ad;
        string soyad;
        string uzmanlikAlani;
        address adres;
        bool aktif;
    }

    mapping(address => Doktor) public doktorlar;
    address[] public doktorAdresleri;
    uint256 public doktorSayisi;

    event DoktorEklendi(uint256 id, string ad, string soyad, string uzmanlikAlani, address adres);
    event DoktorGuncellendi(uint256 id, string ad, string soyad, string uzmanlikAlani, address adres);
    event DoktorDurumuGuncellendi(address adres, bool aktiflikDurumu);
    event DoktorSilindi(address indexed adres);

    function doktorEkle(string memory _ad, string memory _soyad, string memory _uzmanlikAlani) public {
        doktorSayisi++;
        Doktor memory yeniDoktor = Doktor(doktorSayisi, _ad, _soyad, _uzmanlikAlani, msg.sender, true);
        doktorlar[msg.sender] = yeniDoktor;
        doktorAdresleri.push(msg.sender);
        emit DoktorEklendi(doktorSayisi, _ad, _soyad, _uzmanlikAlani, msg.sender);
    }

    function doktorGuncelle(address _adres, string memory _ad, string memory _soyad, string memory _uzmanlikAlani) public {
        require(doktorlar[_adres].adres != address(0), "Doktor bulunamadi.");
        Doktor storage doktor = doktorlar[_adres];
        doktor.ad = _ad;
        doktor.soyad = _soyad;
        doktor.uzmanlikAlani = _uzmanlikAlani;
        emit DoktorGuncellendi(doktor.id, _ad, _soyad, _uzmanlikAlani, _adres);
}

    function doktorDurumunuGuncelle(bool _aktiflikDurumu) public {
        Doktor storage doktor = doktorlar[msg.sender];
        doktor.aktif = _aktiflikDurumu;
        emit DoktorDurumuGuncellendi(msg.sender, _aktiflikDurumu);
    }

    function getDoktorAdresleri() public view returns (address[] memory) {
        return doktorAdresleri;
    }

    function doktoruSil(address _adres) public {
        require(doktorlar[_adres].adres != address(0), "Doktor bulunamadi.");
        delete doktorlar[_adres];
        emit DoktorSilindi(_adres);
    }
}