const TedaviGecmisiKontrati = artifacts.require("TreatmentHistory");

contract("TreatmentHistory", accounts => {
  it("Tedavi ekleme işlemi", async () => {
    const contractInstance = await TedaviGecmisiKontrati.deployed();

    // Tedavi ekleyen hastanın adresi
    const patientAddress = accounts[0];
    // Tedavi bilgileri
    const tedavi = "Baş ağrısı için ağrı kesici alındı";
    const tedaviTarihi = Math.floor(Date.now() / 1000); // Unix zaman damgası

    // Tedavi ekleme işlemi
    await contractInstance.tedaviEkle(patientAddress, tedavi, tedaviTarihi, {from: patientAddress});

    // Eklenen tedaviyi kontrol etme
    const treatmentHistory = await contractInstance.tedaviGecmisi(1);
    assert.equal(treatmentHistory.tedavi, tedavi, "Tedavi bilgisi doğru değil");
    assert.equal(treatmentHistory.tedaviTarihi, tedaviTarihi, "Tedavi tarihi doğru değil");

    // Tedaviyi ekleyen hastanın adresini kontrol etme
    assert.equal(treatmentHistory.hastaAdresi, patientAddress, "Hasta adresi doğru değil");
  });
});
