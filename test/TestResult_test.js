const MedicalTestResultsContract = artifacts.require("MedicalTestResult");

contract("MedicalTestResult", accounts => {
  it("Test sonucu ekleme işlemi", async () => {
    const contractInstance = await MedicalTestResultsContract.deployed();

    const patientAddress = accounts[0];
    const testName = "Kan Testi";
    const result = "Normal";

    await contractInstance.addResult(patientAddress, testName, result, {from: patientAddress});

    const testResult = await contractInstance.results(1);
    assert.equal(testResult.testName, testName, "Test adı doğru değil");
    assert.equal(testResult.result, result, "Test sonucu doğru değil");
    assert.equal(testResult.valid, true, "Test sonucunun geçerliliği yanlış");

    assert.equal(testResult.patientAddress, patientAddress, "Hasta adresi doğru değil");
  });

  it("Test sonucu geçerlilik durumu güncelleme işlemi", async () => {
    const contractInstance = await MedicalTestResultsContract.deployed();
    const resultId = 1;
    await contractInstance.updateResultValidity(resultId, false)
    const updatedTestResult = await contractInstance.results(resultId);
    assert.equal(updatedTestResult.valid, false, "Test sonucu geçerliliği güncellenemedi");
  });
});
