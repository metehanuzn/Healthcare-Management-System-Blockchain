const HastaKontrati = artifacts.require("Patient");

contract("Patient", (accounts) => {
  let hastaKontratiInstance;

  before(async () => {
    hastaKontratiInstance = await HastaKontrati.deployed();
  });

  it("Hasta eklenmeli ve doğru bilgilerle saklanmalidir", async () => {
    const ad = "Ahmet";
    const soyad = "Yilmaz";
    const dogumTarihi = 1990;

    await hastaKontratiInstance.hastaEkle(ad, soyad, dogumTarihi, { from: accounts[0] });

    const hasta = await hastaKontratiInstance.hastalar(accounts[0]);
    assert.equal(hasta.ad, ad, "Hasta adi eslesmiyor");
    assert.equal(hasta.soyad, soyad, "Hasta soyadi eslesmiyor");
    assert.equal(hasta.dogumTarihi, dogumTarihi, "Hasta dogum tarihi eslesmiyor");
  });

  it("Hasta bilgileri güncellenmeli ve dogru sekilde saklanmalidir", async () => {
    const yeniAd = "Mehmet";
    const yeniSoyad = "Demir";
    const yeniDogumTarihi = 1985;

    await hastaKontratiInstance.hastaGuncelle(yeniAd, yeniSoyad, yeniDogumTarihi, { from: accounts[0] });

    const hasta = await hastaKontratiInstance.hastalar(accounts[0]);
    assert.equal(hasta.ad, yeniAd, "Hasta adi güncellenemedi");
    assert.equal(hasta.soyad, yeniSoyad, "Hasta soyadi güncellenemedi");
    assert.equal(hasta.dogumTarihi, yeniDogumTarihi, "Hasta doğum tarihi güncellenemedi");
  });

  it("Hasta aktiflik durumu güncellenmeli ve dogru sekilde saklanmalidir", async () => {
    const yeniAktiflikDurumu = false;

    await hastaKontratiInstance.hastaDurumunuGuncelle(yeniAktiflikDurumu, { from: accounts[0] });

    const hasta = await hastaKontratiInstance.hastalar(accounts[0]);
    assert.equal(hasta.aktif, yeniAktiflikDurumu, "Hasta aktiflik durumu güncellenemedi");
  });
});
