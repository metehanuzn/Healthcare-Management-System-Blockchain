// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Appointment {
    struct Randevu {
        uint randevuId;
        address hastaAdresi;
        address doktorAdresi;
        uint randevuZamani;
        string randevuDurumu;
    }

    mapping(uint => Randevu) public randevular;
    uint public sonRandevuId = 0;

    event RandevuOlusturuldu(uint randevuId, address hastaAdresi, address doktorAdresi, uint randevuZamani, string randevuDurumu);

    function randevuAl(address _doktorAdresi, uint _randevuZamani) public {
        sonRandevuId++;
        randevular[sonRandevuId] = Randevu(sonRandevuId, msg.sender, _doktorAdresi, _randevuZamani, "Beklemede");
        emit RandevuOlusturuldu(sonRandevuId, msg.sender, _doktorAdresi, _randevuZamani, "Beklemede");
    }

    function randevuDurumuGuncelle(uint _randevuId, string memory _durum) public {
        require(msg.sender == randevular[_randevuId].hastaAdresi || msg.sender == randevular[_randevuId].doktorAdresi, "Yetki hatasi");
        randevular[_randevuId].randevuDurumu = _durum;
    }
}
