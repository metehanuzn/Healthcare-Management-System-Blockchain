const Patient = artifacts.require("Patient");
const Doctor = artifacts.require("Doctor");
const Appointment = artifacts.require("Appointment");
const FileManagement = artifacts.require("FileManagement");
const Prescription = artifacts.require("Prescription");
const MedicalTestResult = artifacts.require("MedicalTestResult");
const TreatmentHistory = artifacts.require("TreatmentHistory");

module.exports = async function(deployer) {
  deployer.deploy(Patient);
  deployer.deploy(Doctor);
  deployer.deploy(Appointment);
  deployer.deploy(FileManagement);
  deployer.deploy(Prescription);
  deployer.deploy(MedicalTestResult);
  deployer.deploy(TreatmentHistory);
};
