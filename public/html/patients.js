const contractAddress = '0xaA2216f3a4B7ccfF0a671B70cf9aFA27C11565dB';
const contractABI =  [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "adres",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "aktiflikDurumu",
        "type": "bool"
      }
    ],
    "name": "HastaDurumuGuncellendi",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "ad",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "soyad",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "dogumTarihi",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "bolum",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "adres",
        "type": "address"
      }
    ],
    "name": "HastaEklendi",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "ad",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "soyad",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "dogumTarihi",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "bolum",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "adres",
        "type": "address"
      }
    ],
    "name": "HastaGuncellendi",
    "type": "event"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "hastaAdresleri",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "hastalar",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "ad",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "soyad",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "dogumTarihi",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "bolum",
        "type": "string"
      },
      {
        "internalType": "address",
        "name": "adres",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "aktif",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "string",
        "name": "_ad",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_soyad",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_dogumTarihi",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_bolum",
        "type": "string"
      }
    ],
    "name": "hastaEkle",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "string",
        "name": "_ad",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_soyad",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_dogumTarihi",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_bolum",
        "type": "string"
      }
    ],
    "name": "hastaGuncelle",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "bool",
        "name": "_aktiflikDurumu",
        "type": "bool"
      }
    ],
    "name": "hastaDurumunuGuncelle",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }
];
let web3;
let patientContract;

async function addPatient(event) {
  event.preventDefault();
  const ad = document.getElementById('addAd').value;
  const soyad = document.getElementById('addSoyad').value;
  const dogumTarihi = Math.floor(new Date(document.getElementById('addDogumTarihi').value).getTime() / 1000);
  const bolum = document.getElementById('addBolum').value;
  const hastaAdres = document.getElementById('addHastaAdres').value;
  try {
      await patientContract.methods.hastaEkle(ad, soyad, dogumTarihi, bolum).send({ from: hastaAdres });
      console.log('Hasta başarıyla eklendi');
      loadPatientList();
  } catch (error) {
      console.error('Hasta eklenirken bir hata oluştu:', error);
  }
}

document.getElementById('addPatientForm').addEventListener('submit', addPatient);

async function updatePatient(event) {
    event.preventDefault();

    const updateAd = document.getElementById('updateAd').value;
    const updateSoyad = document.getElementById('updateSoyad').value;
    const updateDogumTarihi = document.getElementById('updateDogumTarihi').valueAsNumber / 1000;
    const updateBolum = document.getElementById('updateBolum').value;

    const accounts = await web3.eth.getAccounts();
    const currentAddress = accounts[0];

    await patientContract.methods.hastaGuncelle(updateAd, updateSoyad, updateDogumTarihi, updateBolum)
        .send({ from: currentAddress })
        .on('receipt', receipt => {
            console.log('Hasta başarıyla güncellendi', receipt);
            document.getElementById('updatePatientForm').reset();
            loadPatientList();
        })
        .on('error', error => {
            console.error('Hasta güncellenirken bir hata oluştu', error);
        });
}

async function loadPatientList() {
    const patientListDiv = document.getElementById('patientList');
    patientListDiv.innerHTML = 'Hasta listesi yükleniyor...';

    const patientAddresses = await patientContract.methods.hastaAdresleri().call();

    let patientListHTML = '<ul>';
    for (const address of patientAddresses) {
        const patient = await patientContract.methods.hastalar(address).call();
        patientListHTML += `<li>Ad: ${patient.ad}, Soyad: ${patient.soyad}, Doğum Tarihi: ${new Date(patient.dogumTarihi * 1000).toLocaleDateString()}, Bölüm: ${patient.bolum}, Aktiflik Durumu: ${patient.aktif ? 'Aktif' : 'Pasif'}</li>`;
    }
    patientListHTML += '</ul>';

    patientListDiv.innerHTML = patientListHTML;
}

window.addEventListener('load', async () => {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        try {
            await window.ethereum.enable();
            patientContract = new web3.eth.Contract(contractABI, contractAddress);
            loadPatientList();
        } catch (error) {
            console.error("Kullanıcı hesap erişimini reddetti.");
        }
    } else if (window.web3) {
        web3 = new Web3(web3.currentProvider);
        patientContract = new web3.eth.Contract(contractABI, contractAddress);
        loadPatientList();
    } else { 
      console.log('Ethereum tarayıcısı tespit edilemedi. Lütfen Metamask veya başka bir Ethereum uyumlu tarayıcı kurun.');
    }
});

document.getElementById('addPatientForm').addEventListener('submit', addPatient);
document.getElementById('updatePatientForm').addEventListener('submit', updatePatient);