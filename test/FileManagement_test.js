const DosyaYonetimKontrati = artifacts.require("FileManagement");

contract("FileManagement", (accounts) => {
  let dosyaYonetimKontratiInstance;

  before(async () => {
    dosyaYonetimKontratiInstance = await DosyaYonetimKontrati.deployed();
  });

  it("Dosya eklenmeli ve dogru bilgilerle saklanmalidir", async () => {
    const hastaAdresi = accounts[0];
    const dosyaHash = "0x123456";
    const dosyaAciklama = "Rapor";

    await dosyaYonetimKontratiInstance.dosyaEkle(hastaAdresi, dosyaHash, dosyaAciklama, { from: accounts[0] });

    const dosya = await dosyaYonetimKontratiInstance.dosyalar(1);
    assert.equal(dosya.hastaAdresi, hastaAdresi, "Dosya hasta adresi eslesmiyor");
    assert.equal(dosya.dosyaHash, dosyaHash, "Dosya hash'i eslesmiyor");
    assert.equal(dosya.dosyaAciklama, dosyaAciklama, "Dosya aciklamasi eslesmiyor");
  });

  it("Dosya erisim yetkisi guncellenmeli ve dogru sekilde saklanmalidir", async () => {
    const yeniErisimYetkisi = false;

    await dosyaYonetimKontratiInstance.dosyaErisimYetkisiGuncelle(1, yeniErisimYetkisi, { from: accounts[0] });

    const dosya = await dosyaYonetimKontratiInstance.dosyalar(1);
    assert.equal(dosya.erisimYetkisi, yeniErisimYetkisi, "Dosya erisim yetkisi güncellenemedi");
  });
});
