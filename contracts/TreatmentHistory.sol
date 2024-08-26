// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract TreatmentHistory {
    struct TedaviGecmisi {
        uint gecmisId;
        address hastaAdresi;
        string tedavi;
        uint tedaviTarihi;
    }

    mapping(uint => TedaviGecmisi) public tedaviGecmisi;
    uint public sonGecmisId = 0;

    event TedaviEklendi(uint gecmisId, address hastaAdresi, string tedavi, uint tedaviTarihi);

    function tedaviEkle(address _hastaAdresi, string memory _tedavi, uint _tedaviTarihi) public {
        sonGecmisId++;
        tedaviGecmisi[sonGecmisId] = TedaviGecmisi(sonGecmisId, _hastaAdresi, _tedavi, _tedaviTarihi);
        emit TedaviEklendi(sonGecmisId, _hastaAdresi, _tedavi, _tedaviTarihi);
    }
}