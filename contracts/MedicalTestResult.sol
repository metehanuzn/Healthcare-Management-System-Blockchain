// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract MedicalTestResult {
    struct TestResult {
        uint resultId;
        address patientAddress;
        string testName;
        string result;
        bool valid;
    }

    mapping(uint => TestResult) public results;
    uint public latestResultId = 0;

    event ResultAdded(uint resultId, address patientAddress, string testName, string result, bool valid);

    function addResult(address _patientAddress, string memory _testName, string memory _result) public {
        latestResultId++;
        results[latestResultId] = TestResult(latestResultId, _patientAddress, _testName, _result, true);
        emit ResultAdded(latestResultId, _patientAddress, _testName, _result, true);
    }

    function updateResultValidity(uint _resultId, bool _validity) public {
        results[_resultId].valid = _validity;
    }
}
