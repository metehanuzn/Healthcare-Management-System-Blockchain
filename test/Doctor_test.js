const DoktorKontrati = artifacts.require("Doctor");

contract("Doctor", (accounts) => {
  let doktorKontratiInstance;

  before(async () => {
    doktorKontratiInstance = await DoktorKontrati.deployed();
  });

  it("Doktor eklenmeli ve dogru bilgilerle saklanmalidir", async () => {
    const ad = "Dr. Ayşe";
    const soyad = "Yilmaz";
    const uzmanlikAlani = "Dahiliye";

    await doktorKontratiInstance.doktorEkle(ad, soyad, uzmanlikAlani, { from: accounts[0] });

    const doktor = await doktorKontratiInstance.doktorlar(accounts[0]);
    assert.equal(doktor.ad, ad, "Doktor adi eşleşmiyor");
    assert.equal(doktor.soyad, soyad, "Doktor soyadi eşleşmiyor");
    assert.equal(doktor.uzmanlikAlani, uzmanlikAlani, "Doktor uzmanlik alani eslesmiyor");
  });

  it("Doktor bilgileri güncellenmeli ve dogru sekilde saklanmalidir", async () => {
    const yeniAd = "Dr. Mehmet";
    const yeniSoyad = "Demir";
    const yeniUzmanlikAlani = "Cerrahi";

    await doktorKontratiInstance.doktorGuncelle(yeniAd, yeniSoyad, yeniUzmanlikAlani, { from: accounts[0] });

    const doktor = await doktorKontratiInstance.doktorlar(accounts[0]);
    assert.equal(doktor.ad, yeniAd, "Doktor adi güncellenemedi");
    assert.equal(doktor.soyad, yeniSoyad, "Doktor soyadi güncellenemedi");
    assert.equal(doktor.uzmanlikAlani, yeniUzmanlikAlani, "Doktor uzmanlik alani güncellenemedi");
  });

  it("Doktor aktiflik durumu güncellenmeli ve dogru sekilde saklanmalidir", async () => {
    const yeniAktiflikDurumu = false;

    await doktorKontratiInstance.doktorDurumunuGuncelle(yeniAktiflikDurumu, { from: accounts[0] });

    const doktor = await doktorKontratiInstance.doktorlar(accounts[0]);
    assert.equal(doktor.aktif, yeniAktiflikDurumu, "Doktor aktiflik durumu güncellenemedi");
  });
});
