const ReceteKontrati = artifacts.require("Prescription");

contract("Prescription", accounts => {
  it("Reçete verme işlemi", async () => {
    const receteInstance = await ReceteKontrati.deployed();

    const doktorAdresi = accounts[0];
    const hastaAdresi = accounts[1];
    const ilacAdi = "Parol";
    const dozaj = "2 tablet";
    const sure = "3 gün";

    await receteInstance.receteVer(hastaAdresi, ilacAdi, dozaj, sure, {from: doktorAdresi});

    const recete = await receteInstance.receteler(1);
    
    assert.equal(recete.ilacAdi, ilacAdi, "Reçete ilaç adı doğru değil");
    assert.equal(recete.dozaj, dozaj, "Reçete dozajı doğru değil");
    assert.equal(recete.sure, sure, "Reçete süresi doğru değil");
    assert.equal(recete.gecerli, true, "Reçete geçerliliği yanlış");
    assert.equal(recete.hastaAdresi, hastaAdresi, "Hasta adresi doğru değil");
    assert.equal(recete.doktorAdresi, doktorAdresi, "Doktor adresi doğru değil");
  });

  it("Reçete geçerlilik durumu güncelleme işlemi", async () => {
    const receteInstance = await ReceteKontrati.deployed();
    const doktorAdresi = accounts[0];
    const receteId = 1;

    await receteInstance.receteGecerlilikDurumuGuncelle(receteId, false, {from: doktorAdresi});

    const updatedRecete = await receteInstance.receteler(receteId);
    assert.equal(updatedRecete.gecerli, false, "Reçete geçerliliği güncellenemedi");
  });
});
