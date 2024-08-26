const RandevuKontrati = artifacts.require("Appointment");

contract("Appointment", (accounts) => {
  let randevuKontratiInstance;

  before(async () => {
    randevuKontratiInstance = await RandevuKontrati.deployed();
  });

  it("Randevu olusturulmali ve dogru bilgilerle saklanmalidir", async () => {
    const doktorAdresi = accounts[1];
    const randevuZamani = Math.floor(Date.now() / 1000);

    await randevuKontratiInstance.randevuAl(doktorAdresi, randevuZamani, { from: accounts[0] });

    const randevu = await randevuKontratiInstance.randevular(1);
    assert.equal(randevu.hastaAdresi, accounts[0], "Randevu hasta adresi eslesmiyor");
    assert.equal(randevu.doktorAdresi, doktorAdresi, "Randevu doktor adresi eslesmiyor");
    assert.equal(randevu.randevuZamani, randevuZamani, "Randevu zamani eslesmiyor");
    assert.equal(randevu.randevuDurumu, "Beklemede", "Randevu durumu 'Beklemede' olmali");
  });

  it("Randevu durumu güncellenmeli ve dogru sekilde saklanmalidir", async () => {
    const yeniDurum = "Onaylandi";

    await randevuKontratiInstance.randevuDurumuGuncelle(1, yeniDurum, { from: accounts[0] });

    const randevu = await randevuKontratiInstance.randevular(1);
    assert.equal(randevu.randevuDurumu, yeniDurum, "Randevu durumu güncellenemedi");
  });
});
